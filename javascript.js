const bar1 = document.querySelector('#bar1');
const bar2 = document.querySelector('#bar2');
const bar3 = document.querySelector('#bar3');
// bar3.style.cssText = 'transform: translate(0, -300%) rotate(45deg)';
// bar1.style.cssText = 'transform: translate(0, 300%) rotate(135deg)';
// bar2.style.cssText = 'visibility: hidden';

const menuButton = document.querySelector('.hamburger');

menuButton.addEventListener('click', function() {
    menuButton.classList.toggle('isActive');
    bar2.classList.toggle('isActive');
    bar3.classList.toggle('isActive');
});









