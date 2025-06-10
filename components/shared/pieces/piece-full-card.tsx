'use client'

import { FullPiece } from "@/types";
import Link from "next/link";

const PieceFullCard = ({fullPiece}: {fullPiece?: FullPiece}) => {
    return ( 
        <>
        <div className="text-center mt-4">
            <h1 className="text-xl font-bold">{fullPiece?.pieceArtistName}: {fullPiece?.title}</h1>
        </div>
        <div className="relative flex flex-col mt-4 mb-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
            <div className="mx-3 mb-0 border-b border-slate-200 pt-3 pb-2 px-1 text-center">
                <span className="text-medium text-slate-600 font-semibold">
                Piece Details 
                </span>
            </div>
            
            <div className="px-6 pt-5 items-baseline flex w-full">
                <h5 className="w-1/3 text-xl text-slate-800 font-semibold">Title</h5>
                <p className="w-1/3 leading-normal text-slate-600 font-light">{fullPiece?.title}</p>
            </div>
            <div className="px-6 pt-5 items-baseline flex w-full">
                <h5 className="w-1/3 text-xl text-slate-800 font-semibold">Album</h5>
                <p className="w-1/3 leading-normal text-slate-600 font-light">
                    <Link href={`/releases/${fullPiece?.releaseId}`}>{fullPiece?.releaseTitle}</Link>
                </p>
            </div>
            <div className="px-6 pt-5 items-baseline flex w-full">
                <h5 className="w-1/3 text-xl text-slate-800 font-semibold">Duration</h5>
                <p className="w-1/3 leading-normal text-slate-600 font-light"> {fullPiece?.duration} seconds</p>
            </div>
            <div className="px-6 py-5 items-baseline flex w-full">
                <h5 className="w-1/3 text-xl text-slate-800 font-semibold"> Artist </h5>
                <p className="w-1/3 leading-normal text-slate-600 font-light">
                    <Link href={`/artisti/${fullPiece?.pieceArtistId}`}>{fullPiece?.pieceArtistName}</Link>
                </p>
            </div>
        </div>
        </>
     );
}
 
export default PieceFullCard;