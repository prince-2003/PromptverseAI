import express from 'express';
import axios from 'axios';
import cors from 'cors';
import dotenv from 'dotenv';
import axiosRetry from 'axios-retry';

dotenv.config();

const app = express();
app.use(cors());

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;


if (!client_id || !client_secret) {
    console.error('Missing CLIENT_ID or CLIENT_SECRET in environment variables');
    process.exit(1); 
}

const authString = Buffer.from(`${client_id}:${client_secret}`).toString('base64');




axiosRetry(axios, { retries: 3 });

app.get('/token', async (req, res) => {
    try {
        const tokenResponse = await axios.post(
            'https://accounts.spotify.com/api/token',
            'grant_type=client_credentials',
            {
                headers: {
                    Authorization: `Basic ${authString}`,
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                timeout: 5000, 
                httpsAgent: agent,
            }
        );
        res.json(tokenResponse.data); 
        console.log('Access Token:', tokenResponse.data);
    } catch (error) {
        console.error('Error fetching token from Spotify:', error.response?.data || error.message);
        res.status(500).json({ error: 'Failed to retrieve access token from Spotify' });
    }
});


const PORT = process.env.PORT || 3001; 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
