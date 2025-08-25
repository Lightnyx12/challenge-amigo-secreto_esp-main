// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


// Fuera de la función para que conserve los datos
let amigoSecreto = [];

function agregarAmigo() {
    let nuevoAmigo = document.querySelector('#amigo').value;

    // Validar si ya está en la lista
    if (amigoSecreto.includes(nuevoAmigo)) {
        alert("Este amigo ya está en la lista.");
        return;
    }

    amigoSecreto.push(nuevoAmigo);

    document.querySelector('#amigo').value = '';

    for (let i = 0; i < amigoSecreto.length; i++) {
        let listaAmigos = document.querySelector('#resultado');
        listaAmigos.innerHTML += `<li>${amigo}</li>`;

        console.log(amigoSecreto[i]);
    }
    
    mostrarAmigos();
}


function mostrarAmigos() {
    let listaAmigos = document.querySelector('#resultado');
  

    for (let i = 0; i < amigoSecreto.length; i++) {
        listaAmigos.innerHTML += `<li>${amigoSecreto[i]}</li>`;
    }
}