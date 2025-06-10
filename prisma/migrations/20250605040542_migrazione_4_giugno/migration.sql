/*
  Warnings:

  - Made the column `genre` on table `Release` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Release" ALTER COLUMN "genre" SET NOT NULL;
