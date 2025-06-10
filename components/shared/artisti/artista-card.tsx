import { Button } from "@/components/ui/button";
import { Artist } from "@/types";
import Link from "next/link";
import DeleteArtistDialog from "./delete-artista-dialog";
import { deleteArtistById } from "@/lib/actions/artist.actions";

const ArtistaCard = ({ artist }: { artist: Artist }) => {

    return (
        <div className="flex-center">
            <div className="m-2">
                <p> {artist.name} : {artist.email} </p>
            </div>
            <Button asChild className="m-2">
                <Link href={`/artisti/${artist.id}`}>Vedi</Link>
            </Button>
            <DeleteArtistDialog action={deleteArtistById} id={artist.id}/>
        </div>
     );
}
 
export default ArtistaCard;