// ===================================
// Starfield (subtle twinkling stars)
// ===================================
(function starfield() {
    const canvas = document.getElementById('starfield');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let stars = [];

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function create(count) {
        stars = [];
        for (let i = 0; i < count; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                r: Math.random() * 1.1 + 0.2,
                o: Math.random() * 0.5 + 0.15,
                ts: Math.random() * 0.008 + 0.002,
                toff: Math.random() * Math.PI * 2,
                hue: Math.random() < 0.5 ? 'rgba(170, 200, 255,' : 'rgba(200, 180, 255,'
            });
        }
    }

    let t = 0;
    function frame() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        t += 16;
        stars.forEach(s => {
            const tw = Math.sin(t * s.ts + s.toff);
            const o = s.o * (0.65 + 0.35 * tw);
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
            ctx.fillStyle = `${s.hue} ${o})`;
            ctx.fill();
        });
        requestAnimationFrame(frame);
    }

    resize();
    create(140);
    frame();
    window.addEventListener('resize', () => { resize(); create(140); });
})();

// ===================================
// Custom cursor (dot + ring with lag)
// ===================================
(function cursor() {
    const dot = document.querySelector('.cursor-dot');
    const ring = document.querySelector('.cursor-ring');
    if (!dot || !ring) return;
    if (matchMedia('(hover: none), (pointer: coarse)').matches) return;

    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let rx = mx, ry = my;

    window.addEventListener('mousemove', (e) => {
        mx = e.clientX;
        my = e.clientY;
        dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
    });

    function loop() {
        rx += (mx - rx) * 0.18;
        ry += (my - ry) * 0.18;
        ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
        requestAnimationFrame(loop);
    }
    loop();

    document.querySelectorAll('a, button, .skill-tag, .tech-tag, .project-card, input, textarea, .stat-item').forEach(el => {
        el.addEventListener('mouseenter', () => ring.classList.add('hover'));
        el.addEventListener('mouseleave', () => ring.classList.remove('hover'));
    });

    document.addEventListener('mouseleave', () => {
        dot.style.opacity = 0;
        ring.style.opacity = 0;
    });
    document.addEventListener('mouseenter', () => {
        dot.style.opacity = 1;
        ring.style.opacity = 1;
    });
})();

// ===================================
// Scroll progress bar
// ===================================
(function scrollProgress() {
    const bar = document.getElementById('scrollProgress');
    if (!bar) return;
    function update() {
        const h = document.documentElement;
        const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
        bar.style.width = pct + '%';
    }
    window.addEventListener('scroll', update, { passive: true });
    update();
})();

// ===================================
// Mobile nav toggle
// ===================================
(function nav() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    if (!navToggle || !navMenu) return;

    function close() {
        navMenu.classList.remove('active');
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
    }

    navToggle.addEventListener('click', () => {
        const open = !navMenu.classList.contains('active');
        navMenu.classList.toggle('active', open);
        const spans = navToggle.querySelectorAll('span');
        if (open) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
            spans[0].style.transform = '';
            spans[1].style.opacity = '';
            spans[2].style.transform = '';
        }
    });

    navLinks.forEach(link => link.addEventListener('click', close));
})();

// ===================================
// Navbar scrolled state + active link
// ===================================
(function navState() {
    const navbar = document.querySelector('.navbar');
    const sections = document.querySelectorAll('section[id]');

    function onScroll() {
        const sy = window.pageYOffset;
        if (navbar) navbar.classList.toggle('scrolled', sy > 60);
        sections.forEach(s => {
            const top = s.offsetTop - 110;
            const bottom = top + s.offsetHeight;
            const link = document.querySelector(`.nav-link[href="#${s.id}"]`);
            if (!link) return;
            link.classList.toggle('active', sy >= top && sy < bottom);
        });
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
})();

// ===================================
// Smooth scroll w/ offset
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        const id = link.getAttribute('href');
        if (id.length < 2) return;
        const target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' });
    });
});

// ===================================
// Reveal-on-scroll w/ stagger
// ===================================
(function reveal() {
    const items = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const parent = entry.target.parentElement;
            const siblings = Array.from(parent.querySelectorAll(':scope > .reveal'));
            const idx = siblings.indexOf(entry.target);
            const delay = Math.max(0, idx) * 90;
            setTimeout(() => entry.target.classList.add('visible'), delay);
            io.unobserve(entry.target);
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    items.forEach(el => io.observe(el));
})();

