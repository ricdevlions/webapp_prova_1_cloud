import {z} from "zod"

export const insertArtistSchema = z.object({
    // id: z.string().uuid().optional(),
    email: z.string().min(3, "L'email deve avere almeno tre caratteri").email(),
    name: z.string().max(20, "Il nome può avere un massimo di 20 caratteri")
});

export const insertReleaseSchema = z.object({
    title: z.string().min(3, "Il titolo deve avere almeno tre caratteri"),
    genre: z.string().min(3, "Il genere deve avere almeno tre caratteri"),
    label: z.boolean(),
    artistId: z.string().uuid()
})

export const insertPieceSchema = z.object({
    title: z.string().min(3, "Il titolo deve avere almeno tre caratteri"),
    genre: z.string().min(3, "Il genere deve avere almeno tre caratteri"),
    duration: z.number(),
    releaseId: z.string().uuid().optional()
})

