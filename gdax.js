/**
    DOCUMENTATION : https://github.com/coinbase/gdax-node
**/
const fs = require("fs");
const config = JSON.parse(fs.readFileSync("account.key"));

const key = config.gdax.key;
const secret = config.gdax.secret;
const passphrase = config.gdax.passphrase;

const Gdax = require('gdax');
const apiURI = 'https://api.gdax.com';
const authedClient = new Gdax.AuthenticatedClient(key, secret, passphrase, apiURI);
const publicClient = new Gdax.PublicClient();

const currency = "ETH";
const ref = "EUR";

publicClient.getProductTicker(currency+'-'+ref, function(error, response, data){
    if(!error){
        price = parseFloat(data.price);
        authedClient.getAccounts(function(error, response, data){
            if(!error){
                for(var item of data){
                    if(item.currency==currency){
                        units = item.balance;
                        break;
                    }
                }

                console.log("1 "+currency+" = "+price+" "+ref);
                console.log("BALANCE = "+units+" "+currency);
                console.log("TOTAL = "+units*price+" "+ref);
            }
        });
    }
});
