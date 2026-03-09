// ===================================
// Galaxy Starfield Background
// ===================================
const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');
let stars = [];
let mouseX = 0;
let mouseY = 0;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function createStars(count) {
    stars = [];
    for (let i = 0; i < count; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 1.5 + 0.3,
            opacity: Math.random() * 0.8 + 0.2,
            twinkleSpeed: Math.random() * 0.02 + 0.005,
            twinkleOffset: Math.random() * Math.PI * 2,
            // Subtle drift
            dx: (Math.random() - 0.5) * 0.05,
            dy: (Math.random() - 0.5) * 0.05,
            // Color tint
            color: Math.random() > 0.7
                ? (Math.random() > 0.5 ? '167,139,250' : '236,72,153')
                : '255,255,255'
        });
    }
}

function drawStars(time) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw nebula patches
    drawNebula();

    stars.forEach(star => {
        // Twinkle
        const twinkle = Math.sin(time * star.twinkleSpeed + star.twinkleOffset);
        const opacity = star.opacity * (0.6 + 0.4 * twinkle);

        // Subtle parallax from mouse
        const parallaxX = (mouseX - canvas.width / 2) * star.radius * 0.003;
        const parallaxY = (mouseY - canvas.height / 2) * star.radius * 0.003;

        const x = star.x + parallaxX;
        const y = star.y + parallaxY;

        // Drift
        star.x += star.dx;
        star.y += star.dy;

        // Wrap around
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        ctx.beginPath();
        ctx.arc(x, y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${star.color},${opacity})`;
        ctx.fill();

        // Glow for larger stars
        if (star.radius > 1) {
            ctx.beginPath();
            ctx.arc(x, y, star.radius * 3, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${star.color},${opacity * 0.1})`;
            ctx.fill();
        }
    });
}

function drawNebula() {
    const scrollY = window.pageYOffset;
    const nebulaPatches = [
        { x: canvas.width * 0.2, y: canvas.height * 0.3, r: 200, color: '139,92,246', opacity: 0.03 },
        { x: canvas.width * 0.8, y: canvas.height * 0.15, r: 180, color: '236,72,153', opacity: 0.025 },
        { x: canvas.width * 0.5, y: canvas.height * 0.7, r: 220, color: '59,130,246', opacity: 0.025 },
    ];

    nebulaPatches.forEach(patch => {
        const y = patch.y - scrollY * 0.05;
        const gradient = ctx.createRadialGradient(patch.x, y, 0, patch.x, y, patch.r);
        gradient.addColorStop(0, `rgba(${patch.color},${patch.opacity * 2})`);
        gradient.addColorStop(0.5, `rgba(${patch.color},${patch.opacity})`);
        gradient.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(patch.x - patch.r, y - patch.r, patch.r * 2, patch.r * 2);
    });
}

let animationTime = 0;
function animateStars() {
    animationTime += 16;
    drawStars(animationTime);
    requestAnimationFrame(animateStars);
}

// Track mouse for parallax
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

resizeCanvas();
createStars(200);
animateStars();

window.addEventListener('resize', () => {
    resizeCanvas();
    createStars(200);
});

// ===================================
// Shooting Stars
// ===================================
function createShootingStar() {
    const star = document.createElement('div');
    star.className = 'shooting-star';

    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight * 0.5;
    const angle = 15 + Math.random() * 30;
    const distance = 200 + Math.random() * 300;
    const duration = 600 + Math.random() * 800;

    star.style.left = startX + 'px';
    star.style.top = startY + 'px';
    document.body.appendChild(star);

    const rad = angle * Math.PI / 180;
    const endX = startX + Math.cos(rad) * distance;
    const endY = startY + Math.sin(rad) * distance;

    star.animate([
        { transform: `translate(0, 0) rotate(${angle}deg)`, opacity: 1 },
        { transform: `translate(${endX - startX}px, ${endY - startY}px) rotate(${angle}deg)`, opacity: 0 }
    ], {
        duration: duration,
        easing: 'ease-out'
    }).onfinish = () => star.remove();
}

