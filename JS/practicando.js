function generadordePalabras(){
    let palabras = ['gato', 'perro', 'condominio', 'alcoba'];
    var tamanio = (palabras.length)-1;
    var aleatorio = Math.floor(Math.random() * (tamanio + 1));
    let palabraSelect = palabras[aleatorio];
    var tamanioDePalabra = (palabras[aleatorio]).length;

    comprobador(palabraSelect)


}

function comprobador(palabra){
    console.log(palabra);
}

generadordePalabras();