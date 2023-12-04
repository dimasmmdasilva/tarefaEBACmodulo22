AOS.init();

const dataDoEvento = new Date("Sep 13, 2024 14:00:00");
const timeStampDoEvento = dataDoEvento.getTime();
const contaTempo = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();
    const distanciaEvento = timeStampDoEvento - timeStampAtual;
    const diasAteEvento = Math.floor(distanciaEvento / (1000 * 60 * 60 * 24));
    const horasAteEvento = Math.floor((distanciaEvento % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutosAteEvento = Math.floor((distanciaEvento % (1000 * 60 * 60)) / (1000 * 60));
    const segundosAteEvento = Math.floor((distanciaEvento % (1000 * 60)) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteEvento}dias ${horasAteEvento}horas ${minutosAteEvento}minutos ${segundosAteEvento}s`;

    if (distanciaEvento < 0) {
        clearInterval(contaTempo);
        document.getElementById('contador').innerHTML = 'O evento já começou...';
    }
}, 1000);
