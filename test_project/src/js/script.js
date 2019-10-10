'use strict';
window.onload = function() {

    //Burger 
document.getElementsByClassName('navbar__burger')[0].addEventListener('click', function() {
    document.querySelector('.navbar__burger').classList.toggle('active');
    document.querySelector('.menu').classList.toggle('active');
})


// Search EVENT Target
// document.getElementsByClassName('navbar')[0].addEventListener('click', function(event) {
//     let target = event.target;
//     console.log(target.className);
//     if (target.className === 'navbar__search') {
//         document.getElementsByClassName('navbar__search')[0].classList.toggle('hide');
//         document.getElementsByClassName('navbar__field')[0].classList.toggle('hide');
//     } else if (target.className === 'navbar__field') {
//         document.getElementsByClassName('navbar__search')[0].classList.toggle('hide');
//         document.getElementsByClassName('navbar__field')[0].classList.toggle('hide');
//     }
// })
document.getElementsByClassName('navbar__search')[0].addEventListener('click', function() {
    document.getElementsByClassName('navbar__search')[0].classList.toggle('hide');
    document.getElementsByClassName('navbar__field')[0].classList.toggle('hide');
})

document.getElementsByClassName('navbar__input')[0].addEventListener('blur', function() {
    document.getElementsByClassName('navbar__search')[0].classList.toggle('hide');
    document.getElementsByClassName('navbar__field')[0].classList.toggle('hide');
})

document.querySelector('.sing-in').addEventListener('click', function(event) {
    let target = event.target;
    console.log(target.className);
    addModalActive ()
    
    
})

document.querySelector('.close').addEventListener('click', function(event) {
    let target = event.target;
    console.log(target.className);
    removeModalActive ()
    document.querySelector('.navbar__burger').classList.toggle('active');
    document.querySelector('.menu').classList.toggle('active');
    
})


function addModalActive () {
    document.querySelector('.modal').classList.add('modal--active');
}

function removeModalActive () {
    document.querySelector('.modal').classList.remove('modal--active');
}

}//end