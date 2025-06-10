import PieceFullCard from "@/components/shared/pieces/piece-full-card";
import { Button } from "@/components/ui/button";
import { getFullPieceData, getPieceById } from "@/lib/actions/piece.actions";
import Link from "next/link";

const OnePiecePage = async (props: { params: Promise<{ id: string }> }) => {
  const { id } = await props.params;
  const piece = await getPieceById(id);
  const pieceFullData = await getFullPieceData(id);

  return (
    <div className="container mx-auto px-4 py-3 flex flex-col items-center gap-3">
      {pieceFullData.success ? (
        <PieceFullCard fullPiece={pieceFullData.data} />
      ) : (
        <p className="text-red-500">Brano non trovato</p>
      )}
      <Button className="w-full max-w-xs mb-4">
        <Link href={"/pieces"}> Vedi tutti i pezzi </Link>
      </Button>
    </div>
  );
};

export default OnePiecePage;