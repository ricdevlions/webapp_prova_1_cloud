import Image from "next/image";
import logo from '/public/images/Logo_sing_white.png'
import Link from "next/link";

const Header = () => {
    return ( 
        <div className="z-50 w-full h-[90px] bg-gradient-to-b from-blue-500 to-black flex items-center justify-center">
            <Link className="" href={"/"}>
                <Image 
                    className="translate-y-5"
                    src={logo}
                    alt={"singularities logo"}
                    width={230}
                    height={30}
                ></Image>
            </Link>
        </div>
     );
}

export default Header;