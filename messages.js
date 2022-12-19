const { MINTED, HOLDERS } = require('./stats.js');

totalMinted = MINTED
totalHolders = HOLDERS

const minted = `
**${totalMinted}** Saga Passes Has Been Minted So Far!
`

const holders = `
There Is **${totalHolders}** Unique Saga Pass Holders So Far!
`

const lockedpreorder = `
Minting SAGA NFT Pass means that you have locked your preorder/deposit and can no longer refund it or change the details.\n 
As stated on the mint site https://sagapass.solanamobile.com/ \n 
"Minting Saga Pass secures your spot in line and locks your $100 pre-order deposit. Keep your Saga Pass! You’ll need it at checkout to prove your spot in line and apply your deposit."
`

const wenshipping = `
If you are a developer and have linked your github account, then you are currently under review by the team and will soon know if you made it to DVT units\n
Everyone else will be getting option to pay the $900 rest and to have the device shipped early next year (2023).
`
const costofphone = `
The Solana Phone cost $1000 USDC and the $100 USDC preorder/deposit will be taken off the $1000 USDC at checkout!
`

const nftbenefits = `
There is four main benefits listed on https://sagapass.solanamobile.com/

**NFT Airdrops**
Saga Pass holders will have the ability to collect future NFT drops from the Solana Mobile team. Stay tuned!

**Exclusive Events**
Saga Pass holders will get access to upcoming VIP events where you can learn more about SMS and meet the Solana Mobile team.

**Early Saga delivery**
When Saga is ready to begin shipping, pre-orderers with Saga Pass will be first in line for checkout and delivery.

**Discounted Swag & Accessories**
Exclusive Saga accessories and Solana Mobile Swag will be available only for holders.
`

const currentholderevent = `There is currently not a holder event going on - Stay tunned with #announcements`

const availablecountries = `**At launch Saga will support 33 countries, including US, CA, UK, AU, NZ and 27 EU countries**`

const specs = `
**Solana SAGA Phone Specs**
Display: 6.67” OLED Display 120Hz peak
Storage: 512 GB
RAM: 12 GB
Processor: Snapdragon 8+ Gen 1 Mobile Platform
Integrated Secure Element
Weight: 247g
Operating System: Android 13
Battery: 4110 mAh (typical) | 4011 mAh (rated)
WIRELESS CHARGING: Qi compatible
Camera: REAL DUAL - OIS 50MP f/1.8 Wide + 12MP f/2.2 Ultrawide | FRONT - 16MP f/2.4 Wide
Water and Dust Resistance: IP RATING IP68
Read more: https://solanamobile.com/hardware
https://skhltjpbuhcqmvcox36lvgtrrpo3ufknldiazmkn7u4et27hvtga.arweave.net/ko65peGhxQZUTr78uppxi926FU1Y0AyxTf04SevnrMw
`

const features = `
**Features**

__Seed Vault__
Protects your private keys via secure hardware and AES encryption.
Improved user experience across dApps.
Sign transactions using just your fingerprint

__Saga Pass__
A limited-release collection of NFTs to the first 10,000 people that pre-order Saga.
Pass holders will be the first to receive Saga phones in early 2023.
Saga Pass gives holders access to VIP events, community forums, and the dopest swag in crypto.

__dApp Store__
Your favorite Solana dApps, in the palm of your hand
Discover the hottest projects in the Solana ecosystem, while using the dApps you already love on the go.
Transact seamlessly across dApps without ever having to open another browser extension.
Get access to the newest mobile features from popular dApps like Magic Eden, StepN, Jupiter, and more.

__Solana Mobile Stack (SMS)__
The Solana Mobile Stack is made for shipping. An easy Android build environment simplifies the developer experience.
The SDK includes all the tools you'll need to easily build and deploy an app on SMS.
The Solana Foundation has launched a new grants program to fund mobile-first dApps.
A specification that provides superior transaction signing services across both mobile and web-based dApps.
Start building now with Seed Vault simulator, Mobile Wallet Adapter libraries, reference dApps and wallets, and more.
Web-based dApps can easily use the SMS React framework to deploy quickly on to mobile.
For technical assistance, join the SMS Discord server to get your questions answered.

Read more: https://solanamobile.com/
`

const phonedesign = `
**Phone Design**
https://skhltjpbuhcqmvcox36lvgtrrpo3ufknldiazmkn7u4et27hvtga.arweave.net/ko65peGhxQZUTr78uppxi926FU1Y0AyxTf04SevnrMw
https://gdk6hfeapls5hqi7h35g7ipshxk3m5pxrlnddd3ibipxfluram7q.arweave.net/MNXjlIB65dPBHz76b6HyPdW2dfeK2jGPaAofcq6RAz8
`

const phonedimensions = `
**Body**

HEIGHT: 164.0 mm
WIDTH: 75.3 mm
THICKNESS: 8.4 mm (10.2 mm at camera bump)
WEIGHT: 247g
MATERIALS: Ceramic back, stainless steel frame, and titanium accents

https://msuofmrk66ksg52xayat6nfbhq7zwwzywq2rtscj4z7ulrkfeaoq.arweave.net/ZKjisir3lSN3VwYBPzShPD-bWzi0NRnISeZ_RcVFIB0
`

const botcreator = `
The Solana Phone "Saga Pass Counter" bot is created by <@307163449925042176>

https://lv74wcttqdhm33b6l25xv67pkvl4yxba43af5mg34ufaygzxqgeq.arweave.net/XX_LCnOAzs3sPl67evvvVVfMXCDmwF6w2-UKDBs3gYk
`

const whobuilt = `We worked with @OSOMprivacy to build Saga `

const moresagamints = `We will announce more Saga Pass mint windows in the future`

const whichnetwork = `Saga will be compatible with all major networks`

const os = `Saga is powered by Android`

const whensupported = `Saga will not be available in <X> country at launch, but we will look to add support for more countries in the future `



module.exports = { minted, holders, lockedpreorder, wenshipping, costofphone, nftbenefits, currentholderevent, specs, features, phonedesign, phonedimensions, botcreator, availablecountries, whobuilt, moresagamints, whichnetwork, whensupported, os };