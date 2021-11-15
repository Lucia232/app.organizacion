import {injectable, /* inject, */ BindingScope} from '@loopback/core';

@injectable({scope: BindingScope.TRANSIENT})
export class NotificacionService {
  constructor(/* Add @inject to inject parameters */) { }

  /*
   * Servicio de mensajeria Twilio
   */
  EnviarNotificacionesPorCorreo(){
    const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const msg = {
  to: 'cardenaslucia232@gmail.com', // Change to your recipient
  from: 'cardenaslucia232@gmail.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error: any) => {
    console.error(error)
  })
  }
  EnviarNotificacionesPorSMS(): void {
    console.log("Holaaaa");
    const accountSid = "AC83befc511015728801d97a15bc1fe766";
    const authToken = "72d766cab74ef8701b2f545d6d5a0583";

    const twilio = require('twilio');
    const client = new twilio(accountSid, authToken);

    client.messages
      .create({
        body: 'Hello wonderful, from Twilio',
        to: '+573214774864', // Text this number
        from: '+17156360417', // From a valid Twilio number
      })
      .then((message: any) => console.log(message.sid));

  }
}
