function showSection(sectionId, element) {
    // 1. Masquer toutes les sections (.page-section)
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(sec => {
        sec.classList.remove('active-section');
        sec.style.display = 'none';
    });

    // 2. Afficher la section demandée
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active-section');
        targetSection.style.display = 'block';
    }

    // 3. Mettre à jour le bouton/lien actif dans le menu
    const navLinks = document.querySelectorAll('nav a, .nav-btn');
    navLinks.forEach(link => link.classList.remove('active'));

    if (element) {
        element.classList.add('active');
    }
}