/*
  Warnings:

  - You are about to drop the `Project` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Project` DROP FOREIGN KEY `Project_ownerId_fkey`;

-- DropTable
DROP TABLE `Project`;
