CREATE TABLE IF NOT EXISTS "test-containers-t3_post" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updatedAt" timestamp with time zone
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "name_idx" ON "test-containers-t3_post" ("name");