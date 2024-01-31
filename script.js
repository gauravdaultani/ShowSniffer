
// Event listener for when the DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    // searching a show name
    function searchShow() {
        const showName = document.getElementById('showName').value;
        // Fetching data from the API
        fetch(`https://api.themoviedb.org/3/search/tv?api_key=80df68fb8b4e911eac414803565bd134&query=${showName}`)
            .then(response => response.json())
            .then(data => {
                const resultsContainer = document.getElementById('results');
                if (data.results && data.results.length > 0) {
                    const show = data.results[0];
                    // Displaying the show name and overview
                    resultsContainer.innerHTML = `
                        <h2>${show.name}</h2>
                        <p>${show.overview}</p>
                    `;
                } else {
                    // a message if no results are found
                    resultsContainer.innerHTML = '<p>No results found.</p>';
                }
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    // Event listener for when the Enter key is pressed in the input field
    document.getElementById('showName').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            searchShow();
        }
    });

    // Event listener for when the search button is clicked
    const searchButton = document.getElementById('searchButton'); 
    searchButton.addEventListener('click', searchShow);
});

