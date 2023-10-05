const ratingElems = document.querySelectorAll(".rating");
const containerElem = document.querySelector(".js-container");
const buttonElem1 = document.querySelector(".js-btn");

let selectedRating = "";
const originalContent = containerElem.innerHTML;

// Remove the active class from all other feedbacks when one is clicked
const removeActive = () => {
  ratingElems.forEach((rating) => {
    rating.classList.remove("active");
  });
};

// Update the selected feedback
const updateFeedback = (event) => {
  selectedRating = event.target.innerText || event.target.parentNode.innerText;
  removeActive();
  event.target.classList.add("active");
  event.target.parentNode.classList.add("active");
};

// Add the active class to a rating when selected and update the selected feedback
ratingElems.forEach((ratingElem) => {
  ratingElem.addEventListener("click", updateFeedback);
});

// Handle the "Change Review" button click using event delegation
containerElem.addEventListener("click", (event) => {
  if (event.target.classList.contains("js-restore")) {
    // Restore the original content
    containerElem.innerHTML = originalContent;
  }
  ratingElems.forEach((ratingElem) => {
    ratingElem.addEventListener("click", updateFeedback);
  });
});

// Change the content of the feedback UI when the button is clicked
buttonElem1.addEventListener("click", () => {
  if (selectedRating !== "") {
    containerElem.innerHTML = `
        <strong>Thank you!</strong>
        <br>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <br>
        <br>
        <p>We'll use your feedback to improve our customer support.</p>
        <br>
        <br>
        <button class="btn js-restore" id="resetReview">Change Review</button>
        `;
  }
});
