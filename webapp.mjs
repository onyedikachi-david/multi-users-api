import * as backend from '/build/index.main.mjs';

let stdlib = null;
let suStr = null;
let iBalance = null;
let deployerAcc = null;
let userAcc = null;
let deployerCtc = null;
let userCtc = null;

const writeLog = async (role, msg) => {
  let el = document.getElementById(`${role}-log`);
  el.append(`${el.value ? '\n' : ''}${msg}`);
  el.scrollTop = el.scrollHeight;
};

const disableBtns = () => {
  const btns = document.querySelectorAll('button.dar').forEach((el) => {
    el.classList.remove('btn-success');
    el.classList.add('btn-secondary');
    el.disabled = true;
  });
};

const enableBtn = (id) => {
  disableBtns();
  const btn = document.getElementById(id);
  btn.classList.remove('btn-secondary');
  btn.classList.add('btn-success');
  btn.removeAttribute('disabled');
};

const toAU = (su) => stdlib.parseCurrency(su);
const toSU = (au) => stdlib.formatCurrency(au, 4);
const showBalance = async (role, acc) => {
  let balance = toSU(await stdlib.balanceOf(acc));
  document.getElementById(`${role}-balance`).value = balance;
};


// Listener for selecting a devnet
document.getElementById('devnets').addEventListener('change', (event) => {
  reachsdk.unsafeAllowMultipleStdlibs();
  stdlib = reachsdk.loadStdlib(document.getElementById('devnets').value);
  stdlib.setProviderByName('LocalHost');
  suStr = stdlib.standardUnit;
  iBalance = toAU(10);

  (async () => {
    deployerAcc = await stdlib.newTestAccount(iBalance);
    await showBalance('deployer', deployerAcc);
    userAcc = await stdlib.newTestAccount(iBalance);
    await showBalance('user', userAcc);
  })();

  document.getElementById('deployer-balance').value = '';
  document.getElementById('deployer-log').innerHTML = '';
  document.getElementById('deployer-contract-info').value = '';

  document.getElementById('user-balance').value = '';
  document.getElementById('user-log').innerHTML = '';

  document.querySelectorAll('input.unit').forEach((el) => { el.value = suStr; });
  enableBtn('deploy-btn');
});

// Listener for clicking deploy btn
document.getElementById('deploy-btn').addEventListener('click', (event) => {
  (async () => {
    const deployerInteract = {
      
      ready: async (info) => {
        document.getElementById('deployer-contract-info').value = JSON.stringify(info);
        enableBtn('attach-btn');
      },
      log: async (...args) => {
        console.log(...args)
       
      }
    };

    deployerCtc = deployerAcc.contract(backend);
    await backend.Deployer(deployerCtc, deployerInteract);
    await showBalance('deployer', deployerAcc);
  })();
});

// Listener for clicking attach btn
document.getElementById('attach-btn').addEventListener('click', (event) => {
  (async () => {
    const info = JSON.parse(document.getElementById('deployer-contract-info').value);
    deployerCtc = deployerAcc.contract(backend, info);
    await deployerCtc.a.User.attach()
    const count = await deployerCtc.views.vCount();
    const message = await deployerCtc.views.vMsg();
    
    await writeLog('user', message[1])
    await writeLog('user', `Count: ${count[1]}`)

   
  })();
});
