
// Data final da contagem regressiva (pode ser ajustada conforme necessário)
const dataFinal = new Date('2023-12-08T21:30:00');

const contagemRegressiva = document.querySelector('#contagem');

function formatTwoDigits(number) {
    return number < 10 ? `0${number}` : number;
}

function atualizaContagemRegressiva() {
    const agora = new Date();
    const diferenca = dataFinal - agora;

    // Calcular horas, minutos, segundos
    const horas = formatTwoDigits(Math.floor(diferenca / (1000 * 60 * 60)));
    const minutos = formatTwoDigits(Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60)));
    const segundos = formatTwoDigits(Math.floor((diferenca % (1000 * 60)) / 1000));

    // Atualizar o elemento HTML
    contagemRegressiva.textContent = `${horas}:${minutos}:${segundos}`;

    // Se a contagem regressiva terminou, exibir uma mensagem
    if (diferenca < 0) {
        contagemRegressiva.textContent = '<h2>A contagem regressiva terminou!<h2>';
    }
}


// Atualizar a contagem regressiva a cada segundo
setInterval(atualizaContagemRegressiva, 1000);

// Chamar a função uma vez para evitar um atraso inicial
atualizaContagemRegressiva();
