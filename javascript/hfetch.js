// Trending (Homepage)

  fetch('../../data/re-posts.html') 
    .then(response => response.text())
    .then(data => {
        document.getElementById('content').innerHTML = data;
    })
    .catch(error => console.error('Error fetching content:', error));
 
