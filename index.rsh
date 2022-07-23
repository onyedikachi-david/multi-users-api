'reach 0.1'
/* eslint-ignore */

// Level one challenge

// ➔ Level 3 ($60)
//    ◆ Build a frontend GUI
//    ◆ Use the framework of your choice
//       ● It will contain as many files as you need to complete the task
//    ◆ Use a View
//    ◆ Be creative on a theme for your DApp!

export const main = Reach.App(() => {
    const D =  Participant("Deployer", { 
        ready: Fun([Contract], Null),
        log: Fun(true, Null)
     });

     const U = API("User", {
      attach: Fun([], Null)
     });

     const V = View( { vCount: UInt, vMsg: Bytes(14) })

     init()
     D.publish()
     D.only( () => {
        interact.ready(getContract());
     })

     const [counter] = parallelReduce([ 0 ])
       .define(() => {V.vCount.set(counter); V.vMsg.set("API was called")})
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
   //   commit()
   //   V.vCount.set(counter); 
   //   V.vMsg.set("API was called");
     D.interact.log("Max number reached sorry, try again later", 'last count from backend:', counter)
     commit();
     exit()
})