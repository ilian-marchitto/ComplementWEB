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

            let O_elementDiv = document.getElementById("bordure");
            let O_commentaire = document.getElementById("commentaire");
            let O_temperatureMeter = document.getElementById("temperatureMeter");
            O_commentaire.hidden = true;
            if (A_tableau20Valeurs[i] < 0) {

                O_commentaire.hidden = false;
                O_commentaire.textContent = "Brrrrrrr, un peu froid ce matin, mets ta cagoule !";

                O_elementDiv.className = "bordure-bleue";

                O_temperatureMeter.setAttribute("value", A_tableau20Valeurs[i]);

            } else if (A_tableau20Valeurs[i] >= 0 && A_tableau20Valeurs[i] < 20) {

                O_commentaire.hidden = true;
                O_elementDiv.className = "bordure-verte";

                O_temperatureMeter.setAttribute("value", A_tableau20Valeurs[i]);

            } else if (A_tableau20Valeurs[i] >= 20 && A_tableau20Valeurs[i] < 30) {

                O_commentaire.hidden = true;
                O_elementDiv.className = "bordure-orange";

                O_temperatureMeter.setAttribute("value", A_tableau20Valeurs[i]);

            } else if (A_tableau20Valeurs[i] >= 30) {

                O_commentaire.hidden = false;
                O_commentaire.textContent = "Caliente ! Vamos a la playa, ho hoho hoho !!";

                O_elementDiv.className = "bordure-rouge";

                O_temperatureMeter.setAttribute("value", A_tableau20Valeurs[i]);
            }
            
        } else { i = -1; } // Pour que ça le fasse en boucle 
        clearInterval();
        i++;
    }, 2000);
}
afficherValeurParValeur();

