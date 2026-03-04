// components/floating-cta.js
(function () {
    const el = document.getElementById('floating-cta');
    el.setAttribute('aria-label', 'Liên hệ nhanh');
    el.innerHTML = `
    <div class="floating-cta" role="complementary" aria-label="Nút liên hệ cố định">
      <a href="tel:0949012659"
         class="float-btn float-btn-phone"
         aria-label="Gọi hotline 0949 012 659 – Sales Bất Động Sản">
        <i class="fas fa-phone-alt" aria-hidden="true"></i>
        <span>0949 012 659</span>
      </a>
      <a href="https://zalo.me/0949012659"
         class="float-btn float-btn-zalo"
         target="_blank"
         rel="noopener noreferrer"
         aria-label="Nhắn tin Zalo tư vấn">
        <i class="fas fa-comment-dots" aria-hidden="true"></i>
        <span>Zalo tư vấn</span>
      </a>
    </div>
  `;
})();
