//Commands: nodemon

require('dotenv').config();
const {Client, IntentsBitField} = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,  
    ],
});

client.on('ready', (c) => {
    console.log(`✅ ${c.user.tag} is online.`)
});

client.on('interactionCreate', (interaction) => {
    if(!interaction.isChatInputCommand()){
        return;
    }
    if(interaction.commandName === 'hey'){
        interaction.reply('hey!')
    }
});

client.login(process.env."MTExNzI2OTc5MTI3OTk1NTk4OA.GA8B5z.1UlVBDnWM7pFyX8zDWrkP9pUbwAlEH4sjujpKo");