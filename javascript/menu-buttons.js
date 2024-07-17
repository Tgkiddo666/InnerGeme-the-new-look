
const openMenuBtn = document.getElementById('open-menu-btn');
const customMenu = document.getElementById('side-menu');

openMenuBtn.addEventListener('click', () => {
    if (customMenu.style.display === 'block') {
        customMenu.style.display = 'none';
    } else {
        customMenu.style.display = 'block';
    }
});

// Close the menu when clicking outside of it
document.addEventListener('click', (event) => {
    const isClickInsideMenu = customMenu.contains(event.target);
    const isClickOpenBtn = event.target === openMenuBtn;

    if (!isClickInsideMenu && !isClickOpenBtn) {
        customMenu.style.display = 'none';
    }
});



