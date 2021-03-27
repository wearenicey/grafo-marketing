$('#dimension').on('change', function () {
    console.log($('#dimension').val());
    $('#kolicina').html('');
    if ($('#dimension').val() == 1) {
        $('#kolicina').append('<option disabled selected>Izaberite tiraž</option>');
        $('#kolicina').append('<option value="200">200</option>');
        $('#kolicina').append('<option value="500">500</option>');
        $('#kolicina').append('<option value="1000">1000</option>');
        $('#kolicina').append('<option value="2000">2000</option>');

    } else {
        $('#kolicina').append('<option disabled selected>Izaberite tiraž</option>');
        $('#kolicina').append('<option value="50">50</option>');
        $('#kolicina').append('<option value="100">100</option>');
        $('#kolicina').append('<option value="200">200</option>');
        $('#kolicina').append('<option value="500">500</option>');
        $('#kolicina').append('<option value="1000">1000</option>');

    }
});

let priceCards = [
    [32, 44.4, 56.4, 94],
    [40.6, 53.4, 66.3, 102.6],
    [50.4, 63.2, 76, 115.4],
    [65, 83.8, 102.6, 136.75]
];

function calculateCards() {

    let lak = 0;
    let tiraz = parseInt(0);
    let papir = parseInt($('#value :selected').val());
    let total = parseInt(document.getElementById("kolicina").value);
    let a = $("#dimension option:selected").text();
    let br = $("#kolicina option:selected").text();
    let boja = $("#value option:selected").text();







    if (total == 200) {
        tiraz = 0;
        priceRange = "200";
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";
    }

    else if (total == 500) {
        tiraz = 1;
        priceRange = "500";
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";


    }
    else if (total == 1000) {
        tiraz = 2;
        priceRange = "1000";
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";


    }
    else if (total == 2000) {
        tiraz = 3;
        priceRange = "2000";
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";


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



}


let priceCards2 = [
    [38.5, 55.6, 72.7, 102.6],
    [42.7, 59.8, 81.2, 111.1],
    [51.3, 68.4, 102.6, 119.6],
    [59.8, 76.9, 98.3, 128.2],
    [76.9, 94, 115.4, 136.7],

];

function calculateCards2() {

    let lak = 0;
    let tiraz = parseInt(0);
    let papir = parseInt($('#value :selected').val());
    let total = parseInt(document.getElementById("kolicina").value);
    let a = $("#dimension option:selected").text();
    let br = $("#kolicina option:selected").text();
    let boja = $("#value option:selected").text();







    if (total == 50) {
        tiraz = 0;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";
    }

    else if (total == 100) {
        tiraz = 1;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";


    }
    else if (total == 200) {
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
    let ukupno = ((priceCards2[tiraz][papir]).toFixed(2)) || 0;
    cijena = priceCards2[tiraz][papir] || 0;

    document.getElementById("rez").innerHTML = ukupno;


    document.getElementById("paper").innerHTML = "Dimenzije: " + a;
    document.getElementById("tiraz").innerHTML = "Tiraž: " + br;
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
