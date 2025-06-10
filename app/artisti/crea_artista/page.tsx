import ArtistaForm from "@/components/shared/artisti/artista-form";

const CreateArtistPage = async () => {
    return ( 
        <>
        <div className="flex justify-center my-5">
            <h1 className="font-bold">Crea un Artsta</h1>
        </div>
        <div className="flex justify-center my-5">
            <ArtistaForm/>
        </div>
        </>
     );
}
 
export default CreateArtistPage;