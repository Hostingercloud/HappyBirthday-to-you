document.addEventListener("DOMContentLoaded", function () {
    const confettiContainer = document.querySelector('.confetti-container');

    // Function to create confetti
    function createConfetti() {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');

        // Randomize position and animation duration
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's'; // 2s to 5s
        confetti.style.opacity = Math.random(); // Random opacity

        confettiContainer.appendChild(confetti);

        // Remove the confetti after animation ends
        confetti.addEventListener('animationend', () => {
            confetti.remove();
        });
    }

    // Create confetti at intervals
    setInterval(createConfetti, 100); // Create a new piece of confetti every 100ms
});
