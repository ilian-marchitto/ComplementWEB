class C_gererValeurTempsReel {
    constructor() {}

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
}