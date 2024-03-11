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
const playEmail = document.getElementById('playEmail');

//const titlePage = document.getElementsByTagName('h1');


emailButton.addEventListener('click', function () {
    // nascondoBottone e titolo
    dadiButton.classList = 'd-none';
    //titlePage.classList.add("d-none");

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
            if (valueMail === mailAutorizzate[i]) {
                mailTrovata = true;
            }
        }

        //creo un elemento dinamico per stampare il risultato
        let result = document.createElement("div");
        result.classList.add('container', 'result');
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

dadiButton.addEventListener('click', function () {
    // nascondoBottone e titolo
    emailButton.classList = 'd-none';
    //titlePage.classList.add("d-none");
})

