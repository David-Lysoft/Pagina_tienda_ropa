window.onload = function(){
    var contenedor = document.getElementById('contenedor_carga');
    contenedor.style.visibility = 'hidden';
    contenedor.style.opacity = '0';
}




window.onload = function(){
    var contenedor = document.getElementById('contenedor_carga');
    contenedor.style.visibility = 'hidden';
    contenedor.style.opacity = '0';
}



//animaciones


window.sr = ScrollReveal();
sr.reveal('.navbar', {
    duration: 3000,
    origin: 'left',
    distance: '-100px'
});


window.sr = ScrollReveal();
sr.reveal('.animacion', {
    duration: 3000,
    origin: 'bottom',
    distance: '-100px'
});

window.sr = ScrollReveal();
sr.reveal('.animacion1', {
    duration: 3000,
    origin: 'top',
    distance: '-100px'
});

window.sr = ScrollReveal();
sr.reveal('.derecha', {
    duration: 3000,
    origin: 'right',
    distance: '-100px'
});

window.sr = ScrollReveal();
sr.reveal('.promo1', {
    duration: 3000,
    origin: 'right',
    distance: '-100px'
});

///////////////////////// logos
window.sr = ScrollReveal();
sr.reveal('#logo', {
    duration: 3000,
    origin: 'right',
    distance: '-100px'
});

window.sr = ScrollReveal();
sr.reveal('#logo2', {
    duration: 3000,
    origin: 'top',
    distance: '-100px'
});

window.sr = ScrollReveal();
sr.reveal('#logo3', {
    duration: 3000,
    origin: 'bottom',
    distance: '-100px'
});

window.sr = ScrollReveal();
sr.reveal('#logo4', {
    duration: 3000,
    origin: 'left',
    distance: '-100px'
});

window.sr = ScrollReveal();
sr.reveal('#baner_hombre', {
    duration: 3000,
    origin: 'top',
    distance: '-100px'
});


window.sr = ScrollReveal();
sr.reveal('#info', {
    duration: 3000,
    origin: 'bottom',
    distance: '-100px'
});


window.sr = ScrollReveal();
sr.reveal('#contact', {
    duration: 3000,
    origin: 'top',
    distance: '-100px'
});

window.sr = ScrollReveal();
sr.reveal('.footer', {
    duration: 3000,
    origin: 'top',
    distance: '-100px'
});



// para el seleccionado de las imagenes 
function entrada(){
    document.getElementById("imagenes").style.transition="all 2s";
    document.getElementById("imagenes").style.transform="scale(1.1)";
    document.getElementById("imagenes").style.filter="brightness(75%)";
    document.getElementById("imagenes").src="/imagenes/pantalon_espaldas.png"
}
function salida(){
    document.getElementById("imagenes").style.transition="all 1s";
    document.getElementById("imagenes").style.transform="scale(1.0)";
    document.getElementById("imagenes").style.filter="brightness(100%)";
    document.getElementById("imagenes").src="/imagenes/pantalon_defrente.png"
}





function entrada2(){
    document.getElementById("imagenes2").style.transition="all 2s";
    document.getElementById("imagenes2").style.transform="scale(1.1)";
    document.getElementById("imagenes2").style.filter="brightness(75%)";
    document.getElementById("imagenes2").src="/imagenes/polo_espaldas.png"
}
function salida2(){
    document.getElementById("imagenes2").style.transition="all 1s";
    document.getElementById("imagenes2").style.transform="scale(1.0)";
    document.getElementById("imagenes2").style.filter="brightness(100%)";
    document.getElementById("imagenes2").src="/imagenes/polo_defrente.png"
}



function entrada3(){
    document.getElementById("imagenes3").style.transition="all 2s";
    document.getElementById("imagenes3").style.transform="scale(1.1)";
    document.getElementById("imagenes3").style.filter="brightness(75%)";
    document.getElementById("imagenes3").src="/imagenes/abrigo_espaldas.png"
}
function salida3(){
    document.getElementById("imagenes3").style.transition="all 1s";
    document.getElementById("imagenes3").style.transform="scale(1.0)";
    document.getElementById("imagenes3").style.filter="brightness(100%)";
    document.getElementById("imagenes3").src="/imagenes/abrigo_defrentre.png"
}


//////////////////

function entrada4(){
    document.getElementById("imagenes4").style.transition="all 2s";
    document.getElementById("imagenes4").style.transform="scale(1.1)";
    document.getElementById("imagenes4").style.filter="brightness(75%)";
    document.getElementById("imagenes4").src="/imagenes/mujer_pantalon_espaldas.png"
}
function salida4(){
    document.getElementById("imagenes4").style.transition="all 1s";
    document.getElementById("imagenes4").style.transform="scale(1.0)";
    document.getElementById("imagenes4").style.filter="brightness(100%)";
    document.getElementById("imagenes4").src="/imagenes/mujer_pantalon_defrente.png"
}




function entrada5(){
    document.getElementById("imagenes5").style.transition="all 2s";
    document.getElementById("imagenes5").style.transform="scale(1.1)";
    document.getElementById("imagenes5").style.filter="brightness(75%)";
    document.getElementById("imagenes5").src="/imagenes/mujer_polo_espaldas-png.png"
}
function salida5(){
    document.getElementById("imagenes5").style.transition="all 1s";
    document.getElementById("imagenes5").style.transform="scale(1.0)";
    document.getElementById("imagenes5").style.filter="brightness(100%)";
    document.getElementById("imagenes5").src="/imagenes/mujer_polo_defrente.png"
}




function entrada6(){
    document.getElementById("imagenes6").style.transition="all 2s";
    document.getElementById("imagenes6").style.transform="scale(1.1)";
    document.getElementById("imagenes6").style.filter="brightness(75%)";
    document.getElementById("imagenes6").src="/imagenes/mujer_abrigo_esplada.png"
}
function salida6(){
    document.getElementById("imagenes6").style.transition="all 1s";
    document.getElementById("imagenes6").style.transform="scale(1.0)";
    document.getElementById("imagenes6").style.filter="brightness(100%)";
    document.getElementById("imagenes6").src="/imagenes/mujer_Abrigo_defrente.png"
}



