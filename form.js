import {
  calculateInterestOnly,
  calculateRepayment,
} from "./mortgage-calculation.js";
import { toggleReultsDisplay, updateResults } from "./results.js";

export const elements = {
  mortgageAmount: document.querySelector("#mortgage-amount"),
  mortgageTerm: document.querySelector("#mortgage-term"),
  interestRate: document.querySelector("#interest-rate"),
  repaymentType: document.querySelector("#repayment"),
  interestOnlyType: document.querySelector("#interest-only"),
  form: document.querySelector("form"),
  clearBtn: document.querySelector(".clear-btn"),
};

export function styleCheckedRadio() {
  console.log("SARIA ROCKS");
  elements.repaymentType.parentElement.classList.add("radio-selection");
}

function handleRadioInput(e) {
  const sibling =
    e.target.id === "repayment"
      ? elements.interestOnlyType
      : elements.repaymentType;

  e.target.parentElement.classList.toggle("radio-selection");
  sibling.parentElement.classList.toggle("radio-selection");
}

function handleClearBtn(e) {
  elements.mortgageAmount.value = "";
  elements.mortgageTerm.value = "";
  elements.interestRate.value = "";
  if (document.querySelector(".empty-results").classList.contains("hide")) {
    toggleReultsDisplay();
  }
}

elements.repaymentType.addEventListener("change", handleRadioInput);
elements.interestOnlyType.addEventListener("change", handleRadioInput);
elements.clearBtn.addEventListener("click", handleClearBtn);

elements.form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!document.querySelector(".empty-results").classList.contains("hide")) {
    toggleReultsDisplay();
  }
  let calculation;
  if (elements.repaymentType.checked) {
    calculation = calculateRepayment(
      elements.mortgageAmount.value,
      elements.mortgageTerm.value,
      elements.interestRate.value,
    );
  } else {
    calculation = calculateInterestOnly(
      elements.mortgageAmount.value,
      elements.mortgageTerm.value,
      elements.interestRate.value,
    );
  }
  updateResults(calculation);
});
