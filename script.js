class C_script {
    constructor() {
        this.initDonnees();
        this.selectionnerElements();
        this.configurerEvenements();
        this.affichage();
    }

     // Initialisation d'un tableau avec 20 valeurs aléatoires entre -10 et 40
    initDonnees() {
        this.A_tableau20Valeurs = [];
        for (var i = 0; i < 20; i++) {
            this.A_tableau20Valeurs.push(this.getRandomArbitrary(-10, 40));
        }
    }

    // Fonction pour générer un nombre aléatoire
    getRandomArbitrary(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    // Fonction pour sélectionner les éléments
    selectionnerElements() {
        this.O_firstValue = document.getElementById("O_firstValue");
        this.O_elementDiv = document.getElementById("bordure");
        this.O_commentaire = document.getElementById("commentaire");
        this.O_temperatureMeter = document.getElementById("temperatureMeter");
        this.O_historique = document.getElementById("historique");
        this.O_partieTemprature = document.getElementById("partieTemprature");
        this.O_partieHistorique = document.getElementById("partieHistorique");
        
        // Initialisation de l'affichage
        this.O_firstValue.textContent = this.A_tableau20Valeurs[0];
        this.O_partieTemprature.hidden = true;
        this.O_partieHistorique.hidden = true;
    }
    

    // Fonction d'affichage des températures toutes les 2 secondes
    affichage() {
        let i = 0;
        setInterval(() => {
            if (i < this.A_tableau20Valeurs.length) {
                this.mettreAJourInterface(this.A_tableau20Valeurs[i]);
                this.ajouterAHistorique(this.A_tableau20Valeurs[i]);
            } else { i = -1; } // Pour que ça le fasse en boucle
            clearInterval(); 
            i++;
        }, 2000);
    }

    // Fonction de mise à jour de l'interface
    mettreAJourInterface(temperature) {
        this.O_firstValue.textContent = temperature;
        this.O_temperatureMeter.setAttribute("value", temperature);
        this.O_commentaire.hidden = true;

        if (temperature < 0) {
            this.O_commentaire.hidden = false;
            this.O_commentaire.textContent = "Brrrrrrr, un peu froid ce matin, mets ta cagoule !";
            this.O_elementDiv.className = "bordure-bleue";
        } 
        else if (temperature >= 0 && temperature < 20) {
            this.O_elementDiv.className = "bordure-verte";
        } 
        else if (temperature >= 20 && temperature < 30) {
            this.O_elementDiv.className = "bordure-orange";
        } 
        else if (temperature >= 30) {
            this.O_commentaire.hidden = false;
            this.O_commentaire.textContent = "Caliente ! Vamos a la playa, ho hoho hoho !!";
            this.O_elementDiv.className = "bordure-rouge";
        }
    }

    // Fonction pour ajouter une température à l'historique
    ajouterAHistorique(temperature) {
        this.O_historique.innerHTML += "<li>" + temperature + "°C</li>";
    }

    // Fonction de gestion de l'affichage des parties température et historique
    configurerEvenements() {
        const btnTemp = document.getElementById("afficherPartieTemperature");
        const btnHist = document.getElementById("afficherPartieHistorique");

        btnTemp.addEventListener("click", () => {
            this.O_partieTemprature.hidden = !this.O_partieTemprature.hidden;
        });

        btnHist.addEventListener("click", () => {
            this.O_partieHistorique.hidden = !this.O_partieHistorique.hidden;
        });
    }
}

new C_script();