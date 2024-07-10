document.addEventListener('DOMContentLoaded', function() {
    populateGames();
});

const gameConstants = {
    "Aim Lab": 0.05,
    "Apex Legends": 0.021997,
    "Arena Breakout: Infinite": 0.102459,
    "ARK: Survival Evolved": 0.174825,
    "Back 4 Blood": 0.002333,
    "BattleBit Remastered": 0.0005,
    "Battlefield 1": 0.004545,
    "Battlefield 2042": 0.002273,
    "Battlefield 4": 0.004545,
    "Battlefield V": 0.004545,
    "Black Squad": 0.005493,
    "Bloodhunt": 0.066050,
    "Borderlands 3": 0.007334,
    "Call of Duty: Black Ops": 0.006600,
    "Call of Duty: Black Ops 4": 0.006600,
    "Call of Duty: Black Ops Cold War": 0.006600,
    "Call of Duty: Modern Warfare (2019)": 0.006600,
    "Call of Duty: Modern Warfare 2 (2022)": 0.006600,
    "Call of Duty: Modern Warfare 3 (2023)": 0.006600,
    "Call of Duty: Vanguard": 0.006600,
    "Call of Duty: Warzone 2": 0.006600,
    "Call of Duty: WWII": 0.021997,
    "CS 1.6": 0.021997,
    "CS 2": 0.021997,
    "CS:GO": 0.021997,
    "CS:S": 0.021997,
    "Cyberpunk 2077": 0.01,
    "DayZ": 0.178571,
    "Destiny 2": 0.006600,
    "DOOM Eternal": 0.021997,
    "Dying Light 2": 0.008333,
    "Escape From Tarkov": 0.125,
    "Fallout 4": 3.846154,
    "Fallout 76": 3.846154,
    "Far Cry 5": 0.002849,
    "Fortnite": 0.005555,
    "Garry's Mod": 0.021997,
    "Gray Zone Warfare": 0.062972,
    "Half-Life 2": 0.021997,
    "Halo Infinite": 0.022502,
    "Halo: Reach": 0.022222,
    "Helldivers 2": 0.574713,
    "Heroes & Generals": 0.151057,
    "Hunt: Showdown": 0.042955,
    "Hyper Scape": 0.005729,
    "Insurgency: Sandstorm": 0.140056,
    "Left 4 Dead 2": 0.021997,
    "Minecraft": 0.001020,
    "New World": 1,
    "osu!": 0.079618,
    "Overwatch 2": 0.006600,
    "Paladins": 0.009156,
    "Palworld": 0.043745,
    "PAYDAY 2": 0.015002,
    "Quake Champions": 0.021997,
    "Rainbow Six Extraction": 0.005729,
    "Rainbow Six Siege": 0.005729,
    "Roblox": 0.396825,
    "Rust": 0.112613,
    "Spellbreak": 0.008,
    "Splitgate": 0.009374,
    "Squad": 0.174825,
    "Team Fortress 2": 0.021997,
    "THE FINALS": 0.000789,
    "Titanfall 2": 0.021997,
    "Unturned": 0.1,
    "Valheim": 0.05,
    "Valorant": 0.070028,
    "Warface": 0.003333,
    "Xdefiant": 0.001724,
    "v1v.LOL": 0.006052,
    "7 Days to Die": 0.5,
    "A. V. A Global": 0.005188,
    "Battalion: Legacy": 0.070028,
    "Combat Master": 0.001,
    "CrossFire": 0.002825,
    "CrossFire HD": 0.013492,
    "Deep Rock Galactic": 0.013365,
    "Diabotical": 0.021997,
    "Dirty Bomb": 0.005493
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
    const originSensitivity = parseFloat(document.getElementById('origin-sensitivity').value);
    const dpi = parseFloat(document.getElementById('dpi').value);

    // Ensure all fields have valid inputs before calculating
    if (!originSensitivity || !dpi || !gameConstants[originGame] || !gameConstants[targetGame]) {
        // Show alert only if any field is empty or invalid
        console.log('Please enter all valid values before calculating.');
        return;
    }

    const originConstant = gameConstants[originGame];
    const targetConstant = gameConstants[targetGame];
    const convertedSensitivity = ((originSensitivity * originConstant) / targetConstant).toFixed(3);
    const inPer360 = (360 / (convertedSensitivity * dpi * targetConstant)).toFixed(2);
    const cmPer360 = (inPer360 * 2.54).toFixed(2);

    // Assuming your HTML includes input fields or spans to show these results
    document.getElementById('target-sensitivity').value = convertedSensitivity;
    document.getElementById('in-per-360').value = inPer360;
    document.getElementById('cm-per-360').value = cmPer360;
}

