/*
  Warnings:

  - You are about to drop the column `albumId` on the `Piece` table. All the data in the column will be lost.
  - You are about to drop the column `authorId` on the `Release` table. All the data in the column will be lost.
  - Added the required column `releaseId` to the `Piece` table without a default value. This is not possible if the table is not empty.
  - Made the column `genre` on table `Piece` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `artistId` to the `Release` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Piece" DROP CONSTRAINT "Piece_albumId_fkey";

-- DropForeignKey
ALTER TABLE "Release" DROP CONSTRAINT "Release_authorId_fkey";

-- AlterTable
ALTER TABLE "Piece" DROP COLUMN "albumId",
ADD COLUMN     "releaseId" UUID NOT NULL,
ALTER COLUMN "genre" SET NOT NULL;

-- AlterTable
ALTER TABLE "Release" DROP COLUMN "authorId",
ADD COLUMN     "artistId" UUID NOT NULL;

-- AddForeignKey
ALTER TABLE "Release" ADD CONSTRAINT "Release_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "Artist"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Piece" ADD CONSTRAINT "Piece_releaseId_fkey" FOREIGN KEY ("releaseId") REFERENCES "Release"("id") ON DELETE CASCADE ON UPDATE CASCADE;
