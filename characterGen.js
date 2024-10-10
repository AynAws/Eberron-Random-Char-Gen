// Races sorted by source for source restricting later, no subraces
const raceAI = ['Verdan']
const raceEEPC = ['Aarakocra', 'Genasi']
const raceEGW = ['Dragonborn']
const raceERLW = ['Bugbear', 'Changeling', 'Dwarf', 'Elf', 'Gnome', 'Goblin', 'Half Elf', 'Half-Orc', 'Halfling', 'Hobgoblin', 'Human', 'Kalashtar', 'Orc', 'Shifter', 'Warforged']
const raceUARoR = ['Viashino']
const raceGGR = ['Loxodon', 'Simic Hybrid', 'Vedalken']
const raceMOT = ['Centaur', 'Leonin', 'Minotaur', 'Satyr', 'Triton']
const raceMTF = ['Dwarf', 'Elf', 'Gith', 'Gnome', 'Tiefling']
const racePHB = ['Dragonborn', 'Dwarf', 'Elf', 'Gnome', 'Half Elf', 'Half Orc', 'Halfling', 'Human', 'Tiefling']
const raceSCAG = ['Tiefling', 'Half Elf']
const raceTCE = ['Custom Lineage']
const raceTTP = ['Tortle']
const raceVGM = ['Aasimar', 'Firbolg', 'Goliath', 'Kenku', 'Kobold', 'Lizardfolk', 'Tabaxi', 'Yuan-ti']
const raceVRGR = ['Dhampir', 'Hexblood', 'Reborn']
const raceWBW = ['Harengon', 'Fairy']
const raceFToD = ['Dragonborn']
const raceMPMM = ['Aarakocra', 'Aasimar', 'Bugbear', 'Centaur', 'Changeling', 'Gnome', 'Dwarf', 'Elf', 'Fairy', 'Firbolg', 'Genasi', 'Gith', 'Goblin', 'Goliath', 'Harengon', 'Hobgoblin', 'Kenku', 'Kobold', 'Lizardfolk', 'Minotaur', 'Orc', 'Satyr', 'Shifter', 'Tabaxi', 'Tortle', 'Triton', 'Yuan-ti']
const raceSCoC = ['Owlin']
const raceSAIS = ['Elf', 'Autognome', 'Giff', 'Hadozee', 'Plasmoid', 'Thri-kreen']
const raceDSotDQ = ['Gnome']
// after filtering sourcebooks:
let race = []
race = race.concat(raceAI, raceEEPC, raceEGW, raceERLW, raceUARoR, raceGGR, raceMOT, raceMTF, racePHB, raceSCAG)
race = [...new Set(race)]
console.log(race)
/*const feats = [{name: 'feat1'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}];
feats.forEach((element) => {
    switch (element.name) {
        case 'feat1':
        element.srcBook = 'srcBook1';
    }
});*/