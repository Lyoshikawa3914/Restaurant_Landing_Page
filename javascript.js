/**
 * These are the lines of the hamburger menu button
 */

const bar1 = document.querySelector('#bar1');
const bar2 = document.querySelector('#bar2');
const bar3 = document.querySelector('#bar3');

/**
 * These are the variables that store the parent containers
 * and the body tags
 */
const body = document.querySelector('body');
const navMenu = document.querySelector('.navContainer');
const heroContainer = document.querySelector('.heroContainer');
const menuContainer = document.querySelector('.menuContainer');
const footer = document.querySelector('footer');

/**
 * This is the hamburger menu button
 */
const menuButton = document.querySelector('.hamburger');


/**
 * These are the variables that hold the anchor tags that 
 * will take take users to the hero section or the menu section
 * when they click the buttons from the nav menu
 */
const heroAnchor = document.querySelector('#heroAnchor');
const menuAnchor = document.querySelector('#menuAnchor');

/**
 * These are the variables that contain the contents of the
 * signUP form and signIn form containers
 */
const signUpButton = document.querySelector('.signUp');
const signInButton = document.querySelector('.signIn');

const signUpButtonSide = document.querySelector('.signUpSide');
const signInButtonSide = document.querySelector('.signInSide');

const signUpCancelBtn = document.querySelector('.cancelButton');
const signUpSubmitBtn = document.querySelector('.submitButton');

const signUpFormContainer = document.querySelector('.signUpFormContainer');
const signInFormContainer = document.querySelector('.signInFormContainer');

const signUpForm = document.querySelector('.signUpForm');
const cancelSignUp = document.querySelector('.cancelButton');
const submitSignUp = document.querySelector('#submitSignUpButton');


/**
 * This is the event listener that will transform the hamburger
 * image into an 'X' when a user clicks it. The nav bar will appear when clicked.
 * When user clicks the 'X', the 'X' will transform back into a hamburger
 * The nav bar will disseaper
 */
menuButton.addEventListener('click', function() {
    console.log('hell')
    menuButton.classList.toggle('isActive');
    bar2.classList.toggle('isActive');
    bar3.classList.toggle('isActive');
    navMenu.classList.toggle('isActive');

    body.classList.toggle('isActive');
    heroContainer.classList.toggle('isActive');
    menuContainer.classList.toggle('isActive');
    footer.classList.toggle('isActive');

    if (signUpFormContainer.style.top == '4%') {
        signUpFormContainer.style.top = '-100%';
    };

    if (signInFormContainer.style.top == '4%') {
        signInFormContainer.style.top = '-100%';
    };
});

/**
 * This is the event listener that will transform the hamburger
 * image into an 'X' when a user clicks it. The nav bar will appear when clicked.
 * When user clicks the 'X', the 'X' will transform back into a hamburger
 * The nav bar will disseaper
 * 
 * The user will be take to the hero section when they click
 * the home button from the nav bar.
 */
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

/**
 * This is the event listener that will transform the hamburger
 * image into an 'X' when a user clicks it. The nav bar will appear when clicked.
 * When user clicks the 'X', the 'X' will transform back into a hamburger
 * The nav bar will disseaper
 * 
 * The user will be take to the menu section when they click
 * the menu button from the nav bar.
 */
menuAnchor.addEventListener('click', function(){
    console.log('he')
    navMenu.classList.toggle('isActive');
    menuButton.classList.toggle('isActive');
    bar2.classList.toggle('isActive');
    bar3.classList.toggle('isActive');
    
    body.classList.toggle('isActive');
    menuContainer.classList.toggle('isActive');
    heroContainer.classList.toggle('isActive');
    footer.classList.toggle('isActive');
});

/**
 * The signUpButton and signInButton both do the same thing
 * When a user clicks these buttons from the nav bar, a form will
 * appear.
 */
signUpButton.addEventListener('click', function() {
    console.log('click');
    signUpFormContainer.style.transition = '0.4s ease-in';
    signUpFormContainer.style.top = '4%';
});
signInButton.addEventListener('click', function() {
    signInFormContainer.style.transition = '0.4s ease-in';
    signInFormContainer.style.top = '4%';
});
signUpButtonSide.addEventListener('click', function() {
    console.log('click');
    signUpFormContainer.style.transition = '0.4s ease-in';
    signUpFormContainer.style.top = '4%';
});
signInButtonSide.addEventListener('click', function() {
    signInFormContainer.style.transition = '0.4s ease-in';
    signInFormContainer.style.top = '4%';
});

signUpForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const fName = document.querySelector('#fName');
    console.log(fName);
    const lName = document.querySelector('#lName');
    console.log(lName);
    const email = document.querySelector('#email');
    console.log(email);
    const password = document.querySelector('#password');
    console.log(password);
    const passwordAgain = document.querySelector('#passwordAgain');
    console.log(passwordAgain);

    if (password != passwordAgain) {
        alert('Please retype password');
    }
});

signUpCancelBtn.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('cancelClick');

    signUpFormContainer.style.top = '-100%';
});











