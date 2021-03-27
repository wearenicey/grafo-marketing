function calculateCards() {

    let tiraz = parseInt(0);
    let cenaa = parseInt(0);
    let pvc = parseInt(document.getElementById("dimension").value);



    if (pvc == 1) {
        minimlaca = "Minimalac: 6 eur";
        preko = "Preko 1m2: 8 eur/m2";
        txt = "Za vece kvadrature dogovor.";
        one = "";
        two = "";
        three = "";
        four = "";



    } else if (pvc == 2) {
        minimlaca = "Minimalac: 8 eur";
        preko = "Preko 1m2: 10 eur/m2";
        txt = "Za vece kvadrature dogovor.";
        one = "";
        two = "";
        three = "";
        four = "";


    }
    else if (pvc == 3) {
        minimlaca = "Minimalac: 12 eur";
        preko = "Preko 1m2: 15 eur/m2";
        txt = "Za vece kvadrature dogovor.";
        one = "";
        two = "";
        three = "";
        four = "";


    }
    else if (pvc == 4) {

        minimlaca = "Cena na upit.";
        txt = "";
        preko = "";
        one = "";
        two = "";
        three = "";
        four = "";


    } else if (pvc == 5) {

        minimlaca = "Cena na upit.";
        txt = "";
        preko = "";
        one = "";
        two = "";
        three = "";
        four = "";


    } else if (pvc == 6) {
        minimlaca = "Minimalac: 6 eur";
        preko = "Preko 1m2: 4 eur/m2";
        txt = "";
        one = "";
        two = "";
        three = "";
        four = "";



    } else if (pvc == 7) {
        minimlaca = "Start katera 300din";
        preko = "15eur/ po duznom metru";
        txt = "";
        one = "";
        two = "";
        three = "";
        four = "";


    }
    else if (pvc == 8) {
        minimlaca = "250din/m2";
        preko = "";
        txt = "";
        one = "";
        two = "";
        three = "";
        four = "";


    } else if (pvc == 9) {
        minimlaca = "500din";
        preko = "";
        txt = "";
        one = "";
        two = "";
        three = "";
        four = "";


    }
    else if (pvc == 10) {
        minimlaca = "Ispod 1m2: 3eur";
        preko = "1m2: 5eur";
        txt = "2m2: 7eur";
        one = "3m2: 9,5eur";
        two = "4m2: 12eur";
        three = "5m2: 14,5eur";
        four = "6m2: 17 eur";

    }




    document.getElementById("paper").innerHTML = minimlaca;



    document.getElementById("broj").innerHTML = preko;

    document.getElementById("tekst2").innerHTML = txt;
    document.getElementById("onee").innerHTML = one;
    document.getElementById("two").innerHTML = two;
    document.getElementById("three").innerHTML = three;
    document.getElementById("four").innerHTML = four;




}



$('#forma').change(function () {
    let pvc = parseInt(document.getElementById("dimension").value);


    calculateCards();



});
