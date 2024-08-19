-- CreateTable
CREATE TABLE "doadores" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "nascimento" TIMESTAMP(3) NOT NULL,
    "infoiapes" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "doadores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "doacoes" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "doadorId" INTEGER,

    CONSTRAINT "doacoes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "doadores_email_key" ON "doadores"("email");

-- AddForeignKey
ALTER TABLE "doacoes" ADD CONSTRAINT "doacoes_doadorId_fkey" FOREIGN KEY ("doadorId") REFERENCES "doadores"("id") ON DELETE SET NULL ON UPDATE CASCADE;
