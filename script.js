
// Data final da contagem regressiva (pode ser ajustada conforme necessário)
const dataFinal = new Date('2023-12-08T21:30:00');
const dataHenrique = new Date('2023-12-08T23:00:00');

const contagemRegressiva = document.querySelector('#contagem');
const contagemRegressivaH = document.querySelector('#contagemH');


function formatTwoDigits(number) {
    return number < 10 ? `0${number}` : number;
}

function atualizaContagemRegressiva() {
    const agora = new Date();
    const diferenca = dataFinal - agora;
    const diferencaH = dataHenrique - agora;

    // Calcular horas, minutos, segundos
    const horas = formatTwoDigits(Math.floor(diferenca / (1000 * 60 * 60)));
    const minutos = formatTwoDigits(Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60)));
    const segundos = formatTwoDigits(Math.floor((diferenca % (1000 * 60)) / 1000));

    const horasH = formatTwoDigits(Math.floor(diferencaH / (1000 * 60 * 60)));
    const minutosH = formatTwoDigits(Math.floor((diferencaH % (1000 * 60 * 60)) / (1000 * 60)));
    const segundosH = formatTwoDigits(Math.floor((diferencaH % (1000 * 60)) / 1000));

    

    // Atualizar o elemento HTML
    contagemRegressiva.textContent = `${horas}:${minutos}:${segundos}`;
    contagemRegressivaH.textContent = `${horasH}:${minutosH}:${segundosH} HENRIQUE`;

    
    // Se a contagem regressiva terminou, exibir uma mensagem
    if (diferenca < 0) {
        contagemRegressiva.textContent = '<h2>A contagem regressiva terminou!<h2>';
        contagemRegressivah.textContent = 'A contagem regressiva terminou!';
    }
}


// Atualizar a contagem regressiva a cada segundo
setInterval(atualizaContagemRegressiva, 1000);

// Chamar a função uma vez para evitar um atraso inicial
atualizaContagemRegressiva();
