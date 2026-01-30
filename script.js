class C_script {
    // Initialisation d'un tableau avec 20 valeurs aléatoires entre -10 et 40
    A_tableau20Valeurs = [];

    // Affichage de la première valeur dans l'élément HTML avec l'ID "O_firstValue"
    O_firstValue = document.getElementById("O_firstValue");

    constructor() {
        for (var i = 0; i < 20; i++) {
            this.A_tableau20Valeurs.push(this.getRandomArbitrary(-10, 40));
        }

        this.O_firstValue.textContent = this.A_tableau20Valeurs[0];

        this.afficherValeurParValeur(this.A_tableau20Valeurs);

        this.GestionnairePage();
    }

    // Fonction pour générer un nombre aléatoire
    getRandomArbitrary(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    // Fonction pour afficher chaque valeur du tableau une par une toutes les secondes
    afficherValeurParValeur(A_tableau20Valeurs) {
        let i = 0;
        setInterval(function () {
            if (i < A_tableau20Valeurs.length) {

                O_firstValue.textContent = A_tableau20Valeurs[i];

                let O_elementDiv = document.getElementById("bordure");

                let O_commentaire = document.getElementById("commentaire");
                O_commentaire.hidden = true;

                let O_temperatureMeter = document.getElementById("temperatureMeter");

                let O_historique = document.getElementById("historique");
                O_historique.innerHTML += "<li>" + A_tableau20Valeurs[i] + "°C</li>";

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

    GestionnairePage() {
        // Gestion de l'affichage des parties température et historique
        const O_temperature = document.getElementById("afficherPartieTemperature");
        const O_historique = document.getElementById("afficherPartieHistorique");

        let O_partieTemprature = document.getElementById("partieTemprature");
        let O_partieHistorique = document.getElementById("partieHistorique");
        O_partieTemprature.hidden = true;
        O_partieHistorique.hidden = true;

        O_temperature.addEventListener("click", function () {
            O_partieTemprature.hidden = !O_partieTemprature.hidden;
        });

        O_historique.addEventListener("click", function () {
            O_partieHistorique.hidden = !O_partieHistorique.hidden;
        });
    }
}

new C_script();
