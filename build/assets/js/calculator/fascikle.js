$('#dimension').on('change', function () {
    console.log($('#dimension').val());
    $('#kolicina').html('');
    $('#value').html('');

    if ($('#dimension').val() == 1) {
        $('#kolicina').append('<option disabled selected>Izaberite tiraž</option>');
        $('#kolicina').append('<option value="100">100</option>');
        $('#kolicina').append('<option value="200">200</option>');
        $('#kolicina').append('<option value="300">300</option>');
        $('#kolicina').append('<option value="500">500</option>');
        $('#kolicina').append('<option value="1000">1000</option>');
        $('#value').append('<option disabled selected>Izaberite boju</option>');
        $('#value').append('<option value="3">1/0- jedna boja jednostrano sa plastifikacijom 1/0</option>');
        $('#value').append('<option value="2">2/0 - dve boje jednostrano  sa plastifikacijom 1/0</option>');
        $('#value').append('<option value="0">4/0 - kolor jednostrano sa plastifikacijom 1/0 </option>');
        $('#value').append('<option value="1">4/4 -kolor obostrano sa plastifikacijom 1/1</option>');
    }
    else if ($('#dimension').val() == 2) {
        $('#kolicina').append('<option disabled selected>Izaberite tiraž</option>');
        $('#kolicina').append('<option value="100">100</option>');
        $('#kolicina').append('<option value="200">200</option>');
        $('#kolicina').append('<option value="300">300</option>');
        $('#kolicina').append('<option value="500">500</option>');

        $('#kolicina').append('<option value="1000">1000</option>');
        $('#value').append('<option disabled selected>Izaberite boju</option>');

        $('#value').append('<option value="3">1/0- jedna boja jednostrano sa plastifikacijom 1/0</option>');
        $('#value').append('<option value="2">2/0 - dve boje jednostrano  sa plastifikacijom 1/0</option>');
        $('#value').append('<option value="0">4/0 - kolor jednostrano sa plastifikacijom 1/0 </option>');
        $('#value').append('<option value="1">4/4 -kolor obostrano sa plastifikacijom 1/1</option>');
    }
    else if ($('#dimension').val() == 3) {
        $('#kolicina').append('<option disabled selected>Izaberite tiraž</option>');
        $('#kolicina').append('<option value="10">10</option>');
        $('#kolicina').append('<option value="50">50</option>');
        $('#kolicina').append('<option value="100">100</option>');
        $('#kolicina').append('<option value="200">200</option>');
        $('#value').append('<option disabled selected>Izaberite boju</option>');

        $('#value').append('<option value="0">4/0 - kolor jednostrano sa clear lakom</option>');
        $('#value').append('<option value="1">4/4 - kolor obostrano sa clear lakom</option>');






    } else if ($('#dimension').val() == 4) {
        $('#kolicina').append('<option disabled selected>Izaberite tiraž</option>');
        $('#kolicina').append('<option value="10">10</option>');
        $('#kolicina').append('<option value="50">50</option>');
        $('#kolicina').append('<option value="100">100</option>');
        $('#kolicina').append('<option value="200">200</option>');
        $('#value').append('<option disabled selected>Izaberite boju</option>');

        $('#value').append('<option value="0">4/0 - kolor jednostrano sa plastifikacijom 1/0 </option>');
        $('#value').append('<option value="1">4/4 -kolor obostrano sa plastifikacijom 1/1</option>');



    }
});

let priceCards = [
    [162.3, 273.5, 115.3, 98.2],
    [230.7, 358.9, 167.5, 123],
    [282, 435.9, 202.6, 166.7],
    [337.6, 534.2, 277.8, 239.3],
    [470, 769.2, 427.4, 384.6],

];



