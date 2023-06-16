function calculate() {
    var length = document.getElementById('length').value;
    var stockLength = document.getElementById('stockLength').value;

    var times = Math.floor(stockLength / length);
    var remainder = stockLength % length;

    document.getElementById('result').innerHTML = 
        'The length divides into the stock ' + times + ' times with a remainder of ' + remainder + ' inches.';
}
