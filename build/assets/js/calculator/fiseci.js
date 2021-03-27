let priceCards = [
    [57.7, 77, 109],
    [75.2, 88, 115.4],
    [111.2, 128.2, 162.4],
    [213.7, 230.8, 265],

];

function calculateCards() {

    let tiraz = parseInt(0);
    let papir = parseInt($('#value :selected').val());
    let total = parseInt(document.getElementById("numberCards").value);
    let a = $("#dimension option:selected").text();
    let br = $("#numberCards option:selected").text();
    let boja = $("#value option:selected").text();

    if (total == 500) {
        tiraz = 0;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";
        txt4 = "Rok izrade: 5 - 7 radnih dana."



    }

    else if (total == 1000) {
        tiraz = 1;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";
        txt4 = "Rok izrade: 5 - 7 radnih dana."




    }
    else if (total == 2000) {
        tiraz = 2;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";
        txt4 = "Rok izrade: 5 - 7 radnih dana."




    }
    else if (total == 5000) {
        tiraz = 3;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";
        txt4 = "Rok izrade: 5 - 7 radnih dana."



    }

    let ukupno = ((priceCards[tiraz][papir]).toFixed(2)) || 0;
    cijena = priceCards[tiraz][papir] || 0;

    document.getElementById("rez").innerHTML = ukupno;
    document.getElementById("paper").innerHTML = "Dimenzije: " + a;
    document.getElementById("broj").innerHTML = "Tiraž: " + br;
    document.getElementById("color").innerHTML = "Boja: " + boja;
    document.getElementById("tekst").innerHTML = txt;
    document.getElementById("tekst2").innerHTML = txt2;
    document.getElementById("tekst4").innerHTML = txt4;






}

$('#forma').change(function () {
    let formula = parseInt($('#dimension :selected').val());

    if (formula == 1)
        calculateCards();
});
