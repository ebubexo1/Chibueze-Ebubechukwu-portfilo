const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export async function submitContactForm({ name, email, message }) {
  const res = await fetch(`${API_BASE}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, message }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Failed to send message.');
  return data;
}

export async function registerVisit() {
  try {
    const res = await fetch(`${API_BASE}/api/visits`, { method: 'POST' });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

export async function fetchProjects() {
  try {
    const res = await fetch(`${API_BASE}/api/projects`);
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}
