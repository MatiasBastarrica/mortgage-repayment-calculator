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

  result.monthly = formatPrice(result.monthly.toFixed(2));
  result.totalOverTerm = formatPrice(result.totalOverTerm.toFixed(2));

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
  result.totalOverTerm = result.monthly * totalPayments + Number(loanAmount);
  result.monthly = formatPrice(result.monthly.toFixed(2));
  result.totalOverTerm = formatPrice(result.totalOverTerm.toFixed(2));
  return result;
}

function formatPrice(price) {
  const priceArr = price.split("");
  const decimals = priceArr.splice(priceArr.length - 3, 3);
  const integerSection = [];
  priceArr.reverse();
  for (let i = 0; i < priceArr.length; i++) {
    const number = priceArr[i];
    if (i !== 0 && i % 3 === 0) {
      integerSection.push(",", number);
    } else {
      integerSection.push(number);
    }
  }
  integerSection.reverse();
  return integerSection.join("") + decimals.join("");
}
