const toggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
if (toggle && mobileMenu) {
toggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});
}
// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === "#" || href === "") return;
    const target = document.querySelector(href);
    if (target) {
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
    // close mobile if open
    if (mobileMenu) mobileMenu.classList.remove('active');
    }
});
});
