// ======================================
// FORMULÁRIO DE ORÇAMENTO → WHATSAPP
// ======================================

const formOrcamento = document.querySelector("#formOrcamento");


// Número do WhatsApp da empresa
// Formato: 55 + DDD + número
const numeroWhatsApp = "5511912629606";


formOrcamento.addEventListener("submit", function (event) {

    // Impede o formulário de recarregar a página
    event.preventDefault();


    // ==============================
    // CAPTURA DOS DADOS
    // ==============================

    const nome = document
        .querySelector("#nome")
        .value
        .trim();


    const empresa = document
        .querySelector("#empresa")
        .value
        .trim();


    const telefone = document
        .querySelector("#telefone")
        .value
        .trim();


    const email = document
        .querySelector("#email")
        .value
        .trim();


    const segmento = document
        .querySelector("#segmento")
        .value
        .trim();


    const necessidade = document
        .querySelector("#necessidade")
        .value
        .trim();


    // ==============================
    // VALIDAÇÃO
    // ==============================

    if (
        !nome ||
        !empresa ||
        !telefone ||
        !email ||
        !segmento ||
        !necessidade
    ) {

        alert("Por favor, preencha todos os campos.");

        return;
    }


    // ==============================
    // MENSAGEM
    // ==============================

    const mensagem = `Olá! Vim através do site e gostaria de solicitar um orçamento.

Segue meus dados:

👤 Nome: ${nome}

🏢 Empresa: ${empresa}

📞 Telefone: ${telefone}

📧 E-mail: ${email}

📦 Segmento: ${segmento}

📝 Necessidade:
${necessidade}

Aguardo o contato da equipe.

Obrigado!`;


    // ==============================
    // CODIFICA MENSAGEM
    // ==============================

    const mensagemFormatada = encodeURIComponent(mensagem);


    // ==============================
    // CRIA LINK WHATSAPP
    // ==============================

    const linkWhatsApp =
        `https://wa.me/${numeroWhatsApp}?text=${mensagemFormatada}`;


    // ==============================
    // REDIRECIONAMENTO
    // ==============================

    window.open(linkWhatsApp, "_blank");

});