import express from 'express';
const app = express();
app.use(express.json());
app.use(express.static('public'));

const BREVO_API_KEY = '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';

app.post('/send', async (req, res) => {
  const data = req.body;

  try {
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY
      },
      body: JSON.stringify(data)
    });

    const json = await response.json();
    res.json({ message: 'Contact envoyé avec succès !', brevo: json });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erreur lors de l’envoi à Brevo.' });
  }
});

app.listen(3000, () => console.log('Serveur démarré sur http://localhost:3000'));
