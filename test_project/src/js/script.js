'use strict';
window.onload = function() {

    //Burger 
document.getElementsByClassName('navbar__burger')[0].addEventListener('click', function() {
    document.querySelector('.navbar__burger').classList.toggle('active');
    document.querySelector('.menu').classList.toggle('active');
})


}
