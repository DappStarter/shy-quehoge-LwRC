require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict duck ensure title film reflect rural uncover coral light army giant'; 
let testAccounts = [
"0x2deb750b909c88b916e4176336f12b0efb3c1ec2235e52f85bdb8aced71e7859",
"0x589aedcf9c831f4a87291d782cc4f88db8a9440bcdd8cd2ed487cb498fbcda57",
"0x9d79c6ae355d3d05b5712c5437d7deb41457d8517d7ba1e3e67c24ab5475b187",
"0x8af9e99cd10123a880a0aa202ad89310e0fb728a97752a76531b11dac3c76d41",
"0x3e417b17d8a9992830934b1e7f4b95875c3c57583427eeadf6214f3cfe025173",
"0xb43141122e79cb0ea0c85d9b08a7b7e7a098de9e11644db88d8264ae452647fb",
"0xdf65044410bc5050b64a6697f8aa0e031313f4af7c9364c5d63f4ec893cd94c3",
"0xd1bc8718a5019fcb51194776714a0615120a14a1f98617ffc3e478548e32bed1",
"0x9336a73356ea37d1810930ce220bcaa5a72d261d3f128faef43d845f9e699ede",
"0x03f94617887a47991dbbdb66873a76fa2d904907371e4f0b4c89feba0c0d00da"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

