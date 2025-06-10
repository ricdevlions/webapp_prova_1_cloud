import ReleaseForm from "@/components/shared/releases/release-form";
import { getAllArtists } from "@/lib/actions/artist.actions";
import { convertPlainObject } from "@/lib/utils";


const CreateNewRelease = async () => {

    const artists = await getAllArtists();

    if(!artists) {
        return (
            <h1 className="font-red"> No artist found </h1>
        )
    }
    return ( 
        <>
        <div className="flex justify-center my-5">
            <h1 className="font-bold">Crea una Release</h1>
        </div>
        <div className="flex justify-center my-5">
            <ReleaseForm artists={artists}/>
        </div>
        </>
     );
}
 
export default CreateNewRelease;