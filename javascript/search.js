          async function search() {
            const query = document.getElementById('search-input').value.toLowerCase();
            const resultsContainer = document.getElementById('results');
            resultsContainer.innerHTML = '';

            if (query.length === 0) return;

            try {
                const response = await fetch('../../data/data.html');
                const text = await response.text();
                const parser = new DOMParser();
                const doc = parser.parseFromString(text, 'text/html');

                const items = doc.querySelectorAll('.search-item');
                items.forEach(item => {
                    if (item.textContent.toLowerCase().includes(query)) {
                        resultsContainer.appendChild(item.cloneNode(true));
                    }
                });

                if (resultsContainer.childNodes.length === 0) {
                    resultsContainer.innerHTML = '<p>No results found</p>';
                }
            } catch (error) {
                console.error('Error fetching or processing the HTML file:', error);
            }
        }
        function goBack() {
            window.history.back();
        }
    function closeKeyboardAndScroll() {
      var input = document.getElementById('search-page');
      input.blur(); // Close the virtual keyboard

      var bottomDiv = document.getElementById('results');
      bottomDiv.scrollIntoView({ behavior: 'smooth' }); // Scroll to the div
    }
