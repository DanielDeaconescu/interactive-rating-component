"use strict";

// a function that will select the rating on click (make the background white)

const allRatings = document.querySelectorAll(".circle");
const allInnerRatings = document.querySelectorAll(".rating");
const submitButton = document.querySelector(".rating-state-submit");
const ratingStateEl = document.querySelector(".rating-state-element");
const thankYouStateEl = document.querySelector(".thankyou-state-element");
const thankYouStatement = document.querySelector(".thankyou-selection");

let ratingValue = 0;

for (let i = 0; i < allRatings.length; i++) {
  allRatings[i].addEventListener("click", function (e) {
    // the button currently selected
    const currentlySelected = document.querySelector(".selected-rating");
    // removing the "selected-rating" from the currentlySelected element
    if (currentlySelected) {
      currentlySelected.classList.remove("selected-rating");
    }

    // adding the "selected-rating" class to the clicked element
    e.currentTarget.classList.add("selected-rating");

    // get the text content of the selected div
    const selectedValue = allInnerRatings[i].textContent;
    thankYouStatement.innerHTML = `You selected ${selectedValue} out of 5`;
  });
}

submitButton.addEventListener("click", function () {
  ratingStateEl.classList.add("display-none");
  thankYouStateEl.classList.remove("display-none");
});
