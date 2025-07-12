import { PrismaClient } from "@prisma/trend-snap";

const globalForPrisma = globalThis as unknown as {
  prismaTrendSnap: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prismaTrendSnap ??
  new PrismaClient({
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prismaTrendSnap = prisma;
}

export default prisma;
