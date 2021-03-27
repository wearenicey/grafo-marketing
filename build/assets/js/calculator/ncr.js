let priceCards = [
    [19.7, 30.3, 41, 62.4],
    [26.5, 37.2, 50, 70],
    [35, 46.2, 59, 77],
    [50.8, 66.7, 83.3, 105.1],
    [70.5, 89.7, 115.4, 141],
    [123.9, 145.3, 169.2, 196.6]
];

function calculateCards() {

    let tiraz = parseInt(0);
    let papir = parseInt($('#value :selected').val());
    let total = parseInt(document.getElementById("numberCards").value);
    let a = $("#dimension option:selected").text();
    let br = $("#numberCards option:selected").text();
    let boja = $("#value option:selected").text();

    if (total == 5) {
        tiraz = 0;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";
        txt4 = "Rok izrade: 7 - 10 radnih dana."

    }

    else if (total == 10) {
        tiraz = 1;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";
        txt4 = "Rok izrade: 7 - 10 radnih dana."



    }
    else if (total == 20) {
        tiraz = 2;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";
        txt4 = "Rok izrade: 7 - 10 radnih dana."



    }
    else if (total == 30) {
        tiraz = 3;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";


    }
    else if (total == 50) {
        tiraz = 4;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";
        txt4 = "Rok izrade: 7 - 10 radnih dana."



    }
    else if (total == 100) {
        tiraz = 5;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";
        txt4 = "Rok izrade: 7 - 10 radnih dana."



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
