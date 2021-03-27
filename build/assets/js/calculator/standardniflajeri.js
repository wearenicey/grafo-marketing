console.log("aa")

let a6 = [
    [81.2, 89.8, 41.1, 47],
    [88, 94, 44, 51.3],
    [94, 98.3, 47, 55.6],
    [102.6, 111.2, 58.2, 67.6],
    [119.7, 124, 71.8, 81.2],
    [128.2, 132.5, 81.2, 90.6],
    [138.5, 143.6, 89.8, 97.5],
    [149.6, 155.6, 99.2, 108.6],
    [183.8, 192.3, 119.7, 128.2],
    [205.2, 213.7, 153.9, 162.4],
    [320.6, 329.1, 252.2, 260.7],
];

let b6 = [
    [98.3, 106.9, 51.3, 59.9],
    [105.2, 113.7, 59.9, 68.4],
    [111.2, 119.7, 68.4, 77],
    [124, 131.7, 81.2, 88.9],
    [135.9, 143.6, 92.8, 100.9],
    [147.9, 155.6, 105.2, 112.9],
    [159.9, 167.6, 117.1, 124.8],
    [173.5, 181.2, 130, 137.6],
    [200.1, 209.4, 155.6, 164.1],
    [228.2, 236.8, 181.2, 194],
    [350.5, 363.3, 299.2, 307.7],
];



let d5 = [
    [95.7, 102.5, 51.3, 61.5],
    [102.2, 111.1, 57.3, 68],
    [109.4, 118.8, 63.3, 74.8],
    [116.4, 124, 70.5, 81.2],
    [123, 131.6, 77, 88],
    [145.3, 153.9, 99.6, 111.1],
    [168.4, 179.5, 122.2, 134.2],
    [192.3, 205.2, 145.3, 158.2],
    [215.4, 230.8, 168.4, 128],
    [239.4, 256.4, 191.5, 205.2],
    [285.5, 303.4, 237.6, 252.2],
    [332.5, 363.3, 283.7, 299.2],
    [589.7, 628.2, 538.5, 555.5]
];

let e4 = [
    [100.9, 106, 53, 61.5],
    [109.4, 115.4, 61.5, 71],
    [118.8, 124.8, 70, 79.9],
    [136.8, 143.6, 88, 98.3],
    [170.9, 179.5, 132.5, 143.6],
    [207.7, 218, 169.2, 188],
    [243.6, 255.5, 205.2, 222.2],
    [277.7, 294.8, 241, 256.4],
    [314.1, 333.3, 280.7, 294.9],
    [406, 418.8, 354.7, 371.8],
    [512.8, 529.9, 444.4, 465.8],

];

let f4 = [
    [106, 111.1, 59.8, 68.4],
    [114.5, 121.4, 69.2, 79.1],
    [123.5, 130.7, 78.6, 88],
    [141.1, 149.6, 96.6, 106.8],
    [179.5, 196.6, 141.1, 152.1],
    [226.5, 247.9, 185.5, 196.6],
    [271, 299.1, 229.9, 243.6],
    [322.6, 341, 273.5, 288.8],
    [393.2, 406, 320.5, 337.6],
    [508.5, 533.3, 414.5, 431.6],
    [611.1, 632.5, 504.3, 521.4],

];

let g = [
    [88, 94, 42.7, 49.6],
    [91.5, 98.3, 45.3, 53],
    [98.3, 102.6, 51.3, 59.8],
    [106.8, 115.4, 63.2, 72.6],
    [123.9, 128.2, 75.2, 84.6],
    [136.8, 141, 88, 97.4],
    [149.6, 155.5, 100.8, 111.1],
    [162.3, 172.6, 113.6, 126.5],
    [188, 200.9, 130.7, 153.8],
    [217.9, 229.9, 158.1, 183.7],
    [354.7, 366.6, 394.9, 324.8],

];


let h = [
    [102.6, 111.1, 55.5, 64.1],
    [109.4, 117.9, 66.6, 72.6],
    [115.4, 123.9, 72.6, 79.5],
    [130.8, 139.3, 87.2, 95.7],
    [145.3, 153.8, 102.5, 111.1],
    [158.1, 162.4, 111.1, 119.6],
    [175.2, 179.5, 123.9, 135],
    [192.3, 196.6, 141, 152.1],
    [217.9, 222.2, 166.6, 175.2],
    [243.6, 252.1, 192.3, 200.9],
    [406, 423, 376, 384.6],

];

