document.addEventListener('DOMContentLoaded', function () {
    function searchShow() {
        const showName = document.getElementById('showName').value;
        fetch(`https://api.themoviedb.org/3/search/tv?api_key=80df68fb8b4e911eac414803565bd134&query=${showName}`)
            .then(response => response.json())
            .then(data => {
                const resultsContainer = document.getElementById('results');
                if (data.results && data.results.length > 0) {
                    const show = data.results[0];
                    resultsContainer.innerHTML = `
                        <h2>${show.name}</h2>
                        <p>${show.overview}</p>
                    `;
                } else {
                    resultsContainer.innerHTML = '<p>No results found.</p>';
                }
            })
            .catch(error => console.error('Error fetching data:', error));
    }
    document.getElementById('showName').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            searchShow();
        }
    });
    const searchButton = document.getElementById('searchButton'); 
    searchButton.addEventListener('click', searchShow);
});

