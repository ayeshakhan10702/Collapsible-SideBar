  const toggleBtn = document.querySelector(".toggleicon");   // bigbox toggle
  const toggleBtnSmall = document.querySelector(".toggleicons"); // smallbox toggle
  const bigbox = document.querySelector(".bigbox");
  const smallbox = document.querySelector(".smallbox");

  // bigbox collapse/expand
  toggleBtn.addEventListener("click", () => {
    bigbox.classList.toggle("collapsed");
    smallbox.classList.toggle("show");
  });

  // animations
toggleBtn.addEventListener('click', () => {
  toggleBtn.classList.remove('bounce-rotate'); // reset if already applied
  void toggleBtn.offsetWidth; // force reflow to restart animation
  toggleBtn.classList.add('bounce-rotate');
});
