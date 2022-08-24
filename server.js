const express = require('express')
const app = express()
const axios = require("axios");
app.use(express.json());

app.post('/webhook', function (req, res) {
    console.log('Recibí : ', JSON.stringify(req.body, null, " "));

    if (!req.body.statuses){
        if (req.body.messages[0].text.body.toLowerCase() == 'hola'){
            console.log('********************');
            console.log('Te han saludado');
            console.log('********************');
            console.log('Respondiendo...');
            responderHola();
        }
    }
  res.status(200);
})

function responderHola(){
    try {
        let payload = axios.post(
            "https://waba-sandbox.360dialog.io/v1/messages",
            {
              recipient_type: "individual",
              to: "56946212925",
              type: "text",
              text: {
                body: "Hola! Este es un mensaje de prueba",
              },
            },
            {
              headers: {
                "D360-API-KEY": "zOVe94_sandbox",
              },
            }
          );
          return payload.data;
    } catch (error) {
        console.log(error);
    }
}

app.listen(3000, ()=>{
    console.log('servidor corriendo en el puerto 3000')
})