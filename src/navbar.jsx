import { useState } from "react";
import ButtonPrimary from "./components/button1";

function Navbar() {
  const [nav, setNav] = useState(false); 

  const handleNav = () => {
    setNav(!nav); 
  };

  return (
    <>
    <nav className="flex sticky top-0 z-10 py-4 justify-between bg-opacity-10 backdrop-filter backdrop-blur-lg px-4 md:px-0 md:justify-around items-center md:gap-2 lg:gap-8">
      <div className="hidden justify-center items-center gap-6 md:flex">
        <a
          className="text-white text-center md:text-[.7rem] lg:text-[1rem] font-[400] hover:text-gray-300"
          href="#about"
        >
          About
        </a>
        <a
          className="text-white text-center md:text-[.7rem] lg:text-[1rem] font-[400] hover:text-gray-300"
          href="#technologies"
        >
          Technologies
        </a>
        <a
          className="text-white text-center md:text-[.7rem] lg:text-[1rem] font-[400] hover:text-gray-300"
          href="#products"
        >
          Products
        </a>
        <a
          className="text-white text-center md:text-[.7rem] lg:text-[1rem] font-[400] hover:text-gray-300"
          href="#discover"
        >
          Discover
        </a>
      </div>

      
      <div className="flex justify-center items-center gap-4 text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 md:w-6 md:h-6 lg:w-10 lg:h-10"
          viewBox="0 0 32 31"
          fill="none"
        >
          <path
            d="M16 0.125C11.9223 0.125 8.0116 1.74486 5.12823 4.62823C2.24486 7.5116 0.625 11.4223 0.625 15.5C0.625 19.5777 2.24486 23.4884 5.12823 26.3718C8.0116 29.2551 11.9223 30.875 16 30.875C20.0777 30.875 23.9884 29.2551 26.8718 26.3718C29.7551 23.4884 31.375 19.5777 31.375 15.5C31.375 11.4223 29.7551 7.5116 26.8718 4.62823C23.9884 1.74486 20.0777 0.125 16 0.125ZM24.535 16.385C24.3458 16.6339 24.0836 16.8174 23.785 16.91L21.37 17.72C20.632 17.9722 19.9604 18.3875 19.405 18.935C18.8533 19.4871 18.4374 20.1598 18.19 20.9L17.365 23.315C17.254 23.5873 17.0729 23.8254 16.84 24.005C16.591 24.1854 16.2925 24.2849 15.985 24.29C15.676 24.2945 15.3745 24.1941 15.13 24.005C14.8805 23.8259 14.6921 23.5746 14.59 23.285L13.795 20.87C13.5479 20.1272 13.1302 19.4526 12.5754 18.9004C12.0205 18.3481 11.344 17.9336 10.6 17.69L8.2 16.895C7.91039 16.7929 7.65907 16.6045 7.48 16.355C7.29302 16.1094 7.19278 15.8087 7.195 15.5C7.19702 15.1874 7.29666 14.8832 7.48 14.63C7.65227 14.3869 7.90015 14.2075 8.185 14.12L10.6 13.31C11.3465 13.0572 12.0278 12.6423 12.595 12.095C13.15 11.534 13.5655 10.85 13.81 10.1L14.62 7.73C14.7099 7.4462 14.8822 7.19556 15.115 7.01C15.3542 6.80798 15.6569 6.69648 15.97 6.695C16.2676 6.68989 16.56 6.77343 16.81 6.935C17.074 7.0991 17.2748 7.34751 17.38 7.64L18.19 10.085C18.442 10.8395 18.862 11.5265 19.42 12.095C19.9837 12.6392 20.6595 13.0539 21.4 13.31L23.815 14.15C24.102 14.2415 24.3501 14.4263 24.52 14.675C24.6951 14.9258 24.7893 15.2241 24.79 15.53C24.7885 15.833 24.7 16.13 24.535 16.385Z"
            fill="white"
          />
        </svg>
        <span className="md:text-[.8rem] lg:text-xl font-semibold cursor-pointer">Promptverse AI</span>
      </div>

      
      <div className="flex justify-center items-center gap-6">
        <div className="hidden md:flex justify-center items-center gap-6">
          <a
            className="text-white text-center md:text-[.7rem] lg:text-[1rem] font-[400] hover:text-gray-300"
            href="#team"
          >
            Team
          </a>
          <a
            className="text-white text-center md:text-[.7rem] lg:text-[1rem] font-[400] hover:text-gray-300"
            href="#pricing"
          >
            Pricings
          </a>
          <a
            className="text-white text-center md:text-[.7rem] lg:text-[1rem] font-[400] hover:text-gray-300"
            href="#premium"
          >
            Buy Premium
          </a>
          <ButtonPrimary innerHtml="Get Started" />
        </div>

        
        <div onClick={handleNav} className="block md:hidden cursor-pointer text-white">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                width="24" 
                height="24" 
                fill="currentColor" >
                <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/>
            </svg>
        </div>


      </div>
      </nav>

      
      <div
        className={
            !nav
              ? "fixed left-[-100%]"
              : "fixed z-20 rounded-tr-2xl rounded-xl bg-opacity-10 backdrop-filter backdrop-blur-lg right-0 top-0 w-[50%]  border-r border-r-gray-900 bg-white ease-in-out duration-500"
          }
          
      >
        <div onClick={handleNav} className="absolute right-4 top-4">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="24" 
                height="24" 
                fill="white"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
        </div>
        <div className="text-white font-normal text-base flex flex-col gap-6 py-8 px-4">
          <a href="#about">About</a>
          <a href="#technologies">Technologies</a>
          <a href="#products">Products</a>
          <a href="#discover">Discover</a>
          <a href="#team">Team</a>
          <a href="#pricing">Pricing</a>
          <a href="#premium">Buy Premium</a>
        </div>
      </div>
    </>
    
  );
}

export default Navbar;
