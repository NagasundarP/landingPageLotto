const form = document.querySelector(".form");

// Add a submit event listener to the form
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  const inputs = form.querySelectorAll("input");

  const formData = {};

  inputs.forEach((input) => {
    formData[input.name] = input.value;
  });

  console.log(formData);
  setTimeout(function () {
    // Redirect the user to the success page
    window.location.href = "submission-success.html";
  }, 1500);
});
