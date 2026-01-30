export class sujetSurEcoute {
    constructor() {
        this.observers = [];
        this.A_tableau20Valeurs = [];
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

    // Initialisation d'un tableau avec 20 valeurs aléatoires entre -10 et 40
    initDonnees() {
        for (let i = 0; i < 20; i++) {
            this.A_tableau20Valeurs.push(Math.floor(Math.random() * (40 - (-10)) + -10));
        }
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