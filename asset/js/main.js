// let nomi = ["Marco", "Giacomo", "Giovanni"];
// for (i = 0; i < nomi.length; i++) {
//     console.log(nomi[i]);
// }

// let userWord = 'Tastiera';
// let trovato = false;

// let text = ['tavolo', 'sedia', 'libro', 'mouse'];

// console.log(text);

// for (let i = 0; i < text.length; i++) {
//     text.push = userWord;
//     console.log(text[i]);
//     if (userWord === text[i]) {
//         trovato = true;
//     }
// }

// if (trovato) {
//     console.log('OK, trovato!')
// } else {
//     console.log("crash");
// }

const emailButton = document.getElementById('email');
const dadiButton = document.getElementById('dadi');
const esciButton = document.getElementById('esci');
const playEmail = document.getElementById('playEmail');

//const titlePage = document.getElementsByTagName('h1');


emailButton.addEventListener('click', function () {
    // nascondoBottone e mostro bottone per uscire dalla pagina e tornare alla home
    dadiButton.classList = 'd-none';
    esciButton.classList.remove('d-none');
    emailButton.classList.add('active');

    //creo un elemento dinamico per stampare il risultato
    let result = document.createElement("div");

    // pulisce eventuali altre prove fatte
    result.setAttribute("class", "");
    result.innerHTML = '';


    //     Mail
    // Chiedi all’utente la sua email,
    // controlla che sia nella lista di chi può accedere,
    // stampa un messaggio appropriato sull’esito del controllo.

    //al cliccare del bottone faccio apparire il form di input
    playEmail.classList.remove('d-none');
    playEmail.classList.add('d-flex');

    //leggere il valore della mail stabilita dall'utente
    let mailUser = document.querySelector('input');
    const btnsmall = document.querySelector('.btn-small');
    btnsmall.addEventListener('click', function () {
        let valueMail = mailUser.value;

        let mailAutorizzate = ['mario.rossi@gmail.com', 'test@test.it', 'info@dabecomunicazione.it'];

        let mailTrovata = false;


        for (let i = 0; i < mailAutorizzate.length; i++) {
            console.log(mailAutorizzate[i]);
            if (valueMail.toLowerCase() === mailAutorizzate[i].toLowerCase()) {
                mailTrovata = true;
            }
        }

        result.setAttribute("class", "container result");
        //verifica la condizione
        if (mailTrovata) {
            result.innerHTML = "Mail autorizzata";
            result.classList.add('win');
        } else {
            result.innerHTML = "Spiacente: accesso negato!";
            result.classList.add('game-over')
        }
        // stampa in pagina il risultato
        document.body.appendChild(result);

    })





})

// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


dadiButton.addEventListener('click', function () {
    // nascondoBottone e  mostro bottone per uscire
    emailButton.classList = 'd-none';
    esciButton.classList.remove('d-none');
    dadiButton.classList.add('active');

    let userNumber = document.createElement('div');
    let pcNumber = document.createElement('div');
    let container = document.createElement('div');
    container.setAttribute("class", "container d-flex");
    pcNumber.setAttribute("class", "text-center");
    userNumber.setAttribute("class", "text-center");
    let numeroRandomUser = parseInt(Math.random() * 6 + 1);
    let numeroRandomPC = parseInt(Math.random() * 6 + 1);
    userNumber.innerHTML = `Scelta dell'utente: ${numeroRandomUser}`;
    pcNumber.innerHTML = `Scelta del pc: ${numeroRandomPC}`;
    // stampa i numeri a schermo
    document.body.appendChild(container);
    container.appendChild(userNumber);
    container.appendChild(pcNumber);

    // genera il div e stampare il risultato
    let result = document.createElement("div");
    result.setAttribute("class", "container result");
    result.innerHTML = '';
    if (numeroRandomUser === numeroRandomPC) {
        result.innerHTML = "Hai pareggiato";
        result.classList.add('game-over');
    } else if (numeroRandomUser < numeroRandomPC) {
        result.innerHTML = "Ha vinto il pc";
        result.classList.add('game-over');
    } else {
        result.innerHTML = "Hai vinto tu!";
        result.classList.add('win');
    }

    document.body.appendChild(result);

})

