/* ********** Menu ********** */

const btnMenu = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const body    = document.querySelector('.body');

btnMenu.addEventListener('click', ()=>{
  btnMenu.firstElementChild.classList.toggle("none");
  btnMenu.lastElementChild.classList.toggle("none");
  menu.classList.toggle("is-active");  
  body.classList.toggle("activado");
});

menu.addEventListener('click', ()=> {
  btnMenu.firstElementChild.classList.remove("none");
  btnMenu.lastElementChild.classList.add("none");
  menu.classList.remove("is-active"); 
  body.classList.remove("activado"); 
})




/* ********** Slider ************/
const slider = document.querySelector('#slider');
let sliderSection = document.querySelectorAll('.slider__section');
let sliderSectionLast = sliderSection[sliderSection.length-1];

const btnLeft = document.querySelector('#btn-left');
const btnRight = document.querySelector('#btn-right');


slider.insertAdjacentElement('afterbegin',sliderSectionLast);

// const Next = ()=> {
function Next(){

    let sliderSectionFirst = document.querySelectorAll('.slider__section')[0];
    slider.style.marginLeft =  '-200%';
    slider.style.transition = "all 0.5s";
    setTimeout(()=>{
        slider.style.transition= 'none';
        slider.insertAdjacentElement('beforeend',sliderSectionFirst);
        slider.style.marginLeft =  '-100%';
    },500);
}



// const Prev = () => {
function Prev(){
    let sliderSection = document.querySelectorAll('.slider__section');
    let sliderSectionLast = sliderSection[sliderSection.length-1];
    slider.style.marginLeft = '0';
    slider.style.transition = 'all 0.5s';
    setTimeout(()=>{
        slider.style.transition = 'none';
        slider.insertAdjacentElement('afterbegin',sliderSectionLast);
        slider.style.marginLeft =  '-100%';
    },500)
}

btnRight.addEventListener('click',()=>{
    Next();
});

btnLeft.addEventListener('click', ()=>{
    Prev();
})

setInterval(()=>{
    Next();
},5000);


/*********** LightBox **********/
/*Variables*/

const btnCierra = document.querySelector('#btn-cierra');
const btnAdelanta = document.querySelector('#btn-adelanta');
const btnRetrocede = document.querySelector('#btn-retrocede');
const imagenes = document.querySelectorAll('#gallery-container img');
const lightbox = document.querySelector('#main-container-lightbox');
const imagenActiva = document.querySelector('#img-activa');
let indiceImagen = 0;

/*Abre el Lightbox*/

const abreLightbox = (event) => {
  imagenActiva.src = event.target.src;
  lightbox.style.display = 'flex';
  indiceImagen = Array.from(imagenes).indexOf(event.target);
};

imagenes.forEach((imagen) => {
  imagen.addEventListener('click', abreLightbox);
});

/*Cierra el Lightbox */

btnCierra.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

/* Adelanta la imagen*/

const adelantaImagen = () => {
  if (indiceImagen === imagenes.length - 1) {
    indiceImagen = -1;
  }
  imagenActiva.src = imagenes[indiceImagen + 1].src;
  indiceImagen++;
};

btnAdelanta.addEventListener('click', adelantaImagen);

/*Retrocede la Imagen*/

const retrocederImagen = () => {
  if (indiceImagen === 0) {
    indiceImagen = imagenes.length;
  }
  imagenActiva.src = imagenes[indiceImagen - 1].src;
  indiceImagen--;
};

btnRetrocede.addEventListener('click', retrocederImagen);