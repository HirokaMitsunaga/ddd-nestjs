/*
  Warnings:

  - You are about to drop the column `Status` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `descriptio` on the `Item` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Item" DROP COLUMN "Status",
DROP COLUMN "descriptio",
ADD COLUMN     "description" TEXT,
ADD COLUMN     "status" "ItemStatus" NOT NULL DEFAULT 'ON_SALE';
