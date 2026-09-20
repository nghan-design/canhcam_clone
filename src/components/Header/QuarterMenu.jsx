import React from 'react';
import { navItems } from '../../data/navigation';

export default function QuarterMenu({ menuOpen, setMenuOpen, currentPage = 'home', onNavigate }) {
  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[80] bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Red 1/4 Circle Container */}
      <div
        className={`fixed top-0 left-0 z-[90] bg-[#e8001d] overflow-hidden shadow-2xl transition-all duration-400 ease-out origin-top-left ${
          menuOpen ? 'scale-100 opacity-100 pointer-events-auto' : 'scale-0 opacity-0 pointer-events-none'
        }`}
        style={{
          width: 'min(490px, 94vw)',
          height: 'min(630px, 94vh)',
          borderRadius: '0 0 100% 0',
        }}
      >
        {/* Concentric Ripple Circles Background Decoration */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden rounded-[0_0_100%_0]">
          <div className="absolute rounded-full border border-white/15" style={{ width: '240px', height: '240px', top: '35px', left: '45px', transform: 'translate(-50%, -50%)' }} />
          <div className="absolute rounded-full border border-white/15" style={{ width: '400px', height: '400px', top: '35px', left: '45px', transform: 'translate(-50%, -50%)' }} />
          <div className="absolute rounded-full border border-white/15" style={{ width: '560px', height: '560px', top: '35px', left: '45px', transform: 'translate(-50%, -50%)' }} />
          <div className="absolute rounded-full border border-white/15" style={{ width: '720px', height: '720px', top: '35px', left: '45px', transform: 'translate(-50%, -50%)' }} />
        </div>

        {/* Menu Content */}
        <div className="relative z-10 px-6 sm:px-10 pt-5 pb-6 flex flex-col h-full justify-between select-none">
          {/* Top Row: Logo + Close (×) + Search + US Flag */}
          <div className="flex items-center gap-3 sm:gap-4 mb-2">
            <span className="text-white font-extrabold text-2xl tracking-tight">CanhCam</span>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-white hover:scale-110 transition-transform p-1 cursor-pointer flex items-center justify-center ml-1"
              aria-label="Đóng menu"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <button className="text-white/90 hover:text-white transition-colors p-1 ml-1" aria-label="Tìm kiếm">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
            <button className="w-6 h-6 rounded-full overflow-hidden hover:scale-110 transition-transform border border-white/40 flex items-center justify-center" title="English">
              <span style={{ fontSize: '18px', lineHeight: 1 }}>🇺🇸</span>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-0.5 sm:gap-1 my-auto">
            {navItems.map((item, i) => {
              const isHome = item.label === 'Trang Chủ';
              const isAbout = item.label === 'Giới Thiệu';
              const isWebDesign = item.label === 'Thiết Kế Website';
              const isDaThietKe = item.label === 'Đã Thiết Kế';
              const isDichVu = item.label === 'Dịch Vụ';
              const isQuyTrinh = item.label === 'Quy Trình';
              const isBlog = item.label === 'Blog';
              const isActive =
                (currentPage === 'home' && isHome) ||
                (currentPage === 'about' && isAbout) ||
                (currentPage === 'thiet-ke-website' && isWebDesign) ||
                (currentPage === 'da-thiet-ke' && isDaThietKe) ||
                (currentPage === 'dich-vu' && isDichVu) ||
                (currentPage === 'quy-trinh' && isQuyTrinh) ||
                (currentPage === 'blog' && isBlog);

              return (
                <div key={i}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setMenuOpen(false);
                      if (isHome && onNavigate) onNavigate('home');
                      else if (isAbout && onNavigate) onNavigate('about');
                      else if (isWebDesign && onNavigate) onNavigate('thiet-ke-website');
                      else if (isDaThietKe && onNavigate) onNavigate('da-thiet-ke');
                      else if (isDichVu && onNavigate) onNavigate('dich-vu');
                      else if (isQuyTrinh && onNavigate) onNavigate('quy-trinh');
                      else if (isBlog && onNavigate) onNavigate('blog');
                    }}
                    className={`text-white font-bold text-xl sm:text-2xl leading-tight hover:opacity-80 transition-opacity block py-1 cursor-pointer ${
                      isActive ? 'border-b-2 border-white inline-block' : ''
                    }`}
                  >
                    {item.label}
                  </a>
                </div>
              );
            })}
          </nav>

          {/* Bottom Row: Liên hệ + Social Icons */}
          <div className="mt-2">
            <a
              href="#"
              onClick={() => setMenuOpen(false)}
              className="text-white text-sm font-light mb-2 inline-block hover:underline"
            >
              Liên hệ
            </a>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#e8001d] hover:scale-110 transition-transform shadow-md"
                aria-label="Facebook Canh Cam"
              >
                <svg width="10" height="18" viewBox="0 0 13 24" fill="currentColor">
                  <path d="M12.0781 13.5H8.5625V24H3.875V13.5H0.03125V9.1875H3.875V5.85938C3.875 2.10938 6.125 0 9.54688 0C11.1875 0 12.9219 0.328125 12.9219 0.328125V4.03125H11C9.125 4.03125 8.5625 5.15625 8.5625 6.375V9.1875H12.7344L12.0781 13.5Z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#e8001d] hover:scale-110 transition-transform shadow-md"
                aria-label="YouTube Canh Cam"
              >
                <svg width="16" height="12" viewBox="0 0 27 18" fill="currentColor">
                  <path d="M25.7344 2.85938C26.2969 4.82812 26.2969 9.04688 26.2969 9.04688C26.2969 9.04688 26.2969 13.2188 25.7344 15.2344C25.4531 16.3594 24.5625 17.2031 23.4844 17.4844C21.4688 18 13.5 18 13.5 18C13.5 18 5.48438 18 3.46875 17.4844C2.39062 17.2031 1.5 16.3594 1.21875 15.2344C0.65625 13.2188 0.65625 9.04688 0.65625 9.04688C0.65625 9.04688 0.65625 4.82812 1.21875 2.85938C1.5 1.73438 2.39062 0.84375 3.46875 0.5625C5.48438 0 13.5 0 13.5 0C13.5 0 21.4688 0 23.4844 0.5625C24.5625 0.84375 25.4531 1.73438 25.7344 2.85938ZM10.875 12.8438L17.5312 9.04688L10.875 5.25V12.8438Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
