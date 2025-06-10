import PieceSmallCard from "@/components/shared/pieces/piece-small-card";
import { getPiecesByReleaseId } from "@/lib/actions/piece.actions";
import { getReleaseById } from "@/lib/actions/releases.actions";
import { notFound } from "next/navigation";

const OneReleasePage = async (props : {params: Promise<{id: string}>}) => {
    const { id } = await props.params;
    const release = await getReleaseById(id);
    const pieces = await getPiecesByReleaseId(id);

    if (!release) notFound();

    // Type guard to check if pieces is an array
      const isReleasesArray = Array.isArray(pieces);
    
      return (
        <div>
          <div className="h-fit my-2.5 flex items-center justify-center bg-green-200">
            <div className="flex flex-col text-center my-2.5">
              <h1 className="font-bold mt-3">Release</h1>
              <div className="my-3">
                <h2>Title: {release.title}</h2>
                <h2>Genre: {release.genre}</h2>
              </div>
            </div>
          </div>
          <main className="h-fit flex justify-center bg-gray-100 p-4">
            <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-2xl">
              <h1 className="text-xl font-semibold mb-4 text-center">Pieces</h1>
              {isReleasesArray ? (
                pieces.length > 0 ? (
                  pieces.map((piece) => (
                    <div className="w-full mb-2" key={piece.id}>
                      <PieceSmallCard piece={piece}/>
                    </div>
                  ))
                ) : (
                  <p>No piece found for this release.</p>
                )
              ) : (
                <p>Error: {(pieces as { success: boolean; message: any }).message}</p>
              )}
            </div>
          </main>
        </div>
      );
    };
 
export default OneReleasePage;