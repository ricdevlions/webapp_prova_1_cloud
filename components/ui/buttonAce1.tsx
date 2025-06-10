import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

const ButtonAce1 = ({ text, link }: {text: string, link: Url}) => {
    
  return (
    <button className="p-[3px] relative h-10 w-40">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500 to-black rounded-lg" />
      
      <div className="relative flex items-center justify-center w-full h-full bg-black rounded-lg group transition duration-250 text-white hover:cursor-pointer hover:bg-transparent font-semibold text-sm">
        <Link href={link}>{text}</Link>
      </div>
    </button>
  );
};

export default ButtonAce1;
