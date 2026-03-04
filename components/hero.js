// components/hero.js
(function () {
    const el = document.getElementById('hero-section');
    el.innerHTML = `
    <div class="hero" id="hero">
      <div class="hero-glow" aria-hidden="true"></div>
      <div class="hero-glow-2" aria-hidden="true"></div>
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
                <div class="hero-stat-value">327</div>
                <div class="hero-stat-label">Phòng khách sạn</div>
              </div>
              <div class="hero-stat" role="listitem">
                <div class="hero-stat-value">703</div>
                <div class="hero-stat-label">Căn condotel</div>
              </div>
              <div class="hero-stat" role="listitem">
                <div class="hero-stat-value">50<span style="font-size:1rem">tầng</span></div>
                <div class="hero-stat-label">Tổng quy mô</div>
              </div>
            </div>

            <div class="hero-actions">
              <a href="#contact-section" class="btn btn-primary">
                <i class="fas fa-envelope"></i> Nhận tư vấn ngay
              </a>
              <a href="tel:0949012659" class="btn btn-outline">
                <i class="fas fa-phone-alt"></i> 0949 012 659
              </a>
            </div>
          </div>

          <!-- Right: Visuals -->
          <div class="hero-visual" aria-label="Hình ảnh phối cảnh dự án">
            <div class="hero-main-img">
              <div class="img-placeholder" style="height:100%; min-height: 280px;">
                <i class="fas fa-building"></i>
                <span>Phối cảnh tổng thể<br>Khách sạn Biển Đông Vũng Tàu</span>
              </div>
            </div>
            <div class="hero-img-grid">
              <div class="hero-img-small">
                <div class="img-placeholder" style="height:100%; min-height: 120px;">
                  <i class="fas fa-swimming-pool"></i>
                  <span>Hồ bơi vô cực</span>
                </div>
              </div>
              <div class="hero-img-small">
                <div class="img-placeholder" style="height:100%; min-height: 120px;">
                  <i class="fas fa-umbrella-beach"></i>
                  <span>Tầm nhìn biển</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
})();
