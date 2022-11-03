const dotenv = require("dotenv")
const { Client, GatewayIntentBits, EmbedBuilder, PermissionsBitField, Permissions } = require('discord.js');
const { ActivityType } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
const { MINTED, HOLDERS } = require('./stats.js');

dotenv.config()

let totalMinted = MINTED
let totalHolders = HOLDERS

const Presence = [
  { activities: [{ name: `${totalMinted} Minted`, type: ActivityType.Watching }], status: 'online' }, 
  { activities: [{ name: `${totalHolders} Unique Holders`, type: ActivityType.Watching }], status: 'online' }
]

const { minted, holders, lockedpreorder, wenshipping, costofphone, nftbenefits, currentholderevent, specs, features, phonedesign, phonedimensions, botcreator } = require('./messages.js')

client.on("ready", () =>{
    i = 0
    console.log(`Bot is live!`);
    console.log(`Logged in as ${client.user.tag}!`);
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
  
    if (interaction.commandName === 'minted') {
      await interaction.reply(minted);
    }
    if (interaction.commandName === 'holders') {
      await interaction.reply(holders);
    }
    if (interaction.commandName === 'lockedpreorder') {
      await interaction.reply(lockedpreorder);
    }
    if (interaction.commandName === 'wenshipping') {
      await interaction.reply(wenshipping);
    }
    if (interaction.commandName === 'costofphone') {
      await interaction.reply(costofphone);
    }
    if (interaction.commandName === 'nftbenefits') {
      await interaction.reply(nftbenefits);
    }
    if (interaction.commandName === 'currentholderevent') {
      await interaction.reply(currentholderevent);
    }
    if (interaction.commandName === 'specs') {
      await interaction.reply(specs);
    }
    if (interaction.commandName === 'features') {
      await interaction.reply(features);
    }
    if (interaction.commandName === 'phonedesign') {
      await interaction.reply(phonedesign);
    }
    if (interaction.commandName === 'phonedimensions') {
    await interaction.reply(phonedimensions);
    }
    if (interaction.commandName === 'botcreator') {
      await interaction.reply(botcreator);
    }
});

client.login(process.env.TOKEN)