import Image from "next/image";
import { Instagram } from 'lucide-react';
import Link from "next/link";

const Footer = () => {
    return ( 
        <div className="w-full h-[130px] bg-gradient-to-t from-blue-500 to-black flex items-center justify-center">
            <div className="flex flex-col gap-2 items-center mb-6">
                <Link
                    href="https://www.instagram.com/pianoverse_music/"
                    className="w-fit flex flex-col items-center justify-center gap-4 py-1 text-white"
                >
                    <div className=" debug h-4 invisible"></div>
                    <div className="flex flex-row gap-2 items-center justify-center py-1 px-3 hover:shadow-[0_0_10px_#ffffff] transition duration-200 rounded-xl">
                        <Instagram className="w-5 h-5" />
                        <span>pianoverse_music</span>
                    </div>
                </Link>
                <Link
                    className="text-white hover:shadow-[0_0_10px_#ffffff] transition duration-200 rounded-xl py-1 px-3"
                    href="mailto:singularitiesmusic@gmail.com"
                    >
                    email: singularitiesmusic@gmail.com
                </Link>
            </div>
        </div>
     );
}
 
export default Footer;