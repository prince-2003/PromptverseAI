import ButtonPrimary from "./components/button1";
import ButtonSecondary from "./components/button2";
function Trending() {
  return (
    <>
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
  </div></>
  );
}

export default Trending;