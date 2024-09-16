import { useState, useRef } from "react";
function Music() {
    const PlayIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height="18" width="18" fill="grey">
          <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
        </svg>
      );
      
     const PauseIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height="18" width="18" fill="grey">
          <path d="M48 64C21.5 64 0 85.5 0 112L0 400c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48L48 64zm192 0c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-32 0z"/>
        </svg>
      );

    const [isPlaying, setIsPlaying] = useState(false);
    const audioPlayer = useRef(null);
  
    const togglePlay = () => {
      const audio = audioPlayer.current;
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    };
  return (
    <>
      <div className=" mt-16 flex flex-col gap-4 text-white justify-center items-center">
        <div className="text-[1.5rem] font-[400] leading-4">
          Generate audio and music
        </div>
        <div className="mx-auto  max-w-[80%] md:max-w-[50%] font-[200] text-[.8rem] md:text-[1rem] text-center">
          Discover endless creativity with PromptVerse. Generate diverse content
          effortlessly using prompts. Stay updated with real-time trends,
          automate tasks, and extract insights from any document or URL. All
          within a sleek, futuristic design. Create more, effortlessly.
        </div>
      </div>
      <div className="mt-16 flex justify-center w-full">
        <div className="flex gap-4 flex-col md:flex-row w-[80%] bg-[#0E0E0E] p-4">
          <div className="flex flex-col w-full md:w-[50%] text-white">
            <div className="text-[2rem] font-semibold">
              Enhance Your Projects with Ultra-Realistic AI Voices
            </div>
            <div className="mt-4">
              Create engaging voice content with unique AI Voices perfect for
              your audience. Generate conversational, long-form, or short-form
              voice content with consistent quality and performances. Secure and
              private voice generations with full commercial and copyrights.
            </div>
          </div>

          <div className="order-2 relative md:order-1 w-full md:w-[50%] flex justify-center">
      <div className="flex absolute top-[50%] left-[50%] justify-center items-center gap-4 mt-4">
        <button
          onClick={togglePlay}
          className="flex justify-center items-center gap-2 backdrop-filter backdrop-blur-lg rounded-[50px] p-4   "
        >
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </button>
        <audio ref={audioPlayer} src="/Assests/music.mp3"></audio>
      </div>
      <img
        className="w-full h-auto"
        src="/Assests/Music.png"
        alt="AI Voice Illustration"
      />
    </div>
        </div>
      </div>
    </>
  );
}

export default Music;
