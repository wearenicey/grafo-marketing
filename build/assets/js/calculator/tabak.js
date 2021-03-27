let cena = [
    [90, 150, 100],
    [55, 75, 63],
    [48, 68, 56],
    [38, 63, 46]
];

function calculate() {

    let tiraz = 0;
    let papir = parseInt($('#papira :selected').val());
    let tabak = parseInt($('#tabak :selected').val());
    let a = $("#papira option:selected").text();
    let boja = $("#color option:selected").text();
    let tabakIme = $("#tabak option:selected").text();

    if (papir === 0) {
        let color = $('#color :selected').val();
        papir += parseInt(color);
        console.log(papir)
    }
    let color = $('#color :selected').val();
    console.log(color)

    let total = parseInt(document.getElementById("totalval").value);
    let tezina = parseInt($('input[name="typeOfListingRadio1"]:checked').val());


    if (total <= 10) {
        tiraz = 0;
        priceRange = "1-10";
    }
    else if ((total >= 11) && (total <= 100)) {
        tiraz = 1;
        priceRange = "11-100";

    }
    else if ((total >= 101) && (total <= 250)) {
        tiraz = 2;
        priceRange = "101-250";

    }
    else if ((total >= 251) && (total <= 500)) {
        tiraz = 3;
        priceRange = "251-500";

    }

    let ukupno = (cena[tiraz][papir] + tabak + tezina) * total;
    console.log(tiraz);
    console.log(papir);
    document.getElementById("ukupno").innerHTML = ukupno || 0;
    document.getElementById("jedan").innerHTML = "Tiraz " + priceRange + ":";
    document.getElementById("komad").innerHTML = cena[tiraz][papir] + " DIN";
    document.getElementById("kolor").innerHTML = boja;
    document.getElementById("cena2").innerHTML = cena[tiraz][papir] + " DIN";
    document.getElementById("papiri").innerHTML = a + ": ";
    document.getElementById("ime").innerHTML = tabakIme + ": ";
    document.getElementById("cijena").innerHTML = tabak + " DIN";


    // document.getElementById("cijena").innerHTML = oe + " DIN";
}


// Pozivanje funkcije
$(document).ready(function () {
    $('#form').keyup(function () {
        calculate()
    });
    $('#form').change(function () {
        calculate()
    });
});
