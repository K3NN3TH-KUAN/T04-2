document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');
    const logo = document.getElementById('logo-home');

    // Navigation mapping
    const pageMap = {
        home: 'index.html',
        televisions: 'televisions.html',
        about: 'about.html'
    };

    // Mouse over feedback
    navLinks.forEach(link => {
        link._originalBg = link.style.backgroundColor;
        link._originalColor = link.style.color;

        link.addEventListener('mouseenter', function () {
            if (!this.classList.contains('active')) {
                this.style.backgroundColor = 'rgba(244, 163, 0, 0.2)';
                this.style.color = '#F4A300';
            }
        });
        link.addEventListener('mouseleave', function () {
            if (!this.classList.contains('active')) {
                this.style.backgroundColor = this._originalBg || '';
                this.style.color = this._originalColor || '';
            }
        });

        link.addEventListener('click', function () {
            const page = this.getAttribute('data-page');
            if (pageMap[page]) {
                window.location.href = pageMap[page];
            }
        });
    });

    // Highlight active link based on current page
    navLinks.forEach(link => {
        const page = link.getAttribute('data-page');
        if (window.location.pathname.endsWith(pageMap[page])) {
            link.style.backgroundColor = '#F4A300';
            link.style.color = '#3b2c00';
            link.style.fontWeight = 'bold';
            link.classList.add('active');
        } else {
            link.style.backgroundColor = link._originalBg || '';
            link.style.color = link._originalColor || '';
            link.style.fontWeight = '500';
            link.classList.remove('active');
        }
    });

    // Logo click returns to home page
    if (logo) {
        logo.addEventListener('click', function () {
            window.location.href = 'index.html';
        });
    }
});