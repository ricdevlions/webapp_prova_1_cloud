import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
    <div className="border-3 bg-[url('../public/images/VPE_title-background.jpg')] bg-[length:100%] bg-center bg-no-repeat">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl text-center h-fit font-extrabold my-10 text-white">Sotto la panza</h1>
        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto p-6 mb-10">
          <Button variant="destructive" asChild>
            <Link href="/about">About Avanza</Link>
          </Button>
          <Button asChild>
            <Link href="/contatti">Contatti Silvia Manza</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/artisti">Artisti</Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="/releases">Releases</Link>
          </Button>
        </div>
      </div>
    </div>
    </>
  );
}

// 'use client'

// import Link from "next/link";
// import { Button } from "@/components/ui/button";

// export default function Hero() {
//   return (
//     <section className="relative h-screen bg-[url('/images/hero.jpg')] bg-cover bg-center bg-no-repeat">
//       {/* overlay */}
//       <div className="absolute inset-0 bg-black/60 z-10" />

//       {/* content */}
//       <div className="relative z-20 flex flex-col justify-center items-center h-full text-center px-6">
//         <h1 className="text-white text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-xl">
//           Benvenuto su Nebula
//         </h1>
//         <p className="text-white text-lg md:text-2xl max-w-xl mb-8 drop-shadow-md">
//           Scopri artisti, releases e vibrazioni fuori dagli schemi.
//         </p>
//         <Button asChild size="lg" className="text-lg">
//           <Link href="/artisti">Scopri gli artisti</Link>
//         </Button>
//       </div>
//     </section>
//   );
// }