// ===================================
// Proficiency rings animate when visible
// ===================================
(function rings() {
    const rings = document.querySelectorAll('.proficiency-ring');
    const C = 2 * Math.PI * 52;
    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const r = entry.target;
            const p = parseInt(r.getAttribute('data-percent'), 10);
            const off = C - (C * p / 100);
            const fill = r.querySelector('.ring-fill');
            if (fill) fill.style.strokeDashoffset = off;
            io.unobserve(r);
        });
    }, { threshold: 0.5 });
    rings.forEach(r => io.observe(r));
})();

// ===================================
// Animated stat counters
// ===================================
(function counters() {
    const els = document.querySelectorAll('[data-count]');
    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            const target = parseInt(el.dataset.count, 10);
            const dur = 1400;
            const start = performance.now();
            const tick = (now) => {
                const t = Math.min(1, (now - start) / dur);
                const eased = 1 - Math.pow(1 - t, 3);
                el.textContent = Math.floor(target * eased) + '+';
                if (t < 1) requestAnimationFrame(tick);
                else el.textContent = target + '+';
            };
            requestAnimationFrame(tick);
            io.unobserve(el);
        });
    }, { threshold: 0.5 });
    els.forEach(el => io.observe(el));
})();

// ===================================
// Role rotator (typewriter cycling)
// ===================================
(function rotator() {
    const el = document.getElementById('roleRotator');
    if (!el) return;
    const roles = [
        'scalable systems',
        'full-stack web apps',
        'AI-powered products',
        'blockchain solutions',
        'clean APIs'
    ];
    let ri = 0, ci = 0, deleting = false;

    function tick() {
        const word = roles[ri];
        if (!deleting) {
            ci++;
            el.textContent = word.slice(0, ci);
            if (ci === word.length) {
                deleting = true;
                return setTimeout(tick, 1600);
            }
            return setTimeout(tick, 65);
        }
        ci--;
        el.textContent = word.slice(0, ci);
        if (ci === 0) {
            deleting = false;
            ri = (ri + 1) % roles.length;
            return setTimeout(tick, 220);
        }
        setTimeout(tick, 35);
    }
    tick();
})();

// ===================================
// Magnetic buttons
// ===================================
(function magnetic() {
    if (matchMedia('(hover: none), (pointer: coarse)').matches) return;
    document.querySelectorAll('[data-magnetic]').forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            btn.style.transform = `translate(${x * 0.22}px, ${y * 0.28}px)`;
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = '';
        });
    });
})();

// ===================================
// 3D tilt on project cards + glow-follow
// ===================================
(function tilt() {
    if (matchMedia('(hover: none), (pointer: coarse)').matches) return;
    document.querySelectorAll('[data-tilt]').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const cx = rect.width / 2;
            const cy = rect.height / 2;
            const rx = ((y - cy) / cy) * -5;
            const ry = ((x - cx) / cx) * 6;
            card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
            card.style.setProperty('--mx', x + 'px');
            card.style.setProperty('--my', y + 'px');
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
})();

// ===================================
// Footer year
// ===================================
(function year() {
    const el = document.querySelector('.footer p');
    if (!el) return;
    el.textContent = `© ${new Date().getFullYear()} Naieem Islam. All rights reserved.`;
})();

// ===================================
// Scroll-to-top button
// ===================================
(function scrollTop() {
    const btn = document.createElement('button');
    btn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    btn.setAttribute('aria-label', 'Scroll to top');
    btn.style.cssText = `
        position: fixed;
        bottom: 28px;
        right: 28px;
        width: 46px;
        height: 46px;
        background: linear-gradient(135deg, #22d3ee, #6366f1, #d946ef);
        color: #fff;
        border: none;
        border-radius: 50%;
        font-size: 1rem;
        cursor: none;
        opacity: 0;
        visibility: hidden;
        transform: translateY(10px);
        transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);
        z-index: 999;
        box-shadow: 0 8px 24px rgba(99, 102, 241, 0.45);
    `;
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 400) {
            btn.style.opacity = '1';
            btn.style.visibility = 'visible';
            btn.style.transform = 'translateY(0)';
        } else {
            btn.style.opacity = '0';
            btn.style.visibility = 'hidden';
            btn.style.transform = 'translateY(10px)';
        }
    }, { passive: true });

    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    btn.addEventListener('mouseenter', () => { btn.style.transform = 'translateY(-4px) scale(1.05)'; });
    btn.addEventListener('mouseleave', () => { btn.style.transform = 'translateY(0)'; });
})();
