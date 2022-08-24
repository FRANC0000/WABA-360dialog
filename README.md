# WABA-360dialog
npm i
run: npm run dev

ctrl+shift+p > ngrok: start (extension VSCODE > NGROK)

postman: 
post
url > https://waba-sandbox.360dialog.io/v1/configs/webhook,

body > {"url": "url-ngrok/webhook","headers": {"Content-Type": "application/json","D360-API-KEY": "API-KEY"}}

headers > { "D360-API-KEY": "API-KEY" }

resp 200 -> OK
