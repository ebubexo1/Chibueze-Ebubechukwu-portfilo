import { Router } from 'express';
import { Counter } from '../models/Counter.js';

const router = Router();

// POST /api/visits - increments and returns the visitor count
router.post('/', async (req, res) => {
  try {
    const counter = await Counter.findOneAndUpdate(
      { key: 'portfolio_visits' },
      { $inc: { count: 1 } },
      { upsert: true, new: true }
    );
    res.json({ count: counter.count });
  } catch (err) {
    console.error('Visit counter error:', err.message);
    res.status(500).json({ error: 'Could not update visitor count.' });
  }
});

// GET /api/visits - returns the current visitor count without incrementing
router.get('/', async (req, res) => {
  try {
    const counter = await Counter.findOne({ key: 'portfolio_visits' });
    res.json({ count: counter?.count || 0 });
  } catch (err) {
    console.error('Visit counter fetch error:', err.message);
    res.status(500).json({ error: 'Could not fetch visitor count.' });
  }
});

export default router;
