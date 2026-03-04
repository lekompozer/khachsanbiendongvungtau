// components/location.js
(function () {
    const el = document.getElementById('location-section');
    el.setAttribute('aria-label', 'Vị trí dự án');
    el.innerHTML = `
    <div class="section-pad" id="location">
      <div class="container">
        <div class="location-grid">
          <!-- Map -->
          <div class="fade-up">
            <div class="location-map-wrap" role="complementary" aria-label="Bản đồ vị trí dự án">
              <iframe
                src="https://www.google.com/maps?q=Qu%E1%BA%A3ng+Tr%C6%B0%E1%BB%9Dng+Trung+T%C3%A2m+B%C3%A3i+Sau+V%C5%A9ng+T%C3%A0u,+Thu%CC%80y+V%C3%A2n,+Ph%C6%B0%E1%BB%9Dng+Th%E1%BA%AFng+Tam,+V%C5%A9ng+T%C3%A0u&z=17&output=embed&hl=vi"
                loading="lazy"
                title="Bản đồ vị trí Khách sạn Biển Đông Vũng Tàu – Quảng Trường Bãi Sau, Thùy Vân"
                aria-label="Google Maps – Quảng Trường Trung Tâm Bãi Sau, Thùy Vân, Vũng Tàu"
                referrerpolicy="no-referrer-when-downgrade"
                allowfullscreen>
              </iframe>
            </div>

            <!-- Park callout -->
            <div class="park-callout fade-up stagger-2">
              <h4><i class="fas fa-tree"></i> Đối diện Công viên Biển 1.000 tỷ đồng</h4>
              <ul>
                <li>Không gian đi bộ ven biển mở rộng</li>
                <li>Quảng trường biển hiện đại</li>
                <li>Hệ thống cây xanh &amp; cảnh quan đồng bộ</li>
                <li>Khu vui chơi, sinh hoạt cộng đồng</li>
                <li>Hạ tầng ngầm hóa và chỉnh trang mặt tiền</li>
              </ul>
            </div>
          </div>

          <!-- Location info -->
          <div class="fade-up stagger-2">
            <span class="section-label">Vị trí</span>
            <h2 class="section-title">Toạ lạc tại <span>Thùy Vân</span> – Cung đường vàng Bãi Sau</h2>
            <div class="gradient-divider"></div>
            <p class="section-desc" style="margin-bottom: 28px;">
              Đường Thùy Vân là tuyến ven biển đẹp và sôi động nhất Vũng Tàu –
              nơi tập trung hầu hết các khách sạn, resort và căn hộ nghỉ dưỡng cao cấp.
              Biển Đông Vũng Tàu sở hữu vị trí độc tôn ngay lõi du lịch.
            </p>

            <!-- Connectivity -->
            <h3 style="font-family:var(--font-head);font-size:0.95rem;font-weight:800;color:var(--text-dark);margin-bottom:14px;">
              <i class="fas fa-route" style="color:var(--blue-2);margin-right:8px;"></i>Kết nối di chuyển
            </h3>
            <div class="location-connects">
              ${[
            { time: '1 phút', place: 'Bãi Sau Vũng Tàu', note: 'Đi bộ ra biển', icon: 'fas fa-walking' },
            { time: '3 phút', place: 'Quảng trường &amp; ẩm thực đêm', note: 'Trung tâm giải trí', icon: 'fas fa-utensils' },
            { time: '5 phút', place: 'Tượng Chúa Kitô Vua', note: 'Điểm tham quan nổi tiếng', icon: 'fas fa-church' },
            { time: '10 phút', place: 'Lotte Mart &amp; trung tâm hành chính', note: 'Mua sắm &amp; dịch vụ', icon: 'fas fa-shopping-cart' },
            { time: '15 phút', place: 'Bãi Trước', note: 'Trung tâm TP. Vũng Tàu', icon: 'fas fa-map-pin' },
            { time: '2 giờ', place: 'TP. Hồ Chí Minh', note: 'Qua cao tốc Biên Hòa – Vũng Tàu', icon: 'fas fa-car' },
        ].map(c => `
                <div class="connect-item" role="listitem">
                  <div class="connect-time">${c.time}</div>
                  <div>
                    <div class="connect-place"><i class="${c.icon}" style="color:var(--blue-2);margin-right:5px;"></i>${c.place}</div>
                    <div class="connect-note">${c.note}</div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
})();
