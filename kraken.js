/**
    DOCUMENTATION:
    https://github.com/nothingisdead/npm-kraken-api
    https://www.kraken.com/help/api
**/

const fs = require("fs");
const config = JSON.parse(fs.readFileSync("account.key"));

const api_key = config.kraken.api_key;
const api_private_key = config.kraken.api_private_key;

const KrakenClient = require('kraken-exchange-api');
const kraken = new KrakenClient(api_key, api_private_key);

kraken.api('Balance', null, function(error, data) {
    if(error) {
        console.log(error);
    }
    else {
        console.log(data);
    }
});
