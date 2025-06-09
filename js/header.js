document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.top-nav');
    const menuBtn = document.getElementById('openMenu');
    const closeBtn = document.getElementById('closeMenu');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');

    // Header scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(0, 0, 0, 0.8)';
        } else {
            header.style.background = 'transparent';
        }
    });

    // Mobile menu functionality
    menuBtn.addEventListener('click', () => {
        sidebar.classList.add('open');
        overlay.classList.add('active');
    });

    function closeMenu() {
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
    }

    closeBtn.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);
}); 