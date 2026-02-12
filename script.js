// Smooth scroll dla linków nawigacji
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Efekt fade-in dla elementów przy scrollowaniu
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Obserwuj karty frakcji
document.querySelectorAll('.fraction-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Animacja dla sekcji about
document.querySelectorAll('.about-content, .features li').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Licznik dla statistyk (jeśli będą potrzebne)
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Scroll animation dla navbar
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        navbar.style.boxShadow = '0 8px 20px rgba(255, 107, 53, 0.4)';
    } else {
        navbar.style.boxShadow = '0 4px 15px rgba(255, 107, 53, 0.3)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

console.log('✅ Strona załadowana pomyślnie!');

// Scroll-to-top button behavior
(function() {
    const btn = document.getElementById('scrollTopBtn');
    if (!btn) return;

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        btn.blur();
    });

    // keyboard accessibility (Enter / Space)
    btn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            btn.blur();
        }
    });

    // initialize
    toggleVisibility();
})();

// Hamburger menu toggle for small screens
(function() {
    const hamburger = document.querySelector('.hamburger');
    const body = document.body;
    if (!hamburger) return;

    const setAria = (open) => {
        hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
    };

    hamburger.addEventListener('click', () => {
        const open = !body.classList.toggle('nav-open');
        // after toggle, body.classList.contains('nav-open') indicates open state
        const isOpen = body.classList.contains('nav-open');
        setAria(isOpen);
    });

    // Close nav when a nav link is clicked
    document.querySelectorAll('.nav-menu a').forEach(a => {
        a.addEventListener('click', () => {
            if (body.classList.contains('nav-open')) {
                body.classList.remove('nav-open');
                setAria(false);
            }
        });
    });
})();
