const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "$";
var adminprefix = '$'



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});






 

client.on("message", message => {
    if (message.content.startsWith("$obc")) {
                 if (!message.member.hasPermission("ADMINISTRATOR"))  return;   
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' ');
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {   
  m.send(`${argresult}\n ${m}`);
  })
  message.channel.send(`\`${message.guild.members.filter( m => m.presence.status !== 'all').size}\`:mailbox:  عدد المستلمين `); 
  message.delete();
  };
  });



  client.on("message", message => {  
   
              if (message.content.startsWith(prefix + "bc")) {   
                           if (!message.member.hasPermission("ADMINISTRATOR"))  return; 
    let args = message.content.split(" ").slice(1);  
    var argresult = args.join(' '); 
    message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {  
   m.send(`${argresult}\n ${m}`);   
  })
   message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` :mailbox:  عدد المستلمين `); 
   message.delete(); 
  };     
  });

client.on('message', message => {
    var  user = message.mentions.users.first() || message.author;  
if (message.content.startsWith("/avatar")) {
message.channel.send(`This avatar For ${user} link : ${user.avatarURL}`);
}
});

client.on('ready',  () => {
    console.log('تم تشغيل :Broadcast  ');
    console.log(`Logged in as * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] Users! [ " ${client.users.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] channels! [ " ${client.channels.size} " ]`);
  });

  client.on('message', message => {
    if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('$adminbc')){
if(!message.author.id === '557181389100023839') return;
message.channel.sendMessage('جار ارسال الرسالة |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});

  client.on('message', msg => {
    if(msg.content === '$help')
    msg.reply('Check Your DM :white_check_mark:') 
  });
  
  
  client.on("message", message => {
    if (message.content === "$help") {
     const embed = new Discord.RichEmbed() 
         .setColor("#00FF00")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`** Help|هيلب
       	   
          $bc | لأرسال برود كاست للكل
         $setg | عشان تخلي بلآينق للبوت
         $setl | عشان تخلي ليستنق للبوت 
         $setw | عشان تخلي وآتشينق للبوت 
         $sets | عشان تخلي ستريمنق للبوت 
         $setname | عشان تغير اسم البوت
         $setava | عشان تغير صورة البوت


       ** `)
   message.author.sendEmbed(embed)
   
   }
   });

const developers = ["557181389100023839","558043966663163904"]
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' '); 
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'setg')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'setw')) { 
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'setl')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'sets')) {
    client.user.setGame(argresult, "https://www.twitch.tv/dream");  
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`setnameThe Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setava')) {
  client.user.setAvatar(argresult);
    message.channel.send( The Avatar To :**${setavatar}** `);
}
});


client.login("NTk0NjA0MzQyOTg0ODM1MTAz.XRe2eA.PUWeatYhJOZFYaJ45y8UChklVFo");
