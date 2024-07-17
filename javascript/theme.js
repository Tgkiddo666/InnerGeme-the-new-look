const themeToggleBtns = document.querySelectorAll('.theme-toggle');

function switchTheme() {
  if (document.documentElement.classList.contains('dark-mode')) {
    document.documentElement.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
    updateButtonText('Dark Theme');
  } else {
    document.documentElement.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
    updateButtonText('Light Theme');
  }
}

function updateButtonText(text) {
  themeToggleBtns.forEach(btn => {
    btn.textContent = text;
  });
}

themeToggleBtns.forEach(btn => {
  btn.addEventListener('click', switchTheme);
});

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
  if (currentTheme === 'dark') {
    document.documentElement.classList.add('dark-mode');
    updateButtonText('Light Theme');
  } else {
    document.documentElement.classList.remove('dark-mode');
    updateButtonText('Dark Theme');
  }
} else {
  updateButtonText('Dark Theme');
}