let aa = [
    [7.17, 9.4],
    [8.5, 13.7],
    [14.5, 17.1],
    [20, 24.3],
    [30.8, 38.4],
    [51.3, 68.4],

];
let bb = [
    [8.5, 10.7],
    [14.4, 18.8],
    [26.5, 34.2],
    [38.5, 50],
    [55.5, 76],
    [89.7, 141],

];

let cc = [
    [13.5, 17.7],
    [25.6, 34.6],
    [43.6, 66.6],
    [64.1, 91],
    [85.5, 141],
    [149.6, 256.4]
];

let dd = [
    [8.1, 10.3],
    [9.8, 13.7],
    [17.9, 24.8],
    [25.6, 35.1],
    [40.6, 55.5],
    [72.6, 100]
]

$('#dimension').on('change', function () {
    console.log($('#dimension').val());
    $('#kolicina').html('');
    $('#value').html('');


    if ($('#dimension').val() == 1) {
        $('#kolicina').append('<option disabled selected>Izaberite tiraž</option>');
        $('#kolicina').append('<option value="2000">2000</option>');
        $('#kolicina').append('<option value="3000">3000</option>');

        $('#kolicina').append('<option value="5000">5000</option>');
        $('#kolicina').append('<option value="10000">10000</option>');
        $('#kolicina').append('<option value="15000">15000</option>');
        $('#kolicina').append('<option value="20000">20000</option>');
        $('#kolicina').append('<option value="25000">25000</option>');
        $('#kolicina').append('<option value="30000">30000</option>');
        $('#kolicina').append('<option value="40000">40000</option>');
        $('#kolicina').append('<option value="50000">50000</option>');
        $('#kolicina').append('<option value="100000">100000</option>');

        $('#value').append('<option disabled selected>Izaberite boju</option>');
        $('#value').append('<option value="0">4/0- kolor jednostrano</option>');
        $('#value').append('<option value="1">4/4 kolor dvostrano</option>');
        $('#value').append('<option value="2">2/0 dve boje jednostrano </option>');
        $('#value').append('<option value="3">2/2 dve boje obostrano</option>');
    }
    else if ($('#dimension').val() == 2) {
        $('#kolicina').append('<option disabled selected>Izaberite tiraž</option>');
        $('#kolicina').append('<option value="2000">2000</option>');
        $('#kolicina').append('<option value="3000">3000</option>');

        $('#kolicina').append('<option value="5000">5000</option>');
        $('#kolicina').append('<option value="10000">10000</option>');
        $('#kolicina').append('<option value="15000">15000</option>');
        $('#kolicina').append('<option value="20000">20000</option>');
        $('#kolicina').append('<option value="25000">25000</option>');
        $('#kolicina').append('<option value="30000">30000</option>');
        $('#kolicina').append('<option value="40000">40000</option>');
        $('#kolicina').append('<option value="50000">50000</option>');
        $('#kolicina').append('<option value="100000">100000</option>');
        $('#value').append('<option disabled selected>Izaberite boju</option>');

        $('#value').append('<option value="0">4/0- kolor jednostrano</option>');
        $('#value').append('<option value="1">4/4 kolor dvostrano</option>');
        $('#value').append('<option value="2">2/0 dve boje jednostrano </option>');
        $('#value').append('<option value="3">2/2 dve boje obostrano</option>');




    }


    else if ($('#dimension').val() == 3) {
        $('#kolicina').append('<option disabled selected>Izaberite tiraž</option>');
        $('#kolicina').append('<option value="1000">1000</option>');
        $('#kolicina').append('<option value="2000">2000</option>');
        $('#kolicina').append('<option value="3000">3000</option>');
        $('#kolicina').append('<option value="5000">5000</option>');
        $('#kolicina').append('<option value="10000">10000</option>');
        $('#kolicina').append('<option value="15000">15000</option>');
        $('#kolicina').append('<option value="20000">20000</option>');
        $('#kolicina').append('<option value="25000">25000</option>');
        $('#kolicina').append('<option value="30000">30000</option>');
        $('#kolicina').append('<option value="40000">40000</option>');
        $('#kolicina').append('<option value="50000">50000</option>');
        $('#kolicina').append('<option value="100000">100000</option>');

        $('#value').append('<option disabled selected>Izaberite boju</option>');
        $('#value').append('<option value="0">4/0- kolor jednostrano</option>');
        $('#value').append('<option value="1">4/4 kolor dvostrano</option>');
        $('#value').append('<option value="2">2/0 dve boje jednostrano </option>');
        $('#value').append('<option value="3">2/2 dve boje obostrano</option>');




    }
    else if ($('#dimension').val() == 4) {
        $('#kolicina').append('<option disabled selected>Izaberite tiraž</option>');
        $('#kolicina').append('<option value="1000">1000</option>');
        $('#kolicina').append('<option value="2000">2000</option>');
        $('#kolicina').append('<option value="3000">3000</option>');
        $('#kolicina').append('<option value="4000">4000</option>');
        $('#kolicina').append('<option value="5000">5000</option>');
        $('#kolicina').append('<option value="10000">10000</option>');
        $('#kolicina').append('<option value="15000">15000</option>');
        $('#kolicina').append('<option value="20000">20000</option>');
        $('#kolicina').append('<option value="25000">25000</option>');
        $('#kolicina').append('<option value="30000">30000</option>');
        $('#kolicina').append('<option value="40000">40000</option>');
        $('#kolicina').append('<option value="50000">50000</option>');
        $('#kolicina').append('<option value="100000">100000</option>');
        $('#value').append('<option disabled selected>Izaberite boju</option>');


        $('#value').append('<option value="0">4/0- kolor jednostrano</option>');
        $('#value').append('<option value="1">4/4 kolor dvostrano</option>');
        $('#value').append('<option value="2">2/0 dve boje jednostrano </option>');
        $('#value').append('<option value="3">2/2 dve boje obostrano</option>');




    }
    else if ($('#dimension').val() == 5) {
        $('#kolicina').append('<option disabled selected>Izaberite tiraž</option>');
        $('#kolicina').append('<option value="1000">1000</option>');
        $('#kolicina').append('<option value="2000">2000</option>');
        $('#kolicina').append('<option value="3000">3000</option>');
        $('#kolicina').append('<option value="5000">5000</option>');
        $('#kolicina').append('<option value="10000">10000</option>');
        $('#kolicina').append('<option value="15000">15000</option>');
        $('#kolicina').append('<option value="20000">20000</option>');
        $('#kolicina').append('<option value="25000">25000</option>');
        $('#kolicina').append('<option value="30000">30000</option>');
        $('#kolicina').append('<option value="40000">40000</option>');
        $('#kolicina').append('<option value="50000">50000</option>');
        $('#value').append('<option disabled selected>Izaberite boju</option>');


        $('#value').append('<option value="0">4/0- kolor jednostrano</option>');
        $('#value').append('<option value="1">4/4 kolor dvostrano</option>');
        $('#value').append('<option value="2">2/0 dve boje jednostrano </option>');
        $('#value').append('<option value="3">2/2 dve boje obostrano</option>');




    }
    else if ($('#dimension').val() == 6) {
        $('#kolicina').append('<option disabled selected>Izaberite tiraž</option>');
        $('#kolicina').append('<option value="1000">1000</option>');
        $('#kolicina').append('<option value="2000">2000</option>');
        $('#kolicina').append('<option value="3000">3000</option>');

        $('#kolicina').append('<option value="5000">5000</option>');
        $('#kolicina').append('<option value="10000">10000</option>');
        $('#kolicina').append('<option value="15000">15000</option>');
        $('#kolicina').append('<option value="20000">20000</option>');
        $('#kolicina').append('<option value="25000">25000</option>');
        $('#kolicina').append('<option value="30000">30000</option>');
        $('#kolicina').append('<option value="40000">40000</option>');
        $('#kolicina').append('<option value="50000">50000</option>');
        $('#value').append('<option disabled selected>Izaberite boju</option>');

        $('#value').append('<option value="0">4/0- kolor jednostrano</option>');
        $('#value').append('<option value="1">4/4 kolor dvostrano</option>');
        $('#value').append('<option value="2">2/0 dve boje jednostrano </option>');
        $('#value').append('<option value="3">2/2 dve boje obostrano</option>');




    }
    else if ($('#dimension').val() == 7) {
        $('#kolicina').append('<option disabled selected>Izaberite tiraž</option>');
        $('#kolicina').append('<option value="2000">2000</option>');
        $('#kolicina').append('<option value="3000">3000</option>');

        $('#kolicina').append('<option value="5000">5000</option>');
        $('#kolicina').append('<option value="10000">10000</option>');
        $('#kolicina').append('<option value="15000">15000</option>');
        $('#kolicina').append('<option value="20000">20000</option>');
        $('#kolicina').append('<option value="25000">25000</option>');
        $('#kolicina').append('<option value="30000">30000</option>');
        $('#kolicina').append('<option value="40000">40000</option>');
        $('#kolicina').append('<option value="50000">50000</option>');
        $('#kolicina').append('<option value="100000">100000</option>');
        $('#value').append('<option disabled selected>Izaberite boju</option>');

        $('#value').append('<option value="0">4/0- kolor jednostrano</option>');
        $('#value').append('<option value="1">4/4 kolor dvostrano</option>');
        $('#value').append('<option value="2">2/0 dve boje jednostrano </option>');
        $('#value').append('<option value="3">2/2 dve boje obostrano</option>');




    }
    else if ($('#dimension').val() == 8) {
        $('#kolicina').append('<option disabled selected>Izaberite tiraž</option>');
        $('#kolicina').append('<option value="2000">2000</option>');
        $('#kolicina').append('<option value="3000">3000</option>');

        $('#kolicina').append('<option value="5000">5000</option>');
        $('#kolicina').append('<option value="10000">10000</option>');
        $('#kolicina').append('<option value="15000">15000</option>');
        $('#kolicina').append('<option value="20000">20000</option>');
        $('#kolicina').append('<option value="25000">25000</option>');
        $('#kolicina').append('<option value="30000">30000</option>');
        $('#kolicina').append('<option value="40000">40000</option>');
        $('#kolicina').append('<option value="50000">50000</option>');
        $('#kolicina').append('<option value="100000">100000</option>');
        $('#value').append('<option disabled selected>Izaberite boju</option>');


        $('#value').append('<option value="0">4/0- kolor jednostrano</option>');
        $('#value').append('<option value="1">4/4 kolor dvostrano</option>');
        $('#value').append('<option value="2">2/0 dve boje jednostrano </option>');
        $('#value').append('<option value="3">2/2 dve boje obostrano</option>');




    }
    else if ($('#dimension').val() == 9) {
        $('#kolicina').append('<option disabled selected>Izaberite tiraž</option>');
        $('#kolicina').append('<option value="50">50</option>');
        $('#kolicina').append('<option value="100">100</option>');
        $('#kolicina').append('<option value="200">200</option>');
        $('#kolicina').append('<option value="300">300</option>');
        $('#kolicina').append('<option value="500">500</option>');
        $('#kolicina').append('<option value="1000">1000</option>');
        $('#value').append('<option disabled selected>Izaberite boju</option>');

        $('#value').append('<option value="0">4/0 - kolor jednostrano</option>');
        $('#value').append('<option value="1">4/4- kolor dvostrano</option>');


    }
    else if ($('#dimension').val() == 10) {
        $('#kolicina').append('<option disabled selected>Izaberite tiraž</option>');
        $('#kolicina').append('<option value="50">50</option>');
        $('#kolicina').append('<option value="100">100</option>');
        $('#kolicina').append('<option value="200">200</option>');
        $('#kolicina').append('<option value="300">300</option>');
        $('#kolicina').append('<option value="500">500</option>');
        $('#kolicina').append('<option value="1000">1000</option>');
        $('#value').append('<option disabled selected>Izaberite boju</option>');

        $('#value').append('<option value="0">4/0 - kolor jednostrano</option>');
        $('#value').append('<option value="1">4/4- kolor dvostrano</option>');


    }
    else if ($('#dimension').val() == 11) {
        $('#kolicina').append('<option disabled selected>Izaberite tiraž</option>');
        $('#kolicina').append('<option value="50">50</option>');
        $('#kolicina').append('<option value="100">100</option>');
        $('#kolicina').append('<option value="200">200</option>');
        $('#kolicina').append('<option value="300">300</option>');
        $('#kolicina').append('<option value="500">500</option>');
        $('#kolicina').append('<option value="1000">1000</option>');
        $('#value').append('<option disabled selected>Izaberite boju</option>');

        $('#value').append('<option value="0">4/0 - kolor jednostrano</option>');
        $('#value').append('<option value="1">4/4- kolor dvostrano</option>');


    }
    else if ($('#dimension').val() == 12) {
        $('#kolicina').append('<option disabled selected>Izaberite tiraž</option>');
        $('#kolicina').append('<option value="50">50</option>');
        $('#kolicina').append('<option value="100">100</option>');
        $('#kolicina').append('<option value="200">200</option>');
        $('#kolicina').append('<option value="300">300</option>');
        $('#kolicina').append('<option value="500">500</option>');
        $('#kolicina').append('<option value="1000">1000</option>');
        $('#value').append('<option disabled selected>Izaberite boju</option>');

        $('#value').append('<option value="0">4/0 - kolor jednostrano</option>');
        $('#value').append('<option value="1">4/4- kolor dvostrano</option>');


    }
    else if ($('#dimension').val() == 13) {
        $('#kolicina').append('<option disabled selected>Izaberite tiraž</option>');
        $('#kolicina').append('<option value="50">50</option>');
        $('#kolicina').append('<option value="100">100</option>');
        $('#kolicina').append('<option value="200">200</option>');
        $('#kolicina').append('<option value="300">300</option>');
        $('#kolicina').append('<option value="500">500</option>');
        $('#kolicina').append('<option value="1000">1000</option>');
        $('#value').append('<option disabled selected>Izaberite boju</option>');

        $('#value').append('<option value="0">4/0 - kolor jednostrano</option>');
        $('#value').append('<option value="1">4/4- kolor dvostrano</option>');


    }
    else if ($('#dimension').val() == 14) {
        $('#kolicina').append('<option disabled selected>Izaberite tiraž</option>');
        $('#kolicina').append('<option value="50">50</option>');
        $('#kolicina').append('<option value="100">100</option>');
        $('#kolicina').append('<option value="200">200</option>');
        $('#kolicina').append('<option value="300">300</option>');
        $('#kolicina').append('<option value="500">500</option>');
        $('#kolicina').append('<option value="1000">1000</option>');
        $('#value').append('<option disabled selected>Izaberite boju</option>');

        $('#value').append('<option value="0">4/0 - kolor jednostrano</option>');
        $('#value').append('<option value="1">4/4- kolor dvostrano</option>');


    }
    else if ($('#dimension').val() == 15) {
        $('#kolicina').append('<option disabled selected>Izaberite tiraž</option>');
        $('#kolicina').append('<option value="50">50</option>');
        $('#kolicina').append('<option value="100">100</option>');
        $('#kolicina').append('<option value="200">200</option>');
        $('#kolicina').append('<option value="300">300</option>');
        $('#kolicina').append('<option value="500">500</option>');
        $('#kolicina').append('<option value="1000">1000</option>');
        $('#value').append('<option disabled selected>Izaberite boju</option>');

        $('#value').append('<option value="0">4/0 - kolor jednostrano</option>');
        $('#value').append('<option value="1">4/4- kolor dvostrano</option>');


    }
    else if ($('#dimension').val() == 16) {
        $('#kolicina').append('<option disabled selected>Izaberite tiraž</option>');
        $('#kolicina').append('<option value="50">50</option>');
        $('#kolicina').append('<option value="100">100</option>');
        $('#kolicina').append('<option value="200">200</option>');
        $('#kolicina').append('<option value="300">300</option>');
        $('#kolicina').append('<option value="500">500</option>');
        $('#kolicina').append('<option value="1000">1000</option>');
        $('#value').append('<option disabled selected>Izaberite boju</option>');

        $('#value').append('<option value="0">4/0 - kolor jednostrano</option>');
        $('#value').append('<option value="1">4/4- kolor dvostrano</option>');


    }
});

