const dotenv = require("dotenv")

dotenv.config()

const { REST, Routes } = require('discord.js');

const commands = [
  {
    name: 'minted',
    description: 'Replies with the amount of minted saga passes!',
  },
  {
    name: 'holders',
    description: 'Replies with the amount of holders of the saga pass!',
  },
  {
    name: 'lockedpreorder',
    description: 'Replies with details of when you have minted the NFT and your deposit is locked!',
  },
  {
    name: 'wenshipping',
    description: 'Replies with details of shipping',
  },
  {
    name: 'costofphone',
    description: 'Replies with details of the full cost of the phone',
  },
  {
    name: 'nftbenefits',
    description: 'Replies with details of the NFT benefits',
  },
  {
    name: 'currentholderevent',
    description: 'Replies with details of the current nft event',
  },
  {
    name: 'availablecountries',
    description: 'Replies with details of support countries',
  },
  {
    name: 'specs',
    description: 'Replies with details of the Solana Phone Specs',
  },
  {
    name: 'features',
    description: 'Replies with details of the Solana Phone features',
  },
  {
    name: 'phonedesign',
    description: 'Replies with Phone Design',
  },
  {
    name: 'phonedimensions',
    description: 'Replies with Phone Dimensions',
  },
  {
    name: 'botcreator',
    description: 'Replies with bot creator',
  },
  {
    name: 'whobuilt',
    description: 'Replies with who build SAGA',
  },
  {
    name: 'moresagamints',
    description: 'Replies with if there will be more mints',
  },
  {
    name: 'whichnetwork',
    description: 'Replies with which networks that will be supported',
  },
  {
    name: 'os',
    description: 'Replies with what operating system SAGA will use',
  },
  {
    name: 'whensupported',
    description: 'Replies with when a new country will be supported',
  },
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands(process.env.APPID), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();