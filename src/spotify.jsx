import React, { useEffect, useState } from "react";
import axios from "axios";
import qs from "qs";
import axiosRetry from "axios-retry";

const CLIENT_ID = process.env.REACT_APP_CLIENT_IDS;
console.log("client_ids ", CLIENT_ID);
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRETS;
console.log("client_secret ", CLIENT_SECRET);

function Spotify() {
  const [token, setToken] = useState("");
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const getToken = async () => {
      const authString = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);
      const data = qs.stringify({
        grant_type: "client_credentials",
      });
      axiosRetry(axios, { retries: 3 });
      try {
        const tokenResponse = await axios.post(
          "https://accounts.spotify.com/api/token",
          data,
          {
            headers: {
              Authorization: `Basic ${authString}`,
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        setToken(tokenResponse.data.access_token);
      } catch (error) {
        console.error(
          "Error fetching token:",
          error.response?.data || error.message
        );
      }
    };

    getToken();
  }, []);

  useEffect(() => {
    let isMounted = true; // Flag to ensure the component is still mounted

    const fetchSongs = async () => {
      if (token) {
        const playlistId = "37i9dQZF1DXbVhgADFy3im";
        axiosRetry(axios, { retries: 3 });
        try {
          const response = await axios.get(
            `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          if (isMounted) {
            setSongs(response.data.items); 
            console.log("Songs:", response.data.items);
          }
        } catch (error) {
          console.error("Error fetching songs:", error);
        }
      }
    };

    fetchSongs();

    return () => {
      isMounted = false; 
    };
  }, [token]); 


  return (
    <div className="App">
      <h1 className="text-white">Trending Hindi Songs</h1>
      {songs.length > 0 ? (
        <ul>
          {songs.map((song, index) => (
            <li key={index} className="text-white">
              {song.track.name} - {song.track.artists[0].name}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-white">Loading songs...</p>
      )}
    </div>
  );
}

export default Spotify;
