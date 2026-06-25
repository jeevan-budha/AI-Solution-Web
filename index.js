const express = require('express');
require('dotenv').config();
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.use('/Img', express.static(path.join(__dirname, 'Img')));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// ═══════════════════════════════════════
// PAGES
// ═══════════════════════════════════════
app.get('/', (req, res) => res.render('index'));
app.get('/admin', (req, res) => res.render('admin'));

// ═══════════════════════════════════════
// CHAT API — hides GROQ_API_KEY from browser
// ═══════════════════════════════════════
app.post('/api/chat', async (req, res) => {
  try {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'messages array is required' });
    }

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: messages,
        max_tokens: 600,
        temperature: 0.7,
        stream: false
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: data?.error?.message || 'Groq API error' });
    }

    res.json(data);

  } catch (err) {
    console.error('Chat API error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// ═══════════════════════════════════════
// START SERVER
// ═══════════════════════════════════════
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;