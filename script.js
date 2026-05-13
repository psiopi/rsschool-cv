//1й вариант - на 4ре нажатия кнопки

const BTN_LEFT = document.querySelector('#btn-left');
const BTN_RIGHT = document.querySelector('#btn-right');

const slidesContainer = document.querySelector('#slider-container');
const pieceOfMove = (slidesContainer.scrollWidth - slidesContainer.offsetWidth) / 4;
console.log(`${pieceOfMove}`);

let i = 0;

//дезактивация кнопок
function disableButton () {
    BTN_LEFT.disabled = (i===0);
    BTN_RIGHT.disabled = (i===4);
}
disableButton();

BTN_LEFT.addEventListener('click', () => {
    if (i>0) {
        i--;
        slidesContainer.style.transform = `translateX(-${pieceOfMove * i}px)`;
    };
    disableButton();
});

BTN_RIGHT.addEventListener('click', () => {
    //slides.classList.add('transition-right');
    if (i<4) {
        i++;
        slidesContainer.style.transform = `translateX(-${pieceOfMove * i}px)`;
    };
    disableButton();
});


/*  2й послайдовый вариант

const slides = document.querySelector('.slides');
const btnLeft = document.querySelector('#btn-left');
const btnRight = document.querySelector('#btn-right');

let index = 4;

console.log('bforeright');
const sliderWrapper = document.querySelector('.slider__place')
const allSlides = document.querySelectorAll('.slide');
const slidesContainer = document.querySelector('#slider-container');

const wrapperWidth = sliderWrapper.offsetWidth;

//дезактивация кнопок
function updateButtons() {
    btnLeft.disabled = (index === 4);
    btnRight.disabled = (index === allSlides.length - 1);
}
updateButtons()

//нажатие на кнопку
btnLeft.addEventListener('click', () => {
    
    if (index < allSlides.length) {
        index--;
    }

    const slide = allSlides[index];

    const slideWidth = slide.offsetWidth;
    const slideOffsetLeft = slide.offsetLeft;

    const finalOffset = slideOffsetLeft - wrapperWidth;

    const transformValue = finalOffset > 0 ? -finalOffset: 0;
    console.log(`${transformValue}`);
    slidesContainer.style.transform = `translateX(${transformValue}px)`;

    updateButtons();
    console.log(`index ${index}`);
});

btnRight.addEventListener('click', () => {
    
    if (index < allSlides.length) {
        index++;
    }

    const slide = allSlides[index];
   
    const slideWidth = slide.offsetWidth;
    const slideOffsetLeft = slide.offsetLeft;

    const finalOffset = slideOffsetLeft - (wrapperWidth - slideWidth);

    const transformValue = finalOffset > 0 ? -finalOffset: 0;

    console.log(`${transformValue}`);
    slidesContainer.style.transform = `translateX(${transformValue - 20}px)`;

    updateButtons();
    console.log(`index ${index}`);
});

*/