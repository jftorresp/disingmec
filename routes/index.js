const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const creds = require("../config");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

const transport = {
  host: "outlook.office365.com", // Don’t forget to replace with the SMTP host of your provider
  port: 587,
  auth: {
    user: creds.USER,
    pass: creds.PASS,
  },
};

var transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});

router.post("/send", (req, res, next) => {
  const nombre = req.body.nombre;
  const telefono = req.body.telefono;
  const email = req.body.email;
  const pais = req.body.pais;
  const mensaje = req.body.mensaje;
  const content = `Nombre: ${nombre} \n Teléfono: ${telefono} \n Email: ${email}  \n País: ${pais} \n Mensaje: ${mensaje} `;

  const mail = {
    from: nombre,
    to: "jf.torresp@uniandes.edu.co", // Change to email address that you want to receive messages on
    subject: "Información Disingmec",
    text: content,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: "fail",
      });
    } else {
      res.json({
        status: "success",
      });
      transporter.sendMail(
        {
          from: "jf.torresp@uniandes.edu.co",
          to: email,
          subject: "Su mensaje ha sido enviado!",
          text: `Gracias por comunicarse con nosotros! Le estaremos enviando una respuesta muy pronto\n\nSus detalles\nNombre: ${nombre}\nEmail: ${email}\nMensaje: ${mensaje}`,
        },
        function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log("Mensaje enviado: " + info.response);
          }
        }
      );
    }
  });
});

module.exports = router;
