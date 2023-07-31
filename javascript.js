const bar1 = document.querySelector('#bar1');
const bar2 = document.querySelector('#bar2');
const bar3 = document.querySelector('#bar3');

const body = document.querySelector('body');
const navMenu = document.querySelector('.navContainer');
const heroContainer = document.querySelector('.heroContainer');
const menuContainer = document.querySelector('.menuContainer');
const footer = document.querySelector('footer');

const menuButton = document.querySelector('.hamburger');

menuButton.addEventListener('click', function() {
    menuButton.classList.toggle('isActive');
    bar2.classList.toggle('isActive');
    bar3.classList.toggle('isActive');
    navMenu.classList.toggle('isActive');

    body.classList.toggle('isActive');
    heroContainer.classList.toggle('isActive');
    menuContainer.classList.toggle('isActive');
    footer.classList.toggle('isActive');
});


const heroAnchor = document.querySelector('#heroAnchor');
const menuAnchor = document.querySelector('#menuAnchor');

heroAnchor.addEventListener('click', function(){
    navMenu.classList.toggle('isActive');
    menuButton.classList.toggle('isActive');
    bar2.classList.toggle('isActive');
    bar3.classList.toggle('isActive');
    
    heroContainer.classList.toggle('isActive');
    menuContainer.classList.toggle('isActive');

    body.classList.toggle('isActive');
    footer.classList.toggle('isActive');
});

menuAnchor.addEventListener('click', function(){
    navMenu.classList.toggle('isActive');
    menuButton.classList.toggle('isActive');
    bar2.classList.toggle('isActive');
    bar3.classList.toggle('isActive');
    
    body.classList.toggle('isActive');
    menuContainer.classList.toggle('isActive');
    heroContainer.classList.toggle('isActive');
    footer.classList.toggle('isActive');

});











