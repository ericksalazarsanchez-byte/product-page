document.addEventListener('DOMContentLoaded', () => {
<<<<<<< HEAD
  const themeToggleBtn = document.getElementById('theme-toggle');

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');

      const isDarkMode = document.body.classList.contains('dark-mode');
      themeToggleBtn.innerHTML = isDarkMode
        ? '<span class="icon">☀️</span> Light Mode'
        : '<span class="icon">🌙</span> Dark Mode';
    });
  }
=======
    const themeToggleBtn = document.getElementById('theme-toggle');
    const iconSpan = themeToggleBtn.querySelector('.icon');
    const body = document.body;

    themeToggleBtn.addEventListener('click', () => {
        // Alternar el atributo data-theme
        if (body.getAttribute('data-theme') === 'dark') {
            body.removeAttribute('data-theme');
            iconSpan.textContent = '🌙';
        } else {
            body.setAttribute('data-theme', 'dark');
            iconSpan.textContent = '☀️';
        }
    });
>>>>>>> 0b623f713a593b0a8934535805726d1a782c5a8d
});