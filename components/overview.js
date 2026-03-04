// components/overview.js
(function () {
    const el = document.getElementById('overview-section');
    el.setAttribute('aria-label', 'Tổng quan dự án');
    el.innerHTML = `
    <div class="section-pad" id="overview">
      <div class="container">
        <div class="overview-grid">
          <!-- Images -->
          <div class="overview-images fade-up">
            <div class="overview-img-main">
              <img src="public/khach-san-bien-dong-vung-tau-01-1-2048x1194.jpg" alt="Khách sạn Biển Đông Vũng Tàu – mặt tiền biển 155 Thùy Vân" style="width:100%;height:100%;object-fit:cover;" loading="lazy" />
            </div>
            <div class="overview-img-sm">
              <img src="public/khach-san-bien-dong-vung-tau-09-scaled.jpg" alt="Phối cảnh Khách sạn Biển Đông Vũng Tàu" style="width:100%;height:100%;object-fit:cover;" loading="lazy" />
            </div>
            <div class="overview-img-sm">
              <img src="public/can-ho-view-bien.jpg" alt="Căn hộ view biển Bãi Sau – Condotel Biển Đông Vũng Tàu" style="width:100%;height:100%;object-fit:cover;" loading="lazy" />
            </div>
          </div>

          <!-- Content -->
          <div class="overview-content fade-up stagger-2">
            <span class="section-label">Tổng quan dự án</span>
            <h2 class="section-title">
              Tổ hợp nghỉ dưỡng <span>đẳng cấp</span><br>mặt tiền Bãi Sau
            </h2>
            <div class="gradient-divider"></div>
            <p class="section-desc">
              Khách sạn Biển Đông Vũng Tàu là tổ hợp khách sạn và căn hộ du lịch cao cấp tọa lạc tại
              số 155 Thùy Vân, phường Thắng Tam, TP. Vũng Tàu. Dự án sở hữu vị trí mặt tiền biển
              hiếm hoi còn lại trên trục đường du lịch sầm uất bậc nhất thành phố, đồng thời đối diện
              trực tiếp công viên biển Bãi Sau quy mô 1.000 tỷ đồng.
            </p>

            <div class="highlight-cards">
              <div class="highlight-card">
                <div class="highlight-icon"><i class="fas fa-award"></i></div>
                <div>
                  <h4>Chủ đầu tư uy tín</h4>
                  <p>Công ty Cổ phần Đầu tư Khách sạn Biển Đông – đơn vị thiết kế IBSTAC Architects &amp; Planners</p>
                </div>
              </div>
              <div class="highlight-card">
                <div class="highlight-icon"><i class="fas fa-gem"></i></div>
                <div>
                  <h4>Vị trí kim cương</h4>
                  <p>Mặt tiền trực diện biển Bãi Sau, đối diện công viên 1.000 tỷ – quỹ đất hiếm còn lại trên Thùy Vân</p>
                </div>
              </div>
              <div class="highlight-card">
                <div class="highlight-icon"><i class="fas fa-chart-line"></i></div>
                <div>
                  <h4>Khai thác cho thuê hiệu quả</h4>
                  <p>Mô hình condotel vận hành chuyên nghiệp, hưởng lợi từ hàng triệu lượt khách du lịch mỗi năm</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Developer info bar -->
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(200px,1fr)); gap:16px; margin-top:48px; padding-top:40px; border-top:1px solid var(--border);">
          ${[
            { icon: 'fas fa-building', label: 'Chủ đầu tư', value: 'CTCP Đầu tư KS Biển Đông' },
            { icon: 'fas fa-drafting-compass', label: 'Đơn vị thiết kế', value: 'IBSTAC Architects & Planners' },
            { icon: 'fas fa-map-marker-alt', label: 'Vị trí', value: '155 Thùy Vân, Vũng Tàu' },
            { icon: 'fas fa-hard-hat', label: 'Tình trạng', value: 'Đang triển khai' },
        ].map(item => `
            <div style="display:flex; align-items:center; gap:12px;" class="fade-up">
              <div style="width:42px;height:42px;min-width:42px;background:var(--gradient);border-radius:10px;display:flex;align-items:center;justify-content:center;color:white;font-size:1rem;">
                <i class="${item.icon}"></i>
              </div>
              <div>
                <div style="font-size:0.72rem;color:var(--text-light);font-weight:600;text-transform:uppercase;letter-spacing:.05em;">${item.label}</div>
                <div style="font-size:0.88rem;font-weight:700;color:var(--text-dark);">${item.value}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
})();
