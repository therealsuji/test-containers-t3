import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

export const migrateDb = async (url: string) => {
  if (!url) {
    throw new Error("url is empty");
  }
  const sql = postgres(url, { max: 1 });
  const db = drizzle(sql);
  await migrate(db, { migrationsFolder: "drizzle" });
  console.info("Migrations are successfully applied");
};
