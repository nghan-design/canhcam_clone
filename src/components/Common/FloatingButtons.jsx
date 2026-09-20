import React, { useState, useEffect } from 'react';

export default function FloatingButtons() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed right-4 bottom-8 z-50 flex flex-col items-end gap-3 pointer-events-none">
      <div className="flex flex-col gap-3 pointer-events-auto items-end">
        {/* Scroll to Top */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="w-11 h-11 bg-neutral-800 hover:bg-[#e8001d] text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer"
            aria-label="Scroll to top"
            title="Lên đầu trang"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="18 15 12 9 6 15" />
            </svg>
          </button>
        )}

        {/* Hotline Phone */}
        <a
          href="tel:+842862730815"
          className="group relative flex items-center bg-[#e8001d] hover:bg-[#c0001a] text-white rounded-full p-2.5 shadow-[0_4px_20px_rgba(232,0,29,0.45)] transition-all duration-300 cursor-pointer overflow-hidden"
          title="Gọi ngay +84 28 6273 0815"
        >
          <div className="w-6 h-6 flex items-center justify-center relative z-10 flex-shrink-0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.64A2 2 0 012 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
            </svg>
          </div>
          <span className="max-w-0 group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap overflow-hidden text-xs font-bold pl-0 group-hover:pl-2 pr-0 group-hover:pr-2">
            +84 28 6273 0815
          </span>
          <span className="absolute inset-0 rounded-full bg-[#e8001d] animate-ping opacity-25 pointer-events-none" />
        </a>

        {/* Facebook Messenger */}
        <a
          href="https://m.me/thietkewebsitecanhcam"
          target="_blank"
          rel="noreferrer"
          className="group relative flex items-center text-white rounded-full p-2.5 shadow-[0_4px_15px_rgba(0,132,255,0.4)] transition-all duration-300 hover:scale-105 cursor-pointer"
          style={{ background: 'linear-gradient(135deg, #0084ff 0%, #a033ff 100%)' }}
          title="Nhắn tin qua Messenger"
        >
          <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.91 1.453 5.51 3.727 7.21V22l3.405-1.869A10.56 10.56 0 0012 20.485c5.523 0 10-4.144 10-9.242C22 6.145 17.523 2 12 2zm1.05 12.45l-2.55-2.72-4.98 2.72 5.48-5.82 2.61 2.72 4.92-2.72-5.48 5.82z" />
            </svg>
          </div>
          <span className="max-w-0 group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap overflow-hidden text-xs font-bold pl-0 group-hover:pl-2 pr-0 group-hover:pr-2">
            Messenger
          </span>
        </a>

        {/* Zalo Chat */}
        <a
          href="https://zalo.me/0989501739"
          target="_blank"
          rel="noreferrer"
          className="group relative flex items-center bg-white text-[#0068ff] rounded-full p-2.5 shadow-[0_4px_15px_rgba(0,104,255,0.3)] transition-all duration-300 hover:scale-105 cursor-pointer border border-neutral-200"
          title="Chat qua Zalo"
        >
          <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
            <span className="font-black text-xs tracking-tighter">Zalo</span>
          </div>
          <span className="max-w-0 group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap overflow-hidden text-xs font-bold pl-0 group-hover:pl-2 pr-0 group-hover:pr-2 text-neutral-800">
            0989 501 739
          </span>
        </a>
      </div>
    </div>
  );
}
