document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startButton');

    startButton.addEventListener('click', () => {
        window.location.href = "./game.html"; // Redirect to game.html
    });
});
