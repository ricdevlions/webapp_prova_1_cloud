'use server'

import { prisma } from "@/db/prisma";
import { convertPlainObject, formatError } from "../utils";
import {z} from "zod"
import { spec } from "node:test/reporters";
import { insertArtistSchema } from "../validators";
import { revalidatePath } from "next/cache";
import { randomUUID } from 'crypto';

// Get all artists from DB
export async function getAllArtists() {
    const data = await prisma.artist.findMany();
    return convertPlainObject(data)
}

// Get single artist by ID
export async function getArtistById(id: string) {
    const artist = await prisma.artist.findFirst({
        where: {id: id}
    });
    return convertPlainObject(artist)
}

// Create a new artist
export async function createArtist(data: z.infer<typeof insertArtistSchema>) {
  try {
    const artistData = insertArtistSchema.parse(data);
    await prisma.artist.create({
      data: artistData
    });

    revalidatePath("/artisti");

    return { 
        success: true, 
        message: "Artista creato con successo" 
    };

  } catch (error) {
    return { 
        success: false,
        message: formatError(error) 
    };
  }
}

// Delete an artist

export async function deleteArtistById(id: string){

  try {
    const artist = await prisma.artist.findFirst({
      where: {id: id}
    })

    if(!artist) throw new Error("Artista non trovato")
    
    await prisma.artist.delete({
        where: {id: id}
      })

    revalidatePath("/artisti");

    return {
      success: true,
      message: "Artista eliminato correttamente"
    }
  } catch(error) {
    return {
      success: false,
      message: formatError(error)
    }
  }
}