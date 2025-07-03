// Selecting inputs and result fields
const amountInput = document.querySelector(".amount");
const termInput = document.querySelector(".term");
const rateInput = document.querySelector(".rate");
const calculateBtn = document.querySelector(".btn");

const loanAmount = document.querySelector(".loan-amount");
const monthlyEmi = document.querySelector(".emi");
const interestPayable = document.querySelector(".interest");
const totalPayable = document.querySelector(".total");

// Calculate EMI and update DOM
const computeResults = () => {
  const principal = parseFloat(amountInput.value);
  const years = parseFloat(termInput.value);
  const annualRate = parseFloat(rateInput.value);

  if (
    isNaN(principal) ||
    isNaN(years) ||
    isNaN(annualRate) ||
    principal <= 0 ||
    years <= 0 ||
    annualRate <= 0
  ) {
    alert("Please enter valid positive numbers in all fields.");
    return;
  }

  const monthlyRate = annualRate / 100 / 12;
  const totalMonths = years * 12;

  const x = Math.pow(1 + monthlyRate, totalMonths);
  const monthly = (principal * x * monthlyRate) / (x - 1);

  const monthlyPayment = monthly.toFixed(2);
  const totalInterest = (monthly * totalMonths - principal).toFixed(2);
  const totalPayment = (monthly * totalMonths).toFixed(2);

  loanAmount.textContent = "₹" + principal.toFixed(2);
  monthlyEmi.textContent = "₹" + monthlyPayment;
  interestPayable.textContent = "₹" + totalInterest;
  totalPayable.textContent = "₹" + totalPayment;
};

calculateBtn.addEventListener("click", computeResults);
