const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'tia.collins6@ethereal.email',
        pass: 'fedXC2VbWsV5rZhKx6'
    }
});
app.get('/api/contactme',(req, res) => {
	const mailOptions = {
		from: 'tia.collins6@ethereal.email',
		to: 'genesisrriosweb@gmail.com',
		subject: 'Cliente ' + req.query.email,
		html: '<p>Nombre: ' + req.query.name + '</p>' + 
		'<p>Email: ' + req.query.email + '</p> ' + ' <p>Telefono: ' +
		req.query.phone + ' </p> ' + ' <p>Nota: ' + req.query.note + '</p>'
	};	
	transporter.sendMail(mailOptions, function(error, response){
		if(error){
			res.send(error)
		}else{
			res.send(JSON.stringify({
				"response": "Email sent",
				"responseCode": 1,
			}));
		}
		transporter.close(); 
	});
});
app.listen(8000);
