import { Router } from 'express';
import { Message } from '../models/Message.js';

const router = Router();

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// POST /api/contact - submit a contact form message
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are all required.' });
    }
    if (!EMAIL_RE.test(email)) {
      return res.status(400).json({ error: 'Please provide a valid email address.' });
    }
    if (name.length > 100 || message.length > 5000) {
      return res.status(400).json({ error: 'Name or message is too long.' });
    }

    const saved = await Message.create({ name: name.trim(), email: email.trim(), message: message.trim() });

    res.status(201).json({ success: true, id: saved._id });
  } catch (err) {
    console.error('Contact submit error:', err.message);
    res.status(500).json({ error: 'Something went wrong. Please try again later.' });
  }
});

export default router;
