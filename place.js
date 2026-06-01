  // Get modal elements
  const modal = document.getElementById("placeModal");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");
  const modalLocation = document.getElementById("modal-location");
  const closeModal = document.querySelector(".close");

  // Add event listeners to beach items
  document.querySelectorAll(".place-item").forEach(item => {
      item.addEventListener("click", () => {
          modalTitle.textContent = item.getAttribute("data-name");
          modalDescription.textContent = item.getAttribute("data-description");
          modalLocation.textContent = item.getAttribute("data-location");

          modal.style.display = "flex";
      });
  });

  // Close modal when clicking the close button
  closeModal.addEventListener("click", () => {
      modal.style.display = "none";
  });

  // Close modal when clicking outside content
  window.addEventListener("click", (event) => {
      if (event.target === modal) {
          modal.style.display = "none";
      }
  });