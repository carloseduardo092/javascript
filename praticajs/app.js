// var nome = window.prompt("Qual é o seu nome ?");
// window.alert("Seja bem vindo, " + nome + "!");

let carrinho = [];
function adicionarProduto(elemento) {
  let id = elemento.getAttribute("data-id");
  let nome = elemento.getAttribute("data-nome");
  let preco = parseFloat(elemento.getAttribute("data-preco"));

  carrinho.push({ id, nome, preco, quantidade: 1 });
  console.log(carrinho);
}

function removerProduto(id) {
  let itemEncontrado = carrinho.find((produto) => produto.id === id);
  if (itemEncontrado) {
    if (itemEncontrado.quantidade > 1) {
      itemEncontrado.quantidade--;
    } else {
      let resultado = carrinho.findIndex((produto) => produto.id === id);
      if (resultado !== -1) {
        carrinho.splice(resultado, 1);
      }
    }
  }
}
