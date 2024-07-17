        fetch('../../assets/icons/logo.svg')
          .then(response => response.text())
          .then(data => {
            document.getElementById('logo-container').innerHTML = data;
            document.querySelector('#logo-container svg').id = 'logo'; // Add an ID for styling
          })
         
         