let test = [
    [94, 100.9, 49.6, 58.2],
    [102.2, 106.9, 55.2, 63.3],
    [106.9, 111.2, 59.9, 68.4],
    [115.4, 119.7, 67.6, 76.1],
    [128.2, 132.5, 84.7, 89.8],
    [149.6, 153.9, 100, 108.6],
    [179.5, 188, 121.4, 130],
    [205.2, 213.7, 145.3, 153.9],
    [230.8, 239.3, 171, 179.5],
    [273.5, 282.1, 209.4, 222.3],
    [312, 324.8, 247.9, 265],
    [517.1, 534.2, 435.9, 461.6]
];



function calculateCards3() {

    let tiraz = parseInt(0);
    let papir = parseInt($('#value :selected').val());
    let total = parseInt(document.getElementById("kolicina").value);
    let a = $("#dimension option:selected").text();
    let br = $("#kolicina option:selected").text();
    let boja = $("#value option:selected").text();
    console.log(total);

    if (total == 1000) {
        tiraz = 0;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 2000) {
        tiraz = 1;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 3000) {
        tiraz = 2;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }

    else if (total == 5000) {
        tiraz = 3;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 10000) {
        tiraz = 4;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 15000) {
        tiraz = 5;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 20000) {
        tiraz = 6;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 25000) {
        tiraz = 7;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 30000) {
        tiraz = 8;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 40000) {
        tiraz = 9;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 50000) {
        tiraz = 10;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";


    }
    else if (total == 100000) {

        tiraz = 11;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }


    let ukupno = test[tiraz][papir] || 0;

    console.log(tiraz)

    console.log(ukupno);
    document.getElementById("rez").innerHTML = ukupno;


    document.getElementById("paper").innerHTML = "Dimenzije: " + a;
    document.getElementById("tiraz").innerHTML = "Tiraž: " + br;
    document.getElementById("color").innerHTML = "Boja: " + boja;
    document.getElementById("tekst").innerHTML = txt;
    document.getElementById("tekst2").innerHTML = txt2;



}

