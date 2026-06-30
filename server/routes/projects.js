import { Router } from 'express';
import { Project } from '../models/Project.js';

const router = Router();

// GET /api/projects - list all projects, ordered
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find().sort({ order: 1, createdAt: -1 });
    res.json(projects);
  } catch (err) {
    console.error('Projects fetch error:', err.message);
    res.status(500).json({ error: 'Could not fetch projects.' });
  }
});

export default router;
