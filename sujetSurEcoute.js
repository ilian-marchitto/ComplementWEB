import { C_genereValeursTemperatures } from "./genereValeursTemperatures.js";

export class sujetSurEcoute {
    constructor() {
        this.observers = [];
        this.A_tableau20Valeurs = new C_genereValeursTemperatures().getTableau20Valeurs();
        this.currentValue = null;
    }

    // On ajoute un observateur
    subscribe(observer) {
        this.observers.push(observer);
    }

    // On notifie tout le monde
    notify() {
        this.observers.forEach(observer => observer.update(this.currentValue));
    }
    // On lance le cycle de notification toutes les 2 secondes
    lancerCycle() {
        let i = 0;
        setInterval(() => {
            if (i < this.A_tableau20Valeurs.length) {
                this.currentValue = this.A_tableau20Valeurs[i];
                this.notify();
            } else {
                i = -1;
            }
            i++;
        }, 2000);
    }
}