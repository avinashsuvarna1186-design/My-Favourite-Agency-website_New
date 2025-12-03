import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertLeadSchema, insertCaseStudySchema } from "@shared/schema";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

function requireAdmin(req: Request, res: Response, next: NextFunction) {
  if (req.session?.isAdmin) {
    next();
  } else {
    res.status(401).json({ error: "Unauthorized - Admin access required" });
  }
}

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/admin/login", async (req, res) => {
    try {
      const { password } = req.body;
      
      if (!ADMIN_PASSWORD) {
        console.error("ADMIN_PASSWORD environment variable not set");
        return res.status(500).json({ success: false, error: "Admin not configured" });
      }
      
      if (password === ADMIN_PASSWORD) {
        req.session.isAdmin = true;
        res.json({ success: true });
      } else {
        res.status(401).json({ success: false, error: "Invalid password" });
      }
    } catch (error) {
      res.status(500).json({ success: false, error: "Login failed" });
    }
  });

  app.post("/api/admin/logout", (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        res.status(500).json({ success: false, error: "Logout failed" });
      } else {
        res.json({ success: true });
      }
    });
  });

  app.get("/api/admin/status", (req, res) => {
    res.json({ isAuthenticated: !!req.session?.isAdmin });
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

  app.get("/api/inquiries", requireAdmin, async (req, res) => {
    try {
      const leads = await storage.getAllLeads();
      res.json(leads);
    } catch (error) {
      res.status(500).json({
        error: error instanceof Error ? error.message : "Failed to fetch inquiries",
      });
    }
  });

  // Case Studies API (public read, admin write)
  app.get("/api/case-studies", async (req, res) => {
    try {
      const caseStudies = await storage.getAllCaseStudies();
      res.json(caseStudies);
    } catch (error) {
      res.status(500).json({
        error: error instanceof Error ? error.message : "Failed to fetch case studies",
      });
    }
  });

  app.get("/api/case-studies/:id", async (req, res) => {
    try {
      const caseStudy = await storage.getCaseStudyById(req.params.id);
      if (!caseStudy) {
        return res.status(404).json({ error: "Case study not found" });
      }
      res.json(caseStudy);
    } catch (error) {
      res.status(500).json({
        error: error instanceof Error ? error.message : "Failed to fetch case study",
      });
    }
  });

  app.post("/api/case-studies", requireAdmin, async (req, res) => {
    try {
      const validatedData = insertCaseStudySchema.parse(req.body);
      const caseStudy = await storage.createCaseStudy(validatedData);
      res.json({ success: true, caseStudy });
    } catch (error) {
      res.status(400).json({
        success: false,
        error: error instanceof Error ? error.message : "Failed to create case study",
      });
    }
  });

  app.put("/api/case-studies/:id", requireAdmin, async (req, res) => {
    try {
      const caseStudy = await storage.updateCaseStudy(req.params.id, req.body);
      if (!caseStudy) {
        return res.status(404).json({ error: "Case study not found" });
      }
      res.json({ success: true, caseStudy });
    } catch (error) {
      res.status(400).json({
        success: false,
        error: error instanceof Error ? error.message : "Failed to update case study",
      });
    }
  });

  app.delete("/api/case-studies/:id", requireAdmin, async (req, res) => {
    try {
      const deleted = await storage.deleteCaseStudy(req.params.id);
      if (!deleted) {
        return res.status(404).json({ error: "Case study not found" });
      }
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: error instanceof Error ? error.message : "Failed to delete case study",
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
