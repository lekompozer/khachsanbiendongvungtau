// components/hero.js
(function () {
    const el = document.getElementById('hero-section');
    el.innerHTML = `
    <div class="hero" id="hero">
      <div class="hero-glow" aria-hidden="true"></div>
      <div class="hero-glow-2" aria-hidden="true"></div>

      <!-- Animated wave background -->
      <div class="hero-waves" aria-hidden="true">
        <svg class="hero-wave-1" viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,60 C180,110 360,10 540,60 C720,110 900,10 1080,60 C1260,110 1440,10 1440,60 L1440,120 L0,120 Z" fill="#0080ff"/>
          <path d="M1440,60 C1620,110 1800,10 1980,60 C2160,110 2340,10 2520,60 C2700,110 2880,10 2880,60 L2880,120 L1440,120 Z" fill="#0080ff"/>
        </svg>
        <svg class="hero-wave-2" viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C240,100 480,0 720,50 C960,100 1200,5 1440,40 L1440,120 L0,120 Z" fill="#00b4d8"/>
          <path d="M1440,40 C1680,100 1920,0 2160,50 C2400,100 2640,5 2880,40 L2880,120 L1440,120 Z" fill="#00b4d8"/>
        </svg>
        <svg class="hero-wave-3" viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,70 C200,20 400,100 600,60 C800,20 1000,100 1200,60 C1300,40 1380,80 1440,70 L1440,120 L0,120 Z" fill="#0057b8"/>
          <path d="M1440,70 C1640,20 1840,100 2040,60 C2240,20 2440,100 2640,60 C2740,40 2820,80 2880,70 L2880,120 L1440,120 Z" fill="#0057b8"/>
        </svg>
      </div>
      <div class="container">
        <div class="hero-content">
          <!-- Left: Text -->
          <div class="hero-text">
            <div class="hero-badge">
              <i class="fas fa-star"></i>
              Dự án đang triển khai – Cơ hội đầu tư
            </div>
            <h1 class="hero-title">
              Khách Sạn<br>
              <span class="highlight">Biển Đông</span><br>
              Vũng Tàu
            </h1>
            <p class="hero-sub">Tổ hợp Khách sạn &amp; Condotel 5 sao mặt tiền biển Bãi Sau</p>
            <p class="hero-address">
              <i class="fas fa-map-marker-alt"></i>
              155 Thùy Vân, Phường Thắng Tam, TP. Vũng Tàu
            </p>

            <div class="hero-stats" role="list" aria-label="Thông số dự án">
              <div class="hero-stat" role="listitem">
                <div class="hero-stat-value">296</div>
                <div class="hero-stat-label">Phòng khách sạn</div>
              </div>
              <div class="hero-stat" role="listitem">
                <div class="hero-stat-value">654</div>
                <div class="hero-stat-label">Căn condotel</div>
              </div>
              <div class="hero-stat" role="listitem">
                <div class="hero-stat-value">28<span style="font-size:1rem">tầng</span></div>
                <div class="hero-stat-label">Tổng quy mô</div>
              </div>
            </div>

            <div class="hero-actions">
              <a href="#contact-section" class="btn btn-primary">
                <i class="fas fa-envelope"></i> Nhận tư vấn ngay
              </a>
              <a href="tel:0949012659" class="btn btn-outline-blue">
                <i class="fas fa-phone-alt"></i> 0949 012 659
              </a>
            </div>
          </div>

          <!-- Right: Visuals -->
          <div class="hero-visual" aria-label="Hình ảnh phối cảnh dự án">
            <div class="hero-main-img">
              <img src="public/phoi-canh-tong-quan-du-an.jpg" alt="Phối cảnh tổng thể Khách sạn Biển Đông Vũng Tàu" style="width:100%;height:100%;object-fit:cover;" loading="eager" />
            </div>
            <div class="hero-img-grid">
              <div class="hero-img-small">
                <img src="public/ho-boi-du-an.jpg" alt="Hồ bơi dự án Biển Đông Vũng Tàu" style="width:100%;height:100%;object-fit:cover;" loading="lazy" />
              </div>
              <div class="hero-img-small">
                <img src="public/view-bien-100.jpg" alt="Tầm nhìn biển Bãi Sau từ Biển Đông Vũng Tàu" style="width:100%;height:100%;object-fit:cover;" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
})();
