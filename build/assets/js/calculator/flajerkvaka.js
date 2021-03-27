let priceCards = [
    [111.1, 119.6, 68.4, 75.2],
    [115.4, 123.9, 72.6, 79.5],
    [122.2, 128.2, 76, 84.6],
    [128.2, 136.8, 85.5, 94],
    [145.3, 153.8, 94, 102.6],
    [162.4, 170.9, 111.1, 119.6],
    [179.5, 188, 128.2, 136.8],
    [192.3, 202.6, 139.3, 153.8],
    [217.9, 230.8, 156.4, 179.5],
    [252.1, 277.8, 183.8, 213.7],
    [393.2, 418.8, 337.6, 371.8]

];

let priceCards2 = [
    [119.7, 123.9, 72.6, 81.2],
    [126.5, 135, 81.2, 89.7],
    [135, 145.3, 89.7, 98.3],
    [152.1, 160.7, 110.3, 115.4],
    [170.9, 179.5, 119.6, 128.2],
    [183.7, 188, 132.5, 141],
    [196.6, 205.1, 145.3, 156.4],
    [213.7, 222.2, 162.4, 175.2],
    [239.3, 247.9, 192.3, 200.8],
    [273.5, 286.3, 222.2, 230.8],
    [457.3, 474.3, 418.8, 427.3]

];

function calculateCards() {

    let tiraz = parseInt(0);
    let papir = parseInt($('#value :selected').val());
    let total = parseInt(document.getElementById("numberCards").value);
    let a = $("#dimension option:selected").text();
    let br = $("#numberCards option:selected").text();
    let boja = $("#value option:selected").text();






    if (total == 2000) {
        tiraz = 0;
        priceRange = "500";
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";
    }

    else if (total == 3000) {
        tiraz = 1;
        priceRange = "1000";
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";


    }
    else if (total == 5000) {
        tiraz = 2;
        priceRange = "2000";
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";


    }
    else if (total == 10000) {
        tiraz = 3;
        priceRange = "5000";
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";


    }
    else if (total == 15000) {
        tiraz = 4;
        priceRange = "5000";
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";


    }
    else if (total == 20000) {
        tiraz = 5;
        priceRange = "5000";
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";


    }
    else if (total == 25000) {
        tiraz = 6;
        priceRange = "5000";
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";


    }
    else if (total == 30000) {
        tiraz = 7;
        priceRange = "5000";
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";


    }
    else if (total == 40000) {
        tiraz = 8;
        priceRange = "5000";
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";


    }
    else if (total == 50000) {
        tiraz = 9;
        priceRange = "5000";
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";


    }
    else if (total == 100000) {
        tiraz = 10;
        priceRange = "5000";
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






    if (total == 2000) {
        tiraz = 0;
        priceRange = "500";
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";
    }

    else if (total == 3000) {
        tiraz = 1;
        priceRange = "1000";
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";


    }
    else if (total == 5000) {
        tiraz = 2;
        priceRange = "2000";
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";


    }
    else if (total == 10000) {
        tiraz = 3;
        priceRange = "5000";
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";


    }
    else if (total == 15000) {
        tiraz = 4;
        priceRange = "5000";
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";


    }
    else if (total == 20000) {
        tiraz = 5;
        priceRange = "5000";
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";


    }
    else if (total == 25000) {
        tiraz = 6;
        priceRange = "5000";
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";


    }
    else if (total == 30000) {
        tiraz = 7;
        priceRange = "5000";
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";


    }
    else if (total == 40000) {
        tiraz = 8;
        priceRange = "5000";
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";


    }
    else if (total == 50000) {
        tiraz = 9;
        priceRange = "5000";
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";


    }
    else if (total == 100000) {
        tiraz = 10;
        priceRange = "5000";
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