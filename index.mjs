import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib();
import { util } from '@reach-sh/stdlib';
const { thread, Signal } = util;

const startingBalance = stdlib.parseCurrency(100);

const n = 6;

const conWait = 5000;

const go = async (ctcAdmin, sig) => {
  const acc = (await stdlib.newTestAccount(startingBalance)).setDebugLabel('FE_API');
  return async () => {
    const ctc = acc.contract(backend, ctcAdmin.getInfo());
    const f = ctc.a.User.attach;
    await sig.wait();

    const call = async (id, f) => {
      let res = undefined;
      await new Promise(resolve => setTimeout(resolve, conWait))
      try { res = await f(); }
      catch (e) { res = [`err`, e]; }
      console.log(id);

    }

    for (let i = 0; i < n; i++) {
      await call(`API called: ${i + 1} of ${n}`, () => f());
    }
   
  }
}

const [ accDeloyer ] =
  await stdlib.newTestAccounts(1, startingBalance);


const ctcDeployer = accDeloyer.contract(backend);

const ready = new Signal();

await Promise.all([
  thread(await go(ctcDeployer, ready)),
  ctcDeployer.p.Deployer({
    ready: async (info) => {
      console.log(`Deployed as: ${info}`);
      ready.notify();
    },
    log: (a, b, c) => console.log(`${a} ${b} ${stdlib.bigNumberToNumber(c)}`),
   
    // n: stdlib.bigNumberify(n),
  }),
]);
