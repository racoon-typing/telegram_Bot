const TelegramApi = require('node-telegram-bot-api');

const token = '5767402335:AAGrPlY-lDSlUTkwAcL8bM-lmhzAzDX2_GI';

const bot = new TelegramApi(token, {polling: true});

bot.on('message', msg => {
    const text = msg.text;
    const chatId = msg.chat.id;

    if (text === '/start') {
        bot.sendMessage(chatId, `https://tlgrm.eu/_/stickers/7e8/aa6/7e8aa67b-ad91-4d61-8f62-301bde115989/256/1.webp`);
        bot.sendMessage(chatId, `Добро пожаловать в телеграм бот: Даниила С`);
    }

    if (text === '/info') {
        bot.sendMessage(chatId, `Тебя зовут ${msg.from.first_name} ${msg.from.last_name}`); 
    }


    bot.sendMessage(chatId, `Ты написал мне ${text}`);
});