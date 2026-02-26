# 🥖 Projeto Integrador: Padaria Jamaica

**Status:** Material de Estudo e Desenvolvimento Ativo 🚧
**Desenvolvedor:** Fernando Franke Morata

---

## 1. 📝 Visão Geral do Projeto
Este site é uma plataforma **One Page** (página única) que utiliza navegação por âncoras. Ele foi planejado para ser um hub completo, unindo informações institucionais, cardápio dinâmico e sistemas de captura de dados (formulários).

---

## 2. 🏗️ Estrutura de Código (HTML5) - O Esqueleto
O seu HTML utiliza tags que comunicam significado ao navegador:

- **`<header>` (Cabeçalho):** Contém a identidade (`img`) e a navegação principal (`nav`).
- **`<main>` (Conteúdo Principal):** Centraliza as seções (`section`) de conteúdo real.
- **`<article>`:** Usado dentro das seções para agrupar conteúdos que fazem sentido sozinhos (como a história da padaria).
- **`<iframe>`:** Porta de entrada para conteúdos externos. Você o usa para o **Google Maps** e **YouTube**.
- **`<video>` e `<source>`:** Usados para mídias locais, garantindo que o site funcione mesmo sem internet externa.

---

## 3. 🎨 Estilização Avançada (CSS3) - O Design
Seu CSS não é apenas estético, ele possui engenharia:

- **Variáveis Globais (`:root`):** Centralizam a paleta de cores. Se você mudar `--cor-principal`, o site inteiro muda instantaneamente.
- **Reset (`* { margin: 0; }`):** Remove as configurações padrão do navegador para que o seu design seja igual em qualquer computador.
- **Posicionamento `fixed`:** - **Botão Início:** Sempre disponível no canto inferior.
    - **Ícone WhatsApp:** Facilita o contato imediato (estratégia de conversão).
- **Efeito `hover`:** Nas imagens da galeria e botões, cria uma resposta visual (zoom/troca de cor) que indica ao usuário que o elemento é clicável.

---

## 🧠 4. A Lógica do Cérebro (JavaScript) - O Motor
Aqui explicamos os "comos" técnicos que você implementou:

### 🔎 O Filtro de Produtos (Busca)
O código varre a tabela usando um **Loop For**.
1. **`document.getElementById`**: Localiza a caixa de busca.
2. **`.toLowerCase()`**: "Burla" a diferença entre maiúsculas e minúsculas.
3. **`linhas[i]`**: O `i` é o contador. Ele começa em 0 (1ª linha) e o `i++` faz ele pular para a próxima linha (`i = 1, i = 2...`).
4. **`.includes()`**: Verifica se o pedaço do texto buscado existe dentro do nome do produto.
5. **`display: "none"`**: Esconde o que não combina.

### 🕒 Saudação com Objeto `Date`
O JavaScript acessa o relógio interno do computador (`new Date().getHours()`) e executa uma **Estrutura Condicional (`if/else`)** para decidir se diz "Bom dia", "Boa tarde" ou "Boa noite".

---

## 📋 5. Sistemas de Formulários (Interatividade)
Seu projeto possui 4 áreas de coleta de dados distintas, cada uma com um propósito:

1. **Contato Geral:** Focado em mensagens simples (Assunto e Mensagem).
2. **Feedback:** Usa botões do tipo `radio` (escolha única) para avaliar o atendimento.
3. **Pedidos Especiais:** Usa `checkbox` (múltipla escolha) para selecionar adicionais e ingredientes.
4. **Cadastro:** Focado em coleta de dados pessoais (Nome, E-mail, Telefone) para programas de fidelidade.

---

## 📖 6. Guia de Estudos: Conceitos Chave

| Conceito | Explicação Didática |
| :--- | :--- |
| **`i++`** | O passo da caminhada. Sem ele, você fica parado na primeira linha da tabela (Loop Infinito). |
| **`length`** | O tamanho da pilha de fichas. Diz ao código quando parar de procurar. |
| **`DOM`** | A ponte entre o HTML e o JS. Permite que o JS "pegue" uma peça do HTML e a transforme. |
| **`Events`** | O "ouvinte". O `oninput` ou `onclick` são sensores que esperam o usuário agir. |
| **`id` vs `class`** | O `id` é o CPF (único); a `class` é o uniforme (vários elementos podem usar). |

---

## 📁 7. Organização de Arquivos
- `/index.html`: A base de tudo.
- `/css/style.css`: A inteligência visual.
- `/js/script.js`: O comportamento dinâmico.
- `/images/ambiente/` e `/images/produtos/`: Organização de pastas para facilitar a manutenção.

---

## 👤 Autor
**Desenvolvido por:** Fernando Franke Morata  
