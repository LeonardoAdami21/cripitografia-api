-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "document" TEXT NOT NULL,
    "creditCard" TEXT NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_document_key" ON "User"("document");

-- CreateIndex
CREATE UNIQUE INDEX "User_creditCard_key" ON "User"("creditCard");
