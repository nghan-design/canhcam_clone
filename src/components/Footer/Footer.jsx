import React from 'react';

export default function Footer({ currentPage = 'home', onNavigate }) {
  return (
    <footer className="bg-[#f5f5f5] relative z-20">
      {/* Breadcrumb row */}
      <div className="border-b border-neutral-200 px-5 md:px-16 py-2.5 text-sm text-neutral-500">
        <div className="max-w-7xl mx-auto flex items-center gap-2">
          <button
            onClick={() => onNavigate && onNavigate('home')}
            className="hover:text-[#e8001d] transition-colors cursor-pointer"
          >
            Trang chủ
          </button>
          {currentPage === 'about' && (
            <>
              <span>/</span>
              <span className="text-neutral-800 font-medium">Giới thiệu công ty Cánh Cam</span>
            </>
          )}
          {currentPage === 'thiet-ke-website' && (
            <>
              <span>/</span>
              <span className="text-neutral-800 font-medium">Thiết kế website</span>
            </>
          )}
          {currentPage === 'da-thiet-ke' && (
            <>
              <span>/</span>
              <span className="text-neutral-800 font-medium">Đã thiết kế</span>
            </>
          )}
          {currentPage === 'dich-vu' && (
            <>
              <span>/</span>
              <span className="text-neutral-800 font-medium">Dịch vụ</span>
            </>
          )}
          {currentPage === 'quy-trinh' && (
            <>
              <span>/</span>
              <span className="text-neutral-800 font-medium">Quy trình</span>
            </>
          )}
          {currentPage === 'blog' && (
            <>
              <span>/</span>
              <span className="text-neutral-800 font-medium">Blog</span>
            </>
          )}
        </div>
      </div>

      {/* Main footer columns */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Col 1: Liên hệ */}
        <div className="flex flex-col gap-3">
          <div className="text-xs font-light tracking-[0.12em] uppercase text-neutral-500 mb-2">LIÊN HỆ</div>
          <div className="text-sm text-neutral-700 leading-relaxed">
            <p className="font-bold mb-1">Công ty Thiết kế website Cánh Cam</p>
            <p>Địa chỉ: 156 Nguyễn Văn Thủ, Phường Tân Định, TP Hồ Chí Minh, Việt Nam</p>
            <p>Hotline: <a href="tel:02862730815" className="hover:text-[#e8001d] transition-colors">028 6273 0815</a></p>
          </div>
          <div className="text-sm text-neutral-700 leading-relaxed mt-2">
            <p className="font-bold mb-1">Cánh Cam Thủ Đức</p>
            <p>Địa chỉ: 606/56 Quốc lộ 13, Phường Hiệp Bình, TP Hồ Chí Minh, Việt Nam</p>
            <p>Hotline (Zalo): <a href="tel:0989501739" className="hover:text-[#e8001d] transition-colors">0989 501 739</a></p>
          </div>
          <div className="text-sm text-neutral-700 leading-relaxed mt-2">
            <p className="font-bold mb-1">Cánh Cam Australia</p>
            <p>Address: Unit 2, 77/79 Ashley St, Braybrook VIC 3019, Australia</p>
            <p>Hotline: <a href="tel:+61431508508" className="hover:text-[#e8001d] transition-colors">+61431508508</a></p>
            <p className="mt-1">Email: <a href="mailto:info@canhcam.com" className="hover:text-[#e8001d] transition-colors">info@canhcam.com</a></p>
            <p>Hỗ trợ: <a href="mailto:support@canhcam.com" className="hover:text-[#e8001d] transition-colors">support@canhcam.com</a></p>
          </div>
        </div>

        {/* Col 2: Giới thiệu */}
        <div className="flex flex-col gap-3">
          <div className="text-xs font-light tracking-[0.12em] uppercase text-neutral-500 mb-2">Giới thiệu</div>
          <ul className="flex flex-col gap-2">
            {[
              { label: 'Lịch sử phát triển', anchor: 'history' },
              { label: 'Sứ mệnh – Tầm nhìn', anchor: 'mission-vision' },
              { label: 'Meet Our Leaders', anchor: 'our-leader' },
              { label: 'Những con số nổi bật', anchor: 'numbers' },
              { label: 'Công nghệ', anchor: 'technology' },
              { label: 'Thông điệp CEO', href: 'https://www.canhcam.vn/ceo' },
            ].map((item, i) => (
              <li key={i}>
                <a
                  href={item.anchor ? `#${item.anchor}` : item.href}
                  onClick={(e) => {
                    if (item.anchor) {
                      e.preventDefault();
                      if (currentPage !== 'about' && onNavigate) {
                        onNavigate('about');
                        setTimeout(() => {
                          document.getElementById(item.anchor)?.scrollIntoView({ behavior: 'smooth' });
                        }, 200);
                      } else {
                        document.getElementById(item.anchor)?.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }}
                  className="text-sm text-neutral-700 hover:text-[#e8001d] transition-colors cursor-pointer"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Dịch vụ */}
        <div className="flex flex-col gap-3">
          <div className="text-xs font-light tracking-[0.12em] uppercase text-neutral-500 mb-2">Dịch vụ</div>
          <ul className="flex flex-col gap-2">
            {[
              'Thiết Kế Website',
              'Dịch vụ chăm sóc website',
              'Thiết Kế Website Bán Hàng Chuyên Nghiệp, Hiện Đại',
              'Thiết Kế App Mobile',
              'Sáng Tạo Nội Dung',
              'Chiến Dịch Quảng Cáo',
              'Dịch vụ Hosting & Domain',
              'Chứng Chỉ Số SSL',
            ].map((item, i) => (
              <li key={i}>
                <a
                  href="#"
                  onClick={(e) => {
                    if (item === 'Thiết Kế Website') {
                      e.preventDefault();
                      if (onNavigate) onNavigate('thiet-ke-website');
                    }
                  }}
                  className="text-sm text-neutral-700 hover:text-[#e8001d] transition-colors cursor-pointer"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4: Form + Quick links */}
        <div className="flex flex-col gap-6">
          <div>
            <div className="text-xs font-light tracking-[0.12em] uppercase text-neutral-500 mb-4">Yêu cầu gọi tư vấn</div>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Họ và tên"
                className="w-full px-4 py-2.5 border border-neutral-300 rounded text-sm focus:outline-none focus:border-[#e8001d] transition-colors bg-white"
              />
              <input
                type="text"
                placeholder="Tên công ty"
                className="w-full px-4 py-2.5 border border-neutral-300 rounded text-sm focus:outline-none focus:border-[#e8001d] transition-colors bg-white"
              />
              <input
                type="tel"
                placeholder="Điện thoại"
                className="w-full px-4 py-2.5 border border-neutral-300 rounded text-sm focus:outline-none focus:border-[#e8001d] transition-colors bg-white"
              />
              <button
                type="submit"
                className="w-full py-2.5 bg-[#e8001d] text-white font-semibold text-sm rounded hover:bg-[#c0001a] transition-colors cursor-pointer"
              >
                Gửi
              </button>
            </form>
          </div>
          <div>
            <div className="text-xs font-light tracking-[0.12em] uppercase text-neutral-500 mb-3">Liên kết nhanh</div>
            <ul className="flex flex-col gap-2">
              {['Thông điệp CEO', 'Điều khoản sử dụng', 'Tuyển dụng'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-sm text-neutral-700 hover:text-[#e8001d] transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Social + AUSCHAM row */}
      <div className="border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-col gap-3">
            <div className="text-xs font-light tracking-[0.12em] uppercase text-neutral-500">Mạng xã hội</div>
            <ul className="flex items-center gap-3">
              {[
                {
                  label: 'Facebook',
                  href: 'https://facebook.com/thietkewebsitecanhcam',
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  ),
                },
                {
                  label: 'Instagram',
                  href: 'https://instagram.com/canhcamwebdesign/',
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  ),
                },
                {
                  label: 'YouTube',
                  href: 'https://youtube.com/@CanhCamAgency',
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
                      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
                    </svg>
                  ),
                },
              ].map((social, i) => (
                <li key={i}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="w-12 h-12 bg-[#ABAFC5] hover:bg-[#e8001d] text-white rounded-full flex items-center justify-center hover:scale-110 origin-bottom transition-all duration-200 shadow-sm"
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-xs font-light tracking-[0.12em] uppercase text-neutral-500">AUSCHAM MEMBERS</div>
            <img
              src="https://www.canhcam.vn/wp-content/uploads/2024/07/footer-logo-auscham-members.png"
              alt="AusCham Members"
              className="h-10 w-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* BCT Cert row */}
      <div className="border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="text-xs text-neutral-500 leading-relaxed max-w-md">
            <a
              href="http://online.gov.vn/nen-tang/a6b1617a-7e7a-4d71-9bfd-670d78f2bd32"
              target="_blank"
              rel="noreferrer"
              className="inline-block mb-2"
            >
              <img
                src="https://www.canhcam.vn/wp-content/uploads/2024/09/logoSaleNoti.png"
                alt="Logo bộ công thương"
                className="h-9 w-auto object-contain"
              />
            </a>
            <p>Giấy chứng nhận ĐKKD số 0303948883 do Sở Kế hoạch và Đầu tư TP.HCM cấp ngày 12/08/2005.</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-xs font-light tracking-[0.12em] uppercase text-neutral-500">Chứng nhận DMCA</div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-5 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3">
          <p className="text-xs text-neutral-500">Copyright © 2024 CanhCam. All Rights Reserved.</p>
          <ul className="flex flex-wrap gap-5">
            {['Điều khoản sử dụng', 'Chính sách thu thập và xử lý dữ liệu cá nhân với Khách hàng của Cánh Cam'].map((item, i) => (
              <li key={i}>
                <a href="#" className="text-xs text-neutral-500 hover:text-[#e8001d] transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
