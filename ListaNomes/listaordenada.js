var nomes = []

function incluirNomeNaLista() {

    let elTxtLista = document.getElementById('txtLista')
    let nome = document.getElementById('txtNome').value.toLowerCase()

    //teste se tem o nome ou se está vázio
    if (!nome) {
        console.log('Está vázio')
    }
    else if (nomes.indexOf(nome) == -1) {
        nomes.push(nome)
        console.log(nome, ' nome incluído')
    } else {
        console.log(nome, 'nome repetido')
    }
    document.getElementById('txtNome').select()
    nomes.sort()

    let lista = ""

    for (let contador = 0; contador < nomes.length; contador++) {

        let primeiraLetraMaiuscula = nomes[contador][0].toUpperCase()
        let restanteNome = nomes[contador].substring(1)

        lista = lista.concat('<li>')
        lista = lista.concat(primeiraLetraMaiuscula.concat(restanteNome))
        lista = lista.concat('</li>')
    }

    elTxtLista.innerHTML = lista
}
