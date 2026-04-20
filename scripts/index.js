const toggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const conteneur_age = document.getElementById('age');
const maDateDeNaissance = new Date('2007-01-26');
function calculerAge(dateDeNaissance) {
    const aujourdHui = new Date();
    let age = aujourdHui.getFullYear() - dateDeNaissance.getFullYear();
    const mois = aujourdHui.getMonth() - dateDeNaissance.getMonth();
    if (mois < 0 || (mois === 0 && aujourdHui.getDate() < dateDeNaissance.getDate())) {
        age--;
    }
    return age;
}
const age = calculerAge(maDateDeNaissance);
if (conteneur_age) {
    conteneur_age.textContent = age;
}
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
