const cards = document.querySelectorAll(".card");
const btnNextList = document.querySelectorAll(".btn-next");

let currentCardIndex = 0;
btnNextList.forEach(btn => {
    btn.addEventListener("click", () => {
        cards[currentCardIndex].classList.remove("active");
        currentCardIndex ++;
        cards[currentCardIndex].classList.add("active");
    }); 
});

const btnNo = document.getElementById('btn-no');

// Fonction pour déplacer le bouton
function fuirBouton() {
    const card = document.querySelector('.card.active');

    const padding = 25;

    const maxX = card.clientWidth - btnNo.offsetWidth - padding;
    const maxY = card.clientHeight - btnNo.offsetHeight - padding;

    const randomX = Math.floor(
        Math.random() * (maxX - padding)
    ) + padding;

    const randomY = Math.floor(
        Math.random() * (maxY - padding)
    ) + padding;

    btnNo.style.left = `${randomX}px`;
    btnNo.style.top = `${randomY}px`;
}

// Sur ordinateur (souris)
btnNo.addEventListener('mouseover', fuirBouton);

// Sur téléphone (écran tactile)
btnNo.addEventListener('touchstart', (e) => {
  e.preventDefault(); // Empêche le clic effectif sur téléphone
  fuirBouton();
});

const btnYes = document.getElementById('btn-yes');
