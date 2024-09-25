import React from "react";
import styled from "styled-components";
import Text from "./components/gridtxt";
import ButtonSecondary from "./components/button2.jsx";

const features = [
  {
    head: "Write mails and  replies",
    para: "We are visionaries We will tell you everything you need about the market at the moment, but also predict how the cost of housing and your area will change in a few years",
  },
  {
    head: "Read pdf and attachments",
    para: "We do not want to sell you any specific object, our goal is to find the “right” apartment for you and remain partners for many years.",
  },
  {
    head: "Scans Images",
    para: "We provide a full range of services for the purchase and sale of real estate, from searching for an object and ending with paperwork.",
  },
  {
    head: "Write codes & programs",
    para: "The housing should make your life better. Therefore, when selecting real estate, we carefully learn your request and find only what is ideal.",
  },
  {
    head: "Research",
    para: "We have more than 130 objects in our portfolio, but for you we will make an individual selection with only suitable options.",
  },
  {
    head: "Automation",
    para: "Whether it's the legal execution of a transaction, interior design or the technical details of a building, our brokers will tell you everything.",
  },
];
const itemPositions = [
  { top: "80%", left: "70%", scale: ".9" },
  { top: "5%", left: "80%", scale: ".5" },
  { top: "10%", left: "2%", scale: "3" },
  { top: "0%", left: "10%", scale: ".6" },
];

function Features() {
  return (
    <>
      <div className="flex flex-col my-20 w-[80vw]  justify-center mx-auto">
        <div className="text-gray-400 font-[500] text-[2rem]">
          More Features
          <br />
          <span className="text-white font-[600]">Promptverse AI</span> offers
          to an individual
          <hr className="border-[1px] border-gray-400 w-[100%] mt-2" />
        </div>
        <StyledWrapper>
          <div className=" cards grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6">
            {features.map((feature, index) => (
              <Text key={index} head={feature.head} para={feature.para} />
            ))}
          </div>
        </StyledWrapper>
      </div>

      <div className="mt-10 w-full flex justify-center">
  <div className="flex flex-col gap-5 py-10 md:py-20 text-white w-[80%] bg-[#0E0E0E] items-center relative overflow-hidden rounded-lg">
    <p className="text-[1.5rem] md:text-[2rem] font-[600] text-center md:text-start">
      Promptverse has no limitations. <br />
      Get started on a journey with Promptverse. <br />
    </p>
    <ButtonSecondary innerHtml="Create an Account" />
    {itemPositions.map((position, index) => (
      <img
        src="/Assests/star.svg" 
        key={index}
        className="floating-logo absolute w-8 h-8 sm:w-16 sm:h-16"
        style={{
          top: position.top,
          left: position.left,
          transform: `scale(${position.scale})`,
        }}
      />
    ))}
  </div>
</div>

    </>
  );
}

const StyledWrapper = styled.div`
  .cards .card:hover {
    transform: scale(1.1, 1.1);
  }

  .cards:hover > .card:not(:hover) {
    filter: blur(10px);
    transform: scale(0.9, 0.9);
  }
`;

export default Features;
