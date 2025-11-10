var campoNome = document.getElementById("campoNome");
var campoCognome = document.getElementById("campoCognome");
var campoDataNascita = document.getElementById("campoDataNascita");
var campoIndirizzo = document.getElementById("campoIndirizzo");
var campoCitta = document.getElementById("campoCitta");
var campoCAP = document.getElementById("campoCAP");
var campoProvincia = document.getElementById("campoProvincia");
var campoSesso = document.getElementsByName("campoSesso");
var campoMezzi = document.getElementsByName("campoMezzi");
var campoMateria = document.getElementById("campoMateria");

var outputNome = document.getElementById("outputNome");
var outputCognome = document.getElementById("outputCognome");
var outputIndirizzo = document.getElementById("outputIndirizzo");
var outputCitta = document.getElementById("outputCitta");
var outputCAP = document.getElementById("outputCAP");
var outputData = document.getElementById("outputData");
var outputSesso = document.getElementById("outputSesso");
var outputProvincia = document.getElementById("outputProvincia");
var outputMezzi = document.getElementById("outputMezzi");
var outputMateria = document.getElementById("outputMateria");

var generazioni = {
    "Greatest Generation": { inizio: 1901, fine: 1927 },
    "Silent Generation": { inizio: 1928, fine: 1945 },
    "Baby Boomers": { inizio: 1946, fine: 1964 },
    "Generation X": { inizio: 1965, fine: 1980 },
    "Millennials": { inizio: 1981, fine: 1996 },
    "Generation Z": { inizio: 1997, fine: 2012 },
    "Generation Alpha": { inizio: 2013, fine: 2025 }
};

function generaProfilo() {
    var nome = campoNome.value;
    var cognome = campoCognome.value;
    var data = new Date(campoDataNascita.value);
    var indirizzo = campoIndirizzo.value;
    var citta = campoCitta.value;
    var cap = campoCAP.value;
    var provincia = campoProvincia.value;

    var generazione = "Generazione sconosciuta";
    for (var chiave in generazioni) {
        var inizio = generazioni[chiave].inizio;
        var fine = generazioni[chiave].fine;
        if (data.getFullYear() >= inizio && data.getFullYear() <= fine) {
            generazione = chiave;
            break;
        }
    }

    var sessoSelezionato = "Non specificato";
    for (var i = 0; i < campoSesso.length; i++) {
        if (campoSesso[i].checked) {
            sessoSelezionato = campoSesso[i].value;
            break;
        }
    }

    var mezziPosseduti = [];
    for (var j = 0; j < campoMezzi.length; j++) {
        if (campoMezzi[j].checked) {
            mezziPosseduti.push(campoMezzi[j].value);
        }
    }

    outputNome.textContent = "Nome: " + nome;
    outputCognome.textContent = "Cognome: " + cognome;
    outputIndirizzo.textContent = "Indirizzo: " + indirizzo;
    outputCitta.textContent = "Città: " + citta;
    outputCAP.textContent = "CAP: " + cap;
    outputProvincia.textContent = "Provincia: " + provincia;
    outputSesso.textContent = "Sesso: " + sessoSelezionato;
    outputData.textContent = "Data di nascita: " + data.toLocaleDateString() + " (" + generazione + ")";
    outputMezzi.textContent = "Mezzi di locomozione: " + (mezziPosseduti.length > 0 ? mezziPosseduti.join(", ") : "Nessuno");
    outputMateria.textContent = "Materia preferita: " + campoMateria.value;
}
