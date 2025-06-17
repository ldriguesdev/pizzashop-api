import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

const connection = postgres(
  "postgres://docker:docker@localhost:5432/pizza_shop",
);

export const db = drizzle(connection, { schema });
