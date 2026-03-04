// components/contact.js
(function () {
    const el = document.getElementById('contact-section');
    el.setAttribute('aria-label', 'Liên hệ tư vấn');
    el.innerHTML = `
    <div class="section-pad bg-off-white" id="contact">
      <div class="container">
        <div class="text-center" style="margin-bottom:48px;">
          <span class="section-label">Liên hệ</span>
          <h2 class="section-title">Đăng ký <span>nhận tư vấn</span> miễn phí</h2>
          <div class="gradient-divider"></div>
          <p class="section-desc">
            Để lại thông tin hoặc gọi trực tiếp – đội ngũ chuyên viên sẽ tư vấn chi tiết
            về sản phẩm, giá, chính sách thanh toán và cơ hội đầu tư.
          </p>
        </div>

        <div class="contact-wrap">
          <!-- Left: info -->
          <div class="fade-up">
            <div class="contact-info-block">
              ${[
            {
                icon: 'fas fa-phone-alt',
                label: 'Hotline Sales BĐS',
                value: '<a href="tel:0949012659" style="font-size:1.3rem;font-weight:800;background:var(--gradient);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">0949 012 659</a>',
            },
            {
                icon: 'fas fa-map-marker-alt',
                label: 'Địa chỉ dự án',
                value: '155 Thùy Vân, Phường Thắng Tam,<br>TP. Vũng Tàu, Bà Rịa – Vũng Tàu',
            },
            {
                icon: 'fas fa-building',
                label: 'Chủ đầu tư',
                value: 'Công ty Cổ phần Đầu tư Khách sạn Biển Đông',
            },
            {
                icon: 'fas fa-clock',
                label: 'Giờ làm việc',
                value: 'Thứ 2 – Chủ nhật: 8:00 – 20:00',
            },
        ].map(i => `
                <div class="contact-info-item">
                  <div class="contact-info-icon" aria-hidden="true"><i class="${i.icon}"></i></div>
                  <div class="contact-info-text">
                    <h4>${i.label}</h4>
                    <p>${i.value}</p>
                  </div>
                </div>
              `).join('')}
            </div>

            <!-- Quick call CTA -->
            <a href="tel:0949012659" class="btn btn-primary"
               style="margin-top:28px;width:100%;justify-content:center;font-size:1.05rem;padding:18px;"
               aria-label="Gọi ngay hotline 0949 012 659">
              <i class="fas fa-phone-alt"></i> Gọi ngay: 0949 012 659
            </a>

            <!-- Project summary card -->
            <div style="margin-top:20px;background:var(--white);border:1px solid var(--border);border-radius:var(--radius-md);padding:20px;">
              <h4 style="font-family:var(--font-head);font-size:0.85rem;font-weight:800;color:var(--text-dark);margin-bottom:12px;display:flex;align-items:center;gap:8px;">
                <i class="fas fa-info-circle" style="color:var(--blue-2);"></i> Thông tin nhanh
              </h4>
              ${[
            ['Loại hình', 'Khách sạn & Condotel'],
            ['Tổng số phòng/căn', '327 + 703 = 1.030'],
            ['Giá dự kiến', '70 – 80 triệu/m²'],
            ['Tình trạng', 'Đang triển khai'],
        ].map(([k, v]) => `
                <div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px dashed var(--border);font-size:0.85rem;">
                  <span style="color:var(--text-mid);">${k}</span>
                  <span style="font-weight:700;color:var(--text-dark);">${v}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Right: form -->
          <div class="fade-up stagger-2">
            <div class="contact-form">
              <h3>📋 Để lại thông tin tư vấn</h3>
              <form id="contactForm" novalidate aria-label="Form đăng ký nhận tư vấn">
                <div class="form-row">
                  <div class="form-group">
                    <label for="cf-name">Họ và tên <span style="color:#e53e3e;">*</span></label>
                    <input type="text" id="cf-name" name="name" placeholder="Nguyễn Văn A" required autocomplete="name" />
                  </div>
                  <div class="form-group">
                    <label for="cf-phone">Số điện thoại <span style="color:#e53e3e;">*</span></label>
                    <input type="tel" id="cf-phone" name="phone" placeholder="0949 012 659" required autocomplete="tel" />
                  </div>
                </div>
                <div class="form-group">
                  <label for="cf-email">Email</label>
                  <input type="email" id="cf-email" name="email" placeholder="email@example.com" autocomplete="email" />
                </div>
                <div class="form-group">
                  <label for="cf-interest">Quan tâm đến</label>
                  <select id="cf-interest" name="interest">
                    <option value="">-- Chọn loại sản phẩm --</option>
                    <option value="condotel">Căn hộ Condotel</option>
                    <option value="hotel">Phòng Khách sạn</option>
                    <option value="both">Cả hai loại</option>
                    <option value="investment">Tư vấn đầu tư</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="cf-message">Nội dung / Câu hỏi</label>
                  <textarea id="cf-message" name="message" placeholder="Tôi muốn tư vấn về..."></textarea>
                </div>
                <button type="submit" class="btn btn-primary form-submit" aria-label="Gửi đăng ký tư vấn">
                  <i class="fas fa-paper-plane"></i> Gửi đăng ký ngay
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

    // Simple form handler
    document.getElementById('contactForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('cf-name').value.trim();
        const phone = document.getElementById('cf-phone').value.trim();
        if (!name || !phone) {
            alert('Vui lòng nhập họ tên và số điện thoại.');
            return;
        }
        const btn = this.querySelector('button[type="submit"]');
        btn.innerHTML = '<i class="fas fa-check-circle"></i> Đã gửi thành công!';
        btn.style.background = 'linear-gradient(135deg,#16a34a,#22c55e)';
        btn.disabled = true;
        setTimeout(() => {
            btn.innerHTML = '<i class="fas fa-paper-plane"></i> Gửi đăng ký ngay';
            btn.style.background = '';
            btn.disabled = false;
            this.reset();
        }, 4000);
    });
})();
