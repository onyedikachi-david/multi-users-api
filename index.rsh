'reach 0.1'
/* eslint-ignore */

// Level one challenge

// ➔ Level 1 ($20)
//      ◆ Write a program that allows multiple users to attach to the same contract.
//          ● Define one (1) Participant to deploy the contract
//          ● Define one (1) API participant
//              ○ This allows multiple users to attach as Bob (Bobs)
//          ● Create an array for the new users
//          ● Create a function to reuse when creating new Bob users (Bobs).
//              ○ This should include newTestAccount
//              ○ This should include attaching the account to the backend
//                  ◆ Be sure to attach to Alice’s contract information
//              ○ Add only the address of each account to your users array
//          ● This should be done in 2 files
//              ○ index.rsh and index.mjs
//          ● Console messages
//              ○ Include a message when Alice is ready to accept Attachers
//                  ◆ Alice should interact in an only block with this function
//              ○ Include a message when you are creating new Bob users
//              ○ Display your users array

export const main = Reach.App(() => {
    const D =  Participant("Deployer", { 
        ready: Fun([Contract], Null)
     });

     const U = API("User", {

     })

     init()
     D.publish()
     D.only( () => {
        interact.ready(getContract());
     })
     commit()
     exit()
})