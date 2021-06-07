const reservia = document.getElementById('btn-reservia');
const root = document.documentElement;

function toggleTheme() {
   const theme = root.dataset.theme;
   return theme === 'dark'
      ? (root.dataset.theme = 'light')
      : (root.dataset.theme = 'dark');
}

reservia.addEventListener('click', toggleTheme);
