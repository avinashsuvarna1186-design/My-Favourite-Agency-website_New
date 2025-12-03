import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, jsonb, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const caseStudies = pgTable("case_studies", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  slug: text("slug").notNull().unique(),
  client: text("client").notNull(),
  tagline: text("tagline").notNull(),
  clientName: text("client_name").notNull(),
  clientRole: text("client_role").notNull(),
  service: text("service").notNull(),
  impact: text("impact").notNull(),
  challenges: jsonb("challenges").notNull().$type<{title: string; description: string}[]>(),
  approach: jsonb("approach").notNull().$type<{title: string; description: string}[]>(),
  images: jsonb("images").notNull().$type<{src: string; alt: string; category: string}[]>(),
  resultsMetrics: jsonb("results_metrics").notNull().$type<{value: string; label: string; color?: string}[]>(),
  resultsDescription: text("results_description").notNull(),
  testimonialQuote: text("testimonial_quote").notNull(),
  testimonialAuthor: text("testimonial_author").notNull(),
  testimonialRole: text("testimonial_role").notNull(),
  displayOrder: integer("display_order").default(0),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const leads = pgTable("leads", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  company: text("company"),
  serviceType: text("service_type").notNull(),
  budget: text("budget").notNull(),
  timeline: text("timeline").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertLeadSchema = createInsertSchema(leads).omit({
  id: true,
  createdAt: true,
});

export const insertCaseStudySchema = createInsertSchema(caseStudies).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertLead = z.infer<typeof insertLeadSchema>;
export type Lead = typeof leads.$inferSelect;
export type InsertCaseStudy = z.infer<typeof insertCaseStudySchema>;
export type CaseStudy = typeof caseStudies.$inferSelect;
