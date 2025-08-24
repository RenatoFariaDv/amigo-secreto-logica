let amigos = [];

function adicionarAmigo() {
    let nomeAmigo = document.getElementById('amigo').value;
    
    if (nomeAmigo == '') {
        alert('Por favor, insira um nome.');
        return;
    }

    if (amigos.includes(nomeAmigo)) {
        alert('Nome já adicionado!');
        return;
    }

    amigos.push(nomeAmigo);
    
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    
    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement('li');
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
    
    document.getElementById('amigo').value = '';
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Por favor, adicione amigos antes de sortear!');
        return;
    }

    let numeroSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[numeroSorteado];
    
    // Esconde a lista de amigos original
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.style.display = 'none';
    
    // Exibe o resultado do sorteio
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; 
    
    let paragrafoSorteio = document.createElement('p');
    paragrafoSorteio.textContent = `O amigo sorteado é: ${amigoSorteado}`;
    resultado.appendChild(paragrafoSorteio);
}