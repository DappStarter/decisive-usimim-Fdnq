require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb surge traffic number crater remind purpose harvest hero forget gate'; 
let testAccounts = [
"0xc0277fc241f8cd147e84fb681f7aa301ede3f8c95350e726b147ffbc67b1cd12",
"0x9d40388bb092b572b021500c38a90482b9b4e32348956d9c796b09be04186680",
"0xe57b7fe45844fac8484c67c319576a00e4fa862709f3ac62e7418cc10f946b51",
"0xd9a244bd121ad6525ec409248148343c68c70b3d8320661e4b7d718527845cbb",
"0xa9c184fe6f18154d2f08fa4e63d14128d65489e0db75f59e710c6aa070b11b1a",
"0x0e6a273711beec0b6d7e891c74749db6c6ec01e60dbab1461c918a88492ea002",
"0xab5a995768dc4fb22907c65a197c1716efdb0b98c6ed1fa0cd11cd3a4f603af2",
"0x9fe0dd69c5a48d97ed3a7d5d81bae63780cc1f25564c3b909b96ef9a7835c100",
"0xc1a4492c730ba0a49756c41b205c116b150755090070aa37dc6476e32a43b769",
"0x57d1d8c06c5899cfd61985c65ffa96b321b5b03a61b65539bcf7bca46f311a8e"
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

