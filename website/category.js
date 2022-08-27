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


const slideChangeImageMenu = document.querySelector(".meanu__header-list--img")
const listImageMenu = ['https://theme.hstatic.net/1000026716/1000440777/14/slideshow_4.jpg?v=28134', 'https://theme.hstatic.net/1000026716/1000440777/14/slideshow_15.jpg?v=28134', 'https://theme.hstatic.net/1000026716/1000440777/14/slideshow_2.jpg?v=28134', 'https://theme.hstatic.net/1000026716/1000440777/14/slideshow_5.jpg?v=28134', 'https://theme.hstatic.net/1000026716/1000440777/14/slideshow_9.jpg?v=28134', 'https://theme.hstatic.net/1000026716/1000440777/14/slideshow_12.jpg?v=28134', 'https://theme.hstatic.net/1000026716/1000440777/14/slideshow_1.jpg?v=28134']

setInterval(function () {
    var randomImageMenu = Math.floor(Math.random() * 7)
    slideChangeImageMenu.src = listImageMenu[randomImageMenu]
}, 2000)

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