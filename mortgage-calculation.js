export function calculateRepayment(loanAmount, term, interestRate) {
  const totalPayments = Number(term) * 12;
  const monthlyRate = Number(interestRate) / 1200;

  let result = {
    monthly: null,
    totalOverTerm: null,
  };

  result.monthly =
    loanAmount *
    ((monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) /
      (Math.pow(1 + monthlyRate, totalPayments) - 1));

  result.totalOverTerm = result.monthly * totalPayments;

  result.monthly = result.monthly.toFixed(2);
  result.totalOverTerm = result.totalOverTerm.toFixed(2);

  return result;
}

export function calculateInterestOnly(loanAmount, term, interestRate) {
  const totalPayments = Number(term) * 12;
  const monthlyRate = Number(interestRate) / 1200;
  let result = {
    monthly: null,
    totalOverTerm: null,
  };
  result.monthly = loanAmount * monthlyRate;
  result.totalOverTerm = result.monthly * totalPayments + loanAmount;
  result.monthly = result.monthly.toFixed(2);
  result.totalOverTerm = result.totalOverTerm.toFixed(2);
  return result;
}
