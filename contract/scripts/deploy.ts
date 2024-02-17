import { ethers } from "hardhat";
import { PoapContractFactory } from "./contracts/PoapContractFactory"; // Import the PoapContractFactory from its path
import { PoapContractProxyFactory } from "./contracts/PoapContractProxyFactory"; // Import the PoapContractProxyFactory from its path

async function main() {
  const [deployer] = await ethers.getSigners();

  // Deploy PoapContract
  const PoapContractFactory = await ethers.getContractFactory("PoapContract");
  const poapContract = await PoapContractFactory.deploy();

  console.log("PoapContract deployed at:", poapContract.address);

  // Deploy PoapContractProxy using the address of the deployed PoapContract
  const PoapContractProxyFactory = await ethers.getContractFactory("PoapContractProxy");
  const poapContractProxy = await PoapContractProxyFactory.deploy(poapContract.address);

  console.log("PoapContractProxy deployed at:", poapContractProxy.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
