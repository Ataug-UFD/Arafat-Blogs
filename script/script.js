let searchable = [
    "Tentang : HTML",
    "Tentang : CSS",
    "Tentang : Javascript",
    "Apa itu HTML?",
    "Apa itu HTML5?",
    "Apa itu CSS",
    "Cara menggunakan CSS sebagai file Style",
];

const searchInput = document.getElementById('search');
const searchWrapper = document.querySelector('.wrapper');
const resultsWrapper = document.querySelector('.results');

searchInput.addEventListener('keyup', (e) => {
    let results = [];
    let input = searchInput.value;
    if (input.length) {
        results = searchable.filter((item) => {
            return item.toLowerCase().includes(input.toLowerCase());
        });
    }

    renderResults(results);
});

function renderResults(results) {
    if (!results.length) {
        return searchWrapper.classList.remove('show');
    }
    let content = results
        .map((item) => {
            return `<li>${item}</li>`
        })
        .join('');

    searchWrapper.classList.add('show')
    resultsWrapper.innerHTML = `<ul>${content}</ul>`
}
