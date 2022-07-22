import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from "./build/index.main.mjs";

const stdlib = loadStdlib();

const balance = stdlib.parseCurrency(100)

console.log(("Creating deployer test account"))
const deployerAcc = await stdlib.newTestAccount(balance)


const users = []
const startUsers = async () => {
    const newUser = async () => {
        const acc = await stdlib.newTestAccount(balance)
        users.push(acc)
        console.log("New user created...")
    }

    await newUser()
    await newUser()
    await newUser()
    await newUser()

    for (let index = 0; index < users.length; index++) {
        const user = users[index];
        console.log(`${index}: user address ==> ${JSON.stringify(user.networkAccount.addr)}`)
    }
}
const deployerCtc = deployerAcc.contract(backend)

await deployerCtc.p.Deployer({
    ready: (info) => {
        console.warn(`
        Contract was successfully deployed, contract info is: ${info}
        `);
    startUsers();

    },
})

