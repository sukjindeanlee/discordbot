//Commands: node src/register-commands.js

require('dotenv').config();
const {REST, Routes} = require('discord.js');

const commands = [
    {
        name: 'hey',
        description: 'Replies with hey!',
    },
];

const rest = new REST({verstion: '10'}).setToken(process.env."MTExNzI2OTc5MTI3OTk1NTk4OA.GA8B5z.1UlVBDnWM7pFyX8zDWrkP9pUbwAlEH4sjujpKo");

(async() => {
    try{
        console.log('Register slash commands...');

        await rest.put(
            Routes.applicationGuildCommands(
                process.env."1117269791279955988", 
                process.env."1117248022208839794"
            ),
            {body: commands}
        );
        console.log('Slash commands were registered successfully!')
    }
    catch(error){
        console.log(`There was an error: ${error}`);
    }
})();