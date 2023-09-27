let slider = document.getElementById('paraiso-photos');
let leftArrow = document.querySelector('.slider-arrow.left');
let rightArrow = document.querySelector('.slider-arrow.right');

leftArrow.addEventListener('click', function() {
    slider.scrollLeft -= 250;
});

rightArrow.addEventListener('click', function() {
    slider.scrollLeft += 250;
});