function calculateCards4() {

    let tiraz = 0;
    let papir = parseInt($('#value :selected').val());
    let total = parseInt(document.getElementById("kolicina").value);
    let a = $("#dimension option:selected").text();
    let br = $("#kolicina option:selected").text();
    let boja = $("#value option:selected").text();


    if (total == 1000) {
        tiraz = 0;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";


    }

    else if (total == 2000) {
        tiraz = 1;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";


    }
    else if (total == 3000) {
        tiraz = 2;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";



    }
    else if (total == 4000) {
        tiraz = 3;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 5000) {
        tiraz = 4;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 10000) {
        tiraz = 5;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 15000) {
        tiraz = 6;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 20000) {
        tiraz = 7;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 25000) {
        tiraz = 8;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 30000) {
        tiraz = 9;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 40000) {
        tiraz = 10;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 50000) {
        tiraz = parseInt(11);
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 100000) {
        tiraz = parseInt(12);
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }

    let ukupno = ((d5[tiraz][papir]).toFixed(2)) || 0;
    cijena = d5[tiraz][papir] || 0;

    console.log(ukupno);
    document.getElementById("rez").innerHTML = ukupno;


    document.getElementById("paper").innerHTML = "Dimenzije: " + a;
    document.getElementById("tiraz").innerHTML = "Tiraž: " + br;
    document.getElementById("color").innerHTML = "Boja: " + boja;
    document.getElementById("tekst").innerHTML = txt;
    document.getElementById("tekst2").innerHTML = txt2;



}



