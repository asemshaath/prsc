const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  // service: 'gmail', // Use the built-in Gmail service
  
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'your_gmail@gmail.com',
    pass: 'your_pass' // Use an app password if you have 2FA enabled
  }
});


// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"HR Bitches Organization" <maddison53@ethereal.email>', // sender address
    to: "shaathasem@gmail.com", // list of receivers
    subject: "Software Engineer | Update", // Subject line
    text: "Hi Asem, Thank you for your interest in our shitty company. After careful consideration, we have decided not to move forward with your application at this time. We appreciate the time you wasted in the process.", // plain text body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

main().catch(console.error);
