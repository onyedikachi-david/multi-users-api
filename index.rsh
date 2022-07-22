'reach 0.1'
/* eslint-ignore */

// Level one challenge

// ➔ Level 2 ($40)
//      ◆ Use a parallelReduce
//          ● parallelReduce is a key abstraction in Reach. It is essentially an
//             abbreviation of a while loop combined with a fork statement that you write yourself.
//      ◆ When a new API user attaches, increment a counter of attachers
//      ◆ Allow participants until there are 5 in your users array
//      ◆ Console messages
//          ● Display a message when Alice is ready to accept Attachers
//          ● This should be called from the backend
//          ● Include a message when you are creating new Bob users
//          ● Display a message each time you increment the counter
//          ● Display a message that the user tried to attach but the max of 5 attachers has been reached

export const main = Reach.App(() => {
    const D =  Participant("Deployer", { 
        ready: Fun([Contract], Null),
        log: Fun(true, Null)
     });

     const U = API("User", {
      attach: Fun([], Null)
     })

     init()
     D.publish()
     D.only( () => {
        interact.ready(getContract());
     })

     const [counter] = parallelReduce([ 0 ])
       .invariant( balance() == 0)
       .while(counter != 5)

       .api_(U.attach, () => {
         return [((k)=>{
            k(null);
            D.interact.log('API called and Counter Incremented;', 'counter: ', counter + 1)
            return [counter + 1]
         })]
       }
         
         )
      assert(counter == 5)
     commit()
     D.interact.log("Max number reached sorry, try again later", 'last count from backend:', counter)
     exit()
})