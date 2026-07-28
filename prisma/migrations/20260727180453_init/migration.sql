-- CreateEnum
CREATE TYPE "Role" AS ENUM ('CUSTOMER', 'ADMIN');

-- CreateEnum
CREATE TYPE "RentalStatus" AS ENUM ('ACTIVE', 'COMPLETED', 'CANCELLED');

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(30) NOT NULL,
    "email" VARCHAR(254) NOT NULL,
    "phone" VARCHAR(10) NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'CUSTOMER',

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vehicles" (
    "id" SERIAL NOT NULL,
    "brand" VARCHAR(30) NOT NULL,
    "model" VARCHAR(30) NOT NULL,
    "year" INTEGER NOT NULL,
    "licensePlate" VARCHAR(15) NOT NULL,
    "dailyRate" INTEGER NOT NULL,
    "isAvailable" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "vehicles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rentals" (
    "id" SERIAL NOT NULL,
    "vehicleId" INTEGER NOT NULL,
    "customerId" INTEGER NOT NULL,
    "startDate" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endDate" DATE,
    "status" "RentalStatus" NOT NULL DEFAULT 'ACTIVE',

    CONSTRAINT "rentals_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_phone_key" ON "users"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "vehicles_licensePlate_key" ON "vehicles"("licensePlate");

-- AddForeignKey
ALTER TABLE "rentals" ADD CONSTRAINT "rentals_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rentals" ADD CONSTRAINT "rentals_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "vehicles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
