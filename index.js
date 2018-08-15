// ╔╗─╔╗╔══╗╔═╗╔══╗╔══╗╔╗─╔╗╔═╗╔══╗╔══╗
// ║╚╦╝║║╔╗║║╬║╚║║╝║╔╗║║╚╦╝║║╦╝╚║║╝║══╣
// ╚╗║╔╝║╠╣║║╗╣╔║║╗║╠╣║╚╗║╔╝║╩╗╔║║╗╠══║
// ─╚═╝─╚╝╚╝╚╩╝╚══╝╚╝╚╝─╚═╝─╚═╝╚══╝╚══╝
// ────────────────────────────────────

const Djs = require("discord.js");
const bot = new Discord.Client({
    autoReconnect: true,
    disableEveryone: true
});
//Botconfig.json fica o token e o seu prefix =)
const config = require("./botconfig.json")

bot.login(config.token)
//Se quiser definir o token e o prefix só fazer isso ( sem o // )
// const token = config.token
// const prefix = config.prefix

//╔═╗╔╗─╔╗╔═╗╔═╦╗╔══╗╔═╗╔══╗
//║╦╝║╚╦╝║║╦╝║║║║╚╗╔╝║║║║══╣
//║╩╗╚╗║╔╝║╩╗║║║║─║║─║║║╠══║
//╚═╝─╚═╝─╚═╝╚╩═╝─╚╝─╚═╝╚══╝
//──────────────────────────

//Quando o bot entrar
bot.on("ready", async () => {

//Log de console
console.log("Logado (a) em")
console.log(bot.user.username)
console.log(bot.user.id)
console.log(bot.guilds.size)
console.log(bot.users.size)
//Setar o joguinho
bot.setGame("joguinho daora da yukkie")
console.log("Joguinho carregado")

//Se for bot.setActivity use a seguinte forma
//    bot.user.setActivity('stream daora da yukkie', {url: 'https://twitch.tv/suatwitch', type: 'STREAMING'}); <= stream
//    bot.user.setActivity('musica daora da yukkie', {type: 'LISTENING'}); <= ouvindo
//    bot.user.setActivity('video daora da yukkie', {type: 'WATCHING'}); <= vendo
//    bot.user.setActivity('jogo daora da yukkie', {type: 'PLAYING'}); <= jogando

// Mensagem
bot.on("message", (message) => {

// Se o canal da mensagem for no Privado ( DM ), ele retorna e não executa o comando
   if(message.channel.type === "dm") return;
// Se o author da mensagem ( quem executou ) for um bot, ele retorna e não executa o comando
	 if(message.author.bot) return;
// Se a mensagem não tiver o prefix, ele retorna e não executa o comando ( se você setou uma const você coloca o !nomedaconst
   if(message.content.startsWith(botconfig.prefix)) return;
	 
// ╔╗╔╗╔══╗╔═╦╗╔══╗╔╗─╔═╗╔═╗
// ║╚╝║║╔╗║║║║║╚╗╗║║║─║╦╝║╬║
// ║╔╗║║╠╣║║║║║╔╩╝║║╚╗║╩╗║╗╣
// ╚╝╚╝╚╝╚╝╚╩═╝╚══╝╚═╝╚═╝╚╩╝
// ─────────────────────────

let comando = message.content.split(" ")[0];
// Se definiu uma const, muda pra nomedaconst.length
comando = comando.slice(botconfig.prefix.length);

let argumentos = message.content.split(" ").slice(1);

try {
    let arquivodocomando = require(`./comandos/${comando}.js`);
		arquivodocomando.run(bot, message, argumentos);
} catch (err) {

    if(err.code === "MODULE_NOT_FOUND") return;
		console.error(err)
		
	}
	
})
bot.login(config.token)
// Se definiu uma const, muda pra bot.login(nomedaconst)
