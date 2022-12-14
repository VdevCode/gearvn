const buttonGrid = document.querySelector('#menu')
const showGridMenu = document.querySelector('.menu__header')

buttonGrid.addEventListener('click', function () {

    buttonGrid.classList.toggle('bxs-message-alt-x')
    if(buttonGrid.classList.contains('bxs-message-alt-x')){
        showGridMenu.classList.toggle('active')
    }else{
        showGridMenu.classList.remove('active')
    }
})
//darkmode
const openDarkmode = document.querySelector('#darkmode')
openDarkmode.addEventListener('click',function(){
    openDarkmode.classList.toggle('bxs-moon')
    if(openDarkmode.classList.contains('bxs-moon')){
        document.body.classList.toggle('active')
    }
    else{
        document.body.classList.remove('active')
    }
})

const slideHeaderMenu = document.querySelector(".header");

const slideHeaderVisibility = () => {
    if (window.scrollY > 800) {
        slideHeaderMenu.style.visibility = "hidden";
    } 
    else{
        slideHeaderMenu.style.visibility = "visible";
    }
};

document.addEventListener("scroll", () => {
    slideHeaderVisibility();
});

//scroll top
const scrollBtn = document.querySelector(".btn");

const btnVisibility = () => {
    if (window.scrollY > 400) {
        scrollBtn.style.visibility = "visible";
    } else {
        scrollBtn.style.visibility = "hidden";
    }
};

document.addEventListener("scroll", () => {
    btnVisibility();
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});