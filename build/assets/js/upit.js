
$("#contact").on("submit", function (e) {
    e.preventDefault();



    if ($("#contact").valid()) {
        $.ajax({
            url: "/contact",
            method: "post",
            data: $("#contact").serialize(),
        }).done((d) => {
            swal({
                title: "Poruka je poslata!",
                text: "Uskoro će Vas kontaktirati neko od naših agenata",

                icon: "success",
                buttons: false,
                timer: 3000,
            }).then(function () {
                location.reload();
            });

        });
        return false;
    } else {
        return false;
    }
});


$("#contact-form").on("submit", function (e) {
    e.preventDefault();



    if ($("#contact-form").valid()) {
        $.ajax({
            url: "/send",
            method: "post",
            data: $("#contact-form").serialize(),
        }).done((d) => {
            swal({
                title: "Poruka je poslata!",
                text: "Uskoro će Vas kontaktirati neko od naših agenata",

                icon: "success",
                buttons: false,
                timer: 3000,
            }).then(function () {
                location.reload();
            });

        });
        return false;
    } else {
        return false;
    }
});



$("#contact-job").on("submit", function (e) {

    e.preventDefault();

    // var formData = new FormData(this);
    let form = $("#contact-job")[0];
    let formData = new FormData(form);
    console.log(formData)


    $.ajax({
        method: "post",
        url: "/job",
        data: formData,
        processData: false,
        contentType: false,
        success: function (data) {
            swal({
                title: "Poruka je poslata!",
                text: "Uskoro će Vas kontaktirati neko od naših agenata",
                icon: "success",
                buttons: false,
                timer: 3000,

            }).then(function () {
                location.reload();
            });
            // console.log('SUCCESS: ' + data.success);
        }
    });
});
// engleski forme
$("#contact-job-one").on("submit", function (e) {

    e.preventDefault();

    // var formData = new FormData(this);
    let form = $("#contact-job-one")[0];
    let formData = new FormData(form);
    console.log(formData)


    $.ajax({
        method: "post",
        url: "/job",
        data: formData,
        processData: false,
        contentType: false,
        success: function (data) {
            swal({
                title: "Message has been sent!",
                text: "You will be contacted shortly by one of our agents",
                icon: "success",
                buttons: false,
                timer: 3000,

            }).then(function () {
                location.reload();
            });
            // console.log('SUCCESS: ' + data.success);
        }
    });
});


$("#contact-en").on("submit", function (e) {
    e.preventDefault();



    if ($("#contact-en").valid()) {
        $.ajax({
            url: "/contact",
            method: "post",
            data: $("#contact-en").serialize(),
        }).done((d) => {
            swal({
                title: "Message has been sent!",
                text: "You will be contacted shortly by one of our agents",

                icon: "success",
                buttons: false,
                timer: 3000,
            }).then(function () {
                location.reload();
            });

        });
        return false;
    } else {
        return false;
    }
});

$("#contact-form-graphic").on("submit", function (e) {
    e.preventDefault();



    if ($("#contact-form-graphic").valid()) {
        $.ajax({
            url: "/mail",
            method: "post",
            data: $("#contact-form-graphic").serialize(),
        }).done((d) => {
            swal({
                title: "Poruka je poslata!",
                text: "Uskoro će Vas kontaktirati neko od naših agenata",

                icon: "success",
                buttons: false,
                timer: 3000,
            }).then(function () {
                location.reload();
            });

        });
        return false;
    } else {
        return false;
    }
});

$("#contact-form-graphic-en").on("submit", function (e) {
    e.preventDefault();



    if ($("#contact-form-graphic-en").valid()) {
        $.ajax({
            url: "/mail",
            method: "post",
            data: $("#contact-form-graphic-en").serialize(),
        }).done((d) => {
            swal({
                title: "Message has been sent!",
                text: "You will be contacted shortly by one of our agents",
                icon: "success",
                buttons: false,
                timer: 3000,
            }).then(function () {
                location.reload();
            });

        });
        return false;
    } else {
        return false;
    }
});

// web web-form web-form-en

$("#web-form-en").on("submit", function (e) {
    e.preventDefault();



    if ($("#web-form-en").valid()) {
        $.ajax({
            url: "/web",
            method: "post",
            data: $("#web-form-en").serialize(),
        }).done((d) => {
            swal({
                title: "Message has been sent!",
                text: "You will be contacted shortly by one of our agents",
                icon: "success",
                buttons: false,
                timer: 3000,
            }).then(function () {
                location.reload();
            });

        });
        return false;
    } else {
        return false;
    }
});

$("#web-form").on("submit", function (e) {
    e.preventDefault();



    if ($("#web-form").valid()) {
        $.ajax({
            url: "/web",
            method: "post",
            data: $("#web-form").serialize(),
        }).done((d) => {
            swal({
                title: "Poruka je poslata!",
                text: "Uskoro će Vas kontaktirati neko od naših agenata",
                icon: "success",
                buttons: false,
                timer: 3000,
            }).then(function () {
                location.reload();
            });

        });
        return false;
    } else {
        return false;
    }
});