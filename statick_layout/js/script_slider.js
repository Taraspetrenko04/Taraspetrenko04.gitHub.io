$(document).ready(function () {
    $('.your-class').slick({
        asNavFor: '.your-class-two',
        slidesToShow: 3,
        centerMode: true,
        focusOnSelect: true,
        draggable: true,
        focusOnSelect: true,
        infinite: true,
    })
    $('.your-class-two').slick({
        arrows: false,
        asNavFor: '.your-class',
        fade: true,
    })
})
