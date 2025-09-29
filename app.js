let diaDaSemana = "";
let numero = 0;
let pontuacao = 0;

// Captura nome com validação
function capturarNome() {
    let nome;
    let tentativas = 0;
    const maxTentativas = 3;
    
    do {
        tentativas++;
        
        // Mensagem personalizada baseada no número de tentativas
        let mensagem = "Bem vindo ao desafio de programação! Qual o seu nome?";
        if (tentativas > 1) {
            mensagem = `Tentativa ${tentativas}/${maxTentativas} - Por favor, informe seu nome:`;
        }
        
        nome = prompt(mensagem);
        
        // Verificar se foi cancelado (null)
        if (nome === null) {
            if (tentativas >= maxTentativas) {
                alert("Muitas tentativas canceladas. Usando nome padrão.");
                nome = "Usuário";
                break;
            } else {
                alert("Por favor, informe seu nome para continuar ou clique em 'Cancelar' 3 vezes para usar nome padrão.");
                continue;
            }
        }
        
        // Verificar se está vazio ou só espaços
        if (nome.trim() === "") {
            if (tentativas >= maxTentativas) {
                alert("Muitas tentativas com nome vazio. Usando nome padrão.");
                nome = "Usuário";
                break;
            } else {
                alert("Por favor, digite um nome válido!");
                continue;
            }
        }
        
        // Se chegou até aqui, o nome é válido
        break;
        
    } while (tentativas < maxTentativas);
    
    // Armazenar nome válido (removendo espaços extras)
    nome = nome.trim();
    
    // Exibir mensagem de boas-vindas
    alert(`Bem vindo ao desafio de programação, ${nome}!`);
    
    return nome; // Retorna o nome para uso posterior
}

// Executar captura do nome
const nomeUsuario = capturarNome();

// Captura o valor do formulário do dia da semana
function capturarDiaSemana() {
    const inputDiaSemana = document.getElementById("diaSemana");
    diaDaSemana = inputDiaSemana.value.toLowerCase().trim();
    
    // Verificar se o campo não está vazio
    if (diaDaSemana === "") {
        alert("Por favor, digite um dia da semana!");
        return;
    }
    
    // Verificar se é um dia válido
    const diasValidos = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado", "sabado", "segunda-feira", "terça-feira", "terca-feira", "quarta-feira", "quinta-feira", "sexta-feira"];
    if (!diasValidos.includes(diaDaSemana)) {
        alert("Por favor, digite um dia da semana válido!");
        return;
    }
    
    // Normalizar "sabado" para "sábado"
    if (diaDaSemana === "sabado") {
        diaDaSemana = "sábado";
    }
    
    // Executar a lógica condicional
    verificarFimDeSemana();
}

// Verificar se é fim de semana
function verificarFimDeSemana() {
    if (diaDaSemana === "domingo" || diaDaSemana === "sábado") {  
        alert("Bom fim de semana!");
    } else {
        alert("Boa semana!");
    }
}

// Verifica se o número é válido
function isNumero(valorDigitado) {
    // Se o campo estiver vazio, retorna false
    if (valorDigitado === "") {
        alert("Por favor, digite um número!");
        return false; // Número INVÁLIDO
    }
    
    // Converter para número e validar
    const numeroConvertido = parseFloat(valorDigitado);
    if (isNaN(numeroConvertido)) {
        alert("Por favor, digite um número válido!");
        return false; // Número INVÁLIDO
    }
    
    // Se chegou até aqui, o número é válido
    return true; // Número VÁLIDO
}

function capturarNumero() {
    // Capturo o elemento e depois o valor do input
    const inputNumero = document.getElementById("numero");
    const valorDigitado = inputNumero.value.trim();
    
    // Valida se o número é válido
    if (!isNumero(valorDigitado)) {
        return; // Se não for válido, para a execução
    }
    
    // Se chegou até aqui, o número é válido
    // Converter e armazenar na variável global
    numero = parseFloat(valorDigitado);
    
    // Executar a lógica condicional
    isPositivo();
}

// Função para verificar se é positivo/negativo
function isPositivo() {
    if (numero > 0) {  
        alert("Positivo");
    } else if (numero == 0) {
        alert("Zero é neutro");
    } else {
        alert("Negativo");
    }
}

function capturarPontuacao() {
    const inputPontuacao = document.getElementById("pontuacao");
    const valorDigitado = inputPontuacao.value.trim();
    
    // Valida se o número é válido
    if (!isNumero(valorDigitado)) {
        return; // Se não for válido, para a execução
    }
    
    // Se chegou até aqui, o número é válido
    // Converter e armazenar na variável global
    pontuacao = parseFloat(valorDigitado);
    
    // Aqui você pode adicionar a lógica para a pontuação
    resultadoDoJogo();
}

function resultadoDoJogo() {
    if (pontuacao >= 100) {
        alert("Parabéns, você venceu!");
    } else {
        alert("Tente novamente para ganhar.");
    }
}

function visualizarSaldo() {
    alert("Interface preparada para integração com sistema de saldo");
}

// Aguardar o carregamento da página e adicionar os event listeners
document.addEventListener("DOMContentLoaded", function() {
    // ✅ Prevenir submit dos formulários
    const formularios = document.querySelectorAll('form');
    formularios.forEach(form => {
        form.addEventListener("submit", function(event) {
            event.preventDefault(); // Evita recarregamento da página
        });
    });
    // Botões para verificar
    const botoes = document.querySelectorAll('button[type="button"]');
    if (botoes.length >= 3) {
        botoes[0].addEventListener("click", capturarDiaSemana);    // Primeiro botão - Dia da semana
        botoes[1].addEventListener("click", capturarNumero);       // Segundo botão - Verificar Positivo/Negativo
        botoes[2].addEventListener("click", capturarPontuacao);    // Terceiro botão - Verifica Pontuação
        botoes[3].addEventListener("click", visualizarSaldo);    // Quarto botão - Visualizar Saldo
    }
    
    // Capturar ENTER nos inputs
    
    // Input do dia da semana
    const inputDiaSemana = document.getElementById("diaSemana");
    if (inputDiaSemana) {
        inputDiaSemana.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                event.preventDefault(); // Evita recarregamento da página
                capturarDiaSemana();
            }
        });
    }
    
    // Input do número
    const inputNumero = document.getElementById("numero");
    if (inputNumero) {
        inputNumero.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                event.preventDefault(); // Evita recarregamento da página
                capturarNumero();
            }
        });
    }
    
    // Input da pontuação
    const inputPontuacao = document.getElementById("pontuacao");
    if (inputPontuacao) {
        inputPontuacao.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                event.preventDefault(); // Evita recarregamento da página
                capturarPontuacao();
            }
        });
    }
});