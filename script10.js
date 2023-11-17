 const fruits = ['frute1.png', 'frute2.png', 'frute3.png'];

function getRandomFruit() {
    return fruits[Math.floor(Math.random() * fruits.length)];
}

function startGame() {
    const playerName = document.getElementById('playerName').value;
    if (!playerName) {
        alert('Будь ласка, введіть ім\'я.');
        return;
    }

    const resultElement = document.getElementById('result');
    resultElement.innerText = '';

    const slots = ['slot1', 'slot2', 'slot3'];

    for (const slot of slots) {
        document.getElementById(slot).style.backgroundImage = `url(${getRandomFruit()})`;
    }

    if (checkWin(slots)) {
        resultElement.innerText = `Вітаємо, ${playerName}! Ви виграли!`;
    } else {
        resultElement.innerText = `Спробуйте ще раз, ${playerName}.`;
    }
}

function checkWin(slots) {
    const firstSlotValue = document.getElementById(slots[0]).style.backgroundImage;
    return slots.every(slot => document.getElementById(slot).style.backgroundImage === firstSlotValue);
}
