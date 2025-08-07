// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

// funcion para agregar amigos
function agregarAmigo() {
  let amigo = document.getElementById("amigo").value;

  if (!amigo) {
    alert("Por favor, ingrese un nombre.");
    console.log("No se ingresó un nombre.");
  } else {
    console.log(`Amigo agregado: ${amigo}`);
    amigos.push(amigo);
    console.log(`Lista de amigos: ${amigos}`);
    document.getElementById("amigo").value = "";
    mostrarAmigos();
  }
}

// funcion para mostrar lista de amigos
function mostrarAmigos() {
  let listaAmigos = document.getElementById("listaAmigos");

  listaAmigos.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    let amigoLista = document.createElement("li");
    amigoLista.innerHTML = amigos[i];
    listaAmigos.appendChild(amigoLista);
  }
}