function calculateCards() {

    let tiraz = parseInt(0);
    let papir = parseInt($('#value :selected').val());
    let total = parseInt(document.getElementById("kolicina").value);
    let a = $("#dimension option:selected").text();
    let br = $("#kolicina option:selected").text();
    let boja = $("#value option:selected").text();


    if (total == 2000) {
        tiraz = 0;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 3000) {
        tiraz = 1;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 5000) {
        tiraz = 2;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 10000) {
        tiraz = 3;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 15000) {
        tiraz = 4;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 20000) {
        tiraz = 5;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 25000) {
        tiraz = 6;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 30000) {
        tiraz = 7;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 40000) {
        tiraz = 8;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 50000) {
        tiraz = 9;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 100000) {
        tiraz = 10;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }





    let ukupno = ((a6[tiraz][papir]).toFixed(2)) || 0;
    cijena = a6[tiraz][papir] || 0;

    document.getElementById("rez").innerHTML = ukupno;


    document.getElementById("paper").innerHTML = "Dimenzije: " + a;
    document.getElementById("tiraz").innerHTML = "Tiraž: " + br;
    document.getElementById("color").innerHTML = "Boja: " + boja;
    document.getElementById("tekst").innerHTML = txt;
    document.getElementById("tekst2").innerHTML = txt2;



}



