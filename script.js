// раскрывающ меню в header
let blocks = document.querySelectorAll('.services__blocks__overpic')

document.querySelector('.header__menu__burger').addEventListener('click', function(e){
    e.preventDefault();
    if(this.classList.contains('is-active')){
        this.classList.remove('is-active');
            document.querySelector('.header__menu__nav').classList.remove('header__menu__nav-active');
            document.querySelector('.wrapper').classList.remove('wrapper-active');
            document.querySelector('.header__menu__burger').classList.remove('header__menu__burger-active');
            document.querySelector('.services__blocks').classList.remove('services__blocks-active');


    }else{
            this.classList.add('is-active');
            document.querySelector('.header__menu__nav').classList.add('header__menu__nav-active');
            document.querySelector('.wrapper').classList.add('wrapper-active');
            document.querySelector('.header__menu__burger').classList.add('header__menu__burger-active');
            document.querySelector('.services__blocks').classList.add('services__blocks-active');
        }
})


//slider team
var gallery = document.querySelectorAll('.gallery');
    var btnsG = document.querySelectorAll('.btnG');
    var currentSlideG = 1;

    // Javascript for image slider manual navigation
    var manualNav = function(manual){
      gallery.forEach(function(gallery){
       gallery.classList.remove('active');

        btnsG.forEach(function(btnG){
          btnG.classList.remove('active');
        });
      });

      gallery[manual].classList.add('active');
      btnsG[manual].classList.add('active');
    }

    btnsG.forEach(function(btnG, i){
      btnG.addEventListener("click", function(){
        manualNav(i);
        currentSlideG = i;
      });
    });

//Код для popup 'featured works'

let img = document.querySelectorAll('.feat_works__pic');
let popupBlock = document.querySelectorAll('.feat_works__pic_popup');
let imagePopup = document.querySelectorAll('.feat_works__pic_popup_invisible');
let filterData = "";


function close() {
    popupBlock.style.opacity = 0;
    popupBlock.style.zIndex = -1;
}

for (let i = 0; i < img.length; i++) {
    img[i].onclick = function () {
        filterData = this.getAttribute("data-filter");

        for (let a = 0; a < popupBlock.length; a++) {
            let img_filter = imagePopup[a].getAttribute('data-filter');
            if (img_filter == filterData) {
                popupBlock[a].style.opacity = 1;
                popupBlock[a].style.zIndex = 5;
            }
        }
    }
}

for (let i = 0; i < popupBlock.length; i++) {
    popupBlock[i].addEventListener("click", function close() {
        popupBlock[i].style.opacity = 0;
        popupBlock[i].style.zIndex = -1;
    });
}


// hover для services

let arrowserv = document.querySelectorAll('.services__blocks__pic__text__ref');
let servcards = document.querySelectorAll('.services__blocks__overpic__card');
let crosspopup = document.querySelectorAll('.services__blocks_popup__cross');


for (let i = 0; i < arrowserv.length; i++) {
    arrowserv[i].onclick = function () {
        servcards[i].classList.add('flipped');
    }
}

for (let i = 0; i < crosspopup.length; i++) {
    crosspopup[i].onclick = function () {
        servcards[i].classList.remove('flipped');
    }
}



//Код для slider opacity feedback one

let buttons = document.querySelectorAll('.feedback__slider__dot');
let picsfeed = document.querySelectorAll('.feedback__slider__pic');
let filterSelectedDataFeed = "";


for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        filterSelectedDataFeed = this.getAttribute("data-filter");//получаем значение аттрибута нажатой кнопки        

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('dots__dot_active');
        }
        this.classList.add('dots__dot_active');

        for (let a = 0; a < picsfeed.length; a++) {//цикл проходится по всем блокам с картинками
            let div_filter = picsfeed[a].getAttribute('data-filter');
            if (div_filter == filterSelectedDataFeed) {
                picsfeed[a].style.transition = '0.5s linear';
                picsfeed[a].style.opacity = '1';
            } else {
                picsfeed[a].style.transition = '0.5s linear';
                picsfeed[a].style.opacity = '0';//скрываем все картинки

            }
        }
    }
}



// Код для slider opacity feedback two

let blocksfeed = document.querySelectorAll('.feedback__slider__text');
let current = 0;
let buttonForth = document.querySelector('.feedback__slider__button_two');
let buttonBack = document.querySelector('.feedback__slider__button_one');

function slider() {
    for (let i = 0; i < blocksfeed.length; i++) {
        blocksfeed[i].classList.add('opacity0');
    }
    blocksfeed[current].classList.remove('opacity0');
}

slider();

buttonForth.onclick = function () {

    if (current + 1 == blocksfeed.length) {
        current = 0;
    } else {
        current++;
    }
    slider();
}

buttonBack.onclick = function () {
    if (current - 1 == -1) {   //такого допускать нельзя
        current = blocksfeed.length - 1;
    } else {
        current--;
    }
    slider();
}

document.querySelector('.feedback__slider_two').onclick = slider;

let but = document.querySelector('.form__blocks_one__button').offsetHeight;
console.log(but);

let six = document.querySelector('.services__blocks__overpic__card_six').offsetWidth;
console.log(six);