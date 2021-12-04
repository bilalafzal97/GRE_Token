const { ethers } = require("hardhat");

async function main(){

    const [deployer] = await ethers.getSigners();
    console.log(`Deploying contracts with the account: ${deployer.address}`);

    const balance = await deployer.getBalance();
    console.log(`Account balance: ${balance}`);

    const GREToken = await ethers.getContractFactory('GREToken');
    const greToken = await GREToken.deploy();
    console.log(`GREToken address ${greToken.address}`);
}

main()
.then(() => process.exit(0))
.catch(error => {
    console.error(error);
    process.exit(1);
})