function calculateCards() {

    let tiraz = parseInt(0);
    let total = parseInt(document.getElementById("numberCards").value);

    let br = $("#numberCards option:selected").text();


    if (total == 1) {
        tiraz = 50;
        priceRange = "100";
        txt2 = "*1e se racuna po srednjem kursu NBRS";
        txt = "*U cenu komplet roll up-a je uračunato: Mehanizam, Štampa na pp baneru, Torbica za transport, Montaža."


    }

    else if (total == 2) {
        tiraz = 70;
        txt2 = "*1e se racuna po srednjem kursu NBRS";
        txt = "*U cenu komplet roll up-a je uračunato: Mehanizam, Štampa na pp baneru, Torbica za transport, Montaža."


    }
    else if (total == 3) {
        tiraz = 80;
        txt2 = "*1e se racuna po srednjem kursu NBRS";
        txt = "*U cenu komplet roll up-a je uračunato: Mehanizam, Štampa na pp baneru, Torbica za transport, Montaža."


    }
    else if (total == 4) {
        tiraz = 100;
        txt2 = "*1e se racuna po srednjem kursu NBRS";
        txt = "*U cenu komplet roll up-a je uračunato: Mehanizam, Štampa na pp baneru, Torbica za transport, Montaža."
    }

    document.getElementById("rez").innerHTML = tiraz;
    document.getElementById("paper").innerHTML = "Dimenzije: " + br;
    document.getElementById("tekst").innerHTML = txt;
    document.getElementById("tekst2").innerHTML = txt2;

}


function calculateCards2() {

    let tiraz = parseInt(0);
    let cenaa = parseInt(0);
    let total = parseInt(document.getElementById("numberCards").value);
    let montaza = parseInt($("input[name='custom']:checked").val());
    let check = $("input[name=custom]:checked").attr("data-value") || "";


    let br = $("#numberCards option:selected").text();


    if (total == 1) {
        tiraz = 21;
        txt2 = "*1e se racuna po srednjem kursu NBRS";
        txt = "";
        if (montaza == 1)
            cenaa = 6.8;



    }

    else if (total == 2) {
        tiraz = 25;
        txt2 = "*1e se racuna po srednjem kursu NBRS";
        txt = "";

        if (montaza == 1)
            cenaa = 8.5;


    }
    else if (total == 3) {
        tiraz = 30;
        txt2 = "*1e se racuna po srednjem kursu NBRS";
        if (montaza == 1)
            cenaa = 11.1;



    }
    else if (total == 4) {
        tiraz = 36;
        txt2 = "*1e se racuna po srednjem kursu NBRS";
        txt = "";

        if (montaza == 1)
            cenaa = 12.8;
    }
    let ukupno = tiraz + cenaa;
    console.log(ukupno);


    document.getElementById("rez").innerHTML = ukupno;
    document.getElementById("paper").innerHTML = "Dimenzije: " + br;
    document.getElementById("broj").innerHTML = "Montaza: " + check;
    document.getElementById("tekst2").innerHTML = txt2;
    document.getElementById("tekst").innerHTML = txt;



}

$('#dimension').on('click', function () {

    if ($(this).val() === '1') {
        $('#hide').hide();

    } if ($(this).val() === '2') {
        $('#hide').show();
    }
});


// mijenjanje formule
$('#forma').change(function () {
    var val = parseInt($('#dimension').val(), 10);
    switch (val) {
        case 1:
            calculateCards();
            break;
        case 2:
            calculateCards2();
            break;

    }
});