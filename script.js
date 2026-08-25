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

            "Imagenes/Arte2 D/Personaje_Y_EscenarioBlancoYNegro.jpg",

            /*
                AÑADE AQUÍ LAS DEMÁS IMÁGENES
                DEL PROYECTO 1.

                Ejemplo:

                "Imagenes/Arte2 D/imagen2.jpg",
                "Imagenes/Arte2 D/imagen3.jpg",
                "Imagenes/Arte2 D/imagen4.jpg"
            */

        ]
    },


    /* =====================================
       PROYECTO 2 — ARTE 2D
    ====================================== */

    {
        title: "TÍTULO",

        images: [

            "images/2d/proyecto2/portada.jpg",

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
        Evitamos que el usuario pueda hacer
        scroll por la página mientras la galería
        está abierta.
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

    document.body.style.overflow = "";
}


/* =========================================
   ACTUALIZAR GALERÍA
========================================= */

function updateGallery() {

    const gallery =
        galleries[currentGallery];


    const image =
        gallery.images[currentImage];


    /*
        Cambiamos la imagen.
    */

    document
        .getElementById("gallery-image")
        .src = image;


    /*
        Cambiamos el título.
    */

    document
        .getElementById("gallery-title")
        .textContent =
            gallery.title;


    /*
        Actualizamos el contador.

        Ejemplo:

        1 / 5
        2 / 5
        3 / 5
    */

    document
        .getElementById("gallery-counter")
        .textContent =
            `${currentImage + 1} / ${gallery.images.length}`;
}


/* =========================================
   SIGUIENTE IMAGEN
========================================= */

function nextImage() {

    const gallery =
        galleries[currentGallery];


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


    currentImage--;


    /*
        Si estamos en la primera imagen
        y pulsamos atrás, vamos a la última.
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
   CERRAR AL HACER CLICK EN EL FONDO
========================================= */

document
    .getElementById("gallery")
    .addEventListener(
        "click",
        function(event) {

            /*
                Solo cerramos si el usuario
                pulsa directamente sobre el
                fondo oscuro.

                Si pulsa la imagen o un botón,
                no cerramos.
            */

            if (
                event.target === this
            ) {

                closeGallery();
            }

        }
    );


console.log(
    "Portfolio cargado correctamente."
);
