// components/investment.js
(function () {
    const el = document.getElementById('investment-section');
    el.setAttribute('aria-label', 'Tiềm năng đầu tư');
    el.innerHTML = `
    <div class="section-pad" id="investment">
      <div class="container">

        <!-- Hero callout -->
        <div class="invest-hero fade-up">
          <div class="invest-hero-text">
            <span class="section-label">Tiềm năng đầu tư</span>
            <h2 class="section-title">Tài sản <span>vàng</span> ven biển<br>Bãi Sau</h2>
            <div class="gradient-divider" style="background:linear-gradient(90deg,#7dd3fc,#38bdf8);"></div>
            <p>
              Trong bối cảnh quỹ đất mặt tiền biển ngày càng khan hiếm, đặc biệt trên trục Thùy Vân,
              các dự án mới gần như không còn nhiều. Sở hữu Biển Đông Vũng Tàu đồng nghĩa nắm giữ
              tài sản biển có thanh khoản cao và tiềm năng tăng giá dài hạn bền vững.
            </p>
          </div>
          <div class="invest-points">
            ${[
            { icon: 'fas fa-water', text: 'Mặt tiền biển trực diện – quỹ đất độc tôn không thể sao chép' },
            { icon: 'fas fa-tree', text: 'Đối diện công viên Bãi Sau 1.000 tỷ – cảnh quan không bị che chắn' },
            { icon: 'fas fa-route', text: 'Cách TP.HCM chỉ 2 giờ – dòng khách cuối tuần ổn định quanh năm' },
            { icon: 'fas fa-hotel', text: '1.030 sản phẩm lưu trú – quy mô lớn, vận hành đồng bộ hiệu quả' },
            { icon: 'fas fa-trending-up', text: 'Hạ tầng ven biển đang được đầu tư mạnh – kỳ vọng tăng giá bền vững' },
        ].map(p => `
              <div class="invest-point">
                <i class="${p.icon}"></i>
                <span>${p.text}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- 3 key reasons -->
        <h2 class="section-title text-center fade-up" style="margin-bottom:8px;">Tại sao nên đầu tư?</h2>
        <div class="gradient-divider" style="margin:0 auto 36px;"></div>
        <div class="invest-cards">
          ${[
            {
                icon: 'fas fa-users',
                title: 'Dòng khách bền vững',
                desc: 'Vũng Tàu đón hàng triệu lượt khách mỗi năm. Nhu cầu lưu trú cao cấp tại Bãi Sau luôn duy trì ở mức cao, đặc biệt cuối tuần và lễ Tết.',
            },
            {
                icon: 'fas fa-hand-holding-usd',
                title: 'Mô hình condotel sinh lợi',
                desc: 'Sở hữu căn hộ du lịch, khai thác cho thuê ngắn ngày qua vận hành chuyên nghiệp. Tối ưu lợi nhuận từ phí dịch vụ, F&B và dịch vụ khách sạn.',
            },
            {
                icon: 'fas fa-city',
                title: 'Hạ tầng nâng cấp toàn diện',
                desc: 'Công viên Bãi Sau 1.000 tỷ, cao tốc dan kết, hạ tầng đô thị biển được đầu tư đồng bộ – gia tăng giá trị BĐS khu vực liên tục.',
            },
        ].map(c => `
            <div class="invest-card fade-up">
              <div class="invest-card-icon"><i class="${c.icon}"></i></div>
              <h4>${c.title}</h4>
              <p>${c.desc}</p>
            </div>
          `).join('')}
        </div>

        <!-- CTA -->
        <div style="margin-top:40px;padding:32px;background:var(--off-white);border-radius:var(--radius-md);display:flex;align-items:center;justify-content:space-between;gap:20px;flex-wrap:wrap;" class="fade-up">
          <div>
            <h3 style="font-family:var(--font-head);font-size:1.1rem;font-weight:800;margin-bottom:6px;">Quan tâm đến cơ hội đầu tư?</h3>
            <p style="color:var(--text-mid);font-size:0.9rem;">Nhận ngay tư vấn miễn phí, bảng giá &amp; chính sách ưu đãi từ chuyên gia.</p>
          </div>
          <div style="display:flex;gap:12px;flex-wrap:wrap;">
            <a href="#contact-section" class="btn btn-primary"><i class="fas fa-envelope"></i> Đăng ký tư vấn</a>
            <a href="tel:0949012659" class="btn btn-outline-blue"><i class="fas fa-phone-alt"></i> Gọi ngay</a>
          </div>
        </div>
      </div>
    </div>
  `;
})();
