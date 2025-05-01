function toggleMode() {
    const body = document.body;
    const button = document.querySelector('.toggle-btn');
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        button.textContent = "🌞"; 
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        button.textContent = "🌙"; 
    }
}
function toggleMenu() {
    const navbar = document.querySelector('nav');
    navbar.classList.toggle('active');
}
const hamburger = document.querySelector('.hamburger');

if (hamburger) {
    hamburger.addEventListener('click', toggleMenu);
}

gsap.from(".title", { opacity: 0, y: -50, duration: 1 });
gsap.from(".description", { opacity: 0, x: -50, duration: 1, delay: 0.5 });
gsap.from(".pizza-img", { opacity: 0, scale: 0.8, duration: 1, delay: 1 });

const toggleButton = document.getElementById("toggleMode");

toggleButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

const ingredientCards = document.querySelectorAll('.ingredient-card');
ingredientCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`;
});


function toggleMode() {
    document.body.classList.toggle("dark-mode");
}
