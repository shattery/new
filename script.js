document.addEventListener("DOMContentLoaded", function () {
  const numStars = 50; // Anzahl der Sterne
  const starsContainer = document.querySelector('.stars-container');

  const centerX = window.innerWidth / 2; // X-Koordinate des Zentrums des Bildschirms
  const centerY = window.innerHeight / -2; // Y-Koordinate des Zentrums des Bildschirms
  const radius = 900; // Radius um das Zentrum, in dem die Sterne auftauchen sollen

  for (let i = 0; i < numStars; i++) {
    const randomAngle = Math.random() * Math.PI * 2; // Zufälliger Winkel im Bogenmaß (0 bis 2 * PI)
    const randomRadius = Math.random() * radius; // Zufällige Entfernung vom Zentrum

    // Berechne die X- und Y-Koordinaten basierend auf dem Winkel und der Entfernung
    const x = centerX + Math.cos(randomAngle) * randomRadius;
    const y = centerY + Math.sin(randomAngle) * randomRadius;

    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = x + '50px'; // Setze die X-Koordinate
    star.style.top = y + '10px'; // Setze die Y-Koordinate
    star.style.setProperty('--anim-duration', Math.random() * 5 + 5 + 's'); // Zufällige Animationsdauer zwischen 5 und 10 Sekunden
    starsContainer.appendChild(star);
  }
});
