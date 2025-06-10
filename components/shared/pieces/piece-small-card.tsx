'use client'

import { Piece } from "@/types"
import { Button } from "@/components/ui/button"
import Link from "next/link";

const PieceSmallCard = ({ piece }: { piece: Piece}) => {
    return ( 
        <div className="border border-solid p-4 rounded-md w-full">
            <div className="flex items-center justify-between gap-4">
                <p>
                    {piece.title} - {piece.genre} - {piece.duration} s
                </p>
                <div className="flex items-center gap-2 ml-auto">
                    <Button asChild className="m-2">
                        <Link href={`/pieces/${piece.id}`}>Dettagli</Link>
                    </Button>
                </div>
            </div>
        </div>
     );
}
 
export default PieceSmallCard;