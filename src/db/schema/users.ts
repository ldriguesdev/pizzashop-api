import { createId } from "@paralleldrive/cuid2";
import { pgTable, text, pgEnum, timestamp } from "drizzle-orm/pg-core";

export const userRoleEnum = pgEnum('user_role', ['manager', 'customer'])

export const users = pgTable("users", {
  id: text("id").$defaultFn(() => createId()).primaryKey(),
  name: text("name").notNull(), 
  email: text("email").notNull().unique(),
  phone: text("phone"),
  role: userRoleEnum('role').default('customer').notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
