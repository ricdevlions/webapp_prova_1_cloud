import ReleaseCard from "@/components/shared/releases/release-card";
import { Button } from "@/components/ui/button";
import Counter from "@/components/ui/counter";
import { getAllReleases } from "@/lib/actions/releases.actions";
import Link from "next/link";

const PaginaReleases = async () => {

    const releases = await getAllReleases();

    if (!releases) {
        return (
            <div> Releases not found </div>
        )
    }

    return (
        <div>
            <div className="h-25 flex items-center justify-center bg-blue-300">   
                <h1> Tutte le release </h1>
            </div>
            <main className="h-fit flex justify-center bg-gray-100 p-4">
                <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-2xl">
                    <h1 className="text-xl font-semibold mb-4 text-center">Releases</h1>
                        {
                            releases.map( (release) => (
                                
                                <div className = "w-full mb-2" key={release.id}>
                                    <ReleaseCard release={release} />
                                </div>
                                
                                )                            
                            )
                        }
                    <div className="text-center">
                        <Counter />
                    </div>
                    <div className="flex flex-col items-center mt-6 py-4">
                        <Button>
                            <Link href={"releases/crea_release"}> Crea nuova release </Link>
                        </Button>
                    </div>
                </div>
            </main>
        </div>
    )

}

export default PaginaReleases;