// Atualiza o relógio do desktop.
const clockElement = document.getElementById('clock');

function updateClock() {
    clockElement.textContent = new Intl.DateTimeFormat('pt-BR', {
        hour: '2-digit',
        minute: '2-digit'
    }).format(new Date());
}

updateClock();
setInterval(updateClock, 30000);
console.log('Portfolio.OS iniciado com sucesso!');
