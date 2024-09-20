// Search functionality
const searchBar = document.getElementById('search-bar');
const animeCards = document.querySelectorAll('.anime-card');

searchBar.addEventListener('keyup', function(event) {
    const searchText = event.target.value.toLowerCase();
    
    animeCards.forEach(function(card) {
        const title = card.querySelector('h3').textContent.toLowerCase();
        if (title.includes(searchText)) {
            card.style.display = 'brick';
        } else {
            card.style.display = 'none';
        }
    });
});
