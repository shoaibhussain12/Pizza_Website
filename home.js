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


function toggleMode() {
    document.body.classList.toggle("dark-mode");
}
