'use client'

import { Release } from "@/types"
import MutantIcon from "@/components/ui/mutant_icon"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const ReleaseCard = ({ release, artistId }: { 
        release: Release,
        artistId?: string | null
  }) => {
  return (
    <div className="border p-4 rounded-md w-full">
      <div className="flex items-center justify-between gap-4">
        <p>
          {release.title} - {release.genre} - Released with label: {String(release.label)}
        </p>
        <div className="flex items-center gap-2 ml-auto">
          <Button asChild className="m-2">
                  <Link href={`/releases/${release.id}`}>Vedi</Link>
          </Button>
          <MutantIcon />
        </div>
      </div>
    </div>
  );
};

export default ReleaseCard;
