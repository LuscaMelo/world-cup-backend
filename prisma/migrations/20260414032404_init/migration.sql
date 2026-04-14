-- CreateTable
CREATE TABLE "Player" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "banner" TEXT NOT NULL,
    "heightCm" INTEGER,
    "weightKg" INTEGER,
    "dominantFoot" TEXT,
    "pace" INTEGER,
    "shooting" INTEGER,
    "passing" INTEGER,
    "dribbling" INTEGER,
    "defense" INTEGER,
    "physical" INTEGER,
    "acceleration" INTEGER,
    "sprintSpeed" INTEGER,
    "positioning" INTEGER,
    "finishing" INTEGER,
    "shotPower" INTEGER,
    "longShots" INTEGER,
    "volleys" INTEGER,
    "penalties" INTEGER,
    "vision" INTEGER,
    "crossing" INTEGER,
    "freeKickAccuracy" INTEGER,
    "shortPassing" INTEGER,
    "longPassing" INTEGER,
    "curve" INTEGER,
    "agility" INTEGER,
    "balance" INTEGER,
    "reactions" INTEGER,
    "ballControl" INTEGER,
    "composure" INTEGER,
    "interceptions" INTEGER,
    "headingAccuracy" INTEGER,
    "defensiveAwareness" INTEGER,
    "standingTackle" INTEGER,
    "slidingTackle" INTEGER,
    "jumping" INTEGER,
    "stamina" INTEGER,
    "strength" INTEGER,
    "aggression" INTEGER,
    "overallRating" INTEGER,
    "positionRating" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "teamId" TEXT NOT NULL,

    CONSTRAINT "Player_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Country" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Country_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Group" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "letter" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Group_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Team" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "continent" TEXT NOT NULL,
    "isFeatured" BOOLEAN NOT NULL DEFAULT false,
    "thumbnail" TEXT NOT NULL,
    "banner" TEXT NOT NULL,
    "flag" TEXT NOT NULL,
    "fifaRanking" INTEGER,
    "fifaPoints" DOUBLE PRECISION,
    "titlesRank" INTEGER,
    "worldCupAppearances" INTEGER,
    "worldCupFinals" INTEGER,
    "worldCupTitles" INTEGER,
    "matches" INTEGER,
    "wins" INTEGER,
    "draws" INTEGER,
    "losses" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Stadium" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "locate" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL,
    "openedYear" INTEGER NOT NULL,
    "coverImage" TEXT NOT NULL,
    "countryId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Stadium_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GalleryImage" (
    "id" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "GalleryImage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Group_letter_key" ON "Group"("letter");

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Stadium" ADD CONSTRAINT "Stadium_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
