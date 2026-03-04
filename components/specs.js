// components/specs.js
(function () {
    const el = document.getElementById('specs-section');
    el.setAttribute('aria-label', 'Thông tin quy mô và thiết kế');
    el.innerHTML = `
    <div class="section-pad bg-off-white" id="specs">
      <div class="container">
        <!-- Header -->
        <div class="text-center" style="margin-bottom: 48px;">
          <span class="section-label">Quy mô &amp; Thiết kế</span>
          <h2 class="section-title">Thông số <span>nổi bật</span></h2>
          <div class="gradient-divider"></div>
          <p class="section-desc">
            Được phát triển trên khu đất rộng 12.278 m² với tổng diện tích sàn gần 99.000 m²,
            Biển Đông Vũng Tàu là một trong những tổ hợp lưu trú lớn nhất khu vực Bãi Sau.
          </p>
        </div>

        <!-- Key stats -->
        <div class="specs-grid">
          ${[
            { icon: 'fas fa-expand-arrows-alt', value: '12.278', unit: ' m²', label: 'Diện tích khu đất' },
            { icon: 'fas fa-layer-group', value: '98.956', unit: ' m²', label: 'Tổng diện tích sàn' },
            { icon: 'fas fa-hotel', value: '327', unit: '', label: 'Phòng khách sạn' },
            { icon: 'fas fa-home', value: '703', unit: '', label: 'Căn condotel' },
        ].map(s => `
            <div class="spec-card fade-up">
              <div class="spec-icon"><i class="${s.icon}"></i></div>
              <div class="spec-value">${s.value}<span>${s.unit}</span></div>
              <div class="spec-label">${s.label}</div>
            </div>
          `).join('')}
        </div>

        <!-- Breakdown -->
        <div class="specs-breakdown">
          <!-- Hotel block -->
          <div class="specs-breakdown-card fade-up">
            <h3><i class="fas fa-hotel"></i> Khối Khách Sạn</h3>
            ${[
            ['Số tầng khách sạn', '21 tầng', false],
            ['Số phòng', '327 phòng', true],
            ['Tầng hầm', '2 tầng hầm', false],
            ['Diện tích xây dựng', '4.800 m²', false],
            ['Tiện ích', 'Hội nghị, spa, nhà hàng', false],
        ].map(([l, v, blue]) => `
              <div class="spec-row">
                <span class="spec-row-label">${l}</span>
                <span class="spec-row-value${blue ? ' blue' : ''}">${v}</span>
              </div>
            `).join('')}
          </div>

          <!-- Condotel block -->
          <div class="specs-breakdown-card fade-up stagger-2">
            <h3><i class="fas fa-building"></i> Khối Condotel</h3>
            ${[
            ['Số tầng condotel', '29 tầng', false],
            ['Số căn hộ (dự kiến)', '703 căn', true],
            ['Mặt tiền', 'Trực diện biển Bãi Sau', false],
            ['Đặc điểm', 'Ban công rộng, view biển', false],
            ['Tiện ích riêng', 'Hồ bơi, gym, sky garden', false],
        ].map(([l, v, blue]) => `
              <div class="spec-row">
                <span class="spec-row-label">${l}</span>
                <span class="spec-row-value${blue ? ' blue' : ''}">${v}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Price badge -->
        <div class="price-badge fade-up" role="region" aria-label="Giá dự kiến">
          <div class="price-badge-icon"><i class="fas fa-tags"></i></div>
          <div>
            <h3>Giá dự kiến</h3>
            <div class="price-value">70 – 80 triệu/m²</div>
            <div class="price-note">Liên hệ để nhận bảng giá chi tiết và chính sách ưu đãi</div>
          </div>
          <div style="margin-left: auto; flex-shrink: 0;">
            <a href="tel:0949012659" class="btn" style="background:rgba(255,255,255,0.2);color:white;border:2px solid rgba(255,255,255,0.4);backdrop-filter:blur(8px);">
              <i class="fas fa-phone-alt"></i> Hỏi giá ngay
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
})();
