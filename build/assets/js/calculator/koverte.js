

let amerikan = [
    [85.5, 38.5, 29.9],
    [85.5, 42.7, 34.2],
    [89.7, 43.6, 35.9],
    [106.8, 51.3, 40.6],
    [111.1, 59.8, 51.3],
    [128.8, 76.9, 64.1],
    [136.8, 76.9, 68.4]
];

let b5 = [
    [85.5, 38.5, 29.9],
    [85.5, 42.7, 34.2],
    [89.7, 43.6, 35.9],
    [106.8, 51.3, 40.6],
    [111.1, 59.8, 51.3],
    [128.2, 76.9, 64.1],
    [136.8, 76.9, 68.4]
];

let c4 = [
    [111.1, 42.7, 34.2],
    [111.1, 47.9, 41],
    [115.4, 48.7, 41],
    [119.7, 55.6, 47],
    [128.2, 68.4, 59.8],
    [141, 89.7, 76.9],
    [153.8, 102.6, 85.5]
];

function calculateCards() {

    let tiraz = parseInt(0);
    let papir = parseInt($('#value :selected').val());
    let total = parseInt(document.getElementById("kolicina").value);
    let a = $("#dimension option:selected").text();
    let br = $("#kolicina option:selected").text();
    let boja = $("#value option:selected").text();







    if (total == 100) {
        tiraz = 0;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";
        txt4 = "Rok izrade: 7 - 10 radnih dana."


        koverta = 0.022;
    }

    else if (total == 200) {
        tiraz = 1;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";
        txt4 = "Rok izrade: 7 - 10 radnih dana.";
        txt4 = "Rok izrade: 7 - 10 radnih dana."



        koverta = 0.022;

    }
    else if (total == 300) {
        tiraz = 2;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";
        txt4 = "Rok izrade: 7 - 10 radnih dana."


        koverta = 0.022;


    }
    else if (total == 500) {
        tiraz = 3;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";
        txt4 = "Rok izrade: 7 - 10 radnih dana."


        koverta = 0.022;


    }
    else if (total == 1000) {
        tiraz = 4;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";
        txt4 = "Rok izrade: 7 - 10 radnih dana."


        koverta = 0.022;


    }
    else if (total == 1500) {
        tiraz = 5;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";
        txt4 = "Rok izrade: 7 - 10 radnih dana."


        koverta = 0.022;


    }
    else if (total == 2000) {
        tiraz = 6;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";
        txt4 = "Rok izrade: 7 - 10 radnih dana."


        koverta = 0.022;


    }

    let ukupno = (amerikan[tiraz][papir]) || 0;
    let konacno = (ukupno + (total * koverta)).toFixed(2);

    console.log(ukupno);
    document.getElementById("rez").innerHTML = konacno;
    document.getElementById("paper").innerHTML = "Dimenzije: " + a;
    document.getElementById("tiraz").innerHTML = "Tiraž: " + br;
    document.getElementById("color").innerHTML = "Boja: " + boja;
    document.getElementById("tekst").innerHTML = txt;
    document.getElementById("tekst2").innerHTML = txt2;
    document.getElementById("tekst4").innerHTML = txt4;

}



function calculateCards2() {

    let tiraz = parseInt(0);
    let papir = parseInt($('#value :selected').val());
    let total = parseInt(document.getElementById("kolicina").value);
    let a = $("#dimension option:selected").text();
    let br = $("#kolicina option:selected").text();
    let boja = $("#value option:selected").text();







    if (total == 100) {
        tiraz = 0;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt4 = "Rok izrade: 7 - 10 radnih dana.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";


        koverta = 0.018;
    }

    else if (total == 200) {
        tiraz = 1;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt4 = "Rok izrade: 7 - 10 radnih dana.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";


        koverta = 0.018;

    }
    else if (total == 300) {
        tiraz = 2;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt4 = "Rok izrade: 7 - 10 radnih dana.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";


        koverta = 0.018;


    }
    else if (total == 500) {
        tiraz = 3;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt4 = "Rok izrade: 7 - 10 radnih dana.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";


        koverta = 0.018;


    }
    else if (total == 1000) {
        tiraz = 4;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt4 = "Rok izrade: 7 - 10 radnih dana.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";


        koverta = 0.018;


    }
    else if (total == 1500) {
        tiraz = 5;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt4 = "Rok izrade: 7 - 10 radnih dana.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";


        koverta = 0.022;


    }
    else if (total == 2000) {
        tiraz = 6;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt4 = "Rok izrade: 7 - 10 radnih dana.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";


        koverta = 0.018;


    }

    let ukupno = (amerikan[tiraz][papir]) || 0;
    let konacno = (ukupno + (total * koverta)).toFixed(2);

    console.log(ukupno);
    document.getElementById("rez").innerHTML = konacno;
    document.getElementById("paper").innerHTML = "Dimenzije: " + a;
    document.getElementById("tiraz").innerHTML = "Tiraž: " + br;
    document.getElementById("color").innerHTML = "Boja: " + boja;
    // document.getElementById("cijena").innerHTML = ukupno + " EUR";
    // document.getElementById("koverta").innerHTML = "Cena koverte po komadu: ";
    // document.getElementById("one").innerHTML = koverta + " EUR";
    document.getElementById("tekst").innerHTML = txt;
    document.getElementById("tekst2").innerHTML = txt2;
    document.getElementById("tekst4").innerHTML = txt4;

}


