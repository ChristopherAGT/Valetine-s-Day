const startDate = new Date("2024-02-19T00:00:00");

function updateCounter() {
  const now = new Date();
  let diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  diff %= (1000 * 60 * 60 * 24);

  const hours = Math.floor(diff / (1000 * 60 * 60));
  diff %= (1000 * 60 * 60);

  const minutes = Math.floor(diff / (1000 * 60));
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("counter").textContent =
    `${days} días ${hours} horas ${minutes} minutos ${seconds} segundos`;
}

setInterval(updateCounter, 1000);
updateCounter();
