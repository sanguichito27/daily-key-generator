// Secreto que solo tú conoces
const secret = "MiSecreto123";

// Generar clave del día basada en fecha
function generateDailyKey() {
    const today = new Date();
    const dayString = today.getFullYear() + "-" + (today.getMonth()+1) + "-" + today.getDate();
    let hash = 0;
    const str = secret + dayString;
    for (let i = 0; i < str.length; i++) {
        hash = ((hash << 5) - hash) + str.charCodeAt(i);
        hash |= 0;
    }
    return "KEY-" + Math.abs(hash);
}

// Mostrar clave
document.getElementById("key").innerText = generateDailyKey();

// Mostrar contador hasta cambio de día
function updateCountdown() {
    const now = new Date();
    const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1, 0,0,0);
    const diff = tomorrow - now;
    const hours = Math.floor(diff / 1000 / 60 / 60);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    document.getElementById("countdown").innerText = 
        `Cambio de clave en: ${hours}h ${minutes}m ${seconds}s`;
}
setInterval(updateCountdown, 1000);
updateCountdown();
