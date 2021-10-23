const cards = document.querySelectorAll("cards-container");
const searchInput = document.getElementById("search-button");

function initializeSearch(cards, searchInput) {
  const handleSearch = (event) => {
    const currentTitle = event.target.value.trim().toLowerCase();

    cards.forEach(function (card) {
      const cardTitle = card.querySelector("h3").textContent.toLowerCase();
      cardTitle.includes(currentTitle)
        ? card.classList.remove("hidden")
        : card.classList.add("hidden");
    });
  };

  searchInput.onkeyup = handleSearch;
}

initializeSearch(cards, searchInput);
