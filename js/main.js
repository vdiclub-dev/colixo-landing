// Simulateur d’économie
function calculEconomies() {
  let nb = parseFloat(document.getElementById('nbColis').value);
  let poids = parseFloat(document.getElementById('poids').value);
  let cout = parseFloat(document.getElementById('coutActuel').value);

  // Calcul simple : coût actuel * nb colis * 20% d’économie possible
  let economie = nb * cout * 0.2;

  document.getElementById('resultat').innerText = `💰 Économie potentielle : ${economie.toFixed(2)} CHF / mois`;
}

// Animation des cards au scroll
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
