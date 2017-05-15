// array
var people = [];

function hozzaad() {
    var person = {
        firstName: "",
        lastName: ""
    }

    person.lastName = document.querySelector("#veznev").value;
    person.firstName = document.querySelector("#kernev").value;

    // push: hozzáadja az elemet a tömbhöz
    people.push(person);

    // meghívjuk a JSON konvertálást
    konvertalas();

    // meghívjuk a div-hez hozzáadást
    hozzafuzes(person);
}

// JSON konvertálás metódusa
function konvertalas() {
    var peopleText = JSON.stringify(people);
    localStorage.setItem("people", peopleText);
}

// div-hez a nevek hozzáfűzése
function hozzafuzes(person) {
    // létrehoz egy paragraph-ot, hozzáadja a szöveget
    var paragraph = document.createElement("p");
    var node = document.createTextNode(person.lastName + " " + person.firstName);
    paragraph.appendChild(node);

    // megkeresi a div-et és hozzáadja a paragraph-ot
    var element = document.getElementById("resultdiv");
    element.appendChild(paragraph);
}

// beolvasás metódus
function beolvas() {
    // div törlés
    document.getElementById("resultdiv").innerHTML = "";

    var peopleText = localStorage.getItem("people");
    people = JSON.parse(peopleText);

    for (var i = 0; i < people.length; i++) {
        person = people[i];
        hozzafuzes(person);
    }
}

function torol() {
    document.getElementById("resultdiv").innerHTML = "";
    document.getElementById("veznev").value = "";
    document.getElementById("kernev").value = "";
}