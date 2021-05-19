const Discord = require ("discord.js");
const client = new Discord.Client;
const config = require ("./config.json");
require('custom-env').env('development')


var prefix = config.prefix;


client.on("ready", () => {
    console.log(`${client.user.username} esta preparado!`);
    client.user.setActivity("Este es el estado!")
});


client.on("message", async message => {
    const args = message.content.slice(prefix.lenght).trim().split(/ +/g);
    const comando = args.shift().toLowerCase();
    
    
    if(!message.content.startsWith(prefix)) return;
    if(message.author.bot) return;
    
    
    let usuario = message.author
    
    
    switch (comando){
      case("!hola"):
      message.reply("Hola, como estas!? ");
      break;
      case("!mequeres?"):
      message.reply("Te Amo Mucho <3 ");
      break;
      case("!adios"):
      message.channel.send("Hasta luego!");
      break;
      case("!twitch"):
      let mensaje = new Discord.MessageEmbed()
      mensaje.setAuthor(usuario.username, usuario.displayAvatarURL)
      mensaje.setTitle("Mi twitch!")
      mensaje.setDescription("[Este](https://www.twitch.tv/sweetceci) es mi canal de twitch!")
      mensaje.setFooter("Te Quiero UwU")
      mensaje.setTimestamp()
      mensaje.setColor("RANDOM")
      message.channel.send(mensaje);
      break;
  }
});


client.login(process.env.AUTH_TOKEN);