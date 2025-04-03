let Limitcheckbox = document.getElementById("count");
let limit = document.getElementById("limit");


Limitcheckbox.onchange = function() {
    limit.style.display = this.checked ? "block" : "none";
}

const themeToggle = document.getElementById('theme-toggle');

// Set initial theme based on user's preference
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark-mode');
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
