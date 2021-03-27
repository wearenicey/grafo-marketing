let priceCards = [
    [30, 42.7, 94],
    [41, 55.5, 106.8],
    [61.5, 76, 128.2],
    [126, 145.3, 200.9]
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






    if (total == 500) {
        tiraz = 0;
        priceRange = "500";
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";
    }

    else if (total == 1000) {
        tiraz = 1;
        priceRange = "1000";
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";


    }
    else if (total == 2000) {
        tiraz = 2;
        priceRange = "2000";
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";


    }
    else if (total == 5000) {
        tiraz = 3;
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
    document.getElementById("lakText").innerHTML = "Clear lak: " + lakovi || "";
    document.getElementById("tekst").innerHTML = txt;
    document.getElementById("tekst2").innerHTML = txt2;



}

$('#forma').change(function () {
    let formula = parseInt($('#dimension :selected').val());

    if (formula == 1)
        calculateCards();
});
