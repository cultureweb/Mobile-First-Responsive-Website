//Select element function
const selectElement = (element) => document.querySelector(element);

// select the menu icon
const menuToggler = selectElement(".menu__toggle");
console.log({ menuToggler });

// select body
const body = selectElement("body");

// Add event listener
menuToggler.addEventListener("click", () => {
  body.classList.toggle("open");
});

// select all links inside of nav element
let navigationLinks = document.querySelectorAll("nav a");

// Add event listener for each links
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", () => {
    body.classList.toggle("open");
  });
}
