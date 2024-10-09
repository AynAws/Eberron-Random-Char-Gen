// Races sorted by source for source restricting later, no subraces
const raceAI = ['Verdan']
const raceEEPC = ['Aarakocra', 'Genasi']
const raceERLW = ['Bugbear', 'Changeling*', 'Goblin', 'Hobgoblin', 'Kalashtar', 'Orc*', 'Shifter', 'Warforged']
const raceUARoR = ['Viashino']
const raceGGR = ['Loxodon', 'Simic Hybrid', 'Vedalken*']
const raceMOT = ['Centaur*', 'Leonin', 'Minotaur', 'Satyr', 'Triton']
const racePHB = ['Dragonborn', '']
// after filtering sourcebooks:
let race = [concat(raceAI, raceEEPC, raceERLW)]
race = [...new Set(race)]

/*const feats = [{name: 'feat1'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}];
feats.forEach((element) => {
    switch (element.name) {
        case 'feat1':
        element.srcBook = 'srcBook1';
    }
});*/