function mostrarColor() {
    let color = document.getElementById("selectColor").value;
    let cuadro = document.getElementById("cuadroColor");

    if (color === "") {
        cuadro.style.background = "white";
        alert("Seleccione un color");
    } else {
        cuadro.style.background = color;
    }
}

function mostrarImagen() {
    let opcion = document.getElementById("selectImagen").value;
    let cuadro = document.getElementById("cuadroImagen");
    let ruta = "";

    if (opcion === "Carro") ruta = "carro.png";
    if (opcion === "Moto") ruta = "moto.png";
    if (opcion === "Bicicleta") ruta = "bicicleta.png";

    if (opcion === "") {
        cuadro.innerHTML = "";
        alert("Seleccione una imagen");
    } else {
        cuadro.innerHTML = `<img src="${ruta}" width="500" height="400">`;
    }
}
