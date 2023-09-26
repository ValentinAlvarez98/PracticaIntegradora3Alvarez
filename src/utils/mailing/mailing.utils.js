import nodemailer from 'nodemailer';
import CONFIG from '../../config/environment/config.js';

const MAIL = {
      user: CONFIG.MAIL.user,
      pass: CONFIG.MAIL.password
};

const TRANSPORTER = nodemailer.createTransport({

      service: 'gmail',
      port: 587,
      auth: {
            user: MAIL.user,
            pass: MAIL.pass
      }

});

// Para utilizar en un futuro con Mongo, en lugar de un archivo json
let MAILSTOSEND = [];

async function loadUsersToSend() {

      try {

            const data = await fs.readFile('usersToSend.json', 'utf8');
            const USERS = JSON.parse(data);
            MAILSTOSEND = Object.values(USERS);

      } catch (error) {

            console.error(error);

      };

};

export async function sendWelcomeEmail(email) {

      const HTML = `
      <h1>Bienvenido</h1>
      <div>
          <h2>Gracias por registrarte</h2>
      </div>
      <div>
              <p>Ya podes empezar a comprar</p>
      </div>

      <div>
                  <p>Saludos</p>
      </div>

      <div>
                  <h3> Como siempre, gracias por confiar en nosotros</h3>
      </div>

      <div>
                  <p>Como aclaración:</p>
                  <p>Cuando veas un error a esta altura del proyecto, imagina que este soy yo cada vez que veo mi código:
                  </p>
      </div>

      <img src = "cid:dissociated-cat">

      `;

      const mailOptions = {
            from: MAIL.user,
            to: email,
            subject: 'Bienvenido',
            html: HTML,
            attachments: [{
                  filename: 'dissociated-cat.gif',
                  path: process.cwd() + '/public/assets/imgs/dissociated-cat.gif',
                  cid: 'dissociated-cat'
            }]
      };

      return new Promise((resolve, reject) => {
            TRANSPORTER.sendMail(mailOptions, (error, info) => {
                  if (error) {
                        reject(error);
                  } else {
                        resolve(info);
                  }
            });
      });

}

export async function sendGoodbyeEmail(email) {

      const HTML = `
      <h1>Adios</h1>
      <div>
          <h2>Gracias por haberte registrado</h2>
      </div>
      <div>
              <p>Esperamos que vuelvas pronto</p>
      </div>

      <div>
                  <p>Saludos</p>
      </div>

      <div>
                  <h3> Como siempre, gracias por confiar en nosotros</h3>
      </div>

      <div>
                  <p>Como aclaración:</p>
                  <p>Cuando veas un error a esta altura del proyecto, imagina que este soy yo cada vez que veo mi código:
                  </p>
      </div>

      <img src = "cid:dissociated-cat">

      `;

      const mailOptions = {
            from: MAIL.user,
            to: email,
            subject: 'Adios',
            html: HTML,
            attachments: [{
                  filename: 'dissociated-cat.gif',
                  path: process.cwd() + '/public/assets/imgs/dissociated-cat.gif',
                  cid: 'dissociated-cat'
            }]
      };

      return new Promise((resolve, reject) => {
            TRANSPORTER.sendMail(mailOptions, (error, info) => {
                  if (error) {
                        reject(error);
                  } else {
                        resolve(info);
                  }
            });
      });

}