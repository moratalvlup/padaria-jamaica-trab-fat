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

// Executa a função quando a página carregar
saudarCliente();