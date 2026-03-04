// components/navbar.js
(function () {
    const el = document.getElementById('navbar');
    el.className = 'navbar scrolled';
    el.innerHTML = `
    <div class="container">
      <div class="nav-inner">
        <a href="#" class="nav-logo" aria-label="Khách sạn Biển Đông Vũng Tàu">
          Biển Đông<br><span>Vũng Tàu</span>
        </a>
        <ul class="nav-links" id="navLinks" role="navigation" aria-label="Menu chính">
          <li><a href="#overview-section" class="nav-link" onclick="closeMenu()">Tổng quan</a></li>
          <li><a href="#specs-section" class="nav-link" onclick="closeMenu()">Quy mô</a></li>
          <li><a href="#location-section" class="nav-link" onclick="closeMenu()">Vị trí</a></li>
          <li><a href="#amenities-section" class="nav-link" onclick="closeMenu()">Tiện ích</a></li>
          <li><a href="#investment-section" class="nav-link" onclick="closeMenu()">Đầu tư</a></li>
          <li>
            <a href="tel:0949012659" class="nav-link nav-cta" onclick="closeMenu()">
              <i class="fas fa-phone-alt"></i> 0949 012 659
            </a>
          </li>
        </ul>
        <button class="nav-toggle" id="navToggle" aria-label="Mở menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  `;

    // Toggle mobile menu
    const toggle = document.getElementById('navToggle');
    toggle.addEventListener('click', () => {
        const open = el.classList.toggle('menu-open');
        toggle.setAttribute('aria-expanded', open);
        document.body.style.overflow = open ? 'hidden' : '';
    });

    window.closeMenu = function () {
        el.classList.remove('menu-open');
        document.body.style.overflow = '';
        toggle.setAttribute('aria-expanded', 'false');
    };

    // Close on outside click
    document.addEventListener('click', (e) => {
        if (el.classList.contains('menu-open') && !el.contains(e.target)) {
            window.closeMenu();
        }
    });
})();
