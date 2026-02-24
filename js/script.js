// ==============================
// 🥖 Informações da Padaria
// ==============================

const nomePadaria = "Padaria Bairro Feliz";
const enderecoPadaria = "Rua das Flores, 123 - Centro";
const telefonePadaria = "(11) 91234-5678";


// ==============================
// 💰 Preços dos Produtos
// ==============================

let precoPaoFrances = 0.50;
let precoBoloChocolate = 25.00;
let precoCafe = 5.00;


// ==============================
// 📦 Controle de Estoque
// ==============================

let estoquePaoFrances = 100;
let estoqueBoloChocolate = 10;
let estoqueCafe = 50;


// ==============================
// 🛍️ Array de Produtos
// ==============================

const produtos = ["Pão Francês", "Bolo de Chocolate", "Café"];


// ==============================
// 🏷️ Array de Categorias
// ==============================

const categorias = ["Pães", "Bolos", "Bebidas"];


// ==============================
// 📋 Objeto Produto Completo
// ==============================

const produto = {
    nome: "Café",
    categoria: "Bebidas",
    preco: precoCafe,
    estoque: estoqueCafe
};


// ==============================
// ⚠️ Exemplo de var (não recomendado)
// ==============================

var exemploVar = "Evite usar var em códigos modernos";


// ==============================
// 🔒 Constante (não pode ser alterada)
// ==============================

const CNPJ_PADARIA = "12.345.678/0001-90";


// ==============================
// 🔄 Let (pode ser reatribuída)
// ==============================

let statusPadaria = "Aberta";
statusPadaria = "Fechada para manutenção";


// Executa a função quando a página carregar
saudarCliente();

// ==============================
//  Funções básicas para Cálculos
// ==============================


// ================================
// Atividade 1
// ================================

// Crie um arquivo HTML com JavaScript que contenha as seguintes funções para o sistema de delivery:


// 👋 Uma função que exiba uma mensagem de boas-vindas

// Função para saudar o cliente conforme o horário
function saudarCliente() {

    const agora = new Date();          // Pega data e hora atual
    const hora = agora.getHours();     // Extrai apenas a hora

    let mensagem;

    if (hora < 12) {
        mensagem = "☀️ Bom dia! Seja bem-vindo à Padaria Jamaica!";
        alert("☀️ Bom dia! Seja bem-vindo à Padaria Jamaica!")
    }
    else if (hora < 18) {
        mensagem = "🌤️ Boa tarde! Que tal um café fresquinho?";
        alert("🌤️ Boa tarde! Que tal um café fresquinho?")
    }
    else {
        mensagem = "🌙 Boa noite! Temos pães quentinhos saindo do forno!";
        alert("🌙 Boa noite! Temos pães quentinhos saindo do forno!")
    }

    document.getElementById("saudacao").innerText = mensagem;
}


// 🛒 Uma função que calcule o subtotal de itens (receba preço e quantidade)
function calcularSubTotal(preco, quantidade) {
    return preco * quantidade
}

let resultado = calcularSubTotal(50, 3);
console.log(resultado);


// 🎁 Uma função que calcule desconto (receba valor e percentual de desconto)
function calcularDesconto(valor, percentual) {
    return valor - (valor * percentual / 100)
}

let desconto = calcularDesconto(200, 100);
console.log(desconto);

// 🚚 Uma função que calcule a taxa de entrega baseada na distância
function calcularTaxaEntrega(distancia) {
    if (distancia <= 5) {
        console.log("A sua entrega é gratuita")
    } else if (distancia <= 10) {
        console.log("sua entrega custa R$15,00")
    } else {
        console.log("Sua taxa de entrega é de R$ 25,00")
    }
}
calcularTaxaEntrega(20)

/*

função tradicional
 

function calcularPreco(preco, produto) {
    return preco * produto;
}

*/

// ==========================
//       Arrow Function
// ==========================
//  const add = function(a, b) {return a * b}
// simplificando:
// => com flecha
// const add = (a, b) => a * b;

const calcularPrecos = (preco, produto) => preco * produto;
