import { sujetSurEcoute } from "./sujetSurEcoute.js";
import { C_gererHistorique } from "./gererHistorique.js";
import { C_gererValeurTempsReel } from "./gererValeurTempsReel.js";

class C_script {
    constructor() {
        this.sujetSurEcoute = new sujetSurEcoute();

        this.gererValeurTempsReel = new C_gererValeurTempsReel();
        this.gererHistorique = new C_gererHistorique();

        this.sujetSurEcoute.subscribe(this.gererValeurTempsReel);
        this.sujetSurEcoute.subscribe(this.gererHistorique);

        this.gestionnairePage();

        this.sujetSurEcoute.lancerCycle();
    }

    // Gestion de l'affichage des parties température et historique
    gestionnairePage() {
        
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