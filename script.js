document.addEventListener('DOMContentLoaded', function() {
    populateGames();
});

const gameConstants = {
    "Aim Lab": 0.05,
    "Apex Legends": 0.021997,
    // Add other games as needed
    "Valorant": 0.070028,
    "Warface": 0.003333,
    // Continue listing games...
};

function populateGames() {
    const originSelect = document.getElementById('origin-game');
    const targetSelect = document.getElementById('target-game');
    for (const game in gameConstants) {
        let option = new Option(game, game);
        originSelect.add(option.cloneNode(true));
        targetSelect.add(option.cloneNode(true));
    }
}

function calculateSensitivity() {
    const originGame = document.getElementById('origin-game').value;
    const targetGame = document.getElementById('target-game').value;
    const originSensitivity = parseFloat(document.getElementById('origin-sensitivity').value || 0); // Using 0 as a fallback
    const dpi = parseFloat(document.getElementById('dpi').value || 0); // Using 0 as a fallback

    // Ensure all fields have valid inputs before calculating
    if (!originSensitivity || !dpi || !originGame || !targetGame || !gameConstants[originGame] || !gameConstants[targetGame]) {
        // Set outputs to "0" if any field is empty or invalid
        document.getElementById('target-sensitivity').value = "0";
        document.getElementById('in-per-360').value = "0";
        document.getElementById('cm-per-360').value = "0";
        return;
    }

    const originConstant = gameConstants[originGame];
    const targetConstant = gameConstants[targetGame];
    const convertedSensitivity = ((originSensitivity * originConstant) / targetConstant).toFixed(3);
    const inPer360 = (360 / (convertedSensitivity * dpi * targetConstant)).toFixed(2);
    const cmPer360 = (inPer360 * 2.54).toFixed(2);

    document.getElementById('target-sensitivity').value = convertedSensitivity;
    document.getElementById('in-per-360').value = inPer360;
    document.getElementById('cm-per-360').value = cmPer360;
}
