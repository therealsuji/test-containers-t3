import { migrateDb } from "drizzle.migrate";
import * as dotenv from "dotenv";

dotenv.config();

const connectionString = process.env.DATABASE_URL;

async function main() {
  if (!connectionString) {
    throw new Error("DATABASE_URL environment variable is not set");
  }
  await migrateDb(connectionString);
  process.exit(0);
}

void main();