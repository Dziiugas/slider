document.addEventListener("DOMContentLoaded", function () {

  fetch("https://strangerthings-quotes.vercel.app/api/quotes/3")
    .then((response) => response.json())
    .then((data) => {
      const indicatorsContainer = document.getElementById("indicators");
      data.forEach((slide, index) => {
        const button = document.createElement("button");
        button.setAttribute("type", "button");
        button.setAttribute("id", "butt");
        button.setAttribute("data-bs-target", "#carouselExampleIndicators");
        button.setAttribute("data-bs-slide-to", index.toString());
        button.setAttribute("aria-label", `Slide ${index + 1}`);
        if (index === 0) {
          button.classList.add("active");
        }
        indicatorsContainer.appendChild(button);
      });

      const carouselInner = document.getElementById("carousel-inner");
      data.forEach((item, index) => {
        const carouselItem = document.createElement("div");
        carouselItem.classList.add("carousel-item", "items", "containeris");
        if (index === 0) {
          carouselItem.classList.add("active");
        }

        const quoteElement = document.createElement("p");
        quoteElement.classList.add("d-block", "centered");
        quoteElement.id = `quote${index}`;
        quoteElement.innerHTML = `<span><img src="svg/quotes.svg" alt=""></span>${item.quote}`;
        carouselItem.appendChild(quoteElement);

        const authorElement = document.createElement("p");
        authorElement.classList.add("d-block", "color-place");
        authorElement.id = `author${index}`;
        authorElement.textContent = `— ${item.author}`;
        carouselItem.appendChild(authorElement);
        carouselInner.appendChild(carouselItem);
      });
    });
});