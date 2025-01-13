const imagenes = document.querySelectorAll(".galeria a");//se usa ALL para aplicarlo a TODOS Los elementos img de la galería
const modal = document.querySelector(".modal");
const imgModal = document.querySelector(".modal img");//no se usa ALL porque en el div modal sólo hay un elemengo img
const flechas = document.querySelectorAll(".modal button");
let imgActual = 0;

imagenes.forEach((imagen, i) => {//relaciona cada imagen/enlace de la galería con su correspondiente en la modal, que adquiere la clase "visible"
    imagen.addEventListener("click", evento => {
        evento.preventDefault();
        if(window.innerWidth > 1200){
            imgActual = i;
            imgModal.setAttribute("src", imagen.getAttribute("href"));
            modal.classList.add("visible");
        }
    });
});

modal.addEventListener("click", () => {//elimina la clase "visible" de la modal al hacer click en cualquier sitio (EXCEPTO en const flechas)
    modal.classList.remove("visible");
});

flechas.forEach((flecha, i) => {//función para hacer útiles los elementos button
    flecha.addEventListener("click", evento => {//haciendo click, las flechascambian las imágenes según i teniendo en cuenta el total de imágenes (imagenes.length - 1)
        evento.stopPropagation();//permite que la modal siga visible al hacer click en las flechas
        if(i == 0){//hace funcionar la flecha de la izquierda, que muestra la imagen ANTERIOR a la actual (imgActual - 1); si se llega a imagenes.lenght - 1, se muestra la imagen i = 0 (la primera, se crea un bucle en los elementos)
            imgActual = imgActual > 0 ? imgActual - 1 : imagenes.length - 1;
        }
        else{//hace funcionar la flecha de la derechaa, que muestra la imagen SIGUIENTE a la actual (imgActual + 1); si se llega a imagenes.length - 1, se muestra la imagen i = 0 (la primera, se crea un bucle en los elementos)
            imgActual = imgActual < imagenes.length - 1 ? imgActual + 1 : 0;
        }
        imgModal.setAttribute("src", imagenes[imgActual].getAttribute("href"));//permite que la modal asocie la imgModal con la const imagenes y su función
    })
});