"use client";

import ActionsCard from "./actions-card1";
import { Button } from "./button";
import ButtonAce1 from "./buttonAce1";
import { WavyBackground } from "../ui/wavy-background";
import Link from "next/link";

const HeroRiccardo = () => {
  return (
    <div className="relative z-10 h-auto w-full">
      {/* <WavyBackground className="pt-5 h-auto w-full overflow-hidden"> */}
      <div className="bg-black h-full pt-6">  
        <div className="mt-14 flex flex-col items-center px-6 gap-5 space-y-0">
          <div className="flex flex-col space-y-8">
            <h1 className="max-w-auto text-4xl text-white font-bold text-center md:text-5xl md:text-left">
              Singularities Music Management
            </h1>
            <p className="max-w-md text-center text-white md:text-left">
              Personalized, AI-powered analytics and management for your music projects.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-5 my-8">
            <ButtonAce1 text="Artists" link={"/artisti"}>
            </ButtonAce1>
            <ButtonAce1 text="Albums" link={"/releases"}/>
            <ButtonAce1 text="Pieces" link={"/pieces"}/>
          </div>
        </div>
        <div className="flex items-center justify-center">
            <ActionsCard />
        </div>
      </div>
      {/* </WavyBackground> */}
    </div>
  );
};

export default HeroRiccardo;