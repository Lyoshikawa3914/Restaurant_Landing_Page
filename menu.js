const theBody = document.querySelector('body');

const sandwhiches = document.querySelector(".sandwiches");
const drinks = document.querySelector(".drinks");
const sides = document.querySelector(".sides");
const desserts = document.querySelector(".desserts");

const foodContainerTitle = document.querySelector(".foodContainerTitle");
const closeButton = document.querySelector(".close");

const theHamburgerButton = document.querySelector(".hamburger");

const foodContainer = document.querySelector(".foodContainer");

closeButton.addEventListener('click', function() {
    foodContainer.style.left = "-1000%";
    theBody.classList.toggle('isActive');
    theHamburgerButton.disabled = false;
})

sandwhiches.addEventListener('click', function() {
    console.log('sandwich');

    foodContainer.style.left =  '5%'
    foodContainerTitle.textContent = "Sandwiches";
    theBody.classList.toggle("isActive")
    theHamburgerButton.disabled = true;

});
drinks.addEventListener('click', function() {
    console.log('dranks');

    foodContainer.style.left =  '5%'
    foodContainerTitle.textContent = "Drinks";
    theBody.classList.toggle("isActive")
    theHamburgerButton.disabled = true;
});
sides.addEventListener('click', function() {
    console.log('sides');

    foodContainer.style.left =  '5%'
    foodContainerTitle.textContent = "Sides";
    theBody.classList.toggle("isActive")
    theHamburgerButton.disabled = true;
});
desserts.addEventListener('click', function() {
    console.log('desserts');

    foodContainer.style.left =  '5%'
    foodContainerTitle.textContent = "Desserts";
    theBody.classList.toggle("isActive")
    theHamburgerButton.disabled = true;
});