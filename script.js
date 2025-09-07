document.addEventListener('DOMContentLoaded', () => {
    // Select the navigation bar, the mobile menu toggle button, and the navigation links
    const navBar = document.querySelector('.navbar');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    // Toggle mobile navigation menu
    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Smooth scrolling for all navigation links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            if (href.startsWith('#')) {
                e.preventDefault();
                
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    const topOffset = targetSection.offsetTop - navBar.offsetHeight;
                    window.scrollTo({
                        top: topOffset,
                        behavior: 'smooth'
                    });
                }

                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            }
        });
    });

    // Add a 'scrolled' class to the navbar on scroll for a visual effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navBar.classList.add('scrolled');
        } else {
            navBar.classList.remove('scrolled');
        }
    });
});