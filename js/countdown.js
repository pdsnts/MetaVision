// Defina a data do próximo Maracannes (Ano, Mês, Dia, Hora, Minuto)
// Nota: No JavaScript, os meses começam em 0 (Janeiro = 0, Dezembro = 11)
const dataEvento = new Date(2026, 9, 28, 12, 0, 0).getTime();

const atualizarContador = setInterval(function() {
    // Obter a data e hora atual
    const agora = new Date().getTime();
    
    // Encontrar a distância entre agora e a data do evento
    const distancia = dataEvento - agora;
    
    // Selecionar o container do contador no HTML
    const containerContador = document.getElementById("countdown");
    
    // Se a contagem regressiva terminar ou não houver evento planejado
    if (distancia < 0) {
        clearInterval(atualizarContador);
        containerContador.innerHTML = "<span class='no-event'>Em breve, novas edições</span>";
        return;
    }
    
    // Cálculos de tempo para dias, horas, minutos e segundos
    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);
    
    // Exibir o resultado no elemento com id="countdown" em formato de blocos estruturados
    containerContador.innerHTML = `
        <div class="time-block"><span>${dias}</span>dd</div>
        <div class="time-block"><span>${horas}</span>hh</div>
        <div class="time-block"><span>${minutos}</span>mm</div>
        <div class="time-block"><span>${segundos}</span>ss</div>
    `;
}, 1000);