// Spawn shooting stars periodically
function scheduleShootingStar() {
    const delay = 3000 + Math.random() * 6000;
    setTimeout(() => {
        createShootingStar();
        scheduleShootingStar();
    }, delay);
}

scheduleShootingStar();

// ===================================
// Navigation Toggle for Mobile
// ===================================
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');

    const spans = navToggle.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translateY(10px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translateY(-10px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// ===================================
// Navbar Scroll Effect
// ===================================
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===================================
// Active Navigation Link on Scroll
// ===================================
const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add('active');
            } else {
                navLink.classList.remove('active');
            }
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// ===================================
// Smooth Scroll for Navigation Links
// ===================================
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Scroll Reveal Animation
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');

            entry.target.addEventListener('animationend', function() {
                this.style.opacity = '1';
                this.style.transform = 'translateY(0)';
            }, { once: true });

            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

const animateElements = document.querySelectorAll(
    '.skill-category, .project-card, .timeline-item, .achievement-card, .contact-item, .stat-item'
);

animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    observer.observe(el);
});

// ===================================
// Animated Skill Bars
// ===================================
const skillBars = document.querySelectorAll('.skill-bar-fill');

const skillBarObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bar = entry.target;
            const percent = bar.getAttribute('data-percent');
            bar.style.width = percent + '%';
            bar.classList.add('animated');
            skillBarObserver.unobserve(bar);
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(bar => {
    skillBarObserver.observe(bar);
});

// ===================================
// Typing Effect for Hero Title
// ===================================
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

window.addEventListener('load', () => {
    const highlight = document.querySelector('.highlight');
    if (highlight) {
        const text = highlight.textContent;
        typeWriter(highlight, text, 100);
    }
});

// ===================================
// Dynamic Year in Footer
// ===================================
const footerYear = document.querySelector('.footer p');
if (footerYear) {
    const currentYear = new Date().getFullYear();
    footerYear.textContent = `\u00A9 ${currentYear} Naieem Islam. All rights reserved.`;
}

// ===================================
// Project Card Hover Effect Enhancement
// ===================================
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ===================================
// Skill Tag Click Animation
// ===================================
const skillTags = document.querySelectorAll('.skill-tag');

skillTags.forEach(tag => {
    tag.addEventListener('click', function() {
        this.style.animation = 'none';
        setTimeout(() => {
            this.style.animation = 'pulse 0.5s ease';
        }, 10);
    });
});

const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
    }
`;
document.head.appendChild(style);

// ===================================
// Scroll to Top Button
// ===================================
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopBtn.className = 'scroll-top-btn';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #8b5cf6, #ec4899);
    color: white;
    border: none;
    border-radius: 50%;
    font-size: 1.2rem;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 999;
    box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);
`;

document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.style.opacity = '1';
        scrollTopBtn.style.visibility = 'visible';
    } else {
        scrollTopBtn.style.opacity = '0';
        scrollTopBtn.style.visibility = 'hidden';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollTopBtn.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-5px)';
    this.style.boxShadow = '0 6px 25px rgba(139, 92, 246, 0.5)';
});

scrollTopBtn.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
    this.style.boxShadow = '0 4px 15px rgba(139, 92, 246, 0.3)';
});

// ===================================
// Console Message
// ===================================
console.log('%c Welcome to Naieem Islam\'s Portfolio! ', 'background: linear-gradient(135deg, #8b5cf6, #ec4899); color: white; font-size: 20px; padding: 10px; border-radius: 5px;');
console.log('%c Interested in working together? Let\'s connect! ', 'background: #7c3aed; color: white; font-size: 14px; padding: 5px; border-radius: 3px;');
console.log('%c Email: naieemislam27@gmail.com ', 'color: #a78bfa; font-size: 12px;');
