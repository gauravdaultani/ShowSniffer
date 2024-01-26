document.addEventListener('DOMContentLoaded', function () {
    function searchShow() {
        const showName = document.getElementById('showName').value;

        // Fetch data from TMDb API (replace API_KEY with your actual TMDb API key)
        fetch(`https://api.themoviedb.org/3/search/tv?api_key=80df68fb8b4e911eac414803565bd134&query=${showName}`)
            .then(response => response.json())
            .then(data => {
                // Process the API response and update the results section
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

    // You may also want to handle the "Enter" key press for a more user-friendly experience
    document.getElementById('showName').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            searchShow();
        }
    });

    const searchButton = document.getElementById('searchButton'); // replace 'searchButton' with the actual ID of your search button
    searchButton.addEventListener('click', searchShow);
});

