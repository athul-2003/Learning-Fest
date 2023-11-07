function rollDice(){
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    document.getElementById('text-field').value=randomNumber;
}