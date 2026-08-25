/* =========================================
   GALERÍAS
========================================= */

const galleries = [

    /* =====================================
       PROYECTO 1 — ARTE 2D
    ====================================== */

    {
        title: "TÍTULO",

        images: [

            "imagenes/Arte 2D/Personaje_Y_EscenarioBlancoYNegro.jpg",
            "imagenes/Arte 2D/Personaje_Y_EscenarioDefinitivo.jpg",
            "imagenes/Arte 2D/Personaje_Y_EscenarioColor1.jpg",
            "imagenes/Arte 2D/Personaje_Y_EscenarioColor2.jpg",
            "imagenes/Arte 2D/Siuetas.jpg",
            "imagenes/Arte 2D/TURNAROUND1.jpg",
            "imagenes/Arte 2D/TURNAROUND2.jpg",
            "imagenes/Arte 2D/TURNAROUND3(armas).jpg",
            "imagenes/Arte 2D/Expresiones.jpg",
            "imagenes/Arte 2D/Thumbnails Jesús Mercado Rioja.jpg",
            "imagenes/Arte 2D/Concept art escenario a color Jesus Mercado Rioja.jpg",
            "imagenes/Arte 2D/Callouts Jesús Mercado Rioja.jpg"

        ]
    },


    /* =====================================
       PROYECTO 2 — ROCK MOLE
    ====================================== */

    {
        title: "TÍTULO",

        images: [

            "imagenes/Arte 2D/RockMole/Topo color 1.PNG",
            "imagenes/Arte 2D/RockMole/Turnaround topo.PNG",
            "imagenes/Arte 2D/RockMole/Indumentaria cambiada.PNG",
            "imagenes/Arte 2D/RockMole/Objetos_personaje.png",
            "imagenes/Arte 2D/RockMole/Turnaround cascos.PNG",
            "imagenes/Arte 2D/RockMole/Expresiones topo.PNG",

            "imagenes/Arte 2D/RockMole/Versión color definitiva.PNG",
            "imagenes/Arte 2D/RockMole/Turnaround golem grande.PNG",
            "imagenes/Arte 2D/RockMole/Expresiones golem.PNG",

            "imagenes/Arte 2D/RockMole/Turnaround conejo barril.PNG",
            "imagenes/Arte 2D/RockMole/Turnaround planta carnivora.PNG",

            "imagenes/Arte 2D/RockMole/Turnaround_vagon.PNG",
            "imagenes/Arte 2D/RockMole/Turnaround_cajas.PNG",
            "imagenes/Arte 2D/RockMole/Turnaround_barril.png",
            "imagenes/Arte 2D/RockMole/Turnaround picos.PNG",
            "imagenes/Arte 2D/RockMole/Turnaround cofre.PNG",
            "imagenes/Arte 2D/RockMole/Turnaround farol.PNG",
            "imagenes/Arte 2D/RockMole/Turnaround pala.PNG",
            "imagenes/Arte 2D/RockMole/Turnaround jaula.PNG",

            "imagenes/Arte 2D/RockMole/Aldea.PNG",
            "imagenes/Arte 2D/RockMole/Herrería.PNG",
            "imagenes/Arte 2D/RockMole/Tienda ropa.PNG",
            "imagenes/Arte 2D/RockMole/Mina.PNG"

        ]
    },


    /* =====================================
       PROYECTO 3 — ARTE 2D
    ====================================== */

    {
        title: "TÍTULO",

        images: [

            "images/2d/proyecto3/portada.jpg"

        ]
    }

];


let currentGallery = 0;
let currentImage = 0;


/* =========================================
   ABRIR GALERÍA
========================================= */

function openGallery(galleryIndex) {

    currentGallery = galleryIndex;

    currentImage = 0;

    updateGallery();

    const gallery =
        document.getElementById("gallery");

    gallery.classList.add("active");

    document.body.style.overflow = "hidden";
}


/* =========================================
   CERRAR GALERÍA
========================================= */

function closeGallery() {

    const gallery =
        document.getElementById("gallery");

    gallery.classList.remove("active");

    document.body.style.overflow = "";
}


/* =========================================
   ACTUALIZAR GALERÍA
========================================= */

function updateGallery() {

    const gallery =
        galleries[currentGallery];

    const imageElement =
        document.getElementById("gallery-image");

    const titleElement =
        document.getElementById("gallery-title");

    const counterElement =
        document.getElementById("gallery-counter");


    /*
        TÍTULO
    */

    titleElement.textContent =
        gallery.title;


    /*
        COMPROBAR IMÁGENES
    */

    if (
        !gallery.images ||
        gallery.images.length === 0
    ) {

        imageElement.style.display = "none";

        counterElement.textContent =
            "SIN IMÁGENES";

        return;
    }


    /*
        MOSTRAR IMAGEN
    */

    imageElement.style.display = "block";

    imageElement.src =
        gallery.images[currentImage];


    /*
        IMPORTANTE:
        El carrusel siempre muestra
        la imagen completa.
    */

    imageElement.style.objectFit =
        "contain";

    imageElement.style.objectPosition =
        "center center";


    /*
        CONTADOR
    */

    counterElement.textContent =
        `${currentImage + 1} / ${gallery.images.length}`;
}


/* =========================================
   SIGUIENTE IMAGEN
========================================= */

function nextImage() {

    const gallery =
        galleries[currentGallery];


    if (
        !gallery.images ||
        gallery.images.length === 0
    ) {

        return;
    }


    currentImage++;


    if (
        currentImage >=
        gallery.images.length
    ) {

        currentImage = 0;
    }


    updateGallery();
}


/* =========================================
   IMAGEN ANTERIOR
========================================= */

function previousImage() {

    const gallery =
        galleries[currentGallery];


    if (
        !gallery.images ||
        gallery.images.length === 0
    ) {

        return;
    }


    currentImage--;


    if (currentImage < 0) {

        currentImage =
            gallery.images.length - 1;
    }


    updateGallery();
}


/* =========================================
   TECLADO
========================================= */

document.addEventListener(
    "keydown",
    function(event) {

        const gallery =
            document.getElementById("gallery");


        if (
            !gallery.classList.contains("active")
        ) {

            return;
        }


        if (
            event.key === "ArrowRight"
        ) {

            nextImage();
        }


        if (
            event.key === "ArrowLeft"
        ) {

            previousImage();
        }


        if (
            event.key === "Escape"
        ) {

            closeGallery();
        }

    }
);


/* =========================================
   CERRAR AL HACER CLICK FUERA
========================================= */

const galleryElement =
    document.getElementById("gallery");


galleryElement.addEventListener(
    "click",
    function(event) {

        /*
            Si pulsamos la imagen,
            NO cerramos.
        */

        if (
            event.target.closest("#gallery-image")
        ) {

            return;
        }


        /*
            Si pulsamos un botón,
            NO cerramos.
        */

        if (
            event.target.closest("button")
        ) {

            return;
        }


        /*
            Cualquier otra zona del
            carrusel cierra la galería.

            Por ejemplo:
            - fondo negro
            - zona alrededor de la imagen
            - contador
            - título
        */

        closeGallery();

    }
);


/* =========================================
   MENSAJE
========================================= */

console.log(
    "Portfolio cargado correctamente."
);
