const compression = require('compression');
const express = require('express');
const serverStatic = require('serve-static');
const path = require('path');
const nodemailer = require('nodemailer');
const app = express();

var transporter = nodemailer.createTransport({
	service:'gmail',
	host: 'smtp.gmail.com',	
    port: 587,
    secure: false,
    requireTLS: true,	
	auth:{
		user:'genesisrriosweb@gmail.com',
		pass:'Tr@um2180'
	}
});

app.get('/contactme',(parameters) => {
	const mailOptions = {
		from: 'genesisrriosweb@gmail.com',
		to: 'genesisrriosweb@gmail.com',
		subject: 'Cliente ' + parameters.query.name,
		html: '<p>Nombre: ' + parameters.query.name + '</p>' + 
		'<p>Email: ' + parameters.query.email + '</p> ' + ' <p>Telefono: ' +
		parameters.query.phone + ' </p> ' + ' <p>Nota: ' + parameters.query.note + '</p>'
	};	
	transporter.sendMail(mailOptions, function(error, response){
		if(error){
		}else{
		}
		transporter.close(); 
	});	
});
app.use(compression())
app.use('/', serverStatic(path.join(__dirname, '/dist')));

const port = process.env.PORT || 8000
app.listen(port);