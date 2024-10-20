const { Telegraf, Context } = require('telegraf')
// const { message } = require('telegraf/filters')
const config = require('./config.json')
const FormData = require('form-data');
const axios = require('axios')


const bot = new Telegraf(config.Token,);
// const bot = new Telegraf('7152094183:AAHSFpw5gEMfu9wfcZ36CzocQcK64Kot8hc')

// Fungsi untuk menghasilkan tautan download
async function generateDownloadLink(query) {
  // Implementasikan logika untuk menghasilkan tautan download berdasarkan query
  // Misalnya, Anda dapat menggunakan layanan pihak ketiga atau API tertentu
  // Untuk contoh ini, kita akan mengembalikan tautan dummy
  return `https://example.com/download/${encodeURIComponent(query)}`;
}

// Command /download untuk menghasilkan tautan download
bot.hears(/\/download (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const query = match[1];

  bot.sendMessage(chatId, `Menghasilkan tautan download untuk: ${query}...`);

  const downloadLink = await generateDownloadLink(query);

  bot.sendMessage(chatId, `Tautan download untuk ${query}: ${downloadLink}`);
});




bot.start((ctx) => ctx.reply(`hai selamat datang ,${ctx.message.username}`))
bot.help((ctx) => ctx.reply(`ada yang bisa saya bantu untuk mengatasi masalah?, ${ctx.message.username}`))



bot.hears('carikan foto', (ctx) => ctx.reply 
('https://kompaspedia.kompas.id/wp-content/uploads/2022/10/20190808RAD35-892x540.jpg'))
bot.hears('Siapa nama saya?', (ctx) => ctx.reply('anda adalah orang ganteng'))
bot.hears('editor', (ctx) => ctx.reply(''))




bot.launch()