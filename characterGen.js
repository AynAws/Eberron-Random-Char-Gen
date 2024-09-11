// Races sorted by source for source restricting later, no subraces
const raceAI = ['Verdan'];
const raceEEPC = ['Aarakocra', 'Genasi'];
const raceEE = ['Gnoll']
/*
SUBRACES/VARIANTS
EEPC:
    Genasi:
        Fire Genasi, Earth Genasi, Air Genasi, Water Genasi
EE:
    Aasimar:
        (Court)*, (Seeker)*, (Fernian)*, Mabaran*
    Elf:
        Aereni Elf
    Dwarf:
        Ruinbound Dwarf
    Goblin:
        Dhakaani Golin'dar
    Bugbear:
        Dhakaani Guul'dar
    Triton:
        (Kalamer)*
EGW:
    Dragonborn:
        (Draconblood), (Ravenite)
ERLW:
    Dwarf:
        (Mark of Warding)
    Elf:
        (Mark of Shadow)
    Gnome:
        (Mark of Scribing)
    Goblin:
        Goblin

*Check spreadsheets for server-specific errata
*/

/*
    I think i found a good way to make this generation
    const feats = [feat1 {}, feat2 {}, feat3 {}...]
    feats.forEach((n) =>
        switch (element.name) {
            case 'feat1':
            element.srcBook = 'srcBook1';
        }
    )
*/
const feats = [{name: 'feat1'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}, {name: 'feat2'}];
feats.forEach((element) => {
    switch (element.name) {
        case 'feat1':
        element.srcBook = 'srcBook1';
    }
});