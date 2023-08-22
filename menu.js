const sandwhiches = document.querySelector(".sandwiches");

const foodContainer = document.querySelector(".foodContainer");

sandwhiches.addEventListener('click', function() {
    console.log('sandwich');

    foodContainer.style.left =  '0%'
});