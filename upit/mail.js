const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const fs = require('fs')
const multer = require('multer')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, "/public")));
app.use(express.static('../build'))

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// app.get("/", function (request, response) {
//   response.sendFile(__dirname + "/zarko-zadatak/index.html");
// });

// app.get("/rezervacija", function (request, response) {
//   response.sendFile(__dirname + "/zarko-zadatak/rezervacija.html");
// });
let firstName;
let lastName;
let email;
let cv;
let cover;
let answer;


// const Storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         if (file.fieldname === "cv") {
//             cb(null, './files')
//         }
//         else if (file.fieldname === "cover") {
//             cb(null, './files');
//         }

//     },
//     filename: (req, file, cb) => {
//             cb(null, file.fieldname + Date.now() + file.originalname);
//         } 

// });


let upload = multer({ dest: './files' });


app.post('/job', upload.single('cv'), function (req, res, next) {

    req.setTimeout(0)
    const email = `${req.body.email}`;
    const output = `
            <p> Imate novi upit za posao </p
                <h3> Detalji upita: </h3>
                <ul>
             <li>Ime : ${req.body.firstName}</li>
            <li>Prezime: ${req.body.lastName}</li>
             <li>Email: ${req.body.email}</li>
             <li>Portfolio: ${req.body.link}</li>
             <p>Poruka: ${req.body.answer}</p>
             


         </ul>
             `;





    let transporter = nodemailer.createTransport({
        host: 'mail.grafomarketing.online',
        port: 465,
        secure: true,
        auth: {
            user: 'form2@grafomarketing.online',
            pass: 'grafoforma2',
        },
        tls: {
            rejectUnauthorized: false
        }
    })
    let mailOptions = {
        from: '<form2@grafomarketing.online>',
        to: "info@grafomarketing.online",

        subject: "UPIT ZA POSAO",
        html: output,
        attachments: [
            {
                filename: req.file.originalname,
                path: req.file.path
            }

        ]

    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent: ");
            res.send({ success: true });
            fs.unlink(path, function (err) {
                if (err) {
                    return res.end(err)
                } else {
                    console.log("deleted")
                }
            })
        }

    });
});






app.post("/send", (req, res) => {
    const email = `${req.body.email}`;
    const output = `
  <p> Imate novi upit </p>
  <h3> Detalji upita: </h3>
  <ul>
      <li>Ime i prezime: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
      <li>Broj telefona: ${req.body.phone}</li>
      <li>Firma: ${req.body.firm}</li>
      <li>PIB: ${req.body.pib}</li>
      <li>Adresa: ${req.body.adress}</li>
      <li>Proizvod: ${req.body.product}</li>
      <li>Tiraz: ${req.body.tiraz}</li>
      <li>Priprema: ${req.body.priprema}</li>
      <li>Isporuka: ${req.body.isporuka}</li>
      <p>Poruka: ${req.body.message}</p>


  </ul>
  `;

    let transporter = nodemailer.createTransport({
        host: 'mail.grafomarketing.online',
        port: 465,
        secure: true,
        auth: {
            user: 'form2@grafomarketing.online',
            pass: 'grafoforma2',
        },
        tls: {
            rejectUnauthorized: false
        }
    })
    let mailOptions = {
        from: '<form2@grafomarketing.online>',
        to: "info@grafomarketing.online",

        subject: "UPIT",
        html: output,
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent: ");
            res.json("Upit je Poslat");
        }
    });
});



app.post("/contact", (req, res) => {
    const email = `${req.body.email}`;
    const output = `
  <p> Imate novu porku </p
  <h3> Detalji poruke: </h3>
  <ul>
      <li>Naslov: ${req.body.subject}</li>
      <li>Ime i Prezime : ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
      <li>Telefon: ${req.body.phone}</li>
      <p>Poruka: ${req.body.message}</p>


  </ul>
  `;

    let transporter = nodemailer.createTransport({
        host: 'mail.grafomarketing.online',
        port: 465,
        secure: true,
        auth: {
            user: 'form2@grafomarketing.online',
            pass: 'grafoforma2',
        },
        tls: {
            rejectUnauthorized: false
        }
    })
    let mailOptions = {
        from: '<form2@grafomarketing.online>',
        to: "info@grafomarketing.online",

        subject: "UPIT ZA POSAO",
        html: output,
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent: ");
            res.json("Upit je Poslat");
        }
    });
});



app.post("/mail", (req, res) => {
    const email = `${req.body.email}`;
    const output = `
  <p> Imate novi upit </p>
  <h3> Detalji upita: </h3>
  <ul>
      <li>Ime i prezime: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
      <li>Broj telefona: ${req.body.phone}</li>
      <li>Firma: ${req.body.firm}</li>
      <li>PIB: ${req.body.pib}</li>
      <li>Adresa: ${req.body.adress}</li>
      <li>Proizvod: ${req.body.product}</li>
      <p>Poruka: ${req.body.message}</p>


  </ul>
  `;

    let transporter = nodemailer.createTransport({
        host: 'mail.grafomarketing.online',
        port: 465,
        secure: true,
        auth: {
            user: 'form2@grafomarketing.online',
            pass: 'grafoforma2',
        },
        tls: {
            rejectUnauthorized: false
        }
    })
    let mailOptions = {
        from: '<form2@grafomarketing.online>',
        to: "info@grafomarketing.online",

        subject: "UPIT",
        html: output,
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent: ");
            res.json("Upit je Poslat");
        }
    });
});

// web web-form web-form-en
app.post("/web", (req, res) => {
    const email = `${req.body.email}`;
    const output = `
  <p> Imate novi upit </p>
  <h3> Detalji upita: </h3>
  <ul>
      <li>Ime : ${req.body.firstname}</li>
      <li>Prezime: ${req.body.lastname}</li>
      <li>Email: ${req.body.email}</li>
      <li>Kompanija: ${req.body.company}</li>
      <p>Poruka: ${req.body.message}</p>


  </ul>
  `;

    let transporter = nodemailer.createTransport({
        host: 'mail.grafomarketing.online',
        port: 465,
        secure: true,
        auth: {
            user: 'form2@grafomarketing.online',
            pass: 'grafoforma2',
        },
        tls: {
            rejectUnauthorized: false
        }
    })
    let mailOptions = {
        from: '<form2@grafomarketing.online>',
        to: "info@grafomarketing.online",
        html: output,
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent: ");
            res.json("Upit je Poslat");
        }
    });
});

app.listen(3000, () => console.log("Server started on port ${PORT}"));
