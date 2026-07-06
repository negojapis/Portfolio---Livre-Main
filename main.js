document.addEventListener('DOMContentLoaded', () => {
    // 1. HEADER SCROLL STATE
    const header = document.querySelector('header');
    
    function checkScroll() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Initial check

    // 2. MOBILE MENU OVERLAY TOGGLE
    const menuToggle = document.getElementById('menu-toggle');
    const mobileOverlay = document.getElementById('mobile-overlay');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    function toggleMenu() {
        menuToggle.classList.toggle('active');
        mobileOverlay.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    }

    function closeMenu() {
        menuToggle.classList.remove('active');
        mobileOverlay.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }

    menuToggle.addEventListener('click', toggleMenu);
    
    mobileLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // 3. PREMIUM DISCREET TYPING ANIMATION
    const typedTextSpan = document.getElementById('typed-text');
    const words = ["Estética", "Skincare", "Autoestima", "Bem-estar"];
    const typingDelay = 100;
    const erasingDelay = 60;
    const newWordDelay = 2000; // Delay between words
    let wordIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < words[wordIndex].length) {
            typedTextSpan.textContent += words[wordIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            setTimeout(erase, newWordDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typedTextSpan.textContent = words[wordIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, typingDelay + 100);
        }
    }

    // Start typing animation after a sutil delay
    if (typedTextSpan) {
        setTimeout(type, 1000);
    }

    // 4. SCROLLSPY (ACTIVE LINK HIGHLIGHTING)
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    function scrollSpy() {
        let currentSectionId = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Highlight when 1/3 of the section is visible in the viewport
            if (window.scrollY >= (sectionTop - 150)) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });

        mobileLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', scrollSpy);
    scrollSpy(); // Initial check

    // 5. GLOW CARD EFFECT
    const glowCards = document.querySelectorAll('[data-glow]');
    
    const syncPointer = (e) => {
        const x = e.clientX;
        const y = e.clientY;
        
        glowCards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const cardX = x - rect.left;
            const cardY = y - rect.top;
            
            card.style.setProperty('--x', cardX.toFixed(2));
            card.style.setProperty('--xp', (x / window.innerWidth).toFixed(2));
            card.style.setProperty('--y', cardY.toFixed(2));
            card.style.setProperty('--yp', (y / window.innerHeight).toFixed(2));
        });
    };

    if (glowCards.length > 0) {
        document.body.addEventListener('pointermove', syncPointer);
    }
});
