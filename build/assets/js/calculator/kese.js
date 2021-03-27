

let amerikan = [
    [136, 120, 107, 99],
    [214, 197, 180, 163],
    [282, 257, 231, 205],
    [419, 385, 355, 325],
    [752, 727, 667, 590],

];

let b5 = [
    [193, 175.2, 166.7, 149.5],
    [325, 308, 290.5, 273.5],
    [436, 410.2, 385, 359],
    [641, 598.2, 555.5, 513],
    [1154, 1111, 1025, 940.2],
];

let c4 = [
    [218, 201, 179.5, 162.3],
    [269, 338.5, 308, 287.2],
    [487, 461.5, 436, 410.3],
    [705, 671, 641, 611],
    [1239, 1241, 1188, 1153],
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
    }

    else if (total == 200) {
        tiraz = 1;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";
        txt4 = "Rok izrade: 7 - 10 radnih dana."

    }
    else if (total == 300) {
        tiraz = 2;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";
        txt4 = "Rok izrade: 7 - 10 radnih dana."


    }
    else if (total == 500) {
        tiraz = 3;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";
        txt4 = "Rok izrade: 7 - 10 radnih dana."


    }
    else if (total == 1000) {
        tiraz = 4;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";
        txt4 = "Rok izrade: 7 - 10 radnih dana."


    }


    let ukupno = (amerikan[tiraz][papir]) || 0;
    let konacno = ukupno;

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
        txt2 = "*1e se racuna po srednjem kursu NBRS";
        txt4 = "Rok izrade: 7 - 10 radnih dana."
    }

    else if (total == 200) {
        tiraz = 1;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";
        txt4 = "Rok izrade: 7 - 10 radnih dana."

    }
    else if (total == 300) {
        tiraz = 2;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";
        txt4 = "Rok izrade: 7 - 10 radnih dana."


    }
    else if (total == 500) {
        tiraz = 3;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";
        txt4 = "Rok izrade: 7 - 10 radnih dana."


    }
    else if (total == 1000) {
        tiraz = 4;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";
        txt4 = "Rok izrade: 7 - 10 radnih dana."


    }


    let ukupno = (b5[tiraz][papir]) || 0;
    let konacno = ukupno;

    console.log(ukupno);
    document.getElementById("rez").innerHTML = konacno;
    document.getElementById("paper").innerHTML = "Dimenzije: " + a;
    document.getElementById("tiraz").innerHTML = "Tiraž: " + br;
    document.getElementById("color").innerHTML = "Boja: " + boja;
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
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }

    else if (total == 200) {
        tiraz = 1;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";


    }
    else if (total == 300) {
        tiraz = 2;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";



    }
    else if (total == 500) {
        tiraz = 3;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";



    }
    else if (total == 1000) {
        tiraz = 4;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";



    }


    let ukupno = (c4[tiraz][papir]) || 0;
    let konacno = ukupno;

    console.log(ukupno);
    document.getElementById("rez").innerHTML = konacno;
    document.getElementById("paper").innerHTML = "Dimenzije: " + a;
    document.getElementById("tiraz").innerHTML = "Tiraž: " + br;
    document.getElementById("color").innerHTML = "Boja: " + boja;
    document.getElementById("tekst").innerHTML = txt;
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