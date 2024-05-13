import { beforeAll, describe, expect, test } from "vitest";
import { PostgreSqlContainer } from "@testcontainers/postgresql";
import { type Db, createDrizzle } from "@/server/db";
import { posts } from "@/server/db/schema";
import { migrateDb } from "drizzle.migrate";

describe("Post", () => {
  let postgresContainer;
  let drizzleClient: Db;

  beforeAll(async () => {
    postgresContainer = await new PostgreSqlContainer().start();
    drizzleClient = createDrizzle(postgresContainer.getConnectionUri());
    await migrateDb(postgresContainer.getConnectionUri());
  });

  test("create post successfully", async () => {
    const [post] = await drizzleClient
      .insert(posts)
      .values({
        name: "Hello, world!",
      })
      .returning();

    expect(post).toMatchObject({
      name: "Hello, world!",
    });
  });
});
