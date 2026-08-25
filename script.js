/* =========================================
   GALERÍAS
========================================= */


/*
    Cada objeto representa un proyecto.

    Dentro de "images" ponemos todas las
    imágenes que queremos mostrar en el
    carrusel de ese proyecto.
*/

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
            "imagenes/Arte 2D/Callouts Jesús Mercado Rioja.jpg",

            /*
                AÑADE AQUÍ LAS DEMÁS IMÁGENES
                DEL PROYECTO 1.

                Ejemplo:

                "imagenes/Arte 2D/imagen2.jpg",
                "imagenes/Arte 2D/imagen3.jpg",
                "imagenes/Arte 2D/imagen4.jpg"
            */

        ]
    },


    /* =====================================
       PROYECTO 2 — ARTE 2D
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
            "imagenes/Arte 2D/RockMole/Turnaround_barril.PNG",
            "imagenes/Arte 2D/RockMole/Turnaround picos.PNG",
            "imagenes/Arte 2D/RockMole/Turnaround cofre.PNG",
            "imagenes/Arte 2D/RockMole/Turnaround farol.PNG",
            "imagenes/Arte 2D/RockMole/Turnaround pala.PNG",
            "imagenes/Arte 2D/RockMole/Turnaround jaula.PNG",

            "imagenes/Arte 2D/RockMole/Aldea.PNG",
            "imagenes/Arte 2D/RockMole/Herrería.PNG",
            "imagenes/Arte 2D/RockMole/Tienda ropa.PNG",
            "imagenes/Arte 2D/RockMole/Mina.PNG",
 
            /*
                AÑADE AQUÍ LAS DEMÁS IMÁGENES
                DEL PROYECTO 2.
            */

        ]
    },


    /* =====================================
       PROYECTO 3 — ARTE 2D
    ====================================== */

    {
        title: "TÍTULO",

        images: [

            "images/2d/proyecto3/portada.jpg",

            /*
                AÑADE AQUÍ LAS DEMÁS IMÁGENES
                DEL PROYECTO 3.
            */

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

    /*
        Evitamos que la página principal
        pueda hacer scroll mientras el
        carrusel está abierto.
    */

    document.body.style.overflow = "hidden";
}


/* =========================================
   CERRAR GALERÍA
========================================= */

function closeGallery() {

    const gallery =
        document.getElementById("gallery");

    gallery.classList.remove("active");

    /*
        Devolvemos el scroll a la página.
    */

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
        Actualizamos el título.
    */

    titleElement.textContent =
        gallery.title;


    /*
        COMPROBAMOS SI HAY IMÁGENES
    */

    if (
        !gallery.images ||
        gallery.images.length === 0
    ) {

        /*
            No hay imágenes todavía.
        */

        imageElement.style.display = "none";

        counterElement.textContent =
            "SIN IMÁGENES";

        return;
    }


    /*
        Si hay imágenes,
        mostramos la imagen actual.
    */

    imageElement.style.display = "block";

    imageElement.src =
        gallery.images[currentImage];


    /*
        Contador.

        Ejemplo:

        1 / 5
        2 / 5
        3 / 5
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


    /*
        Si el proyecto no tiene imágenes,
        no hacemos nada.
    */

    if (
        !gallery.images ||
        gallery.images.length === 0
    ) {

        return;
    }


    currentImage++;


    /*
        Si llegamos al final,
        volvemos a la primera imagen.
    */

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


    /*
        Si el proyecto no tiene imágenes,
        no hacemos nada.
    */

    if (
        !gallery.images ||
        gallery.images.length === 0
    ) {

        return;
    }


    currentImage--;


    /*
        Si estamos en la primera imagen
        y pulsamos atrás,
        vamos a la última.
    */

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


        /*
            Si el carrusel no está abierto,
            ignoramos las teclas.
        */

        if (
            !gallery.classList.contains("active")
        ) {

            return;
        }


        /*
            FLECHA DERECHA
        */

        if (
            event.key === "ArrowRight"
        ) {

            nextImage();
        }


        /*
            FLECHA IZQUIERDA
        */

        if (
            event.key === "ArrowLeft"
        ) {

            previousImage();
        }


        /*
            ESCAPE
        */

        if (
            event.key === "Escape"
        ) {

            closeGallery();
        }

    }
);


/* =========================================
   CERRAR AL HACER CLICK FUERA DE LA IMAGEN
========================================= */

const galleryElement =
    document.getElementById("gallery");


galleryElement.addEventListener(
    "click",
    function(event) {

        /*
            Elementos que NO deben cerrar
            el carrusel:
            
            - La imagen
            - Las flechas
            - El botón X
            - El contenido del carrusel
        */

        const clickedImage =
            event.target.closest("#gallery-image");

        const clickedButton =
            event.target.closest("button");

        const clickedContent =
            event.target.closest(".gallery-content");


        /*
            Si hemos pulsado la imagen
            no hacemos nada.
        */

        if (clickedImage) {
            return;
        }


        /*
            Si hemos pulsado cualquier botón
            tampoco cerramos.
        */

        if (clickedButton) {
            return;
        }


        /*
            Si hemos pulsado cualquier parte
            del contenido del carrusel que no
            sea la imagen, TAMBIÉN cerramos.

            Esto incluye el título y contador.
        */

        closeGallery();

    }
);


/* =========================================
   MENSAJE DE COMPROBACIÓN
========================================= */

console.log(
    "Portfolio cargado correctamente."
);
