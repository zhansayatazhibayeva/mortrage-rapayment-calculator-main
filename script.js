document.querySelector("button").addEventListener("click", calculateRepayments);

function calculateRepayments() {

    const mortgageAmount = parseFloat(document.getElementById("mortrageAmount").value);
    const mortgageTerm = parseInt(document.getElementById("mortrageTerm").value);
    const interestRate = parseFloat(document.getElementById("interestRate").value) / 100;
    const mortgageType = document.querySelector("input[name='inputRadio']:checked")?.id;

    if (isNaN(mortgageAmount) || isNaN(mortgageTerm) || isNaN(interestRate) || !mortgageType) {
        alert("Please fill in all fields and select a mortgage type.");
        return;
    }

    const monthlyInterestRate = interestRate / 12;
    const numberOfPayments = mortgageTerm * 12;

    let monthlyRepayment;

    if (mortgageType === "repayment") {
        monthlyRepayment = mortgageAmount * 
                           (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / 
                           (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
    } else if (mortgageType === "interestOnly") {
        monthlyRepayment = mortgageAmount * monthlyInterestRate;
    }

    const totalRepayment = monthlyRepayment * numberOfPayments;

    document.getElementById("calculated-first").innerText = `£${monthlyRepayment.toFixed(2)}`;
    document.getElementById("calculated-second").innerText = `£${totalRepayment.toFixed(2)}`;
    
    document.querySelector(".empty-results").style.display = "none";
    document.querySelector(".calculated-results").style.display = "flex";
}
