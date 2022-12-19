const dotenv = require("dotenv")
const { Client, GatewayIntentBits, EmbedBuilder, PermissionsBitField, Permissions } = require('discord.js');
const { ActivityType } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
const { MINTED, HOLDERS } = require('./stats.js');

dotenv.config()

let totalMinted = MINTED
let totalHolders = HOLDERS

const whiteListed = ["307163449925042176", "972127555194867722", "945707211248795730", "752917762279735306", "884853509776891914"]
let whiteListedCheck = false

const Presence = [
  { activities: [{ name: `${totalMinted} Minted`, type: ActivityType.Watching }], status: 'online' }, 
  { activities: [{ name: `${totalHolders} Unique Holders`, type: ActivityType.Watching }], status: 'online' },
  { activities: [{ name: `Bot Starting...`, type: ActivityType.Watching }], status: 'idle' }
]

const { minted, holders, lockedpreorder, wenshipping, costofphone, nftbenefits, currentholderevent, specs, features, phonedesign, phonedimensions, botcreator, availablecountries, whobuilt, moresagamints, whichnetwork, whensupported, os } = require('./messages.js')

client.on("ready", () =>{
    i = 0
    console.log(`Bot is live!`);
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setPresence(Presence[2]) 
    setInterval(() => {

        if (i === 0) {
          client.user.setPresence(Presence[i]) 
          i++;
        } else {
          client.user.setPresence(Presence[i]) 
          i--;
        }
    }, 30000);

});

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;
  
    for (let i = 0; i < whiteListed.length; i++) {
      if (whiteListed[i] === interaction.user.id) {
        whiteListedCheck = true
      }
    }

    if (interaction.commandName === 'minted' && whiteListedCheck === false) {
      await interaction.reply({ content: `${minted}`, ephemeral: true });
    } else if (interaction.commandName === 'minted' && whiteListedCheck === true) {
      await interaction.reply(minted);
    }

    if (interaction.commandName === 'holders' && whiteListedCheck === false) {
      await interaction.reply({ content: `${holders}`, ephemeral: true });
    } else if (interaction.commandName === 'holders' && whiteListedCheck === true) {
      await interaction.reply(holders);
    }

    if (interaction.commandName === 'lockedpreorder' && whiteListedCheck === false) {
      await interaction.reply({ content: `${lockedpreorder}`, ephemeral: true });
    } else if (interaction.commandName === 'lockedpreorder' && whiteListedCheck === true) {
      await interaction.reply(lockedpreorder);
    }

    if (interaction.commandName === 'wenshipping' && whiteListedCheck === false) {
      await interaction.reply({ content: `${wenshipping}`, ephemeral: true });
    } else if (interaction.commandName === 'wenshipping' && whiteListedCheck === true) {
      await interaction.reply(wenshipping);
    }

    if (interaction.commandName === 'costofphone' && whiteListedCheck === false) {
      await interaction.reply({ content: `${costofphone}`, ephemeral: true });
    } else if (interaction.commandName === 'costofphone' && whiteListedCheck === true) {
      await interaction.reply(costofphone);
    }

    if (interaction.commandName === 'nftbenefits' && whiteListedCheck === false) {
      await interaction.reply({ content: `${nftbenefits}`, ephemeral: true });
    } else if (interaction.commandName === 'nftbenefits' && whiteListedCheck === true) {
      await interaction.reply(nftbenefits);
    }

    if (interaction.commandName === 'currentholderevent' && whiteListedCheck === false) {
      await interaction.reply({ content: `${currentholderevent}`, ephemeral: true });
    } else if (interaction.commandName === 'currentholderevent' && whiteListedCheck === true) {
      await interaction.reply(currentholderevent);
    }

    if (interaction.commandName === 'availablecountries' && whiteListedCheck === false) {
      await interaction.reply({ content: `${availablecountries}`, ephemeral: true });
    } else if (interaction.commandName === 'availablecountries' && whiteListedCheck === true) {
      await interaction.reply(availablecountries);
    }

    if (interaction.commandName === 'specs' && whiteListedCheck === false) {
      await interaction.reply({ content: `${specs}`, ephemeral: true });
    } else if (interaction.commandName === 'specs' && whiteListedCheck === true) {
      await interaction.reply(specs);
    }

    if (interaction.commandName === 'features' && whiteListedCheck === false) {
      await interaction.reply({ content: `${features}`, ephemeral: true });
    } else if (interaction.commandName === 'features' && whiteListedCheck === true) {
      await interaction.reply(features);
    }

    if (interaction.commandName === 'phonedesign' && whiteListedCheck === false) {
      await interaction.reply({ content: `${phonedesign}`, ephemeral: true });
    } else if (interaction.commandName === 'phonedesign' && whiteListedCheck === true) {
      await interaction.reply(phonedesign);
    }

    if (interaction.commandName === 'phonedimensions' && whiteListedCheck === false) {
      await interaction.reply({ content: `${phonedimensions}`, ephemeral: true });
    } else if (interaction.commandName === 'phonedimensions' && whiteListedCheck === true) {
      await interaction.reply(phonedimensions);
    }

    if (interaction.commandName === 'botcreator' && whiteListedCheck === false) {
      await interaction.reply({ content: `${botcreator}`, ephemeral: true });
    } else if (interaction.commandName === 'botcreator' && whiteListedCheck === true) {
      await interaction.reply(botcreator);
    }

    if (interaction.commandName === 'whobuilt' && whiteListedCheck === false) {
      await interaction.reply({ content: `${whobuilt}`, ephemeral: true });
    } else if (interaction.commandName === 'whobuilt' && whiteListedCheck === true) {
      await interaction.reply(whobuilt);
    }

    if (interaction.commandName === 'moresagamints' && whiteListedCheck === false) {
      await interaction.reply({ content: `${moresagamints}`, ephemeral: true });
    } else if (interaction.commandName === 'moresagamints' && whiteListedCheck === true) {
      await interaction.reply(moresagamints);
    }

    if (interaction.commandName === 'whichnetwork' && whiteListedCheck === false) {
      await interaction.reply({ content: `${whichnetwork}`, ephemeral: true });
    } else if (interaction.commandName === 'whichnetwork' && whiteListedCheck === true) {
      await interaction.reply(whichnetwork);
    }

    if (interaction.commandName === 'os' && whiteListedCheck === false) {
      await interaction.reply({ content: `${os}`, ephemeral: true });
    } else if (interaction.commandName === 'os' && whiteListedCheck === true) {
      await interaction.reply(os);
    }

    if (interaction.commandName === 'whensupported' && whiteListedCheck === false) {
      await interaction.reply({ content: `${whensupported}`, ephemeral: true });
    } else if (interaction.commandName === 'whensupported' && whiteListedCheck === true) {
      await interaction.reply(whensupported);
    }
});

client.login(process.env.TOKEN)