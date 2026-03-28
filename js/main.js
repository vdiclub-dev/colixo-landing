function calculEconomies() {
  let nb = parseFloat(document.getElementById('nbColis').value);
  let poids = parseFloat(document.getElementById('poids').value);
  let cout = parseFloat(document.getElementById('coutActuel').value);

  let facteur = 0.2; // défaut
  if(poids <= 2) facteur = 0.18;
  else if(poids <= 5) facteur = 0.20;
  else if(poids <= 10) facteur = 0.25;
  else facteur = 0.30;

  let economie = nb * cout * facteur;
  document.getElementById('resultat').innerText = `💰 Économie potentielle : ${economie.toFixed(2)} CHF / mois`;
}

// Animation au scroll
const cards = document.querySelectorAll('.card');
function revealCards() {
  const windowHeight = window.innerHeight;
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if(cardTop < windowHeight - 100) { card.classList.add('visible'); }
  });
}
window.addEventListener('scroll', revealCards);
window.addEventListener('load', revealCards);
