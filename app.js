let listaAmigos = [];

function agregarAmigo() {
    var amigo = document.getElementById("amigo").value;
    if (amigo) {
        listaAmigos.push(amigo);
        document.getElementById("amigo").value = "";
        actualizarListaAmigos();
    } else {
        alert("Ingrese un nombre de amigo.");
    }
}

function actualizarListaAmigos() {
    var amigosContainer = document.getElementById("amigosContainer");
    var i=0;
    amigosContainer.innerHTML = "";
    listaAmigos.forEach(function(amigo) {
        var div = document.createElement("div");
        div.textContent = "Amigo " + (i+1) + ": " + amigo;
        i++;
        amigosContainer.appendChild(div);
    });
}

function sortearAmigo() {
    if (listaAmigos.length > 0) {
        let amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
        var amigoSorteadoContainer = document.getElementById("amigoSorteadoContainer");
        amigoSorteadoContainer.innerHTML =amigoSorteado;
    } else {
        alert("No hay amigos en la lista para sortear.");
    }
}


