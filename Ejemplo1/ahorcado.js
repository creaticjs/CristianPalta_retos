var d = document.getElementById('imgAhorcado');
var lienzo = d.getContext('2d');



var fondo = {
    url: "rsz_captura6.png",
    cargarOk: false
};

console.log(lienzo);
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

function cargarFondo()
{
    fondo.cargarOk = true;
    dibujar();
}

function dibujar()
{
    if(fondo.cargarOk)
    {
        lienzo.drawImage(fondo.imagen, 0, 0);
    }
}