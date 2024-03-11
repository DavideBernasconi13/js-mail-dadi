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
    playEmail.classList.remove('d-none');


})

dadiButton.addEventListener('click', function () {
    // nascondoBottone e titolo
    emailButton.classList = 'd-none';
    //titlePage.classList.add("d-none");
})