function calculateCards2() {

    let tiraz = parseInt(0);
    let papir = parseInt($('#value :selected').val());
    let total = parseInt(document.getElementById("kolicina").value);
    let a = $("#dimension option:selected").text();
    let br = $("#kolicina option:selected").text();
    let boja = $("#value option:selected").text();


    if (total == 2000) {
        tiraz = 0;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 3000) {
        tiraz = 1;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 5000) {
        tiraz = 2;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 10000) {
        tiraz = 3;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 15000) {
        tiraz = 4;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 20000) {
        tiraz = 5;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 25000) {
        tiraz = 6;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 30000) {
        tiraz = 7;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 40000) {
        tiraz = 8;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 50000) {
        tiraz = 9;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 100000) {
        tiraz = 10;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }





    let ukupno = ((b6[tiraz][papir]).toFixed(2)) || 0;
    cijena = b6[tiraz][papir] || 0;

    document.getElementById("rez").innerHTML = ukupno;


    document.getElementById("paper").innerHTML = "Dimenzije: " + a;
    document.getElementById("tiraz").innerHTML = "Tiraž: " + br;
    document.getElementById("color").innerHTML = "Boja: " + boja;
    document.getElementById("tekst").innerHTML = txt;
    document.getElementById("tekst2").innerHTML = txt2;





}

