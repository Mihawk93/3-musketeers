# Cash

The Cash library is used to convert any amount in 32 currencies. (To see all the currencies: http://akep.us/currencies)

## Prerequisites

To use the Cash library you need some others libraries.
There is the list: got, chalk, update-notifier, money, ora.
You can install each library one by one using ``` npm install Libraryname ``` 
or install all the libraries using ``` npm install ```

## How it works

You have to run the index.js with the node command and then indicate the amount and the currency that you want and the currency expected.
Example:
```
node bin/index.js 100 eur usd
```

You can also put various currencies.
```
node bin/index.js 100 eur usd php pln myr
```

## What else?

You can also save the currency as default currency by adding "-s".
```
node bin/index.js 100 eur -s
```

If you want to display help message just had "-h".
```
node bin/index.js -h
```

To display the version add "-v".
```
node bin/index.js -v
```





