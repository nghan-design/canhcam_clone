import React, { useState, useRef } from 'react';

export default function HomePage({ onNavigate }) {
  const [activeNav, setActiveNav] = useState('Thiết Kế Website');
  const [showStoryVideo, setShowStoryVideo] = useState(false);

  // Services Slider Ref and Controls
  const servicesTrackRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkServicesScroll = () => {
    if (servicesTrackRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = servicesTrackRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scrollServices = (direction) => {
    if (servicesTrackRef.current) {
      const scrollAmount = 344;
      servicesTrackRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
      setTimeout(checkServicesScroll, 350);
    }
  };

  // Blog Slider Ref and Controls
  const blogTrackRef = useRef(null);
  const [canScrollBlogLeft, setCanScrollBlogLeft] = useState(false);
  const [canScrollBlogRight, setCanScrollBlogRight] = useState(true);

  const checkBlogScroll = () => {
    if (blogTrackRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = blogTrackRef.current;
      setCanScrollBlogLeft(scrollLeft > 10);
      setCanScrollBlogRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scrollBlog = (direction) => {
    if (blogTrackRef.current) {
      const scrollAmount = 300;
      blogTrackRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
      setTimeout(checkBlogScroll, 350);
    }
  };

  return (
    <div>
      {/* ========== HERO SECTION ========== */}
      <section className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-black">
        {/* Background Video & Overlays */}
        <div className="absolute inset-0 z-0">
          <video
            ref={(el) => {
              if (el) {
                el.muted = true;
                el.defaultMuted = true;
                el.volume = 0;
                el.setAttribute('muted', '');
              }
            }}
            src="https://www.canhcam.vn/wp-content/uploads/2024/10/EVS_start_video.mp4"
            autoPlay
            muted
            defaultMuted
            loop
            playsInline
            onPlay={(e) => {
              e.currentTarget.muted = true;
              e.currentTarget.volume = 0;
            }}
            onLoadedMetadata={(e) => {
              e.currentTarget.muted = true;
              e.currentTarget.volume = 0;
            }}
            onVolumeChange={(e) => {
              if (!e.currentTarget.muted || e.currentTarget.volume > 0) {
                e.currentTarget.muted = true;
                e.currentTarget.volume = 0;
              }
            }}
            className="w-full h-full object-cover"
          >
            <source src="https://www.canhcam.vn/wp-content/uploads/2024/10/EVS_start_video.mp4" type="video/mp4" />
            <source src="/backgroundhd_1920_1080_25fps.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30" />

          {/* Vertical Grid Lines - 4 Columns matching page layout */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px)',
              backgroundSize: '25% 100%',
            }}
          />
        </div>

        {/* Hero Content (Headline) */}
        <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-16 lg:px-24 pt-32 pb-16 max-w-5xl">
          <h1 className="text-white font-bold leading-tight mb-4" style={{ fontSize: 'clamp(1.8rem,4.2vw,2.8rem)' }}>
            Agency hàng đầu về thiết kế web Doanh Nghiệp
          </h1>
          <p className="text-white/90 text-base md:text-xl max-w-xl mb-0 leading-relaxed font-light">
            Giúp web của bạn thu hút khách hàng<br />
            &amp; bán hàng hiệu quả!
          </p>
        </div>

        {/* 4 Bottom Columns/Tabs - Sticking on the video, scrolling together */}
        <div className="relative z-10 w-full pb-8 md:pb-12 border-t border-white/10">
          <div className="grid grid-cols-2 lg:grid-cols-4 w-full">
            {[
              {
                label: 'Thiết Kế Website',
                page: 'thiet-ke-website',
                icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="7" cy="7" r="3.5" />
                    <circle cx="17" cy="7" r="3.5" />
                    <circle cx="7" cy="17" r="3.5" />
                    <path d="M17 14v6M14 17h6" strokeLinecap="round" />
                  </svg>
                ),
              },
              {
                label: 'Đã Thiết Kế',
                page: 'da-thiet-ke',
                icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 5l4 4L9 23l-5 1 1-5L19 5z" />
                  </svg>
                ),
              },
              {
                label: 'Dịch Vụ Khác',
                page: 'dich-vu',
                icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 7 3 14 9 21" />
                    <polyline points="19 7 25 14 19 21" />
                    <line x1="16" y1="5" x2="12" y2="23" />
                  </svg>
                ),
              },
              {
                label: 'Liên Hệ',
                page: 'quy-trinh',
                icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="14" cy="14" r="11" />
                    <path d="M14 6l6 14-6-3-6 3 6-14z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <div
                key={i}
                id={`hero-nav-item-${i}`}
                onClick={() => {
                  setActiveNav(item.label);
                  if (item.page && onNavigate) onNavigate(item.page);
                }}
                className="px-6 md:px-10 lg:px-12 py-3 cursor-pointer group flex flex-col items-start gap-2"
              >
                <div className={`transition-colors duration-200 ${
                  activeNav === item.label ? 'text-white' : 'text-white/80 group-hover:text-white'
                }`}>
                  {item.icon}
                </div>
                <span className={`font-bold text-base md:text-lg lg:text-xl leading-snug transition-colors duration-200 ${
                  activeNav === item.label ? 'text-white' : 'text-white/85 group-hover:text-white'
                }`}>
                  {item.label}
                </span>
                <span className={`h-[3px] bg-[#e8001d] transition-all duration-300 mt-1 ${
                  activeNav === item.label ? 'w-8' : 'w-4 group-hover:w-8'
                }`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SECTION: TẠI SAO CHỌN CÁNH CAM ========== */}
      <section className="relative z-20 py-24 bg-white overflow-hidden">
        {/* Vertical Grid Lines continuing down from Hero */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px)',
            backgroundSize: '25% 100%',
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col gap-6 px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
            TẠI SAO HƠN 6000 KHÁCH HÀNG ĐÃ LỰA CHỌN CÁNH CAM TRONG 20 NĂM QUA?
          </h2>
          <div className="text-lg md:text-xl text-neutral-700 leading-relaxed max-w-4xl mx-auto">
            <p>
              Trang web hoạt động hiệu quả sẽ đảm bảo khả năng mang về{' '}
              <strong>nhiều truy cập, nhiều đơn hàng</strong> và hơn hết là khiến khách hàng{' '}
              <strong>luôn quay trở lại.</strong> Cánh Cam đã mang đến cho khách hàng trang web
              hoạt động hiệu quả đúng như mong đợi giúp gia tăng doanh số bán hàng. Khám phá
              cách <strong>công ty thiết kế website</strong> Cánh Cam giúp khách hàng bán hàng
              trực tuyến hiệu quả và tạo ấn tượng thương hiệu tốt hơn qua các dự án nổi bật
              dưới đây.
            </p>
          </div>
          <div>
            <button
              onClick={() => onNavigate && onNavigate('about')}
              className="inline-flex items-center gap-2 mx-auto px-8 py-3 border-2 border-[#e8001d] text-[#e8001d] font-semibold rounded-full hover:bg-[#e8001d] hover:text-white transition-all duration-300 text-base cursor-pointer"
            >
              Khám phá thêm
            </button>
          </div>
        </div>
      </section>

      {/* ========== SECTION: DỰ ÁN NỔI BẬT ========== */}
      <section className="relative z-30 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {[
            { title: 'Thiết kế website bán hàng Sony Promotion: Giải pháp tăng trưởng doanh số đột phá', desc: 'Website sản phẩm giới thiệu các ưu đãi, sản phẩm mới của Sony Việt Nam.', img: 'https://picsum.photos/seed/sony/640/435' },
            { title: 'Thiết kế Website Chubb Life Việt Nam: Số hóa Giải pháp Bảo vệ Tài chính', desc: 'Chubb Life Việt Nam công bố Ecard – danh thiếp điện tử cho nhân viên.', img: 'https://picsum.photos/seed/chubb/640/435' },
            { title: 'Thiết kế Website Tuyển dụng KFC Việt Nam: Số hóa Trải nghiệm Ứng viên', desc: 'Website tuyển dụng KFC Việt Nam tuyển dụng ứng viên trên khắp cả nước.', img: 'https://picsum.photos/seed/kfc/640/435' },
            { title: 'Thiết kế Website bán lẻ nội thất JYSK chuẩn Scandinavian – Cánh Cam', desc: 'Website Ecommerce của JYSK tích hợp nhiều hệ thống mang đến trải nghiệm mua sắm liền mạch.', img: 'https://picsum.photos/seed/jysk/640/435' },
            { title: 'Thiết kế Website ô tô Rolls-Royce Motor Cars: Đỉnh cao Trải nghiệm Thượng lưu', desc: 'Website sang trọng đánh dấu cột mốc mở đại lý ủy quyền đầu tiên tại TP HCM, Việt Nam.', img: 'https://picsum.photos/seed/rolls/640/435' },
            { title: 'Thiết kế Website Nội Thất Liên Á: Số hóa Thương hiệu Nệm hàng đầu Việt Nam', desc: 'Website doanh nghiệp giúp kết nối Liên Á với khách hàng tiềm năng trên thị trường nệm thế giới.', img: 'https://picsum.photos/seed/liena/640/435' },
            { title: 'Thiết kế Website S&A Architecture: Ngôn ngữ kiến trúc trong không gian số', desc: 'Website độc bản tôn vinh vẻ đẹp những công trình kiến trúc biểu tượng.', img: 'https://picsum.photos/seed/sa-arch/640/435' },
            { title: 'Thiết kế Website Tập đoàn Amata: Kiến tạo Thành phố Công nghiệp Thông minh', desc: 'Nền tảng trực tuyến giúp khẳng định vị thế của Amata trong lĩnh vực bất động sản công nghiệp.', img: 'https://picsum.photos/seed/amata/640/435' },
            { title: 'Thiết kế Website Obayashi Vietnam: Chuẩn mực xây dựng từ Nhật Bản', desc: 'Website hiện đại, tinh tế, khẳng định vị thế và chất lượng của Obayashi – công ty xây dựng hàng đầu Nhật Bản.', img: 'https://picsum.photos/seed/obayashi/640/435' },
          ].map((project, i) => (
            <div
              key={i}
              onClick={() => onNavigate && onNavigate('da-thiet-ke')}
              className="relative group border border-neutral-100 overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ paddingTop: '68%' }}>
                <img
                  src={project.img}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              {/* Hover overlay (desktop) */}
              <div className="absolute inset-0 bg-black/65 flex flex-col justify-center items-center p-8 xl:px-14 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                <p className="text-white text-2xl xl:text-3xl font-bold text-center mb-3 leading-snug">
                  {project.title}
                </p>
                <p className="text-white/85 text-base xl:text-lg text-center font-medium leading-relaxed">
                  {project.desc}
                </p>
              </div>
              {/* Mobile: text below image */}
              <div className="p-4 md:p-5 border-t border-neutral-100">
                <p className="text-neutral-900 font-bold leading-snug mb-1">{project.title}</p>
                <p className="text-neutral-500 text-sm">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========== SECTION: LOGO SLIDER ========== */}
      <section className="relative z-20 overflow-hidden" style={{ background: 'linear-gradient(90deg, #e8001d 0%, #c0001a 100%)', paddingTop: '2rem', paddingBottom: '2rem' }}>
        <div className="overflow-hidden">
          <div className="marquee-track">
            {[
              'Chubb', 'PTSC', 'PV OIL', 'Sabeco', 'Sony', 'Kienlongbank', 'MVI Life',
              'Nam A Bank', 'Sacombank', 'SHB Bank', 'ACBL', 'CBRE', 'Nam Long Real',
              'Đất Xanh Group', 'NovaLand', 'Honda', 'JYSK', 'Multidex', 'Sakuko',
              'TC Motor', 'CB', 'Daysaki', 'Navigos Search', 'Vĩnh Tường', 'Obayashi',
              'Toshiba', 'Baskin Robbins', 'Cathay Life', 'GS', 'Murad', 'WHA',
              'Amata', 'Whirlpool', 'CP Group', 'KFC',
              /* Lặp lại để tạo loop liền mạch */
              'Chubb', 'PTSC', 'PV OIL', 'Sabeco', 'Sony', 'Kienlongbank', 'MVI Life',
              'Nam A Bank', 'Sacombank', 'SHB Bank', 'ACBL', 'CBRE', 'Nam Long Real',
              'Đất Xanh Group', 'NovaLand', 'Honda', 'JYSK', 'Multidex', 'Sakuko',
              'TC Motor', 'CB', 'Daysaki', 'Navigos Search', 'Vĩnh Tường', 'Obayashi',
              'Toshiba', 'Baskin Robbins', 'Cathay Life', 'GS', 'Murad', 'WHA',
              'Amata', 'Whirlpool', 'CP Group', 'KFC',
            ].map((name, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex items-center justify-center mx-8"
                style={{ width: '192px', height: '96px' }}
              >
                <span className="text-white/90 font-bold text-lg tracking-wide uppercase text-center leading-tight">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SECTION: STORY - CÁNH CAM TẠI ÚC ========== */}
      <section className="relative z-20 py-0 bg-neutral-950">
        <div className="relative" style={{ paddingTop: 'calc(600 / 1760 * 100%)' }}>
          {/* Thumbnail ảnh nền */}
          <div className="absolute inset-0">
            <img
              src="https://picsum.photos/seed/canhcam-au/1760/600"
              alt="Cánh Cam tại Melbourne Australia"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          {/* Nội dung */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center px-5 z-10">
            {/* Play button */}
            <button
              className="relative play-btn-pulse w-16 h-16 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer"
              aria-label="Xem video"
              onClick={() => setShowStoryVideo(true)}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </button>
            <h3 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl leading-tight max-w-3xl">
              Cánh Cam đã có mặt tại Melbourne Australia
            </h3>
          </div>
          {/* Video embed (chỉ render khi người dùng bấm nút play) */}
          {showStoryVideo && (
            <div id="story-video" className="absolute inset-0 z-20 bg-black">
              <button
                onClick={() => setShowStoryVideo(false)}
                className="absolute top-4 right-4 z-30 w-10 h-10 bg-white/20 hover:bg-[#e8001d] text-white rounded-full flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Đóng video"
              >
                ✕
              </button>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/67QGX_3Kht8?autoplay=1"
                title="Cánh Cam tại Melbourne"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          )}
        </div>
      </section>

      {/* ========== SECTION: DỊCH VỤ ========== */}
      <section className="relative z-20 py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto text-center flex flex-col gap-5 px-5 mb-12">
          <h3 className="text-4xl md:text-5xl font-bold text-neutral-900">Dịch vụ</h3>
          <p className="text-lg md:text-xl text-neutral-600">
            Cánh Cam Agency chuyên cung cấp đầy đủ các dịch vụ được thiết kế riêng cho doanh nghiệp của bạn.
          </p>
        </div>

        {/* Carousel Wrapper with Floating Navigation Buttons */}
        <div className="relative max-w-[1440px] mx-auto px-4 md:px-12 group/services">
          {/* Left Arrow Button */}
          <button
            onClick={() => scrollServices('left')}
            disabled={!canScrollLeft}
            className={`absolute left-2 md:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white text-neutral-800 shadow-xl flex items-center justify-center transition-all duration-300 border border-neutral-200 cursor-pointer ${
              canScrollLeft
                ? 'hover:bg-[#e8001d] hover:text-white hover:border-[#e8001d] hover:scale-110 opacity-95'
                : 'opacity-25 cursor-not-allowed pointer-events-none'
            }`}
            aria-label="Cuộn sang trái"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={() => scrollServices('right')}
            disabled={!canScrollRight}
            className={`absolute right-2 md:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white text-neutral-800 shadow-xl flex items-center justify-center transition-all duration-300 border border-neutral-200 cursor-pointer ${
              canScrollRight
                ? 'hover:bg-[#e8001d] hover:text-white hover:border-[#e8001d] hover:scale-110 opacity-95'
                : 'opacity-25 cursor-not-allowed pointer-events-none'
            }`}
            aria-label="Cuộn sang phải"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Horizontal Scroll Track (Scrollbar completely hidden) */}
          <div
            ref={servicesTrackRef}
            onScroll={checkServicesScroll}
            className="overflow-x-auto no-scrollbar scroll-smooth px-2 md:px-8 py-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex gap-6 pb-2" style={{ minWidth: 'max-content' }}>
              {[
                {
                  title: 'Thiết Kế Website',
                  img: 'https://picsum.photos/seed/service-web/640/640',
                  desc: 'Khám phá cách Công ty thiết kế website chuyên nghiệp Cánh Cam giúp khách hàng bán hàng trực tuyến hiệu quả và tạo ấn tượng thương hiệu tốt hơn thông qua chiến lược ưu việt.',
                },
                {
                  title: 'Dịch Vụ Chăm Sóc Website',
                  img: 'https://picsum.photos/seed/service-care/640/640',
                  desc: 'Đảm bảo website của bạn luôn hoạt động ổn định, bảo mật và được cập nhật liên tục với dịch vụ chăm sóc chuyên nghiệp.',
                },
                {
                  title: 'Thiết Kế App Mobile',
                  img: 'https://picsum.photos/seed/service-app/640/640',
                  desc: 'Ứng dụng di động chuyên nghiệp, tối ưu trải nghiệm người dùng trên mọi nền tảng iOS và Android.',
                },
                {
                  title: 'Sáng Tạo Nội Dung',
                  img: 'https://picsum.photos/seed/service-content/640/640',
                  desc: 'Xây dựng nội dung hấp dẫn, đúng target audience, giúp thương hiệu của bạn nổi bật trên mọi kênh truyền thông.',
                },
                {
                  title: 'Chiến Dịch Quảng Cáo',
                  img: 'https://picsum.photos/seed/service-ads/640/640',
                  desc: 'Tối ưu ngân sách quảng cáo, gia tăng chuyển đổi và tiếp cận đúng khách hàng mục tiêu.',
                },
              ].map((service, i) => (
                <div
                  key={i}
                  onClick={() => onNavigate && onNavigate('dich-vu')}
                  className="relative group overflow-hidden rounded-xl flex-shrink-0 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
                  style={{ width: '320px' }}
                >
                  {/* Image */}
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Gradient overlay always visible at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                    <h4 className="text-2xl font-bold mb-3">{service.title}</h4>
                    <div className="overflow-hidden transition-all duration-300 max-h-0 group-hover:max-h-40">
                      <p className="text-white/85 text-base font-light mb-4 leading-relaxed">{service.desc}</p>
                      <span className="inline-block border border-white text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-200">
                        Tìm hiểu thêm
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION: CÔNG NGHỆ ========== */}
      <section className="relative z-20 py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-16">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Left: Tech grid 5 cols */}
            <div className="lg:w-1/2 grid grid-cols-5 gap-2 md:gap-4">
              {[
                { name: 'React', color: '#61dafb' },
                { name: 'CSS3', color: '#264de4' },
                { name: 'HTML5', color: '#e34f26' },
                { name: 'JavaScript', color: '#f7df1e' },
                { name: 'jQuery', color: '#0769ad' },
                { name: 'Angular', color: '#dd0031' },
                { name: '.NET', color: '#512bd4' },
                { name: 'WordPress', color: '#21759b' },
                { name: 'WooCommerce', color: '#7f54b3' },
                { name: 'PHP', color: '#8892be' },
                { name: 'Laravel', color: '#ff2d20' },
                { name: 'Java', color: '#ed8b00' },
                { name: 'Figma', color: '#a259ff' },
                { name: 'Photoshop', color: '#31a8ff' },
                { name: 'Illustrator', color: '#ff9a00' },
                { name: 'iOS', color: '#555' },
                { name: 'Android', color: '#3ddc84' },
                { name: 'React Native', color: '#61dafb' },
                { name: 'Ionic', color: '#3880ff' },
                { name: 'Vue.js', color: '#42b883' },
              ].map((tech, i) => (
                <div
                  key={i}
                  className="bg-white shadow-[4px_4px_32px_16px_rgba(0,0,0,0.04)] rounded-lg flex items-center justify-center hover:shadow-md transition-shadow duration-200 cursor-default group"
                  style={{ paddingTop: 'calc(64/96*100%)', position: 'relative' }}
                >
                  <div className="absolute inset-0 flex items-center justify-center p-2">
                    <span
                      className="text-[10px] font-bold text-center leading-tight group-hover:scale-105 transition-transform"
                      style={{ color: tech.color }}
                    >
                      {tech.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Text + CTA */}
            <div className="lg:w-1/2 flex flex-col gap-5">
              <h3 className="text-4xl md:text-5xl font-bold text-neutral-900 leading-tight">
                Công cụ và công nghệ thiết kế web của Cánh Cam
              </h3>
              <p className="text-lg md:text-xl text-neutral-600 leading-relaxed">
                Để thiết kế website đẹp và sáng tạo, Cánh Cam đã đầu tư vào các công nghệ tiên tiến. Khám phá các công nghệ hàng đầu của Cánh Cam được tích hợp trong mọi dự án thiết kế web.
              </p>
              <div>
                <button
                  onClick={() => onNavigate && onNavigate('about')}
                  className="inline-flex items-center gap-2 px-8 py-3 border-2 border-[#e8001d] text-[#e8001d] font-semibold rounded-full hover:bg-[#e8001d] hover:text-white transition-all duration-300 text-base cursor-pointer"
                >
                  Xem thêm
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION: THỐNG KÊ ẤN TƯỢNG ========== */}
      <section className="relative z-20 py-20" style={{ background: 'linear-gradient(135deg, #e8001d 0%, #c0001a 100%)' }}>
        <div className="max-w-4xl mx-auto text-center px-5 mb-12">
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Những con số thống kê ấn tượng
          </h3>
          <p className="text-lg md:text-xl text-white/85 leading-relaxed">
            Cánh Cam là <strong>công ty thiết kế web</strong> hàng đầu tại Việt Nam. Đội ngũ tận tâm và sáng tạo của chúng tôi cam kết cung cấp các <strong>giải pháp website</strong> vượt qua sự mong đợi của khách hàng.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-5 md:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {[
              { number: '20', suffix: '+', label: 'Năm kinh nghiệm' },
              { number: '25', suffix: '%', label: 'Tiết kiệm chi phí cho hoạt động kinh doanh' },
              { number: '100', suffix: '%', label: 'Tỷ lệ cam kết (về chất lượng, thời gian và chi phí)' },
              { number: '6000', suffix: '+', label: 'Dự án' },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col gap-2 px-5 py-8 text-center border-r border-white/20 last:border-r-0">
                <div className="text-5xl md:text-7xl font-extrabold text-white">
                  {stat.number}<span>{stat.suffix}</span>
                </div>
                <p className="text-white mt-3 md:mt-5 text-base md:text-lg lg:text-xl font-bold leading-snug">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SECTION: BLOG ========== */}
      <section className="relative z-20 py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-5 md:px-16">
          <div className="flex flex-col xl:flex-row gap-10">
            {/* Left: Title + desc + CTA */}
            <div className="xl:w-3/12 flex flex-col gap-5 flex-shrink-0">
              <h3 className="text-4xl md:text-5xl font-bold text-neutral-900">Blog</h3>
              <p className="text-lg md:text-xl text-neutral-600 leading-relaxed xl:pr-8">
                Khám phá những hiểu biết sâu sắc và nguồn cảm hứng mới nhất để thổi hồn vào trang web của bạn.
              </p>
              <button
                onClick={() => onNavigate && onNavigate('blog')}
                className="inline-flex items-center gap-2 self-start px-8 py-3 border-2 border-[#e8001d] text-[#e8001d] font-semibold rounded-full hover:bg-[#e8001d] hover:text-white transition-all duration-300 text-base cursor-pointer"
              >
                Xem thêm...
              </button>
            </div>

            {/* Right: Blog cards horizontal scroll with controls */}
            <div className="xl:w-9/12 relative group/blogslider">
              {/* Left Arrow */}
              <button
                onClick={() => scrollBlog('left')}
                disabled={!canScrollBlogLeft}
                className={`absolute -left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white text-neutral-800 shadow-md flex items-center justify-center transition-all duration-300 border border-neutral-200 cursor-pointer ${
                  canScrollBlogLeft
                    ? 'hover:bg-[#e8001d] hover:text-white hover:border-[#e8001d] hover:scale-110 opacity-90'
                    : 'opacity-25 cursor-not-allowed pointer-events-none'
                }`}
                aria-label="Cuộn Blog sang trái"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              {/* Right Arrow */}
              <button
                onClick={() => scrollBlog('right')}
                disabled={!canScrollBlogRight}
                className={`absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white text-neutral-800 shadow-md flex items-center justify-center transition-all duration-300 border border-neutral-200 cursor-pointer ${
                  canScrollBlogRight
                    ? 'hover:bg-[#e8001d] hover:text-white hover:border-[#e8001d] hover:scale-110 opacity-90'
                    : 'opacity-25 cursor-not-allowed pointer-events-none'
                }`}
                aria-label="Cuộn Blog sang phải"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>

              <div
                ref={blogTrackRef}
                onScroll={checkBlogScroll}
                className="overflow-x-auto no-scrollbar scroll-smooth px-1"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                <div className="flex gap-5 pb-2" style={{ minWidth: 'max-content' }}>
                  {[
                    { title: '24 cách tải video trên web từ website không cho download', img: 'https://picsum.photos/seed/blog1/304/204' },
                    { title: '10 font chữ cho website đẹp & Lưu ý khi chọn', img: 'https://picsum.photos/seed/blog2/304/204' },
                    { title: '27 Trang web tải Template website miễn phí tốt nhất', img: 'https://picsum.photos/seed/blog3/304/204' },
                    { title: 'Định nghĩa Website | Các loại website phổ biến nhất hiện nay', img: 'https://picsum.photos/seed/blog4/304/204' },
                    { title: 'Kích thước thiết kế website chuẩn – Có ảnh hưởng tới SEO?', img: 'https://picsum.photos/seed/blog5/304/204' },
                  ].map((post, i) => (
                    <div
                      key={i}
                      onClick={() => onNavigate && onNavigate('blog')}
                      className="flex-shrink-0 group cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300 rounded-lg overflow-hidden bg-white"
                      style={{ width: '280px' }}
                    >
                      {/* Thumb */}
                      <div className="relative overflow-hidden" style={{ paddingTop: 'calc(204/304*100%)' }}>
                        <img
                          src={post.img}
                          alt={post.title}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                      {/* Text area */}
                      <div className="bg-white px-5 pt-4 pb-5 flex flex-col h-36">
                        <h4 className="text-neutral-700 font-bold leading-tight line-clamp-3 group-hover:text-black transition-colors duration-200 text-base">
                          {post.title}
                        </h4>
                        {/* Red underline bar expanding on hover */}
                        <div className="mt-auto h-1 bg-[#e8001d] w-10 group-hover:w-20 transition-all duration-300" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION: BẠN ĐÃ SẴN SÀNG? ========== */}
      <section className="relative z-20 pt-20 pb-0 bg-white overflow-hidden">
        {/* Top: text + image */}
        <div className="max-w-7xl mx-auto px-5 md:px-16">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* Left: text */}
            <div className="lg:w-5/12 flex flex-col gap-6 pb-10 lg:pb-36">
              <h3 className="text-4xl md:text-5xl font-bold text-neutral-900 leading-tight pr-4">
                Bạn đã sẵn sàng khởi động dự án của mình ngay hôm nay chưa?
              </h3>
              <button
                onClick={() => onNavigate && onNavigate('dich-vu')}
                className="self-start inline-flex items-center gap-2 px-8 py-3 border-2 border-[#e8001d] text-[#e8001d] font-semibold rounded-full hover:bg-[#e8001d] hover:text-white transition-all duration-300 text-base cursor-pointer"
              >
                Liên hệ
              </button>
            </div>
            {/* Right: image */}
            <div className="lg:w-6/12 relative overflow-hidden rounded-xl">
              <div className="relative" style={{ paddingTop: 'calc(560/960*100%)' }}>
                <img
                  src="https://picsum.photos/seed/ready-project/960/560"
                  alt="Bạn đã sẵn sàng dự án ngay hôm nay"
                  className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: gradient red banner "Yêu cầu tư vấn" */}
        <div className="mt-0 py-16 md:py-20" style={{ background: 'linear-gradient(135deg, #e8001d 0%, #c0001a 50%, #1a0a0a 100%)' }}>
          <div className="max-w-7xl mx-auto px-5 md:px-16">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-6/12">
                <p className="text-white text-xl md:text-2xl font-extralight leading-relaxed">
                  Nếu bạn có bất kỳ câu hỏi nào, vui lòng để lại thông tin của bạn. Chúng tôi sẽ liên lạc với bạn sớm nhất có thể.
                </p>
              </div>
              <div className="lg:w-6/12 xl:w-3/12">
                <button
                  onClick={() => onNavigate && onNavigate('quy-trinh')}
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-[#e8001d] font-bold text-lg rounded-full hover:bg-neutral-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer"
                >
                  <span>Yêu cầu tư vấn</span>
                  <span className="w-8 h-8 bg-[#e8001d] rounded-full flex items-center justify-center flex-shrink-0 group-hover:translate-x-1 transition-transform">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION: FOLLOW US ========== */}
      <section className="relative z-20 overflow-hidden">
        <div className="relative" style={{ paddingTop: 'calc(520/1920*100%)', minHeight: '200px' }}>
          {/* Background image */}
          <img
            src="https://picsum.photos/seed/followus/1920/520"
            alt="Hãy theo dõi chúng tôi trên hành trình thiết kế web"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
          {/* Text overlay */}
          <div className="absolute inset-0 flex items-center px-5 md:px-16 z-10">
            <div className="max-w-7xl mx-auto w-full">
              <div className="w-full md:w-2/3 lg:w-1/2 flex flex-col gap-5">
                <h3 className="text-white text-4xl md:text-5xl font-bold leading-tight">
                  Hãy theo dõi chúng tôi trên hành trình thiết kế web
                </h3>
                <button
                  onClick={() => onNavigate && onNavigate('about')}
                  className="self-start px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300 text-base cursor-pointer"
                >
                  Xem thêm
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