function calculateCards() {

    let lak = 0;
    let tiraz = parseInt(0);
    let papir = parseInt($('#value :selected').val());
    let total = parseInt(document.getElementById("kolicina").value);
    let a = $("#dimension option:selected").text();
    let br = $("#kolicina option:selected").text();
    let boja = $("#value option:selected").text();


    if (total == 100) {
        tiraz = 0;

        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*Alati po zelji su od 80-100e"
        txt3 = "*1e se racuna po srednjem kursu NBRS";
        txt4 = "Rok izrade: 7 - 10 radnih dana."



    }

    else if (total == 200) {
        tiraz = 1;

        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*Alati po zelji su od 80-100e";
        txt3 = "*1e se racuna po srednjem kursu NBRS";
        txt4 = "Rok izrade: 7 - 10 radnih dana."




    }
    else if (total == 300) {
        tiraz = 2;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*Alati po zelji su od 80-100e";
        txt3 = "*1e se racuna po srednjem kursu NBRS";
        txt4 = "Rok izrade: 7 - 10 radnih dana."





    }
    else if (total == 500) {
        tiraz = 3;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*Alati po zelji su od 80-100e";
        txt3 = "*1e se racuna po srednjem kursu NBRS";
        txt4 = "Rok izrade: 7 - 10 radnih dana."



    }
    else if (total == 1000) {
        tiraz = 4;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*Alati po zelji su od 80-100e";
        txt3 = "*1e se racuna po srednjem kursu NBRS";
        txt4 = "Rok izrade: 7 - 10 radnih dana."



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
    document.getElementById("text3").innerHTML = txt3;
    document.getElementById("tekst4").innerHTML = txt4;






}




let priceCards2 = [
    [18.8, 23.5],
    [53.4, 70.5],
    [89.7, 119.7],
    [153.8, 222.2],




];

function calculateCards2() {

    let tiraz = parseInt(0);
    let papir = parseInt($('#value :selected').val());
    let total = parseInt(document.getElementById("kolicina").value);
    let a = $("#dimension option:selected").text();
    let br = $("#kolicina option:selected").text();
    let boja = $("#value option:selected").text();


    if (total == 10) {
        tiraz = 0;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*Alati po zelji su od 80-100e";
        txt3 = "*1e se racuna po srednjem kursu NBRS";
        txt4 = "Rok izrade: 7 - 10 radnih dana."



    }
    else if (total == 50) {
        tiraz = 1;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*Alati po zelji su od 80-100e";
        txt3 = "*1e se racuna po srednjem kursu NBRS";
        txt4 = "Rok izrade: 7 - 10 radnih dana."



    }
    else if (total == 100) {
        tiraz = 2;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*Alati po zelji su od 80-100e";
        txt3 = "*1e se racuna po srednjem kursu NBRS";
        txt4 = "Rok izrade: 7 - 10 radnih dana."



    }
    else if (total == 200) {
        tiraz = 3;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*Alati po zelji su od 80-100e";
        txt3 = "*1e se racuna po srednjem kursu NBRS";
        txt4 = "Rok izrade: 7 - 10 radnih dana."



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
    [17.1, 22.7],
    [47, 64.1],
    [76.9, 106.8],
    [136.8, 196.6],




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
        txt2 = "*Alati po zelji su od 80-100e";
        txt3 = "*1e se racuna po srednjem kursu NBRS";
        txt4 = "Rok izrade: 7 - 10 radnih dana."



    }
    else if (total == 50) {
        tiraz = 1;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*Alati po zelji su od 80-100e";
        txt3 = "*1e se racuna po srednjem kursu NBRS";
        txt4 = "Rok izrade: 7 - 10 radnih dana."



    }
    else if (total == 100) {
        tiraz = 2;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*Alati po zelji su od 80-100e";
        txt3 = "*1e se racuna po srednjem kursu NBRS";
        txt4 = "Rok izrade: 7 - 10 radnih dana."



    }
    else if (total == 200) {
        tiraz = 3;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*Alati po zelji su od 80-100e";
        txt3 = "*1e se racuna po srednjem kursu NBRS";
        txt4 = "Rok izrade: 7 - 10 radnih dana."



    }


    let ukupno = ((priceCards2[tiraz][papir]).toFixed(2)) || 0;
    cijena = priceCards2[tiraz][papir] || 0;

    document.getElementById("rez").innerHTML = ukupno;

    document.getElementById("paper").innerHTML = "Dimenzije: " + a;
    document.getElementById("tiraz").innerHTML = "Tiraž: " + br;
    document.getElementById("color").innerHTML = "Boja: " + boja;
    document.getElementById("tekst").innerHTML = txt;
    document.getElementById("tekst2").innerHTML = txt2;
    document.getElementById("tekst3").innerHTML = txt3;
    document.getElementById("tekst4").innerHTML = txt4;






}

$('#forma').change(function () {
    let formula = parseInt($('#dimension :selected').val());

    if (formula == 1)
        calculateCards();
    if (formula == 2)
        calculateCards();
    if (formula == 3)
        calculateCards2();
    if (formula == 4)
        calculateCards();
});
