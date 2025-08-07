// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

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
  }
}
