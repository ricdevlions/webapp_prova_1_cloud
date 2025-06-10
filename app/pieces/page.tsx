import PieceSmallCard from "@/components/shared/pieces/piece-small-card";
import { getAllPieces } from "@/lib/actions/piece.actions";

const PaginaPieces = async () => {

    const pieces = await getAllPieces();

    if(!pieces){
        return (
            <div> Pieces not found </div>
        )
    }

    return (
        <div>
            <div className="h-25 flex items-center justify-center bg-pink-200">
                <h1> Tutti i pezzi </h1>
            </div>
            <main className="h-fit flex justify-center bg-gray-100 p-4">
                <div className="bg-white rounded-3xl shadow-lg p-6 w-fit max-w-2x1">
                    {
                        
                        pieces.map( (piece) => (
                            
                            <div className="w-full mb-2" key={piece.id}>
                                <PieceSmallCard piece={piece} />
                            </div>        

                        )
                    )

                    }
                </div>
            </main>
        </div>
    )


}

export default PaginaPieces;