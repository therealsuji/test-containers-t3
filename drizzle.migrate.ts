import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import { exit } from "process";
import postgres from "postgres";

import * as dotenv from "dotenv";

dotenv.config();

const migrateDb = async () => {
  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    throw new Error("DATABASE_URL environment variable is not set");
  }

  const sql = postgres(connectionString, { max: 1 });
  const db = drizzle(sql);
  await migrate(db, { migrationsFolder: "drizzle" });

  console.info("Migrations are successfully applied");

  exit(0);
};

void migrateDb();