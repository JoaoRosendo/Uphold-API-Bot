const fetch = require('node-fetch');
var BTCprice = 1;
var BTClastAlert = 0;

var ETHprice = 1;
var ETHlastAlert = 0;

async function getDataBTC_USD() {
    try {

        const response = await fetch('https://api.uphold.com/v0/ticker/BTCUSD')
        const json = await response.json()

        BTCprice = json.ask;
    } catch (error) {
        console.log(error.response.body);
    }
}

function testDataBTC_USD() {
    getDataBTC_USD();

    if (Math.abs(BTCprice - BTClastAlert) > BTClastAlert * 0.0001) {
        console.log('ALERT! BTC Price change:', (Number(Math.abs(BTClastAlert - BTCprice) / BTClastAlert) * 100).toFixed(3), '%');
        BTClastAlert = BTCprice;
    }
}

async function getDataETH_USD() {
    try {

        const response = await fetch('https://api.uphold.com/v0/ticker/ETHUSD')
        const json = await response.json()

        ETHprice = json.ask;

    } catch (error) {
        console.log(error.response.body);
    }
}

function testDataETH_USD() {
    getDataETH_USD();

    if (Math.abs(ETHprice - ETHlastAlert) > ETHlastAlert * 0.0001) {
        console.log('ALERT! ETH Price change:', (Number(Math.abs(ETHlastAlert - ETHprice) / ETHlastAlert) * 100).toFixed(3), '%');
        ETHlastAlert = ETHprice;
    }
}

async function updateInitialValues(){
    await getDataBTC_USD();
    await getDataETH_USD();
    BTClastAlert= BTCprice;
    ETHlastAlert= ETHprice;
}

updateInitialValues();
setInterval(testDataBTC_USD, 5000);
setInterval(testDataETH_USD, 5000);
