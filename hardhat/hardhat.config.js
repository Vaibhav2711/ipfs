require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({path:".env"});

const QUICKNODE_HTTP_URL = process.env.QUICKNODE_HTTP_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

console.log(QUICKNODE_HTTP_URL);
console.log(PRIVATE_KEY);

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    mumbai:{
      url: QUICKNODE_HTTP_URL,
      accounts: [PRIVATE_KEY],
    }
  }
};
