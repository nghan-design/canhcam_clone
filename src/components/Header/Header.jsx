import React from 'react';
import { navItems } from '../../data/navigation';
import QuarterMenu from './QuarterMenu';

export default function Header({ scrolled, menuOpen, setMenuOpen, currentPage = 'home', onNavigate }) {
  const showFullNav = scrolled || currentPage === 'da-thiet-ke';

  return (
    <>
      {/* ========== MAIN HEADER NAVBAR ========== */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          showFullNav ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      >
        {/* --- Top Bar when NOT scrolled (and on dark hero pages): Only Logo + Hamburger --- */}
        {!showFullNav && (
          <div className="flex items-center justify-between px-[15px] md:px-[60px] py-4 w-full">
            <div className="flex items-center gap-6">
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); if (onNavigate) onNavigate('home'); }}
                className="header-logo flex items-center cursor-pointer"
                aria-label="CanhCam Homepage"
              >
                <span className="text-white font-extrabold text-2xl tracking-tight relative z-10">
                  Canh<span className="text-[#e8001d]">Cam</span>
                </span>
                <div className="logo-circle" />
                <div className="logo-circle-test" />
                <div className="line-circle line-1" />
                <div className="line-circle line-2" />
                <div className="line-circle line-3" />
                <div className="line-circle line-4" />
                <div className="line-circle line-5" />
              </a>

              <button
                id="menu-open-btn"
                aria-label="hamburger"
                onClick={() => setMenuOpen(true)}
                className={`header-hamburger transition-all duration-200 ${
                  menuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
              >
                <span className="block h-[2px] w-full bg-white transition-all duration-300" />
                <span className="block h-[2px] w-full bg-white transition-all duration-300" />
                <span className="block h-[2px] w-full bg-white transition-all duration-300" />
                <div id="pulseMe">
                  <div className="bar left" />
                  <div className="bar top" />
                  <div className="bar right" />
                  <div className="bar bottom" />
                </div>
              </button>
            </div>
          </div>
        )}

        {/* --- Full Nav (White header with full navigation) --- */}
        {showFullNav && (
          <div className="flex items-center justify-between px-[15px] md:px-[60px] h-16 w-full">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); if (onNavigate) onNavigate('home'); }}
              className="flex items-center flex-shrink-0 mr-8 text-2xl font-black text-[#e8001d] tracking-tight cursor-pointer"
              aria-label="CanhCam Homepage"
            >
              CanhCam
            </a>

            {/* Desktop Navigation Links */}
            <ul className="hidden lg:flex items-center gap-6 xl:gap-8 h-full">
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
                  <li key={i} className="relative group h-full flex items-center">
                    <span
                      onClick={() => {
                        if (isHome && onNavigate) onNavigate('home');
                        else if (isAbout && onNavigate) onNavigate('about');
                        else if (isWebDesign && onNavigate) onNavigate('thiet-ke-website');
                        else if (isDaThietKe && onNavigate) onNavigate('da-thiet-ke');
                        else if (isDichVu && onNavigate) onNavigate('dich-vu');
                        else if (isQuyTrinh && onNavigate) onNavigate('quy-trinh');
                        else if (isBlog && onNavigate) onNavigate('blog');
                      }}
                      className={`text-xs xl:text-sm font-bold uppercase cursor-pointer transition-colors duration-200 flex items-center gap-1 ${
                        isActive ? 'text-[#e8001d]' : 'text-[#333] hover:text-[#e8001d]'
                      }`}
                    >
                      {item.label}
                      {item.sub && (
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" className="opacity-60">
                          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </span>
                    {item.sub && (
                      <ul className="absolute top-full left-0 mt-0 bg-white min-w-[220px] py-2 rounded-b-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border-t-2 border-[#e8001d]">
                        {item.sub.map((sub, j) => (
                          <li key={j}>
                            <span
                              onClick={() => {
                                if (sub === 'Giới Thiệu' && onNavigate) onNavigate('about');
                                else if (sub === 'Thiết Kế Website' && onNavigate) onNavigate('thiet-ke-website');
                                else if (isDaThietKe && onNavigate) onNavigate('da-thiet-ke');
                                else if (isDichVu && onNavigate) onNavigate('dich-vu');
                                else if (onNavigate) onNavigate('dich-vu');
                              }}
                              className="block px-5 py-2 text-[#444] hover:text-[#e8001d] hover:bg-neutral-50 text-xs font-semibold cursor-pointer transition-all duration-150"
                            >
                              {sub}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>

            {/* Right side items */}
            <div className="hidden lg:flex items-center gap-3 xl:gap-4 ml-auto">
              {/* Search icon */}
              <a href="#" aria-label="Tìm kiếm" className="hover:opacity-80 transition-opacity p-1">
                <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
                  <path d="M14.4998 25C20.2987 25 24.9998 20.299 24.9998 14.5C24.9998 8.70101 20.2987 4 14.4998 4C8.70077 4 3.99976 8.70101 3.99976 14.5C3.99976 20.299 8.70077 25 14.4998 25Z" stroke="#e8001d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M21.9238 21.925L27.9989 28.0001" stroke="#e8001d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>

              {/* LIÊN HỆ button */}
              <a
                href="#"
                className="text-white uppercase px-5 py-2 rounded-full text-xs font-bold bg-[#7B7F98] hover:bg-[#686c85] transition-colors tracking-wide"
              >
                <span>Liên hệ</span>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#7B7F98] w-8 h-8 flex items-center justify-center hover:bg-[#e8001d] transition-colors text-white"
                aria-label="Facebook"
              >
                <svg width="10" height="18" viewBox="0 0 13 24" fill="currentColor">
                  <path d="M12.0781 13.5H8.5625V24H3.875V13.5H0.03125V9.1875H3.875V5.85938C3.875 2.10938 6.125 0 9.54688 0C11.1875 0 12.9219 0.328125 12.9219 0.328125V4.03125H11C9.125 4.03125 8.5625 5.15625 8.5625 6.375V9.1875H12.7344L12.0781 13.5Z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#7B7F98] w-8 h-8 flex items-center justify-center hover:bg-[#e8001d] transition-colors text-white"
                aria-label="YouTube"
              >
                <svg width="18" height="14" viewBox="0 0 27 18" fill="currentColor">
                  <path d="M25.7344 2.85938C26.2969 4.82812 26.2969 9.04688 26.2969 9.04688C26.2969 9.04688 26.2969 13.2188 25.7344 15.2344C25.4531 16.3594 24.5625 17.2031 23.4844 17.4844C21.4688 18 13.5 18 13.5 18C13.5 18 5.48438 18 3.46875 17.4844C2.39062 17.2031 1.5 16.3594 1.21875 15.2344C0.65625 13.2188 0.65625 9.04688 0.65625 9.04688C0.65625 9.04688 0.65625 4.82812 1.21875 2.85938C1.5 1.73438 2.39062 0.84375 3.46875 0.5625C5.48438 0 13.5 0 13.5 0C13.5 0 21.4688 0 23.4844 0.5625C24.5625 0.84375 25.4531 1.73438 25.7344 2.85938ZM10.875 12.8438L17.5312 9.04688L10.875 5.25V12.8438Z" />
                </svg>
              </a>

              {/* US flag */}
              <button className="w-6 h-6 rounded-full overflow-hidden hover:scale-110 transition-transform border border-black/10 flex items-center justify-center" title="English US">
                <span style={{ fontSize: '18px', lineHeight: 1 }}>🇺🇸</span>
              </button>
            </div>

            {/* Mobile Hamburger on scrolled */}
            <div className="flex lg:hidden items-center gap-4">
              <button
                aria-label="hamburger"
                onClick={() => setMenuOpen(true)}
                className="flex flex-col gap-1.5 w-6 cursor-pointer"
              >
                <span className="block h-[2px] w-full bg-neutral-800" />
                <span className="block h-[2px] w-full bg-neutral-800" />
                <span className="block h-[2px] w-full bg-neutral-800" />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ========== RED QUARTER-CIRCLE MENU (TOP-LEFT) ========== */}
      <QuarterMenu
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        currentPage={currentPage}
        onNavigate={onNavigate}
      />
    </>
  );
}
