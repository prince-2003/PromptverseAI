import { useState } from "react";

function Gallery() {
  const images = [
    "/Assests/Column.png",
    "/Assests/1Column.png",
    "/Assests/2Column.png",
    "/Assests/3Column.png",
    "/Assests/4Column.png",
  ];

  const [indx, setIndx] = useState(0);

  const handlePrev = () => {
    setIndx((prevIndx) => (prevIndx === 0 ? images.length - 1 : prevIndx - 1));
  };

  const handleNext = () => {
    setIndx((prevIndx) => (prevIndx === images.length - 1 ? 0 : prevIndx + 1));
  };
  return (
    <>
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
      <div className="mt-16 flex justify-center w-full m-2">
        <div className="hidden md:flex gap-4 items-center w-[80%]">
          <div>
            <img src="/Assests/Column.png" alt="Column" />
          </div>
          <div className="flex md:grid md:grid-cols-2 gap-4">
            <img src="/Assests/1Column.png" alt="Column" />
            <img src="/Assests/2Column.png" alt="Column" />
            <img src="/Assests/3Column.png" alt="Column" />
            <img src="/Assests/4Column.png" alt="Column" />
          </div>
        </div>
        <div className="flex justify-center md:hidden gap-4 items-center w-[80%] relative">
          <div className="absolute -left-4 block md:hidden backdrop-filter backdrop-blur-lg rounded-[20px] p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              height="18"
              width="18"
              fill="white"
              onClick={handlePrev}
              className="cursor-pointer"
              style={{ transform: "rotate(180deg)" }}
            >
              <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
            </svg>
          </div>

          <div className="object-cover flex justify-center items-center w-[100vw]">
            <img
              className="w-[100%] h-[100%] object-cover rounded-lg"
              src={images[indx]}
            />
          </div>

          <div className="absolute -right-4 block md:hidden backdrop-filter backdrop-blur-lg rounded-[20px] p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              height="18"
              width="18"
              fill="white"
              onClick={handleNext}
              className="cursor-pointer"
            >
              <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
export default Gallery;
