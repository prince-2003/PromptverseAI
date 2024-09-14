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
      <div className=" mt-16 flex flex-col gap-4 text-white justify-center items-center">
        <div className="text-[1.5rem] font-[400] leading-4">
          See Trending Prompts
        </div>
        <div className="mx-auto  max-w-[80%] md:max-w-[50%] font-[200] text-[.8rem] md:text-[1rem] text-center">
          Discover endless creativity with PromptVerse. Generate diverse content
          effortlessly using prompts. Stay updated with real-time trends,
          automate tasks, and extract insights from any document or URL. All
          within a sleek, futuristic design. Create more, effortlessly.
        </div>
        <div className="flex justify-center items-center gap-6 mt-6">
          <ButtonPrimary innerHtml="Start Generating" />
          <ButtonSecondary innerHtml="Download" />
        </div>
      </div>
      <div className="mt-16 flex justify-center">
        <img src="/Assests/Trending.png" alt="Trending" className="w-[80%]" />
      </div>

      <div className=" mt-16 flex flex-col gap-4 text-white justify-center items-center">
        <div className="text-[1.5rem] font-[400] leading-4">
          Images like never seen before
        </div>
        <div className="mx-auto  max-w-[80%] md:max-w-[50%] font-[200] text-[.8rem] md:text-[1rem] text-center">
          Discover endless creativity with PromptVerse. Generate diverse content
          effortlessly using prompts. Stay updated with real-time trends,
          automate tasks, and extract insights from any document or URL. All
          within a sleek, futuristic design. Create more, effortlessly.
        </div>
      </div>
      <div className="mt-16 flex justify-center w-full">
        <div className="flex gap-4 items-center w-[80%]">
          <div>
            <img src="/Assests/Column.png" alt="Column" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="/Assests/1Column.png" alt="Column" />
            <img src="/Assests/2Column.png" alt="Column" />
            <img src="/Assests/3Column.png" alt="Column" />
            <img src="/Assests/4Column.png" alt="Column" />
          </div>
        </div>
      </div>
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
        Create engaging voice content with unique AI Voices perfect for your audience. Generate conversational, long-form, or short-form voice content with consistent quality and performances. Secure and private voice generations with full commercial and copyrights.
      </div>
    </div>
    
    <div className="order-2 md:order-1 w-full md:w-[50%] flex justify-center">
      <img className="w-full h-auto" src="/Assests/Music.png" alt="AI Voice Illustration" />
    </div>

  </div>
</div>

    </>
  );
}

export default Home;
