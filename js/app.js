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

const btnPW = document.querySelector("button.wysoki");
const btnPS = document.querySelector("button.sredni");
const btnPN = document.querySelector("button.niski");
const okPW = document.querySelector("div.pol.wys");
const okPS = document.querySelector("div.pol.sre");
const okPN = document.querySelector("div.pol.nis");
const btnZ = document.querySelector("button.zamek");
const btnZ1 = document.querySelector("button.zamek1");
const btnZ2 = document.querySelector("button.zamek2");

btnPW.addEventListener('click', function () {
    okPW.classList.add('activ');
    okPW.classList.remove('wys');
})
btnPS.addEventListener('click', function () {
    okPS.classList.add('activ');
    okPS.classList.remove('sre');
})
btnPN.addEventListener('click', function () {
    okPN.classList.add('activ');
    okPN.classList.remove('nis');
})


btnZ.addEventListener('click', function () {
    okPW.classList.add('wys');
    okPW.classList.remove('activ');
})
btnZ1.addEventListener('click', function () {
    okPS.classList.add('sre');
    okPS.classList.remove('activ');
})
btnZ2.addEventListener('click', function () {
    okPN.classList.add('nis');
    okPN.classList.remove('activ');
})