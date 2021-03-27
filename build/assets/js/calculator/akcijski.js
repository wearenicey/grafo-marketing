

let priceCards = [
    [30, 30],
    [58, 58]


];

let priceCards2 = [
    [60, 60],
    [118, 118]


];

function calculateCards() {




    let tiraz = parseInt(0);
    let papir = parseInt($('#value :selected').val());
    let total = parseInt(document.getElementById("numberCards").value);
    let a = $("#dimension option:selected").text();
    let br = $("#numberCards option:selected").text();
    let boja = $("#value option:selected").text();






    if (total == 5000) {
        tiraz = 0;
        priceRange = "5000";
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";
    }

    else if (total == 10000) {
        tiraz = 1;
        priceRange = "10000";
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";


    }


    let ukupno = ((priceCards[tiraz][papir]).toFixed(2)) || 0;
    cijena = priceCards[tiraz][papir] || 0;

    console.log(ukupno);
    document.getElementById("rez").innerHTML = ukupno;


    document.getElementById("paper").innerHTML = "Dimenzije: " + a;
    document.getElementById("broj").innerHTML = "Tiraž: " + br;
    document.getElementById("color").innerHTML = "Boja: " + boja;
    document.getElementById("tekst").innerHTML = txt;
    document.getElementById("tekst2").innerHTML = txt2;



}

function calculateCards2() {

    let tiraz = parseInt(0);
    let papir = parseInt($('#value :selected').val());
    let total = parseInt(document.getElementById("numberCards").value);
    let a = $("#dimension option:selected").text();
    let br = $("#numberCards option:selected").text();
    let boja = $("#value option:selected").text();






    if (total == 5000) {
        tiraz = 0;
        priceRange = "5000";
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";
    }

    else if (total == 10000) {
        tiraz = 1;
        priceRange = "10000";
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";


    }


    let ukupno = ((priceCards2[tiraz][papir]).toFixed(2)) || 0;
    cijena = priceCards2[tiraz][papir] || 0;

    console.log(ukupno);
    document.getElementById("rez").innerHTML = ukupno;


    document.getElementById("paper").innerHTML = "Dimenzije: " + a;
    document.getElementById("broj").innerHTML = "Tiraž: " + br;
    document.getElementById("color").innerHTML = "Boja: " + boja;
    document.getElementById("tekst").innerHTML = txt;
    document.getElementById("tekst2").innerHTML = txt2;



}


$('#forma').change(function () {
    let formula = parseInt($('#dimension :selected').val());

    if (formula == 1)
        calculateCards();
    if (formula == 2)
        calculateCards2();

});
