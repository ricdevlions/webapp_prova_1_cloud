import { PrismaClient } from "@prisma/client";
import sampleData from "./sample_data.js";

const prisma = new PrismaClient();

async function main() {
  console.log("Starting database seeding...");

  // Clear existing data
  console.log("Clearing existing data...");
  await prisma.piece.deleteMany();
  await prisma.release.deleteMany();
  await prisma.artist.deleteMany();

  // Seed new data
  console.log("Seeding new data...");
  for (const artist of sampleData) {
    await prisma.artist.create({
      data: {
        email: artist.email,
        name: artist.name,
        releases: {
          create: artist.releases.create.map((release) => ({
            title: release.title,
            genre: release.genre,
            label: release.label,
            pieces: {
              create: release.pieces.create,
            },
          })),
        },
      },
    });
    console.log(`Created artist: ${artist.name}`);
  }

  console.log("Seeding completed successfully!");
}

main()
  .catch((e) => {
    console.error("Error during seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    console.log("Disconnected from database.");
  });