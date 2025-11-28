import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertLeadSchema } from "@shared/schema";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "mfa2024admin";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/admin/verify", async (req, res) => {
    try {
      const { password } = req.body;
      
      if (password === ADMIN_PASSWORD) {
        res.json({ success: true });
      } else {
        res.status(401).json({ success: false, error: "Invalid password" });
      }
    } catch (error) {
      res.status(500).json({ success: false, error: "Verification failed" });
    }
  });

  app.post("/api/inquiries", async (req, res) => {
    try {
      const validatedData = insertLeadSchema.parse(req.body);
      const lead = await storage.createLead(validatedData);
      
      res.json({
        success: true,
        leadId: lead.id,
        message: "Thank you for your inquiry! We'll review your details and get back to you within 24 hours.",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        error: error instanceof Error ? error.message : "Failed to submit inquiry",
      });
    }
  });

  app.get("/api/inquiries", async (req, res) => {
    try {
      const leads = await storage.getAllLeads();
      res.json(leads);
    } catch (error) {
      res.status(500).json({
        error: error instanceof Error ? error.message : "Failed to fetch inquiries",
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
