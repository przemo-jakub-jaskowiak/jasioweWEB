const burger = document.querySelector(".burger");

const iconBurger = document.querySelector(".fa-bars");
const iconX = document.querySelector(".fa-times");
const column = document.querySelector("aside");

burger.addEventListener("click", function () {
    iconBurger.classList.toggle("show"); //tak
    iconX.classList.toggle("show"); //nie
    column.classList.toggle("show"); //nie

})

const arrow = document.querySelector('.arrow')



arrow.addEventListener('click', function () {
    window.scrollTo(5, 5)
})

// document.querySelector('body button').addEventListener("click", function () {
//     document.querySelector('.modal-wrap').classList.add('active');
//     document.querySelector('body').classList.add('blur')
// })


// document.querySelector('span.hide').addEventListener("click", function () {
//     document.querySelector('.modal-wrap').classList.remove('active');
//     document.querySelector('body').classList.remove('blur')
// })