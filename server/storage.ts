import { users, leads, caseStudies, type User, type InsertUser, type Lead, type InsertLead, type CaseStudy, type InsertCaseStudy } from "@shared/schema";
import { db } from "./db";
import { eq, desc, asc } from "drizzle-orm";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createLead(lead: InsertLead): Promise<Lead>;
  getAllLeads(): Promise<Lead[]>;
  getLeadById(id: string): Promise<Lead | undefined>;
  createCaseStudy(caseStudy: InsertCaseStudy): Promise<CaseStudy>;
  getAllCaseStudies(): Promise<CaseStudy[]>;
  getCaseStudyById(id: string): Promise<CaseStudy | undefined>;
  getCaseStudyBySlug(slug: string): Promise<CaseStudy | undefined>;
  updateCaseStudy(id: string, caseStudy: Partial<InsertCaseStudy>): Promise<CaseStudy | undefined>;
  deleteCaseStudy(id: string): Promise<boolean>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async createLead(insertLead: InsertLead): Promise<Lead> {
    const [lead] = await db
      .insert(leads)
      .values(insertLead)
      .returning();
    return lead;
  }

  async getAllLeads(): Promise<Lead[]> {
    return await db.select().from(leads).orderBy(desc(leads.createdAt));
  }

  async getLeadById(id: string): Promise<Lead | undefined> {
    const [lead] = await db.select().from(leads).where(eq(leads.id, id));
    return lead || undefined;
  }

  async createCaseStudy(insertCaseStudy: InsertCaseStudy): Promise<CaseStudy> {
    const [caseStudy] = await db
      .insert(caseStudies)
      .values(insertCaseStudy as any)
      .returning();
    return caseStudy;
  }

  async getAllCaseStudies(): Promise<CaseStudy[]> {
    return await db.select().from(caseStudies).orderBy(asc(caseStudies.displayOrder));
  }

  async getCaseStudyById(id: string): Promise<CaseStudy | undefined> {
    const [caseStudy] = await db.select().from(caseStudies).where(eq(caseStudies.id, id));
    return caseStudy || undefined;
  }

  async getCaseStudyBySlug(slug: string): Promise<CaseStudy | undefined> {
    const [caseStudy] = await db.select().from(caseStudies).where(eq(caseStudies.slug, slug));
    return caseStudy || undefined;
  }

  async updateCaseStudy(id: string, updateData: Partial<InsertCaseStudy>): Promise<CaseStudy | undefined> {
    const [caseStudy] = await db
      .update(caseStudies)
      .set({ ...updateData, updatedAt: new Date() } as any)
      .where(eq(caseStudies.id, id))
      .returning();
    return caseStudy || undefined;
  }

  async deleteCaseStudy(id: string): Promise<boolean> {
    const result = await db.delete(caseStudies).where(eq(caseStudies.id, id)).returning();
    return result.length > 0;
  }
}

export const storage = new DatabaseStorage();
