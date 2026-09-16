document.addEventListener('DOMContentLoaded', () => {
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
});