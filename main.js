//Select element function
const selectElement = (element) => document.querySelector(element);

// select the menu icon
const menuToggler = selectElement(".menu__toggle");

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
// select the header
const header = document.querySelector("header");
let toggled;
const threshold = 200;

let currentScroll;
let previousScroll = window.scrollY;
let currentDirection = 0;
let previousDirection = 0;

// function checkScroll
const checkScroll = () => {
  currentScroll = window.scrollY;

  if (currentScroll > previousScroll) {
    // scrolled down
    currentDirection = 2;
  } else {
    //scrolled up
    currentDirection = 1;
  }
  if (currentDirection !== previousDirection) {
    toggled = toggleHeader();
  }
  previousScroll = currentScroll;
  if (toggled) {
    previousDirection = currentDirection;
  }
};
// function toggleHeader
const toggleHeader = () => {
  toggled = true;
  if (currentDirection === 2 && currentScroll > threshold) {
    header.classList.add("hide");
  } else if (currentDirection === 1) {
    header.classList.remove("hide");
  } else {
    toggled = false;
  }
  return toggled;
};

window.addEventListener("scroll", checkScroll);

// Run on Scroll
function runOnScroll() {
  const scrollPosition = window.scrollY;
  console.log({ scrollPosition });
  const header = document.querySelector("header");
  if (scrollPosition >= 200) {
    header.classList.add("active__header");
  } else {
    header.classList.remove("active__header");
  }
}
window.addEventListener("scroll", runOnScroll);
