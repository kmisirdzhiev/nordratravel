document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".filter").forEach((filter) => {
    filter.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent any default button action
      this.classList.toggle("selected");
    });
  });
});
