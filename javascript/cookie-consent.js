document.addEventListener('DOMContentLoaded', function() {
    if (!localStorage.getItem('cookieConsent')) {
        const cookieConsentDiv = document.createElement('div');
        cookieConsentDiv.id = 'cookieConsentMessage';
        cookieConsentDiv.innerHTML = `
            <div>
                <p> This website uses cookies to ensure you get the best experience on our website.</p> 
                <button id="acceptCookies">Accept</button>
            </div>
        `;
        document.body.appendChild(cookieConsentDiv);

        document.getElementById('acceptCookies').addEventListener('click', function() {
            localStorage.setItem('cookieConsent', 'true');
            cookieConsentDiv.style.display = 'none';
        });
    }
});