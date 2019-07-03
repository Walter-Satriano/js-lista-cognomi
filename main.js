/*ESERCIZIO: Chiedi all’utente il cognome, inseriscilo in un array
con altri cognomi e stampa la lista ordinata alfabeticamente.
Scrivi a che posizione della lista il nuovo utente si trova. */


// Definizione variabili
var elemento = document.getElementById("surname-list");
var userSurname, surnameList, listTemp;

// Chiedo all'utente il suo cognome
userSurname = prompt("Inserisci qui il tuo cognome. La prima lettera deve essere maiuscola.");

// Creo una lista di cognomi (array) inserendo l'input dell'utente
surnameList = [
  "Fumagalli",
  "Verdi",
  "Grandi",
  "Wolf",
  "Rossi",
  "Brambilla",
  "Antani",
  userSurname
];

// Lista ordinata alfabeticamente
surnameList.sort();

// Stampo a schermo la lista ordinata alfabeticamente con ciclo FOR
for (var i = 0; i < surnameList.length; i++) {

  listTemp = elemento.innerHTML;
  console.log(listTemp);

  elemento.innerHTML = listTemp + "<li>" + surnameList[i] + "</li>";
}

// Stampo la posizione del nuovo utente
console.log("La posizione del nuovo utente è: " + surnameList.indexOf(userSurname));
