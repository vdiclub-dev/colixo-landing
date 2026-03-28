document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Veuillez remplir tous les champs.');
        return;
    }

    const payload = {
        sender: { name: name, email: email },
        to: [{ email: "ton-email@exemple.com" }], // 🔹 Remplace par ton email de réception
        subject: "Nouveau message depuis le formulaire",
        htmlContent: `<p><strong>Nom :</strong> ${name}</p>
                      <p><strong>Email :</strong> ${email}</p>
                      <p><strong>Message :</strong> ${message}</p>`
    };

    try {
        const response = await fetch('https://api.brevo.com/v3/smtp/email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'api-key': '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'
            },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            document.getElementById('successMsg').style.display = 'block';
            document.getElementById('errorMsg').style.display = 'none';
            document.getElementById('contactForm').reset();
        } else {
            throw new Error('Erreur API');
        }
    } catch (error) {
        console.error(error);
        document.getElementById('errorMsg').style.display = 'block';
        document.getElementById('successMsg').style.display = 'none';
    }
});
