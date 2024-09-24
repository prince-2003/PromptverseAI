import React from "react";
import styled from "styled-components";

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

function Text({head, para}) {
  return (
    <div className=" card 2 hover:bg-[#0E0E0E] rounded-lg p-4 text-white text-start font-[500]">
      {head} <br />
      <span className="font-light text-gray-400">{para}</span>
    </div>
  );
}

function Features() {
  return (
    <>
      <div className="flex flex-col my-10 w-[80vw]  justify-center mx-auto">
        <div className="text-gray-400 font-[500] text-[2rem]">
          More Features
          <br />
          <span className="text-white font-[600]">Promptverse AI</span> offers
          to an individual
          <hr className="border-[1px] border-gray-400 w-[100%] mt-2" />
        </div>
        <StyledWrapper>
        <div className=" cards grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6">
        {features.map((feature, index) => (
          <Text key={index} head={feature.head} para={feature.para} />
        ))}
        </div></StyledWrapper>
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
