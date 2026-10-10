const slider = document.querySelector(".slider");

document.addEventListener("click", function (e) {
  // Read More button
  const readMoreButton = e.target.closest(".read-more");

  if (readMoreButton) {
    const content = readMoreButton.closest(".content");

    content.classList.toggle("expanded");

    readMoreButton.textContent = content.classList.contains("expanded")
      ? "Read Less"
      : "Read More";

    return;
  }

  // Next slide
  if (e.target.closest(".next")) {
    slider.append(slider.querySelector(".item"));
    return;
  }

  // Previous slide
  if (e.target.closest(".prev")) {
    slider.prepend(slider.querySelector(".item:last-child"));
  }
});
