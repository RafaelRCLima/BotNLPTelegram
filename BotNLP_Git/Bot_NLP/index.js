const Bot = require('node-telegram-bot-api');
const axios = require('axios');
const querystring = require('querystring');
const token = '########################ADICIONAR O TOKEN AQUI##################################'
const url = 'https://launchlibrary.net/1.3/launch';
const bot = new Bot(token, {polling: true});

bot.on('message', (msg) => {
axios.post('http://127.0.0.1:3000/process', querystring.stringify({
          text: msg.text,
      })).then((response) => {	
		// Quando receber os dados da IA
         let dados = response.data;

         bot.sendMessage(msg.chat.id, dados.answer);
		
      }).catch((e) => console.log(e));
});

