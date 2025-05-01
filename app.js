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

const pizzaImage = document.getElementById("pizzaImage");

pizzaImage.addEventListener("mouseover", function() {
  this.src = './BBQ Chicken Pizza.png'; 
});

pizzaImage.addEventListener("mouseout", function() {
  this.src = './Pepperoni Pizza.png';
});

const pizzaImage2 = document.querySelector('.pizza-3d');
let rotationSpeed = 6; 

document.querySelector('.order-now').addEventListener('click', function() {
    rotationSpeed = 3; 
    pizzaImage2.style.animation = `rotatePizza ${rotationSpeed}s infinite linear`;
});

document.querySelector('.contact-us').addEventListener('click', function() {
    rotationSpeed = 10; 
    pizzaImage.style.animation = `rotatePizza ${rotationSpeed}s infinite linear`;
});



function orderPizza() {
    const size = document.getElementById("pizzaSize").value;
    const crust = document.getElementById("pizzaCrust").value;
    const toppings = Array.from(document.querySelectorAll("input[type='checkbox']:checked"))
                         .map(el => el.value)
                         .join(", ") || "No Toppings";
    
    alert(`Your Pizza: ${size} Size, ${crust} Crust, Toppings: ${toppings}`);
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
} 

function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
}
