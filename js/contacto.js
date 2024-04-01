window.onload = function(){
    var contenedor = document.getElementById('contenedor_carga');
    contenedor.style.visibility = 'hidden';
    contenedor.style.opacity = '0';
}



//animaciones
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
sr.reveal('.navbar', {
    duration: 3000,
    origin: 'left',
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
function entradaa(){
    document.getElementById("imagenesa").style.transition="all 2s";
    document.getElementById("imagenesa").style.transform="scale(1.1)";
    document.getElementById("imagenesa").style.filter="brightness(75%)";
    document.getElementById("imagenesa").src="/imagenes/ppantalon_hombre_espaldas.png"
}
function salidaa(){
    document.getElementById("imagenesa").style.transition="all 1s";
    document.getElementById("imagenesa").style.transform="scale(1.0)";
    document.getElementById("imagenesa").style.filter="brightness(100%)";
    document.getElementById("imagenesa").src="/imagenes/ppantalon_hombre_defrente.png"
}





function entradab(){
    document.getElementById("imagenesb").style.transition="all 2s";
    document.getElementById("imagenesb").style.transform="scale(1.1)";
    document.getElementById("imagenesb").style.filter="brightness(75%)";
    document.getElementById("imagenesb").src="/imagenes/ppantalon_hombre2_espaldas.png"
}
function salidab(){
    document.getElementById("imagenesb").style.transition="all 1s";
    document.getElementById("imagenesb").style.transform="scale(1.0)";
    document.getElementById("imagenesb").style.filter="brightness(100%)";
    document.getElementById("imagenesb").src="/imagenes/ppantalon_hombre2_defrente.png"
}



function entradac(){
    document.getElementById("imagenesc").style.transition="all 2s";
    document.getElementById("imagenesc").style.transform="scale(1.1)";
    document.getElementById("imagenesc").style.filter="brightness(75%)";
    document.getElementById("imagenesc").src="/imagenes/ppantalon_hombre3_espaldas.png"
}
function salidac(){
    document.getElementById("imagenesc").style.transition="all 1s";
    document.getElementById("imagenesc").style.transform="scale(1.0)";
    document.getElementById("imagenesc").style.filter="brightness(100%)";
    document.getElementById("imagenesc").src="/imagenes/ppantalon_hombre3_defrente.png"
}




function entradad(){
    document.getElementById("imagenesd").style.transition="all 2s";
    document.getElementById("imagenesd").style.transform="scale(1.1)";
    document.getElementById("imagenesd").style.filter="brightness(75%)";
    document.getElementById("imagenesd").src="/imagenes/ppantalon_hombre4_espaldas.png"
}
function salidad(){
    document.getElementById("imagenesd").style.transition="all 1s";
    document.getElementById("imagenesd").style.transform="scale(1.0)";
    document.getElementById("imagenesd").style.filter="brightness(100%)";
    document.getElementById("imagenesd").src="/imagenes/ppantalon_hombre4_defrente.png"
}




function entradae(){
    document.getElementById("imagenese").style.transition="all 2s";
    document.getElementById("imagenese").style.transform="scale(1.1)";
    document.getElementById("imagenese").style.filter="brightness(75%)";
    document.getElementById("imagenese").src="/imagenes/ppantalon_hombre5_espaldas.png"
}
function salidae(){
    document.getElementById("imagenese").style.transition="all 1s";
    document.getElementById("imagenese").style.transform="scale(1.0)";
    document.getElementById("imagenese").style.filter="brightness(100%)";
    document.getElementById("imagenese").src="/imagenes/ppantalon_hombre5_defrente.png"
}




function entradaf(){
    document.getElementById("imagenesf").style.transition="all 2s";
    document.getElementById("imagenesf").style.transform="scale(1.1)";
    document.getElementById("imagenesf").style.filter="brightness(75%)";
    document.getElementById("imagenesf").src="/imagenes/ppantalon_hombre6_espaldas.png"
}
function salidaf(){
    document.getElementById("imagenesf").style.transition="all 1s";
    document.getElementById("imagenesf").style.transform="scale(1.0)";
    document.getElementById("imagenesf").style.filter="brightness(100%)";
    document.getElementById("imagenesf").src="/imagenes/ppantalon_hombre6_defrente.png"
}




//polos
function entradag(){
    document.getElementById("imagenesg").style.transition="all 2s";
    document.getElementById("imagenesg").style.transform="scale(1.1)";
    document.getElementById("imagenesg").style.filter="brightness(75%)";
    document.getElementById("imagenesg").src="/imagenes/ppolo_hombre1_espaldas.png"
}
function salidag(){
    document.getElementById("imagenesg").style.transition="all 1s";
    document.getElementById("imagenesg").style.transform="scale(1.0)";
    document.getElementById("imagenesg").style.filter="brightness(100%)";
    document.getElementById("imagenesg").src="/imagenes/ppolo_hombre1_defrente.png"
}




function entradah(){
    document.getElementById("imagenesh").style.transition="all 2s";
    document.getElementById("imagenesh").style.transform="scale(1.1)";
    document.getElementById("imagenesh").style.filter="brightness(75%)";
    document.getElementById("imagenesh").src="/imagenes/ppolo_hombre2_espaldas.png"
}
function salidah(){
    document.getElementById("imagenesh").style.transition="all 1s";
    document.getElementById("imagenesh").style.transform="scale(1.0)";
    document.getElementById("imagenesh").style.filter="brightness(100%)";
    document.getElementById("imagenesh").src="/imagenes/ppolo_hombre2_defrente.png"
}




function entradai(){
    document.getElementById("imagenesi").style.transition="all 2s";
    document.getElementById("imagenesi").style.transform="scale(1.1)";
    document.getElementById("imagenesi").style.filter="brightness(75%)";
    document.getElementById("imagenesi").src="/imagenes/ppolo_hombre3_espaldas.png"
}
function salidai(){
    document.getElementById("imagenesi").style.transition="all 1s";
    document.getElementById("imagenesi").style.transform="scale(1.0)";
    document.getElementById("imagenesi").style.filter="brightness(100%)";
    document.getElementById("imagenesi").src="/imagenes/ppolo_hombre3_defrente.png"
}





function entradaj(){
    document.getElementById("imagenesj").style.transition="all 2s";
    document.getElementById("imagenesj").style.transform="scale(1.1)";
    document.getElementById("imagenesj").style.filter="brightness(75%)";
    document.getElementById("imagenesj").src="/imagenes/ppolo_hombre4_espaldas.png"
}
function salidaj(){
    document.getElementById("imagenesj").style.transition="all 1s";
    document.getElementById("imagenesj").style.transform="scale(1.0)";
    document.getElementById("imagenesj").style.filter="brightness(100%)";
    document.getElementById("imagenesj").src="/imagenes/ppolo_hombre4_defrente.png"
}




function entradak(){
    document.getElementById("imagenesk").style.transition="all 2s";
    document.getElementById("imagenesk").style.transform="scale(1.1)";
    document.getElementById("imagenesk").style.filter="brightness(75%)";
    document.getElementById("imagenesk").src="/imagenes/ppolo_hombre5_espaldas.png"
}
function salidak(){
    document.getElementById("imagenesk").style.transition="all 1s";
    document.getElementById("imagenesk").style.transform="scale(1.0)";
    document.getElementById("imagenesk").style.filter="brightness(100%)";
    document.getElementById("imagenesk").src="/imagenes/ppolo_hombre5_defrente.png"
}





function entradal(){
    document.getElementById("imagenesl").style.transition="all 2s";
    document.getElementById("imagenesl").style.transform="scale(1.1)";
    document.getElementById("imagenesl").style.filter="brightness(75%)";
    document.getElementById("imagenesl").src="/imagenes/ppolo_hombre6_espaldas.png"
}
function salidal(){
    document.getElementById("imagenesl").style.transition="all 1s";
    document.getElementById("imagenesl").style.transform="scale(1.0)";
    document.getElementById("imagenesl").style.filter="brightness(100%)";
    document.getElementById("imagenesl").src="/imagenes/ppolo_hombre6_defrente.png"
}







//zapatillas
function entradam(){
    document.getElementById("imagenesm").style.transition="all 2s";
    document.getElementById("imagenesm").style.transform="scale(1.1)";
    document.getElementById("imagenesm").style.filter="brightness(75%)";
    document.getElementById("imagenesm").src="/imagenes/zzapatillas_hombre1_espaldas.png"
}
function salidam(){
    document.getElementById("imagenesm").style.transition="all 1s";
    document.getElementById("imagenesm").style.transform="scale(1.0)";
    document.getElementById("imagenesm").style.filter="brightness(100%)";
    document.getElementById("imagenesm").src="/imagenes/zzapatillas_hombre1_defrente.png"
}



function entradan(){
    document.getElementById("imagenesn").style.transition="all 2s";
    document.getElementById("imagenesn").style.transform="scale(1.1)";
    document.getElementById("imagenesn").style.filter="brightness(75%)";
    document.getElementById("imagenesn").src="/imagenes/zzapatillas_hombre2_espaldas.png"
}
function salidan(){
    document.getElementById("imagenesn").style.transition="all 1s";
    document.getElementById("imagenesn").style.transform="scale(1.0)";
    document.getElementById("imagenesn").style.filter="brightness(100%)";
    document.getElementById("imagenesn").src="/imagenes/zzapatillas_hombre2_defrente.png"
}



function entradañ(){
    document.getElementById("imagenesñ").style.transition="all 2s";
    document.getElementById("imagenesñ").style.transform="scale(1.1)";
    document.getElementById("imagenesñ").style.filter="brightness(75%)";
    document.getElementById("imagenesñ").src="/imagenes/zzapatillas_hombre3_espaldas.png"
}
function salidañ(){
    document.getElementById("imagenesñ").style.transition="all 1s";
    document.getElementById("imagenesñ").style.transform="scale(1.0)";
    document.getElementById("imagenesñ").style.filter="brightness(100%)";
    document.getElementById("imagenesñ").src="/imagenes/zzapatillas_hombre3_defrente.png"
}



function entradao(){
    document.getElementById("imageneso").style.transition="all 2s";
    document.getElementById("imageneso").style.transform="scale(1.1)";
    document.getElementById("imageneso").style.filter="brightness(75%)";
    document.getElementById("imageneso").src="/imagenes/zzapatillas_hombre4_espaldas.png"
}
function salidao(){
    document.getElementById("imageneso").style.transition="all 1s";
    document.getElementById("imageneso").style.transform="scale(1.0)";
    document.getElementById("imageneso").style.filter="brightness(100%)";
    document.getElementById("imageneso").src="/imagenes/zzapatillas_hombre4_defrente.png"
}



function entradap(){
    document.getElementById("imagenesp").style.transition="all 2s";
    document.getElementById("imagenesp").style.transform="scale(1.1)";
    document.getElementById("imagenesp").style.filter="brightness(75%)";
    document.getElementById("imagenesp").src="/imagenes/zzapatillas_hombre5_espaldas.png"
}
function salidap(){
    document.getElementById("imagenesp").style.transition="all 1s";
    document.getElementById("imagenesp").style.transform="scale(1.0)";
    document.getElementById("imagenesp").style.filter="brightness(100%)";
    document.getElementById("imagenesp").src="/imagenes/zzapatillas_hombre5_defrente.png"
}













//abrigos
function entradaq(){
    document.getElementById("imagenesq").style.transition="all 2s";
    document.getElementById("imagenesq").style.transform="scale(1.1)";
    document.getElementById("imagenesq").style.filter="brightness(75%)";
    document.getElementById("imagenesq").src="/imagenes/aabrigo_hombre1_espaldas.png"
}
function salidaq(){
    document.getElementById("imagenesq").style.transition="all 1s";
    document.getElementById("imagenesq").style.transform="scale(1.0)";
    document.getElementById("imagenesq").style.filter="brightness(100%)";
    document.getElementById("imagenesq").src="/imagenes/aabrigo_hombre1_defrente.png"
}




function entradar(){
    document.getElementById("imagenesr").style.transition="all 2s";
    document.getElementById("imagenesr").style.transform="scale(1.1)";
    document.getElementById("imagenesr").style.filter="brightness(75%)";
    document.getElementById("imagenesr").src="/imagenes/aabrigo_hombre2_espaldas.png"
}
function salidar(){
    document.getElementById("imagenesr").style.transition="all 1s";
    document.getElementById("imagenesr").style.transform="scale(1.0)";
    document.getElementById("imagenesr").style.filter="brightness(100%)";
    document.getElementById("imagenesr").src="/imagenes/aabrigo_hombre2_defrente.png"
}




function entradas(){
    document.getElementById("imageness").style.transition="all 2s";
    document.getElementById("imageness").style.transform="scale(1.1)";
    document.getElementById("imageness").style.filter="brightness(75%)";
    document.getElementById("imageness").src="/imagenes/aabrigo_hombre3_espaldas.png"
}
function salidas(){
    document.getElementById("imageness").style.transition="all 1s";
    document.getElementById("imageness").style.transform="scale(1.0)";
    document.getElementById("imageness").style.filter="brightness(100%)";
    document.getElementById("imageness").src="/imagenes/aabrigo_hombre3_defrente.png"
}





function entradat(){
    document.getElementById("imagenest").style.transition="all 2s";
    document.getElementById("imagenest").style.transform="scale(1.1)";
    document.getElementById("imagenest").style.filter="brightness(75%)";
    document.getElementById("imagenest").src="/imagenes/aabrigo_hombre4_espaldas.png"
}
function salidat(){
    document.getElementById("imagenest").style.transition="all 1s";
    document.getElementById("imagenest").style.transform="scale(1.0)";
    document.getElementById("imagenest").style.filter="brightness(100%)";
    document.getElementById("imagenest").src="/imagenes/aabrigo_hombre4_defrente.png"
}





function entradau(){
    document.getElementById("imagenesu").style.transition="all 2s";
    document.getElementById("imagenesu").style.transform="scale(1.1)";
    document.getElementById("imagenesu").style.filter="brightness(75%)";
    document.getElementById("imagenesu").src="/imagenes/aabrigo_hombre5_espaldas.png"
}
function salidau(){
    document.getElementById("imagenesu").style.transition="all 1s";
    document.getElementById("imagenesu").style.transform="scale(1.0)";
    document.getElementById("imagenesu").style.filter="brightness(100%)";
    document.getElementById("imagenesu").src="/imagenes/aabrigo_hombre5_derfrente.png"
}





function entradav(){
    document.getElementById("imagenesv").style.transition="all 2s";
    document.getElementById("imagenesv").style.transform="scale(1.1)";
    document.getElementById("imagenesv").style.filter="brightness(75%)";
    document.getElementById("imagenesv").src="/imagenes/aabrigo_hombre6_espaldas.png"
}
function salidav(){
    document.getElementById("imagenesv").style.transition="all 1s";
    document.getElementById("imagenesv").style.transform="scale(1.0)";
    document.getElementById("imagenesv").style.filter="brightness(100%)";
    document.getElementById("imagenesv").src="/imagenes/aabrigo_hombre6_defrente.png"
}