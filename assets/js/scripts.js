//Evento Icono menu mostrar ocultar
const menuIcon = document.getElementById('icon_menu');
const closeIcon = document.getElementById('icon_close');
const navList = document.getElementById('nav');

function Mostrar(){
    navList.classList.toggle('nav-toggle');
    closeIcon.classList.remove('icon__none')
    menuIcon.classList.toggle('icon__none');
}

function Ocultar(){
    navList.classList.remove('nav-toggle');
    closeIcon.classList.toggle('icon__none');
    menuIcon.classList.remove('icon__none');
}

menuIcon.addEventListener('click', Mostrar);
closeIcon.addEventListener('click', Ocultar);

//Evento Sub menu lista desplegar y ocultar(en desktop)
const subList = document.getElementById('subList');
const subMenu = document.getElementById('subMenu');
const iconRotate = document.getElementById('icon_rotate')

function mostrarSubMenu(){
    subMenu.classList.toggle('subMenu__d-block');
    iconRotate.classList.toggle('rotate_down');
}

function ocultarSubMenu(){
    subMenu.classList.remove('subMenu__d-block');
    iconRotate.classList.remove('rotate_down');
}

subList.addEventListener('click',mostrarSubMenu)
subMenu.addEventListener('click',ocultarSubMenu);