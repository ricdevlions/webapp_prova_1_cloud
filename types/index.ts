import {z} from "zod"
import { insertArtistSchema, insertPieceSchema, insertReleaseSchema } from "@/lib/validators"

export type Artist = z.infer<typeof insertArtistSchema> & {
    id: string
}

export type Release = z.infer<typeof insertReleaseSchema> & {
    id: string
}

export type Piece = z.infer<typeof insertPieceSchema> & {
    id: string
}

export type FullPiece = z.infer<typeof insertPieceSchema> & {
    releaseTitle: string,
    pieceArtistName: string
    pieceArtistId: string
}