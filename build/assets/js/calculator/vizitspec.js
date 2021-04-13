let priceCards = [
    [7.7, 9.4, 6.4, 7.3],
    [11.2, 14.6, 9.9, 11.2],
    [14.6, 18, 13.3, 14.6],
    [21.8, 26.1, 19.7, 22.3],
    [35, 43.6, 32.5, 39.8],
    [65.9, 83.8, 59.9, 72.7]
];

function calculateCards() {

    let lak = 0;
    let tiraz = parseInt(0);
    let papir = parseInt($('#value :selected').val());
    let total = parseInt(document.getElementById("numberCards").value);
    let cosak = parseFloat($('#cosak :selected').val());
    let lakiranje = parseInt($("input[name='custom']:checked").val());
    let a = $("#dimension option:selected").text();
    let br = $("#numberCards option:selected").text();
    let boja = $("#value option:selected").text();
    let lakovi = $("input[name=custom]:checked").attr("data-value") || "";
    let coskiranje = $("#cosak option:selected").text()






    if (total == 100) {
        tiraz = 0;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";
        if (cosak == 1)
            cosak = 1.3;
        txt4 = "Rok izrade 1-2 radna dana - sa coškiranjem";

        if (lakiranje == 1)
            lak = 0.9;

    }

    else if (total == 200) {
        tiraz = 1;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";
        if (cosak == 1)
            cosak = 2.6;
        txt4 = "Rok izrade 1-2 radna dana - sa coškiranjem";

        if (lakiranje == 1)
            lak = 1.8;

    }
    else if (total == 300) {
        tiraz = 2;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";
        if (cosak == 1)
            cosak = 3.9;
        txt4 = "Rok izrade 1-2 radna dana - sa coškiranjem";

        if (lakiranje == 1)
            lak = 2.7;

    }
    else if (total == 500) {
        tiraz = 3;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";
        if (cosak == 1)
            txt4 = "Rok izrade 1-2 radna dana - sa coškiranjem";

        cosak = 4.5;
        if (lakiranje == 1)
            lak = 4.5;

    }
    else if (total == 1000) {
        tiraz = 4;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";
        if (cosak == 1)
            cosak = 7;
        txt4 = "Rok izrade 1-2 radna dana - sa coškiranjem";

        if (lakiranje == 1)
            lak = 9;

    }
    else if (total == 2000) {
        tiraz = 5;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";
        if (cosak == 1)
            cosak = 14;
        txt4 = "Rok izrade 1-2 radna dana - sa coškiranjem";

        if (lakiranje == 1)
            lak = 18;

    }
    let ukupno = parseFloat((priceCards[tiraz][papir] + lak + cosak).toFixed(2)) || 0;
    cijena = priceCards[tiraz][papir] || 0;

    document.getElementById("rez").innerHTML = ukupno;
    txt3 = "Rok izrade 24h";

    document.getElementById("paper").innerHTML = "Dimenzije: " + a;
    document.getElementById("broj").innerHTML = "Tiraž: " + br;
    document.getElementById("color").innerHTML = "Boja: " + boja;
    document.getElementById("lakText").innerHTML = "Clear lak: " + lakovi || "";
    document.getElementById("tekst").innerHTML = txt;
    document.getElementById("tekst2").innerHTML = txt2;
    document.getElementById("tekst3").innerHTML = txt3;








}

let priceCards2 = [
    [8.2, 9.9, 6.9, 7.7],
    [12, 15.4, 10.7, 12],
    [16.3, 19.7, 15, 16.3],
    [24.8, 28.7, 22.3, 24.8],
    [36.8, 45.3, 32.5, 39.8],
    [70.1, 89.8, 63.3, 77]
];

function calculateCards2() {
    let plastifikacija = parseInt(0);
    let lak = 0;
    let tiraz = parseInt(0);
    let papir = parseInt($('#value :selected').val());
    let total = parseInt(document.getElementById("numberCards").value);
    let cosak = parseFloat($('#cosak :selected').val());
    let lakiranje = parseInt($("input[name='custom']:checked").val());
    let a = $("#dimension option:selected").text();
    let br = $("#numberCards option:selected").text();
    let boja = $("#value option:selected").text();
    let lakovi = $("input[name=custom]:checked").attr("data-value");

    if (total == 100) {
        tiraz = 0;
        priceRange = "100";

        if (cosak == 1)
            cosak = 1.3;
        txt4 = "Rok izrade 1-2 radna dana - sa coškiranjem";
        if (cosak == 0)
            txt4 = "";

        if (lakiranje == 1)
            lak = 0.9;

    }

    else if (total == 200) {
        tiraz = 1;
        priceRange = "200";

        if (cosak == 1)
            cosak = 2.6;
        txt4 = "Rok izrade 1-2 radna dana - sa coškiranjem";
        if (cosak == 0)
            txt4 = "";

        if (lakiranje == 1)
            lak = 1.8;

    }
    else if (total == 300) {
        tiraz = 2;
        priceRange = "300";

        if (cosak == 1)
            cosak = 3.9;
        txt4 = "Rok izrade 1-2 radna dana - sa coškiranjem";
        if (cosak == 0)
            txt4 = "";

        if (lakiranje == 1)
            lak = 2.7;

    }
    else if (total == 500) {
        tiraz = 3;
        priceRange = "500";

        if (cosak == 1)
            cosak = 4.5;
        txt4 = "Rok izrade 1-2 radna dana - sa coškiranjem";
        if (cosak == 0)
            txt4 = "";

        if (lakiranje == 1)
            lak = 4.5;

    }
    else if (total == 1000) {
        tiraz = 4;
        priceRange = "1000";

        if (cosak == 1)
            cosak = 7;
        txt4 = "Rok izrade 1-2 radna dana - sa coškiranjem";
        if (cosak == 0)
            txt4 = "";

        if (lakiranje == 1)
            lak = 9;

    }
    else if (total == 2000) {
        tiraz = 5;
        priceRange = "2000";

        if (cosak == 1)
            cosak = 14;
        txt4 = "Rok izrade 1-2 radna dana - sa coškiranjem";

        if (cosak == 0)
            txt4 = "";

        if (lakiranje == 1)
            lak = 18;

    }
    let ukupno = parseFloat((priceCards2[tiraz][papir] + lak + cosak).toFixed(2)) || 0;
    document.getElementById("rez").innerHTML = ukupno;
    cijena = priceCards2[tiraz][papir] || 0;
    txt3 = "Rok izrade 24h";
    txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
    txt2 = "*1e se racuna po srednjem kursu NBRS";


    document.getElementById("paper").innerHTML = "Dimenzije: " + a;
    document.getElementById("broj").innerHTML = "Tiraž: " + br;
    document.getElementById("color").innerHTML = "Boja: " + boja;
    document.getElementById("lakText").innerHTML = "Clear lak: " + lakovi || "";
    document.getElementById("tekst3").innerHTML = txt3;
    document.getElementById("tekst").innerHTML = txt;
    document.getElementById("tekst2").innerHTML = txt2;
    document.getElementById("tekst4").innerHTML = txt4;



}

// mijenjanje formule
$('#forma').change(function () {
    let formula = parseInt($('#dimension :selected').val());


    if (formula == 1 && $('#cosak :selected').val())
        calculateCards();
    if (formula == 2 && $('#cosak :selected').val())
        calculateCards2();

});