function calculateCards5() {

    let tiraz = parseInt(0);
    let papir = parseInt($('#value :selected').val());
    let total = parseInt(document.getElementById("kolicina").value);
    let a = $("#dimension option:selected").text();
    let br = $("#kolicina option:selected").text();
    let boja = $("#value option:selected").text();


    if (total == 1000) {
        tiraz = 0;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }


    else if (total == 2000) {
        tiraz = 1;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 3000) {
        tiraz = 2;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 5000) {
        tiraz = 3;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 10000) {
        tiraz = 4;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 15000) {
        tiraz = 5;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 20000) {
        tiraz = 6;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 25000) {
        tiraz = 7;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 30000) {
        tiraz = 8;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 40000) {
        tiraz = 9;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 50000) {
        tiraz = 10;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }







    let ukupno = ((e4[tiraz][papir]).toFixed(2)) || 0;
    cijena = e4[tiraz][papir] || 0;

    document.getElementById("rez").innerHTML = ukupno;


    document.getElementById("paper").innerHTML = "Dimenzije: " + a;
    document.getElementById("tiraz").innerHTML = "Tiraž: " + br;
    document.getElementById("color").innerHTML = "Boja: " + boja;
    document.getElementById("tekst").innerHTML = txt;
    document.getElementById("tekst2").innerHTML = txt2;





}

function calculateCards6() {

    let tiraz = 0;
    let papir = parseInt($('#value :selected').val());
    let total = parseInt(document.getElementById("kolicina").value);
    let a = $("#dimension option:selected").text();
    let br = $("#kolicina option:selected").text();
    let boja = $("#value option:selected").text();

    if (total == 1000) {
        tiraz = 0;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }


    else if (total == 2000) {
        tiraz = 1;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 3000) {
        tiraz = 2;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 5000) {
        tiraz = 3;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 10000) {
        tiraz = 4;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 15000) {
        tiraz = 5;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 20000) {
        tiraz = 6;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 25000) {
        tiraz = 7;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 30000) {
        tiraz = 8;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 40000) {
        tiraz = 9;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 50000) {
        tiraz = 10;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }






    let ukupno = ((f4[tiraz][papir]).toFixed(2)) || 0;
    cijena = f4[tiraz][papir] || 0;

    document.getElementById("rez").innerHTML = ukupno;


    document.getElementById("paper").innerHTML = "Dimenzije: " + a;
    document.getElementById("tiraz").innerHTML = "Tiraž: " + br;
    document.getElementById("color").innerHTML = "Boja: " + boja;
    document.getElementById("tekst").innerHTML = txt;
    document.getElementById("tekst2").innerHTML = txt2;





}

function calculateCards7() {

    let tiraz = parseInt(0);
    let papir = parseInt($('#value :selected').val());
    let total = parseInt(document.getElementById("kolicina").value);
    let a = $("#dimension option:selected").text();
    let br = $("#kolicina option:selected").text();
    let boja = $("#value option:selected").text();


    if (total == 2000) {
        tiraz = 0;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 3000) {
        tiraz = 1;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 5000) {
        tiraz = 2;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 10000) {
        tiraz = 3;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 15000) {
        tiraz = 4;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 20000) {
        tiraz = 5;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 25000) {
        tiraz = 6;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 30000) {
        tiraz = 7;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 40000) {
        tiraz = 8;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 50000) {
        tiraz = 9;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 100000) {
        tiraz = 10;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }





    let ukupno = ((g[tiraz][papir]).toFixed(2)) || 0;
    cijena = h[tiraz][papir] || 0;

    document.getElementById("rez").innerHTML = ukupno;


    document.getElementById("paper").innerHTML = "Dimenzije: " + a;
    document.getElementById("tiraz").innerHTML = "Tiraž: " + br;
    document.getElementById("color").innerHTML = "Boja: " + boja;



}

