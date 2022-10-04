const TelegramApi = require('node-telegram-bot-api');

const token = '5767402335:AAGrPlY-lDSlUTkwAcL8bM-lmhzAzDX2_GI';

const bot = new TelegramApi(token, {polling: true});

const chats = {};

bot.setMyCommands([
    {command: '/start', description:'Начальное приветствие'},
    {command: '/info', description:'Получить информацию о пользователе '},
]);

const start = () => {
    bot.on('message', async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;
    
        if (text === '/start') {
            await bot.sendMessage(chatId, `https://tlgrm.eu/_/stickers/7e8/aa6/7e8aa67b-ad91-4d61-8f62-301bde115989/256/1.webp`);
            return bot.sendMessage(chatId, `Добро пожаловать в телеграм бот: Даниила С`);
        }
    
        if (text === '/info') {
            return bot.sendMessage(chatId, `Тебя зовут ${msg.from.first_name} ${msg.from.last_name}`); 
        }

        if (text === '/game') {
            await bot.sendMessage(chatId, `Сейчас я загадаю цифру от 0 до 9, а ты должен ее отгадать`);
            const randomNumber = Math.floor(Math.random() * 10); 

        }
    
        return bot.sendMessage(chatId, 'Я тебя не понимаю, попробуй еще раз!)')
    });    
}

start();