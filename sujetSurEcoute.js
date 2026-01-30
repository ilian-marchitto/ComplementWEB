// La classe crée un tableau de 20 valeurs aléatoires entre -10 et 40
class sujetSurEcoute {
    // Initialisation d'un tableau avec 20 valeurs aléatoires entre -10 et 40
    A_tableau20Valeurs = [];

    // Affichage de la première valeur dans l'élément HTML avec l'ID "O_firstValue"
    O_firstValue = document.getElementById("O_firstValue");

    constructor() {
        for (var i = 0; i < 20; i++) {
            this.A_tableau20Valeurs.push(this.getRandomArbitrary(-10, 40));
        }
    }

    // Fonction pour générer un nombre aléatoire
    getRandomArbitrary(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
}