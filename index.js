const TelegramApi = require('node-telegram-bot-api');

const token = '5767402335:AAGrPlY-lDSlUTkwAcL8bM-lmhzAzDX2_GI';

const bot = new TelegramApi(token, {polling: true});

bot.on('message', msg => {
    console.log(msg);
});