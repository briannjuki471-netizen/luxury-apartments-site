document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  // Apartment sliders
  const sliders = document.querySelectorAll(".apt-slider");
  sliders.forEach(slider => {
    let index = 0;
    const images = slider.querySelectorAll("img");
    setInterval(() => {
      images[index].classList.remove("active");
      index = (index + 1) % images.length;
      images[index].classList.add("active");
    }, 3000);
  });

  // Booking modal
  const bookingModal = document.getElementById("bookingModal");
  const modalClose = document.getElementById("modalClose");
  const bookBtns = document.querySelectorAll(".book-btn");
  const bookForm = document.getElementById("bookForm");

  bookBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      bookingModal.style.display = "flex";
    });
  });

  modalClose.addEventListener("click", () => {
    bookingModal.style.display = "none";
  });

  bookingModal.addEventListener("click", e => {
    if (e.target === bookingModal) bookingModal.style.display = "none";
  });

  bookForm.addEventListener("submit", e => {
    e.preventDefault();
    alert("Your booking request has been sent successfully!");
    bookingModal.style.display = "none";
    bookForm.reset();
  });
});





