/*jslint devel: true */

/*eslint no-console: "off", no-undef: "off" */


var tickerPrice = {
        WIPRO: 298.45,
        INFY: 9949.95,
        TCS: 2713.70,
        TECHM: 485.85
}

function calculateQuantity(){
    var tickerSelected = document.getElementById("ticker").value.toUpperCase()
    var quantitySelected = parseInt(document.getElementById("quantity").value, 10)
    if ((tickerPrice.hasOwnProperty(tickerSelected)) && (quantitySelected % 10 == 0 )) {
        document.getElementById("result").value = tickerPrice[tickerSelected] * quantitySelected
    }else{
        document.getElementById("result").value = "Bad input"
    }
}