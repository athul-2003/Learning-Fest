
function calcEmi() {
    var loanAmount = parseInt(document.getElementById('loanAmount').value);
    var interestRate = parseInt(document.getElementById('interestRate').value);
    var loanTerm = parseInt(document.getElementById('loanTerm').value);

    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm) || loanAmount <= 0 || interestRate <= 0 || loanTerm <= 0) {
        document.getElementById('error-message').innerHTML = "Please enter valid positive values.";
        document.getElementById('result').style.display = "none";
        return;
    }

    var monthlyInterestRate = interestRate / 1200;
    var emi = loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanTerm) / (Math.pow(1 + monthlyInterestRate, loanTerm) - 1);
    var totalPayment = emi * loanTerm;
    var totalInterest = totalPayment - loanAmount;

    document.getElementById('error-message').innerHTML = "";
    document.getElementById('result').style.display = "block";
    document.getElementById('emi').innerHTML = emi.toFixed(2);
    document.getElementById('totalInterest').innerHTML = totalInterest.toFixed(2);
    document.getElementById('totalPayment').innerHTML = totalPayment.toFixed(2);
}
function dataClear(){
    document.getElementById('error-message').innerHTML = "";
    document.getElementById('result').style.display = "block";
    document.getElementById('emi').innerHTML = "";
    document.getElementById('totalInterest').innerHTML = "";
    document.getElementById('totalPayment').innerHTML = "";
}