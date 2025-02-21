const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

function agregarAmigo() {
  if (inputAmigo.value.trim() !== "") {
    listaAmigos.push(inputAmigo.value);   
    ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;
    inputAmigo.value = ""; // Limpiar el campo de entrada después de agregar
  } else {
    alert("Por favor, ingresa un nombre válido.");
  }
}

function sortearAmigo() {
  if (listaAmigos.length > 0) {
    const random = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[random];
    ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;    
  } else {
    alert("No hay amigos en la lista para sortear.");
  }
}