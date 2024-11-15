
let iniziaGioco; // Variabile per memorizzare la scelta dell'utente

do {
    // Chiediamo all'utente se vuole giocare, con 1 per giocare e 2 per non giocare
    iniziaGioco = prompt("Premi 1 per giocare o 2 per non giocare.");

    if (iniziaGioco == "1") {
        // Se l'utente preme 1, avvia il gioco
        giocoDiDadi();
        break; // Esce dal ciclo
    } else if (iniziaGioco == "2") {
        // Se l'utente preme 2, il gioco non parte
        alert("Ciao a presto!");
        break; // Esce dal ciclo
    } else {
        // Se l'utente inserisce un valore diverso da 1 o 2
        alert("Scelta non valida! Per favore, premi 1 per giocare o 2 per non giocare.");
    }

} while (iniziaGioco != "1" && iniziaGioco != "2"); // Continua il ciclo finché l'utente non sceglie 1 o 2





function giocoDiDadi() {
    // Chiediamo all'utente il numero di tiri per ogni giocatore
    let numeroTiri = Number(prompt("Quanti tiri vuoi fare per ogni giocatore?"));

    // Controllo che l'input sia un numero valido
    while (isNaN(numeroTiri) || numeroTiri <= 0) {
        alert("Inserisci un numero valido e che sia maggiore di 0.");
        numeroTiri = Number(prompt("Quanti tiri vuoi fare per ogni giocatore?"));
    }

    console.log("Numero di tiri che ogni giocatore dovrà fare è: " + numeroTiri);

    // Funzione per simulare il lancio del dado
    function lanciaDado() {
        let risultato = Math.floor(Math.random() * (6 - 1) + 1); // generazione numero random
        return risultato;
    }

    // Funzione per calcolare il punteggio di un giocatore
    function calcolaPunteggio() {
        let punteggio = 0;
        for (let i = 0; i < numeroTiri; i++) {
            punteggio += lanciaDado(); // Somma il punteggio dei tiri
        }
        return punteggio;
    }

    // Calcoliamo il punteggio per ciascun giocatore
    let punteggioGiocatore1 = calcolaPunteggio();
    let punteggioGiocatore2 = calcolaPunteggio();

    // Stampa i punteggi
    console.log("Punteggio del Giocatore 1: " + punteggioGiocatore1);
    console.log("Punteggio del Giocatore 2: " + punteggioGiocatore2);

    // Controllo di chi ha vinto
    if (punteggioGiocatore1 > punteggioGiocatore2) {
        alert("Giocatore 1 vince! con un punteggio di " + punteggioGiocatore1);
    } else if (punteggioGiocatore2 > punteggioGiocatore1) {
        alert("Giocatore 2 vince! con un punteggio di " + punteggioGiocatore2);
    } else {
        alert("Pareggio!");
    }

}




