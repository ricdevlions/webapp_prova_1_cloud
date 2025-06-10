import ReleaseCard from "@/components/shared/releases/release-card";
import { Button } from "@/components/ui/button";
import { getArtistById } from "@/lib/actions/artist.actions";
import { getReleasesByArtistId } from "@/lib/actions/releases.actions";
import Link from "next/link";
import { notFound } from "next/navigation";

const OneArtistPage = async (props: { params: Promise<{ id: string }> }) => {
  const { id } = await props.params;
  const artista = await getArtistById(id);
  const releases = await getReleasesByArtistId(id);

  if (!artista) notFound();

  // Type guard to check if releases is an array
  const isReleasesArray = Array.isArray(releases);

  return (
    <div>
      <div className="h-fit my-2.5 flex items-center justify-center bg-amber-200">
        <div className="flex flex-col text-center my-2.5">
          <h1 className="font-bold mt-3">Artista</h1>
          <div className="my-3">
            <h2>Nome: {artista.name}</h2>
            <h2>Email: {artista.email}</h2>
          </div>
        </div>
      </div>
      <main className="h-fit flex justify-center bg-gray-100 p-4 flex-col items-center gap-3">
        <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-2xl">
          <h1 className="text-xl font-semibold mb-4 text-center">Releases</h1>
          {isReleasesArray ? (
            releases.length > 0 ? (
              releases.map((release) => (
                <div className="w-full mb-2" key={release.id}>
                  <ReleaseCard release={release} artistId={id} />
                </div>
              ))
            ) : (
              <p>No releases found for this artist.</p>
            )
          ) : (
            <p>Error: {(releases as { success: boolean; message: any }).message}</p>
          )}
        </div>
          <Button className="my-4"> 
            <Link href={"/releases"}>Vedi tutte le release</Link>
          </Button>
      </main>
    </div>
  );
};

export default OneArtistPage;