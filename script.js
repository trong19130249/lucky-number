const boxNumbers = document.querySelectorAll(".boxNumber");

boxNumbers.forEach((boxNumber) => {
  boxNumber.addEventListener("click", () => {
    const randomNumber = Math.floor(Math.random() * 10);
    boxNumber.style.animation = "none"; // Xóa animation hiện tại
    void boxNumber.offsetWidth; // Kích hoạt lại animation
    animateValue(boxNumber, 0, randomNumber, 500);
  });
});

function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}
