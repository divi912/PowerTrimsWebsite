// Strategic Animation Enhancements for PowerTrims Website
// Add this to your existing JavaScript file or create a new one

document.addEventListener('DOMContentLoaded', function () {

    // 1. STAGGERED FADE-IN FOR ABILITY CARDS
    const abilityCards = document.querySelectorAll('.ability-card');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('pixel-fade-in');
                    entry.target.style.animationDelay = `${index * 0.05}s`;
                }, 50);
                cardObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    abilityCards.forEach(card => {
        card.style.opacity = '0';
        cardObserver.observe(card);
    });

    // Fix opacity after animation
    abilityCards.forEach(card => {
        card.addEventListener('animationend', () => {
            card.style.opacity = '1';
        });
    });


    // 2. BUTTON CLICK PRESS ANIMATION
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', function (e) {
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = 'buttonPress 0.2s ease-out';
            }, 10);
        });
    });


    // 3. ENCHANTMENT PARTICLES ON CARD HOVER
    abilityCards.forEach(card => {
        card.addEventListener('mouseenter', function (e) {
            // Create 3-5 random particles
            const particleCount = Math.floor(Math.random() * 3) + 3;

            for (let i = 0; i < particleCount; i++) {
                setTimeout(() => {
                    const particle = document.createElement('div');
                    particle.className = 'enchant-particle';

                    // Random horizontal offset
                    const randomX = (Math.random() - 0.5) * 40;
                    particle.style.setProperty('--particle-x', `${randomX}px`);

                    // Random position within card
                    particle.style.left = `${Math.random() * 100}%`;
                    particle.style.bottom = '10%';

                    this.appendChild(particle);

                    // Remove after animation
                    setTimeout(() => particle.remove(), 1500);
                }, i * 100);
            }
        });
    });


    // 4. HERO TITLE ENTRANCE
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        heroTitle.style.opacity = '0';
        heroTitle.style.transform = 'translateY(30px)';
        setTimeout(() => {
            heroTitle.style.transition = 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
        }, 200);
    }


    // 5. NAVIGATION LINKS HOVER EFFECT
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-2px)';
            this.style.transition = 'transform 0.2s ease';
        });

        link.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
        });
    });


    // 6. ADD WOBBLE TO FILTER BUTTONS ON SELECTION
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            if (!this.classList.contains('active')) {
                this.style.animation = 'blockWobble 0.3s ease-in-out';
                setTimeout(() => {
                    this.style.animation = '';
                }, 300);
            }
        });
    });

});
