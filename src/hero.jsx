import { useEffect, useRef } from "react";
import gsap from "gsap";
import ButtonPrimary from "./components/button1";
import ButtonSecondary from './components/button2'

function Hero() {
  const itemPositions = [
    { top: "5%", left: "20%", scale:1 ,parallaxSpeed: 0.05 },
    { top: "5%", left: "80%", scale:.5 , parallaxSpeed: 0.05 },
    { top: "20%", left: "10%", scale:.5, parallaxSpeed: 0.05 },
    { top: "40%", left: "5%", scale:1, parallaxSpeed: 0.1 },
    { top: "36%", left: "90%", scale: 1, parallaxSpeed: 0.07 },
    { top: "75%", left: "70%", scale:1, parallaxSpeed: 0.05 },
    { top: "80%", left: "20%", scale:.5, parallaxSpeed: 0.03 },
    { top: "-5%", left: "65%", scale: 1, parallaxSpeed: 0.08 },
  ];

  const galleryRef = useRef(null);

  useEffect(() => {
    const smMediaQuery = window.matchMedia('(max-width: 640px)'); // Tailwind's 'sm' breakpoint is 640px

    const handleMouseMove = (e) => {
      const gallery = galleryRef.current;
      if (!gallery) return;

      gallery.querySelectorAll(".floating-logo").forEach((element, index) => {
        const animationFactor = itemPositions[index].parallaxSpeed;
        const newX = (e.clientX - window.innerWidth / 2) * animationFactor;
        const newY = (e.clientY - window.innerHeight / 2) * animationFactor;

        gsap.to(element, {
          x: newX,
          y: newY,
          duration: 0.75,
        });
      });
    };

    const startAutomaticAnimation = () => {
      const gallery = galleryRef.current;
      if (!gallery) return;

      
      gallery.querySelectorAll(".floating-logo").forEach((element) => {
        gsap.to(element, {
          y: '+=20', 
          repeat: -1,
          yoyo: true, 
          duration: 3, 
          ease: "power1.inOut", 
        });
      });
    };

    if (smMediaQuery.matches) {
      
      startAutomaticAnimation();
    } else {
      
      document.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [itemPositions]);

  return (
    <div className="h-[100vh] relative w-full text-center flex flex-col justify-center items-center">
  <div className="relative">
    <div className="text-white text-[1.5rem] font-[400] leading-4">Promptverse AI</div>
    <div className="text-white text-[2rem] md:text-[3rem] lg:text-[4rem] font-extrabold cursor-pointer">
      Find Inspiration.<br />
      Create, Generate, <br /> Produce & Automate.
    </div>
    <div className="md:flex justify-center mx-auto max-w-[50%] text-white text-[1rem] hidden font-[200]  leading-6 text-center">
      Welcome to PromptVerse. Effortlessly create content, explore endless
      prompts, and stay ahead with real-time trends. Automate emails, social
      media, and more while our AI extracts knowledge from any document or
      URL. Experience a stunning, futuristic design that boosts
      productivity.
    </div>
    <div className="flex justify-center items-center gap-6 mt-6">
      <ButtonPrimary innerHtml="Start Generating" />
      <ButtonSecondary innerHtml="Download" />
      </div>
      
  
    
  </div>

      <svg
        className="absolute -bottom-0 -z-10 md:w-[661.125px] md:h-[661.125px] flex-shrink: 0;"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1910 1038"
        fill="none"
      >
        <g filter="url(#filter0_f_1_7262)">
          <path
            d="M954.562 624C866.892 624 782.812 658.827 720.82 720.82C658.827 782.812 624 866.892 624 954.562C624 1042.23 658.827 1126.31 720.82 1188.31C782.812 1250.3 866.892 1285.12 954.562 1285.12C1042.23 1285.12 1126.31 1250.3 1188.31 1188.31C1250.3 1126.31 1285.12 1042.23 1285.12 954.562C1285.12 866.892 1250.3 782.812 1188.31 720.82C1126.31 658.827 1042.23 624 954.562 624ZM1138.07 973.59C1134 978.941 1128.36 982.887 1121.94 984.877L1070.02 1002.29C1054.15 1007.72 1039.71 1016.64 1027.77 1028.42C1015.91 1040.28 1006.97 1054.75 1001.65 1070.66L983.91 1122.58C981.524 1128.44 977.629 1133.56 972.623 1137.42C967.268 1141.3 960.851 1143.44 954.24 1143.55C947.595 1143.65 941.115 1141.48 935.858 1137.42C930.494 1133.57 926.442 1128.17 924.248 1121.94L907.155 1070.02C901.843 1054.05 892.862 1039.54 880.933 1027.67C869.003 1015.8 854.458 1006.88 838.462 1001.65L786.863 984.555C780.636 982.361 775.232 978.308 771.383 972.945C767.362 967.664 765.207 961.199 765.255 954.562C765.298 947.841 767.441 941.302 771.383 935.858C775.086 930.63 780.416 926.774 786.54 924.892L838.462 907.478C854.513 902.042 869.16 893.121 881.355 881.355C893.287 869.293 902.221 854.587 907.478 838.462L924.892 787.508C926.825 781.406 930.53 776.017 935.535 772.028C940.679 767.684 947.185 765.287 953.917 765.255C960.316 765.145 966.603 766.941 971.978 770.415C977.653 773.943 981.971 779.284 984.233 785.573L1001.65 838.14C1007.07 854.362 1016.1 869.132 1028.09 881.355C1040.21 893.056 1054.74 901.971 1070.66 907.478L1122.58 925.538C1128.76 927.504 1134.09 931.477 1137.74 936.825C1141.51 942.217 1143.53 948.631 1143.55 955.208C1143.52 961.722 1141.61 968.108 1138.07 973.59Z"
            fill="white"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_1_7262"
            x="0"
            y="0"
            width="1909.12"
            height="1909.12"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="312"
              result="effect1_foregroundBlur_1_7262"
            />
          </filter>
        </defs>
      </svg>
      <div ref={galleryRef} className="absolute inset-0 pointer-events-none">
        {itemPositions.map((position, index) => (
          <div
            key={index}
            className="floating-logo absolute"
            style={{
              top: position.top,
              left: position.left,
              transform: `scale(${position.scale})`,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <g clipPath="url(#clip0_1_7265)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.4024 1.48237C11.9254 0.172869 10.0744 0.172869 9.59737 1.48237L7.43287 7.43287L1.48237 9.59737C0.172869 10.0744 0.172869 11.9254 1.48237 12.4024L7.43287 14.5669L9.59737 20.5174C10.0744 21.8269 11.9254 21.8269 12.4024 20.5174L14.5669 14.5669L20.5174 12.4024C21.8269 11.9254 21.8269 10.0744 20.5174 9.59737L14.5669 7.43287L12.4024 1.48237Z"
                  fill="#CCCCCC"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_7265">
                  <rect
                    width="21"
                    height="21"
                    fill="white"
                    transform="translate(0.5 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;
