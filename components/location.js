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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3921.0567854060626!2d107.08534847480093!3d10.33929898977671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175a9b5f3c7a6c7%3A0x0!2s155%20Thu%E1%BB%B3y%20V%C3%A2n%2C%20Th%E1%BA%AFng%20Tam%2C%20V%C5%A9ng%20T%C3%A0u!5e0!3m2!1svi!2svn!4v1700000000000"
                loading="lazy"
                title="Bản đồ vị trí Khách sạn Biển Đông Vũng Tàu – 155 Thùy Vân"
                aria-label="Google Maps – 155 Thùy Vân, Vũng Tàu"
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
