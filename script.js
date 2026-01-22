// Fonction pour générer un nombre aléatoire
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// Initialisation d'un tableau avec 20 valeurs aléatoires entre -10 et 40
var tableau20Valeurs = [];

// Remplissage du tableau avec des valeurs aléatoires
for (var i = 0; i < 20; i++) {
    tableau20Valeurs.push(getRandomArbitrary(-10, 40));
}


// Affichage du tableau dans la console
console.log("Tableau des 20 valeurs aléatoires :", tableau20Valeurs);