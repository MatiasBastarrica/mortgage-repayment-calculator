export const elements = {
  emptyResults: document.querySelector(".empty-results"),
  completedResults: document.querySelector(".completed-results"),
  monthlyNumber: document.querySelector(".monthly-number"),
  totalNumber: document.querySelector(".total-number"),
};

export function showResults() {
  elements.emptyResults.classList.toggle("hide");
  elements.completedResults.classList.toggle("hide");
}

export function updateResults(resultObj) {
  elements.monthlyNumber.innerText = resultObj.monthly;
  elements.totalNumber.innerText = resultObj.totalOverTerm;
}
