// Fonction pour générer un nombre aléatoire
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// Initialisation d'un tableau avec 20 valeurs aléatoires entre -10 et 40
var A_tableau20Valeurs = [];

// Remplissage du tableau avec des valeurs aléatoires
for (var i = 0; i < 20; i++) {
    A_tableau20Valeurs.push(getRandomArbitrary(-10, 40));
}

// Affichage du tableau dans la console
console.log("Tableau des 20 valeurs aléatoires :", A_tableau20Valeurs);

// Affichage de la première valeur dans l'élément HTML avec l'ID "O_firstValue"
var O_firstValue = document.getElementById("O_firstValue");
O_firstValue.textContent = A_tableau20Valeurs[0];

// Fonction pour afficher chaque valeur du tableau une par une toutes les secondes
function afficherValeurParValeur() {
    let i = 0;
    setInterval(function () {
        if (i < A_tableau20Valeurs.length) {
            O_firstValue.textContent = A_tableau20Valeurs[i];
        } else {
            clearInterval();
        }
        i++;
    }, 1000);
}
afficherValeurParValeur();
