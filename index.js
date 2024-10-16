const prompt = require("prompt-sync")();

let hero_name;
let hero_xp;
let hero_rank;

hero_name = prompt("Digite o nome do seu heroi: ");
hero_xp = parseInt(prompt("Digite a quantidade de XP que seu heroi possui: "));

if (hero_xp < 1000) {
    hero_rank = 'Ferro';
} else if (hero_xp <= 2000) {
    hero_rank = 'Bronze';
} else if (hero_xp <= 5000) {
    hero_rank = 'Prata';
} else if (hero_xp <= 7000) {
    hero_rank = 'Ouro';
} else if (hero_xp <= 8000) {
    hero_rank = 'Platina';
} else if (hero_xp <= 9000) {
    hero_rank = 'Ascendente';
} else if (hero_xp <= 10000) {
    hero_rank = 'Imortal';
} else {
    hero_rank = 'Radiante';
}

console.log(`O heroi de nome ${hero_name} está no nível ${hero_rank}, com o total de ${hero_xp} de XP acumulada.`);
