'use server'

import { prisma } from "@/db/prisma"
import { convertPlainObject, formatError } from "../utils"
import { notFound } from "next/navigation";
import { insertReleaseSchema } from "../validators";
import {z} from "zod"
import { revalidatePath } from "next/cache";

// Get all releases in DB
export async function getAllReleases() {
    const data = await prisma.release.findMany();
    return convertPlainObject(data)
    //return data
}

// Get single release by ID
export async function getReleaseById(id: string) {
    const release = await prisma.release.findFirst({
        where: {id: id}
    });
    return convertPlainObject(release)
}

// Get all releases by artist ID
export async function getReleasesByArtistId(artistId: string) {

    try {
        const artist = await prisma.artist.findFirst({
        where: {id: artistId}
        })

        if(!artist) throw new Error("Artista non trovato");

        const data = await prisma.release.findMany({
            where: {artistId: artistId}
        });
        return convertPlainObject(data)
    
    } catch (error) {
        return {
            success: false,
            message: formatError(error)
        }
    }
}

// Create new release in DB
export async function createRelease(data: z.infer<typeof insertReleaseSchema>){
    try {
        const releaseData = insertReleaseSchema.parse(data)
        await prisma.release.create({
            data: releaseData,
        });

        revalidatePath("/releases")

        return {
            success: true,
            message: "Release creata con successo"
        }

    } catch(error){
        return {
            success: false,
            message: formatError(error)
        }
    }
}