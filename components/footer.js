// components/footer.js
(function () {
    const el = document.getElementById('footer-section');
    el.setAttribute('aria-label', 'Footer');
    const year = new Date().getFullYear();
    el.innerHTML = `
    <div class="footer">
      <div class="container">
        <div class="footer-grid">
          <!-- Brand -->
          <div>
            <div class="footer-logo">Biển Đông<br><span>Vũng Tàu</span></div>
            <p class="footer-desc">
              Tổ hợp Khách sạn &amp; Condotel cao cấp tại 155 Thùy Vân, Phường Thắng Tam,
              TP. Vũng Tàu – điểm đầu tư nghỉ dưỡng hàng đầu Bãi Sau.
            </p>
            <div class="footer-socials" aria-label="Mạng xã hội">
              <a href="#" class="footer-social" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
              <a href="#" class="footer-social" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
              <a href="#" class="footer-social" aria-label="Zalo"><i class="fas fa-comment-dots"></i></a>
              <a href="tel:0949012659" class="footer-social" aria-label="Gọi điện"><i class="fas fa-phone-alt"></i></a>
            </div>
          </div>

          <!-- Quick links -->
          <div class="footer-col">
            <h4>Thông tin</h4>
            <ul>
              <li><a href="#overview">Tổng quan dự án</a></li>
              <li><a href="#specs">Quy mô &amp; Thiết kế</a></li>
              <li><a href="#location">Vị trí dự án</a></li>
              <li><a href="#amenities">Tiện ích nội khu</a></li>
              <li><a href="#investment">Tiềm năng đầu tư</a></li>
            </ul>
          </div>

          <!-- Specs quick -->
          <div class="footer-col">
            <h4>Thông số</h4>
            <ul>
              <li><a href="#">327 phòng khách sạn</a></li>
              <li><a href="#">703 căn condotel</a></li>
              <li><a href="#">21 tầng khách sạn</a></li>
              <li><a href="#">29 tầng condotel</a></li>
              <li><a href="#">Giá 70 – 80 tr/m²</a></li>
            </ul>
          </div>

          <!-- Contact -->
          <div class="footer-col">
            <h4>Liên hệ</h4>
            <ul>
              <li>
                <a href="tel:0949012659" style="display:flex;align-items:center;gap:6px;color:#38bdf8;font-weight:700;">
                  <i class="fas fa-phone-alt"></i> 0949 012 659
                </a>
              </li>
              <li><a href="#contact">Gửi yêu cầu tư vấn</a></li>
              <li style="color:rgba(255,255,255,0.5);font-size:0.83rem;cursor:default;">
                <i class="fas fa-map-marker-alt" style="color:#38bdf8;margin-right:4px;"></i>
                155 Thùy Vân,<br>Thắng Tam, Vũng Tàu
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="footer-bottom">
          <span>© ${year} Khách sạn Biển Đông Vũng Tàu. Thông tin mang tính tham khảo, chưa phải cam kết pháp lý.</span>
          <span>Thiết kế bởi <strong style="color:#38bdf8;">Biển Đông Dev</strong></span>
        </div>
      </div>
    </div>
  `;
})();
