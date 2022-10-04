const TelegramApi = require('node-telegram-bot-api');

const token = '5767402335:AAGrPlY-lDSlUTkwAcL8bM-lmhzAzDX2_GI';

const bot = new TelegramApi(token, {polling: true});
 
const chats = {};

const gameOptions = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: '1', callback_data: '1'}, {text: '2', callback_data: '2'}, {text: '2', callback_data: '3'}],
            [{text: '4', callback_data: '4'}, {text: '6', callback_data: '6'}, {text: '8', callback_data: '8'}],
            [{text: '5', callback_data: '5'}, {text: '7', callback_data: '7'}, {text: '9', callback_data: '9'}],
            [{text: '0', callback_data: '0'}],
        ]
    })
};

bot.setMyCommands([
    {command: '/start', description: 'Начальное приветствие'},
    {command: '/info', description: 'Получить информацию о пользователе '},
    {command: '/game', description: 'Игра угадай цифру'},
]);

const start = () => {
    bot.on('message', async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;
    
        if (text === '/start') {
            await bot.sendSticker(chatId, `https://tlgrm.eu/_/stickers/7e8/aa6/7e8aa67b-ad91-4d61-8f62-301bde115989/256/1.webp`);
            return bot.sendMessage(chatId, `Добро пожаловать в телеграм бот: Даниила С`);
        }
    
        if (text === '/info') {
            return bot.sendMessage(chatId, `Тебя зовут ${msg.from.first_name} ${msg.from.last_name}`); 
        }

        if (text === '/game') {
            await bot.sendMessage(chatId, `Сейчас я загадаю цифру от 0 до 9, а ты должен ее отгадать`);
            const randomNumber = Math.floor(Math.random() * 10); 
            chats[chatId] = randomNumber;
            return bot.sendMessage(chatId, 'Отгадывай', gameOptions);
        }
    
        return bot.sendMessage(chatId, 'Я тебя не понимаю, попробуй еще раз!)')
    });
    
    bot.on('callback_query', async msg => {
        const data = msg.data;
        const chatId = msg.message.chat.id;
        if (data === chats[chatId]) {
            return bot.sendMessage(chatId, `Поздравляю, ты отгадал цифру ${data}`);
        } else {
            return bot.sendMessage(chatId, `К сожалению ты не угадал, бот загадал цифру ${data}`);
        }
        bot.sendMessage(chatId, `Ты выбрал цифру ${data}`);
    });
}


start();