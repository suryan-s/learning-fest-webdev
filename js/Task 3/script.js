function calculateEMI() {
    var loanAmount = document.getElementById('loan-amount').value;
    var interestRate = document.getElementById('interest-rate').value / 100 / 12; 
    var loanTenure = document.getElementById('loan-tenure').value;
    var emi = (loanAmount * interestRate * Math.pow((1 + interestRate), loanTenure)) / (Math.pow((1 + interestRate), loanTenure) - 1);
    var emiResultElement = document.getElementById('emi-result');
    emiResultElement.textContent = "Monthly EMI: $" + emi.toFixed(2);
}
