/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require('@nomiclabs/hardhat-waffle');

const RPC_URL = '';
const ACCOUNT_KEY = '';

module.exports = {
  solidity: "0.8.4",
  networks: {
    
    Live: {
      url: RPC_URL,
      accounts: [ACCOUNT_KEY]
    }

  }
};