function calculateCards3() {

    let tiraz = parseInt(0);
    let papir = parseInt($('#value :selected').val());
    let total = parseInt(document.getElementById("kolicina").value);
    let a = $("#dimension option:selected").text();
    let br = $("#kolicina option:selected").text();
    let boja = $("#value option:selected").text();







    if (total == 100) {
        tiraz = 0;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt4 = "Rok izrade: 7 - 10 radnih dana.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";


        koverta = 0.05;
    }

    else if (total == 200) {
        tiraz = 1;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt4 = "Rok izrade: 7 - 10 radnih dana.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";


        koverta = 0.05;

    }
    else if (total == 300) {
        tiraz = 2;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt4 = "Rok izrade: 7 - 10 radnih dana.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";


        koverta = 0.05;


    }
    else if (total == 500) {
        tiraz = 3;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt4 = "Rok izrade: 7 - 10 radnih dana.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";


        koverta = 0.05;


    }
    else if (total == 1000) {
        tiraz = 4;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt4 = "Rok izrade: 7 - 10 radnih dana.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";


        koverta = 0.05;


    }
    else if (total == 1500) {
        tiraz = 5;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt4 = "Rok izrade: 7 - 10 radnih dana.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";


        koverta = 0.05;


    }
    else if (total == 2000) {
        tiraz = 6;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt4 = "Rok izrade: 7 - 10 radnih dana.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";


        koverta = 0.05;


    }

    let ukupno = (b5[tiraz][papir]) || 0;
    let konacno = (ukupno + (total * koverta)).toFixed(2);

    console.log(ukupno);
    document.getElementById("rez").innerHTML = konacno;
    document.getElementById("paper").innerHTML = "Dimenzije: " + a;
    document.getElementById("tiraz").innerHTML = "Tiraž: " + br;
    document.getElementById("color").innerHTML = "Boja: " + boja;
    document.getElementById("tekst").innerHTML = txt;
    document.getElementById("tekst2").innerHTML = txt2;
    document.getElementById("tekst4").innerHTML = txt4;

}

function calculateCards4() {

    let tiraz = parseInt(0);
    let papir = parseInt($('#value :selected').val());
    let total = parseInt(document.getElementById("kolicina").value);
    let a = $("#dimension option:selected").text();
    let br = $("#kolicina option:selected").text();
    let boja = $("#value option:selected").text();







    if (total == 100) {
        tiraz = 0;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt4 = "Rok izrade: 7 - 10 radnih dana.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";


        koverta = 0.058;
    }

    else if (total == 200) {
        tiraz = 1;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt4 = "Rok izrade: 7 - 10 radnih dana.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";


        koverta = 0.058;

    }
    else if (total == 300) {
        tiraz = 2;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt4 = "Rok izrade: 7 - 10 radnih dana.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";


        koverta = 0.058;


    }
    else if (total == 500) {
        tiraz = 3;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt4 = "Rok izrade: 7 - 10 radnih dana.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";


        koverta = 0.058;


    }
    else if (total == 1000) {
        tiraz = 4;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt4 = "Rok izrade: 7 - 10 radnih dana.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";


        koverta = 0.058;


    }
    else if (total == 1500) {
        tiraz = 5;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt4 = "Rok izrade: 7 - 10 radnih dana.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";


        koverta = 0.058;


    }
    else if (total == 2000) {
        tiraz = 6;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt4 = "Rok izrade: 7 - 10 radnih dana.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";


        koverta = 0.058;


    }

    let ukupno = (c4[tiraz][papir]) || 0;
    let konacno = (ukupno + (total * koverta)).toFixed(2);

    console.log(ukupno);
    document.getElementById("rez").innerHTML = konacno;
    document.getElementById("paper").innerHTML = "Dimenzije: " + a;
    document.getElementById("tiraz").innerHTML = "Tiraž: " + br;
    document.getElementById("color").innerHTML = "Boja: " + boja;
    document.getElementById("tekst2").innerHTML = txt2;
    document.getElementById("tekst4").innerHTML = txt4;

}

$('#forma').change(function () {
    let formula = parseInt($('#dimension :selected').val());


    if ($("#value").val() === "") {
        console.log()

    } else if (formula == 1) {
        calculateCards();

    } else if (formula == 2) {
        calculateCards2();
    } else if (formula == 3) {
        calculateCards3();
    } else if (formula == 4) {
        calculateCards4();
    }


});

// $('#forma').change(function () {
//     var val = parseInt($('#value').val(), 10);
//     switch (val) {
//         case 1:
//             calculateCards();
//             break;
//         case 2:
//             calculateCards2();
//             break;

//     }
// });