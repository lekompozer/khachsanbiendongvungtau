// components/amenities.js
(function () {
    const el = document.getElementById('amenities-section');
    el.setAttribute('aria-label', 'Tiện ích nội khu');
    el.innerHTML = `
    <div class="section-pad bg-off-white" id="amenities">
      <div class="container">
        <!-- Header -->
        <div class="text-center">
          <span class="section-label">Tiện ích nội khu</span>
          <h2 class="section-title">Hệ tiện ích <span>chuẩn nghỉ dưỡng</span> 5 sao</h2>
          <div class="gradient-divider"></div>
          <p class="section-desc">
            Được định hướng theo mô hình tổ hợp nghỉ dưỡng cao cấp, tích hợp đầy đủ tiện ích
            từ hồ bơi, nhà hàng đến khu spa &amp; gym – tất cả trong một không gian khép kín giữa lòng Bãi Sau.
          </p>
        </div>

        <div class="amenities-grid">
          ${[
            {
                num: '01',
                title: 'Quảng trường & Tiền sảnh',
                desc: 'Hồ nước tràn tiền sảnh, biểu tượng kiến trúc san hô, sân lát đá granite, không gian drop-off sang trọng chuẩn quốc tế.',
                tags: ['Hồ nước tràn', 'Sân granite', 'Drop-off'],
                icon: 'fas fa-monument',
            },
            {
                num: '02',
                title: 'Cụm Hồ Bơi Đa Dạng',
                desc: 'Hồ bơi nước ngọt & nước mặn cho trẻ em và người lớn, hồ bơi vô cực hướng biển. Tầng cảnh quan trung tâm tầng 4.',
                tags: ['Hồ vô cực', 'Nước mặn', 'Nước ngọt', 'Trẻ em'],
                icon: 'fas fa-swimming-pool',
            },
            {
                num: '03',
                title: 'Bar – Café & Nhà Hàng',
                desc: 'Khu bar – café ngoài trời có mái che, nhà hàng view hồ bơi và cảnh quan xanh theo phong cách "pool lounge resort".',
                tags: ['Pool lounge', 'Bar ngoài trời', 'Nhà hàng'],
                icon: 'fas fa-coffee',
            },
            {
                num: '04',
                title: 'Cảnh Quan Xanh Đa Tầng',
                desc: 'Vườn cảnh quan mặt đất, mảng xanh tầng 4, sân vườn cảnh quan tầng 20 & tầng 28 Penthouse, hệ sân vườn trên mái.',
                tags: ['Sky garden', 'Penthouse garden', 'Cảnh quan đứng'],
                icon: 'fas fa-seedling',
            },
            {
                num: '05',
                title: 'Spa – Gym & Sức Khoẻ',
                desc: 'Khu spa thư giãn tiêu chuẩn 5 sao, phòng gym trang bị hiện đại, phòng hội nghị và sự kiện đa năng.',
                tags: ['Spa', 'Gym', 'Hội nghị'],
                icon: 'fas fa-heartbeat',
            },
            {
                num: '06',
                title: 'Giao Thông & Đậu Xe',
                desc: 'Hệ thống giao thông nội khu khoa học, bãi đậu xe tách biệt phía sau, lối xuống hầm có mái che, an toàn tuyệt đối.',
                tags: ['2 tầng hầm', 'Mái che', 'An toàn'],
                icon: 'fas fa-parking',
            },
        ].map((a, i) => `
            <article class="amenity-card fade-up" aria-label="${a.title}">
              <div class="amenity-img">
                <img src="public/khach-san-bien-dong-vung-tau-cq${i + 1}.jpg"
                     alt="${a.title} – Khách sạn Biển Đông Vũng Tàu"
                     style="width:100%;height:100%;object-fit:cover;"
                     loading="lazy" />
              </div>
              <div class="amenity-body">
                <div class="amenity-num">Tiện ích ${a.num}</div>
                <h3>${a.title}</h3>
                <p>${a.desc}</p>
                <div class="amenity-tags">
                  ${a.tags.map(t => `<span class="amenity-tag">${t}</span>`).join('')}
                </div>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </div>
  `;
})();
