import { criarItemDaLista } from "./criarItemDaLista.js";
import { verificarListaVazia } from "./verificarListaVazia.js";
import { verificarListaComprados } from "./verificarListaComprados.js";

const item = document.getElementById("input-item");
const listaDeCompras = document.getElementById("lista-de-compras");

export function adicionarItem(evento) {
    evento.preventDefault()

    if (item.value === '') {
        alert('Por favor, insira um item!')
        return;
    }

    const itemDaLista = criarItemDaLista(item)
    listaDeCompras.appendChild(itemDaLista)
    verificarListaVazia(listaDeCompras)
    verificarListaComprados(listaDeCompras)
    item.value = ''
    item.focus()
}