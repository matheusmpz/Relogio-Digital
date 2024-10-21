const hora = document.getElementById('horas');
const minuto = document.getElementById('minutos');
const segundo = document.getElementById('segundos');

function tempo() {
    let now = new Date();
    let horas = now.getHours();
    let minutos = now.getMinutes();
    let segundos = now.getSeconds();

    hora.textContent = horas.toString().padStart(2, '0');
    minuto.textContent = minutos.toString().padStart(2, '0');
    segundo.textContent = segundos.toString().padStart(2, '0');
}

setInterval(tempo, 1000);