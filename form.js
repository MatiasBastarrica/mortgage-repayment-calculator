export const elements = {
  mortgageAmount: document.querySelector("#mortgage-amount"),
  mortgageTerm: document.querySelector("#mortgage-term"),
  interestRate: document.querySelector("#interest-rate"),
  repaymentType: document.querySelector("#repayment"),
  interestOnlyType: document.querySelector("#interest-only"),
};

export function styleCheckedRadio() {
  console.log("SARIA ROCKS");
  elements.repaymentType.parentElement.classList.add("radio-selection");
}

function handleRadioInput(e) {
  //   const colors = {
  //     containerUnselected: "#7f8e93",
  //     containerSelected: "#cdd28d",
  //   };

  const sibling =
    e.target.id === "repayment"
      ? elements.interestOnlyType
      : elements.repaymentType;

  //   console.log("A RADIO INPUT has been checked");
  //   console.log(e.target.id);
  e.target.parentElement.classList.toggle("radio-selection");
  sibling.parentElement.classList.toggle("radio-selection");
}

elements.repaymentType.addEventListener("change", handleRadioInput);
elements.interestOnlyType.addEventListener("change", handleRadioInput);
