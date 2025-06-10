'use server'

import { prisma } from "@/db/prisma";
import { convertPlainObject, formatError } from "../utils";
import { getArtistById } from "./artist.actions";
import { getReleaseById } from "./releases.actions";

// Get all pieces from DB
export async function getAllPieces() {
    const data = prisma.piece.findMany()
    // return convertPlainObject(data)
    return data
}

// Get single piece by ID
export async function getPieceById(pieceId: string) {
    const piece = await prisma.piece.findFirst({
        where: {
            id: pieceId
        }
    })
    return convertPlainObject(piece)
}

// Get all pieces by release ID
export async function getPiecesByReleaseId(releaseId: string) {

    try {

        const release = await prisma.release.findFirst({
            where: {
                id: releaseId
            }
        })

        if(!release) throw new Error("Release non trovata");

        const data = await prisma.piece.findMany({
            where: {
                releaseId: releaseId
            }
        });
        return convertPlainObject(data)

    } catch (error) {
        return {
            success: false,
            message: formatError(error)
        }
    }

}

// Get all piece's info
export async function getFullPieceData(pieceId: string) {

    try {

        const piece = await prisma.piece.findFirst({
            where:{
                id: pieceId
            }
        })

        if(!piece) throw new Error("Brano non trovata");

        const pieceData = convertPlainObject(piece);

        const release = await getReleaseById(pieceData.releaseId)

        if(!release) throw new Error("Release non trovata");

        const releaseData = convertPlainObject(release);

        const artist = await getArtistById(releaseData.artistId);

        if(!artist) throw new Error("Artista non trovata");


        const data = {
            id: pieceId,
            title: piece.title,
            duration: piece.duration,
            genre: piece.genre,
            releaseId: release.id,
            releaseTitle: release.title,
            pieceArtistName: artist.name,
            pieceArtistId: artist.id
        }

        return {
            success: true,
            data: data
        }

    } catch (error) {
        return {
            success: false,
            message: formatError(error)
        }
    }

}



