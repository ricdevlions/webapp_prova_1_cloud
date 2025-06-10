import ArtistaCard from "@/components/shared/artisti/artista-card";
import { Button } from "@/components/ui/button";
import { getAllArtists } from "@/lib/actions/artist.actions";
import Link from "next/link";

const PaginaArtisti = async () => {

    const artists = await getAllArtists();

    if (!artists) {
        return (
            <div> Non ci sono artisti </div>
        )
    }


    return ( 
        <main className="h-fit flex justify-center p-4">
            <div className="w-100 m-5 flex justify-center text-center bg-blue-100 p-4 rounded-md">
                <div className="m-4 w-full">
                    <h4 className="font-semibold pb-4"> Artisti</h4>
                    <div>
                        {
                            artists.map( (artist) => (
                                <div className="border p-3 m-3 rounded-md bg-white" key={artist.id}>
                                    <ArtistaCard artist={artist} />
                                </div>
                            ))
                        }
                    </div>
                    <div className="mt-7">
                        <Button asChild variant={"outline"}>
                            <Link href="/artisti/crea_artista">CREA NUOVO</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </main>
     );
}
 
export default PaginaArtisti;