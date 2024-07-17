// Latest Posts (Everywhere)
 
  fetch('../../data/data.html') 
      .then(response => response.text())
      .then(data => {
          document.getElementById('latest').innerHTML = data;
      })
    .catch(error => console.error('Error fetching content:', error));
