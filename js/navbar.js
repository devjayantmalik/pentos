document.addEventListener("DOMContentLoaded", () => {
  const toggler = document.querySelector(".navbar-burger");
  toggler.onclick = () => {
    document
      .querySelector(toggler.dataset.target)
      .classList.toggle("is-active");
  };
});
