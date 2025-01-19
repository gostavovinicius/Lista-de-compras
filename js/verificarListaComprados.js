const comprados = document.getElementById('container-lista-comprados')

export function verificarListaComprados(lista) {
    if (lista.querySelectorAll("li").length === 0) {
        comprados.style.display = 'none'
    } else {
        comprados.style.display = 'block'
    }
}