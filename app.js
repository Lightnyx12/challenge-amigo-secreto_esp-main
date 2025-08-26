let amigoSecreto = [];

function agregarAmigo() {
    //el valor del Input se le asigna a la variable
    let nuevo = document.querySelector('#inputAmigo').value.trim();
    
    //agregamos el valor al array 
    amigoSecreto.push(nuevo);

    for (let i = 0; i < amigoSecreto.length-1; i++) {
        let listaAmigos = document.querySelector('#resultado');
        listaAmigos.innerHTML += `<li>${amigoSecreto[i]}</li>`;
    }
    
    mostrarAmigos();
}


function mostrarAmigos() {
    //tomamos el elemento html por el id resultado y le asignamos a una variable
    let listaAmigos = document.querySelector('#resultado');
    //vamos ingresando los resultados de los amigos 
    listaAmigos.innerHTML = "";
    for (let i = 0; i < amigoSecreto.length; i++) {
        listaAmigos.innerHTML += `<li>${amigoSecreto[i]}</li>`;
    }
}

function sortear() {
    if (amigoSecreto.length === 0) {
        alert("No hay amigos en la lista 😅");
        return;
    }

    // Elegir índice al azar
    let indice = Math.floor(Math.random() * amigoSecreto.length);
    let ganador = amigoSecreto[indice];

    // Mostrar en un elemento aparte (ejemplo con id resultadoFinal)
    let resultadoFinal = document.querySelector('#resultadoFinal');
    resultadoFinal.innerHTML = `🎉 El amigo secreto es: <strong>${ganador}</strong>`;
}
