const apiKey = ''
var button = document.querySelector('#stocks-button')
var input = document.querySelector('#stocks-input')


var stockName;
var alphavantageData
var stockInfo = {

    symbol: [],
    open: [],
    high: [],
    low: [],
    close: [],
    volume: [],

}

function getStocks(input) {
    var alphaAPI = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=' + stockName + '&outputsize=compact&apikey=' + apiKey

    fetch(alphaAPI)

        .then(function (response) {
            console.log(response)
            return response.json();
        })
        .then(function (data) {
            alphavantageData = data.stockInfo;
            console.log(alphavantageData);
            return alphavantageData;
        })
        .then(function () {
            stockInfo = {

                symbol: [],
                open: [],
                high: [],
                low: [],
                close: [],
                volume: [],
            };
            for (let i = 0; i < alphavantageData.length; i++) {
                // stockInfo.symbol.push(alphavantageData[i].);
                stockInfo.open.push(alphavantageData[i].);
                stockInfo.high.push(alphavantageData[i].);
                stockInfo.low.push(alphavantageData[i].);
                stockInfo.close.push(alphavantageData[i].);
                stockInfo.volume.push(alphavantageData[i].);
                if (alphavantageData[i] == null) {
                    stockInfo.symbol.push('No Stocks Found');
                }
                else {
                    stockInfo.symbol.push(alphavantageData[i].);
                }
            }
            console.log(stockInfo)
            displayStocks();
        })

}
function displayStocks() {





}