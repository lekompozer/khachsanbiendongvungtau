// js/main.js – Scroll animations & utilities

(function () {
    'use strict';

    // ── Intersection Observer: fade-up animations ──────────────────────────
    const io = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    io.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    function observeFadeEls() {
        document.querySelectorAll('.fade-up').forEach((el) => io.observe(el));
    }

    // ── Active nav link highlight ──────────────────────────────────────────
    const sections = [
        { id: 'overview', link: 'a[href="#overview-section"]' },
        { id: 'specs', link: 'a[href="#specs-section"]' },
        { id: 'location', link: 'a[href="#location-section"]' },
        { id: 'amenities', link: 'a[href="#amenities-section"]' },
        { id: 'investment', link: 'a[href="#investment-section"]' },
        { id: 'contact', link: 'a[href="#contact-section"]' },
    ];

    function setActiveNav() {
        const scrollY = window.scrollY + 100;
        sections.forEach(({ id, link }) => {
            const sec = document.getElementById(id);
            const navLink = document.querySelector(link);
            if (!sec || !navLink) return;
            const top = sec.offsetTop;
            const bottom = top + sec.offsetHeight;
            navLink.style.color = (scrollY >= top && scrollY < bottom) ? 'var(--blue-2)' : '';
        });
    }

    // ── Smooth scroll for anchor links ───────────────────────────────────
    document.addEventListener('click', (e) => {
        const a = e.target.closest('a[href^="#"]');
        if (!a) return;
        const target = document.querySelector(a.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        const navHeight = document.getElementById('navbar').offsetHeight || 70;
        const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 12;
        window.scrollTo({ top, behavior: 'smooth' });
    });

    // ── Scroll listener ──────────────────────────────────────────────────
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                setActiveNav();
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });

    // ── Init ─────────────────────────────────────────────────────────────
    window.addEventListener('DOMContentLoaded', () => {
        observeFadeEls();
        setActiveNav();
    });

    // Catch late-rendered elements
    window.addEventListener('load', () => {
        observeFadeEls();
    });
})();
