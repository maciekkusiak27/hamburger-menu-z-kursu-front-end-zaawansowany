const arrow = document.querySelector('.arrow');
const burger = document.querySelector('nav');
console.log(arrow);

arrow.addEventListener('click', function(){
    console.log('działa')
    burger.classList.toggle('on');
    arrow.classList.toggle('on');
})