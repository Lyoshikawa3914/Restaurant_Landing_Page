const sandwhiches = document.querySelector(".sandwiches");
const drinks = document.querySelector(".drinks");
const sides = document.querySelector(".sides");
const desserts = document.querySelector(".desserts");
const foodContainerTitle = document.querySelector(".foodContainerTitle");
const closeButton = document.querySelector(".close");

const foodContainer = document.querySelector(".foodContainer");

closeButton.addEventListener('click', function() {
    foodContainer.style.left = "-1000%";
})

sandwhiches.addEventListener('click', function() {
    console.log('sandwich');

    foodContainer.style.left =  '5%'
    foodContainerTitle.textContent = "Sandwiches";
});
drinks.addEventListener('click', function() {
    console.log('dranks');

    foodContainer.style.left =  '5%'
    foodContainerTitle.textContent = "Drinks";
});
sides.addEventListener('click', function() {
    console.log('sides');

    foodContainer.style.left =  '5%'
    foodContainerTitle.textContent = "Sides";
});
desserts.addEventListener('click', function() {
    console.log('desserts');

    foodContainer.style.left =  '5%'
    foodContainerTitle.textContent = "Desserts";
});