function calculateCards8() {

    let tiraz = parseInt(0);
    let papir = parseInt($('#value :selected').val());
    let total = parseInt(document.getElementById("kolicina").value);
    let a = $("#dimension option:selected").text();
    let br = $("#kolicina option:selected").text();
    let boja = $("#value option:selected").text();


    if (total == 2000) {
        tiraz = 0;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 3000) {
        tiraz = 1;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 5000) {
        tiraz = 2;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 10000) {
        tiraz = 3;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 15000) {
        tiraz = 4;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 20000) {
        tiraz = 5;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 25000) {
        tiraz = 6;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 30000) {
        tiraz = 7;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 40000) {
        tiraz = 8;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 50000) {
        tiraz = 9;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 100000) {
        tiraz = 10;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }





    let ukupno = ((h[tiraz][papir]).toFixed(2)) || 0;
    cijena = h[tiraz][papir] || 0;

    document.getElementById("rez").innerHTML = ukupno;


    document.getElementById("paper").innerHTML = "Dimenzije: " + a;
    document.getElementById("tiraz").innerHTML = "Tiraž: " + br;
    document.getElementById("color").innerHTML = "Boja: " + boja;
    document.getElementById("tekst").innerHTML = txt;
    document.getElementById("tekst2").innerHTML = txt2;



}

function calculateCards9() {
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
    else if (total == 300) {
        tiraz = 3;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 500) {
        tiraz = 4;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 1000) {
        tiraz = 5;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }


    let ukupno = ((aa[tiraz][papir]).toFixed(2)) || 0;
    cijena = aa[tiraz][papir] || 0;

    document.getElementById("rez").innerHTML = ukupno;


    document.getElementById("paper").innerHTML = "Dimenzije: " + a;
    document.getElementById("tiraz").innerHTML = "Tiraž: " + br;
    document.getElementById("color").innerHTML = "Boja: " + boja;
    document.getElementById("tekst").innerHTML = txt;
    document.getElementById("tekst2").innerHTML = txt2;

}

function calculateCards10() {
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
    else if (total == 300) {
        tiraz = 3;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 500) {
        tiraz = 4;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 1000) {
        tiraz = 5;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }


    let ukupno = ((bb[tiraz][papir]).toFixed(2)) || 0;
    cijena = bb[tiraz][papir] || 0;

    document.getElementById("rez").innerHTML = ukupno;


    document.getElementById("paper").innerHTML = "Dimenzije: " + a;
    document.getElementById("tiraz").innerHTML = "Tiraž: " + br;
    document.getElementById("color").innerHTML = "Boja: " + boja;
    document.getElementById("tekst").innerHTML = txt;
    document.getElementById("tekst2").innerHTML = txt2;

}

function calculateCards11() {
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
    else if (total == 300) {
        tiraz = 3;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 500) {
        tiraz = 4;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 1000) {
        tiraz = 5;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }


    let ukupno = ((cc[tiraz][papir]).toFixed(2)) || 0;
    cijena = cc[tiraz][papir] || 0;

    document.getElementById("rez").innerHTML = ukupno;


    document.getElementById("paper").innerHTML = "Dimenzije: " + a;
    document.getElementById("tiraz").innerHTML = "Tiraž: " + br;
    document.getElementById("color").innerHTML = "Boja: " + boja;
    document.getElementById("tekst").innerHTML = txt;
    document.getElementById("tekst2").innerHTML = txt2;

}
function calculateCards12() {
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
    else if (total == 300) {
        tiraz = 3;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 500) {
        tiraz = 4;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }
    else if (total == 1000) {
        tiraz = 5;
        txt = "* Izrada grafičke pripreme nije uračunata u cenu. Cena radnog sata je 10e po započetom satu. Za sva dodatna pitanja ili informacije kontaktirajte naše operatere.";
        txt2 = "*1e se racuna po srednjem kursu NBRS";

    }


    let ukupno = ((dd[tiraz][papir]).toFixed(2)) || 0;
    cijena = dd[tiraz][papir] || 0;

    document.getElementById("rez").innerHTML = ukupno;


    document.getElementById("paper").innerHTML = "Dimenzije: " + a;
    document.getElementById("tiraz").innerHTML = "Tiraž: " + br;
    document.getElementById("color").innerHTML = "Boja: " + boja;

}

$('#forma').change(function () {
    let formula = parseInt($('#dimension :selected').val());

    if (formula == 1)
        calculateCards();

    if (formula == 2)
        calculateCards2();

    if (formula == 3)
        calculateCards3();

    if (formula == 4)
        calculateCards4();

    if (formula == 5)
        calculateCards5();

    if (formula == 6)
        calculateCards6();

    if (formula == 7)
        calculateCards7();

    if (formula == 8)
        calculateCards8();

    if (formula == 9)
        calculateCards9();

    if (formula == 10)
        calculateCards9();

    if (formula == 11)
        calculateCards10();

    if (formula == 12)
        calculateCards10();

    if (formula == 13)
        calculateCards11();

    if (formula == 14)
        calculateCards11();

    if (formula == 15)
        calculateCards12();

    if (formula == 16)
        calculateCards12();

});

