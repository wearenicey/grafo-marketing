$('#dimension').on('change', function () {
    console.log($('#dimension').val());
    $('#kolicina').html('');
    $('#value').html('');

    if ($('#dimension').val() == 1) {
        $('#kolicina').append('<option disabled selected>Izaberite tiraž</option>');
        $('#kolicina').append('<option value="500">500</option>');
        $('#kolicina').append('<option value="1000">1000</option>');
        $('#kolicina').append('<option value="2000">2000</option>');
        $('#kolicina').append('<option value="5000">5000</option>');
        $('#kolicina').append('<option value="10000">10000</option>');
        $('#value').append('<option disabled selected>Izaberite boju</option>');

        $('#value').append('<option value="3">1/0- jedna boja jednostrano</option>');
        $('#value').append('<option value="2">2/0 - dve boje jednostrano</option>');
        $('#value').append('<option value="1">3/0 - tri boje jednostrano </option>');
        $('#value').append('<option value="0">4/0 - kolor jednostrano</option>');
    }
    else if ($('#dimension').val() == 2) {
        $('#kolicina').append('<option disabled selected>Izaberite tiraž</option>');
        $('#kolicina').append('<option value="500">500</option>');
        $('#kolicina').append('<option value="1000">1000</option>');
        $('#kolicina').append('<option value="2000">2000</option>');
        $('#kolicina').append('<option value="5000">5000</option>');
        $('#kolicina').append('<option value="10000">10000</option>');
        $('#value').append('<option disabled selected>Izaberite boju</option>');

        $('#value').append('<option value="3">1/0- jedna boja jednostrano</option>');
        $('#value').append('<option value="2">2/0 - dve boje jednostrano</option>');
        $('#value').append('<option value="1">3/0 - tri boje jednostrano </option>');
        $('#value').append('<option value="0">4/0 - kolor jednostrano</option>');





    } else if ($('#dimension').val() == 3) {
        $('#kolicina').append('<option disabled selected>Izaberite tiraž</option>');
        $('#kolicina').append('<option value="10">10</option>');
        $('#kolicina').append('<option value="50">50</option>');
        $('#kolicina').append('<option value="100">100</option>');
        $('#kolicina').append('<option value="200">200</option>');
        $('#kolicina').append('<option value="300">300</option>');
        $('#value').append('<option disabled selected>Izaberite boju</option>');

        $('#value').append('<option value="0">4/0 - kolor jednostrano</option>');



    }
});

let priceCards = [
    [72.7, 53.8, 32, 21.4],
    [76.9, 58.2, 35.9, 25.2],
    [85.5, 65.4, 42.7, 32.5],
    [128.2, 102.6, 85.5, 66.7],
    [166.7, 141, 119.7, 102.6]

];

function calculateCards() {

    let lak = 0;
    let tiraz = parseInt(0);
    let papir = parseInt($('#value :selected').val());
    let total = parseInt(document.getElementById("kolicina").value);
    let a = $("#dimension option:selected").text();
    let br = $("#kolicina option:selected").text();
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
    else if (total == 10000) {
        tiraz = 4;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";
        txt4 = "Rok izrade: 5 - 7 radnih dana."


    }

    let ukupno = ((priceCards[tiraz][papir]).toFixed(2)) || 0;
    cijena = priceCards[tiraz][papir] || 0;

    console.log(ukupno);
    document.getElementById("rez").innerHTML = ukupno;


    document.getElementById("paper").innerHTML = "Dimenzije: " + a;
    document.getElementById("tiraz").innerHTML = "Tiraž: " + br;
    document.getElementById("color").innerHTML = "Boja: " + boja;
    document.getElementById("tekst").innerHTML = txt;
    document.getElementById("tekst2").innerHTML = txt2;
    document.getElementById("tekst4").innerHTML = txt4;




}


let priceCards2 = [
    [76.1, 55.6, 35.1, 24.8],
    [79.5, 60.7, 38.5, 28.2],
    [88.1, 68.4, 46.2, 35.9],
    [136.7, 109, 91.45, 72.6],
    [177.8, 149.6, 127.4, 113.7],

];

function calculateCards2() {

    let lak = 0;
    let tiraz = parseInt(0);
    let papir = parseInt($('#value :selected').val());
    let total = parseInt(document.getElementById("kolicina").value);
    let a = $("#dimension option:selected").text();
    let br = $("#kolicina option:selected").text();
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
    else if (total == 10000) {
        tiraz = 4;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";
        txt4 = "Rok izrade: 5 - 7 radnih dana."


    }


    let ukupno = ((priceCards2[tiraz][papir]).toFixed(2)) || 0;
    cijena = priceCards2[tiraz][papir] || 0;

    document.getElementById("rez").innerHTML = ukupno;


    document.getElementById("paper").innerHTML = "Dimenzije: " + a;
    document.getElementById("tiraz").innerHTML = "Tiraž: " + br;
    document.getElementById("color").innerHTML = "Boja: " + boja;
    document.getElementById("tekst").innerHTML = txt;
    document.getElementById("tekst2").innerHTML = txt2;
    document.getElementById("tekst4").innerHTML = txt4;




}

let priceCards3 = [
    [60],
    [32],
    [30],
    [29],
    [28]

];

function calculateCards3() {

    let tiraz = parseInt(0);
    let papir = parseInt($('#value :selected').val());
    let total = parseInt(document.getElementById("kolicina").value);
    let a = $("#dimension option:selected").text();
    let br = $("#kolicina option:selected").text();
    let boja = $("#value option:selected").text();

    if (total == 10) {
        tiraz = 0;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";
        txt4 = "Rok izrade: 5 - 7 radnih dana."


    }

    else if (total == 50) {
        tiraz = 1;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";
        txt4 = "Rok izrade: 5 - 7 radnih dana."


    }
    else if (total == 100) {
        tiraz = 2;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";
        txt4 = "Rok izrade: 5 - 7 radnih dana."


    }
    else if (total == 200) {
        tiraz = 3;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";
        txt4 = "Rok izrade: 5 - 7 radnih dana."


    }
    else if (total == 300) {
        tiraz = 4;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";
        txt4 = "Rok izrade: 5 - 7 radnih dana."


    }


    let ukupno = ((priceCards3[tiraz][papir]).toFixed(2)) || 0;
    cijena = priceCards3[tiraz][papir] || 0;

    document.getElementById("rez").innerHTML = ukupno;


    document.getElementById("paper").innerHTML = "Dimenzije: " + a;
    document.getElementById("tiraz").innerHTML = "Tiraž: " + br;
    document.getElementById("color").innerHTML = "Boja: " + boja;
    document.getElementById("tekst").innerHTML = txt;
    document.getElementById("tekst2").innerHTML = txt2;
    document.getElementById("tekst4").innerHTML = txt4;




}

$('#forma').change(function () {
    let formula = parseInt($('#dimension :selected').val());

    if (formula == 1)
        calculateCards();
    if (formula == 2)
        calculateCards2();
    if (formula == 3)
        calculateCards3();
});
