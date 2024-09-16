import { useState } from "react";
import Infinitescroll from "./components/infintescroll";
import ButtonPrimary from "./components/button1";
import ButtonSecondary from "./components/button2";

function Home() {

  

  return (
    <>
      <div className="flex flex-col gap-4 text-white justify-center items-center">
        <div className="text-[1.5rem] font-[400] leading-4">
          Create more with Promptverse
        </div>
        <div className="mx-auto  max-w-[80%] md:max-w-[50%] font-[200] text-[.8rem] md:text-[1rem] text-center">
          Discover endless creativity with PromptVerse. Generate diverse content
          effortlessly using prompts. Stay updated with real-time trends,
          automate tasks, and extract insights from any document or URL. All
          within a sleek, futuristic design. Create more, effortlessly.
        </div>
      </div>
      <div className="mt-16 flex flex-col gap-4">
        <Infinitescroll delay={0} />
        <Infinitescroll delay={400} />
        <Infinitescroll delay={0} />
      </div>

    </>
  );
}

export default Home;
