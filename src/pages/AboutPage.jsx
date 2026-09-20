import React, { useState } from 'react';

export default function AboutPage({ onNavigateHome }) {
  const [activeHistoryIndex, setActiveHistoryIndex] = useState(0);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [lightboxImg, setLightboxImg] = useState(null);

  const historyItems = [
    {
      year: '2005',
      date: '12 Tháng 8, 2005',
      image: 'https://www.canhcam.vn/wp-content/uploads/2024/07/history-2005.jpeg',
      desc: 'Sự ra đời chính thức của thương hiệu Cánh Cam đánh dấu sự khởi đầu của một hành trình mới.',
    },
    {
      year: '2010',
      date: '2010',
      image: 'https://www.canhcam.vn/wp-content/uploads/2024/07/history-2010.jpeg',
      desc: 'Đội ngũ 20 chuyên gia của CanhCam đã đáp ứng thành công nhu cầu của các thị trường đầy thách thức, đặc biệt là Nhật Bản. Đồng thời, Cánh Cam đã triển khai thành công hệ thống trang web thương mại điện tử tích hợp thanh toán PayPal.',
    },
    {
      year: '2013',
      date: '2013',
      image: 'https://www.canhcam.vn/wp-content/uploads/2024/07/history-2013.jpeg',
      desc: 'Cánh Cam tự hào có nhiều năm kinh nghiệm trong lĩnh vực thiết kế web.',
    },
    {
      year: '2017',
      date: '2017',
      image: 'https://www.canhcam.vn/wp-content/uploads/2024/07/history-2017.jpeg',
      desc: 'Cánh Cam xây dựng website của SABECO góp phần nâng cao hình ảnh thương hiệu trong thương vụ M&A. Đồng thời, Cánh Cam đảm nhận thiết kế website doanh nghiệp khác nhau trong lĩnh vực thiết kế website bất động sản của các thương hiệu lớn như Novaland, Đất Xanh,…',
    },
    {
      year: '2020',
      date: '2020',
      image: 'https://www.canhcam.vn/wp-content/uploads/2024/07/history-2020.jpeg',
      desc: 'Cánh Cam mở rộng chuyên môn sang thiết kế website Tài chính – Ngân hàng, chú trọng bảo mật cao và yêu cầu công nghệ vượt trội. Các khách hàng đáng chú ý là Nam A Bank, Kien Long Bank, Manulife, Chubb Life, Cathay Life, AVIVA, v.v.',
    },
    {
      year: '2022',
      date: '2022',
      image: 'https://www.canhcam.vn/wp-content/uploads/2024/07/history-2022.jpeg',
      desc: 'Cánh Cam tự hào có hơn 45 chuyên gia có tay nghề cao chịu trách nhiệm giám sát các dự án không chỉ ở Việt Nam mà còn ở Canada, Mỹ, Úc và Châu Âu.',
    },
  ];

  const leaders = [
    {
      name: 'Mr. Hua Thien Vuong',
      role: 'Co Founder - CEO',
      image: 'https://www.canhcam.vn/wp-content/uploads/2024/07/hua-thien-vuong.jpeg',
      quote: 'Đưa thương hiệu Việt Nam ra thế giới',
    },
    {
      name: 'Mrs. Ann Nguyen',
      role: 'Business Development Director',
      image: 'https://www.canhcam.vn/wp-content/uploads/2024/07/annnguyen.jpg',
      quote: 'Thúc đẩy một doanh nghiệp bền vững',
    },
    {
      name: 'Mrs. Nguyen Lam Thi Minh Dieu',
      role: 'Chief Technology Officer',
      image: 'https://www.canhcam.vn/wp-content/uploads/2024/07/nguyen-lam-thi-minh-dieu.jpeg',
      quote: 'Thúc đẩy sự đổi mới theo thời gian thực',
    },
    {
      name: 'Mr. Phan Mai Tho',
      role: 'Account Director',
      image: 'https://www.canhcam.vn/wp-content/uploads/2024/07/mai-phan-tho.jpeg',
      quote: 'Ưu tiên sự hài lòng của khách hàng',
    },
    {
      name: 'Mr. Ho Ngoc Tuan',
      role: 'Art Director',
      image: 'https://www.canhcam.vn/wp-content/uploads/2024/07/ho-ngoc-tuan.jpeg',
      quote: 'Tôn vinh sự thanh lịch của chủ nghĩa tối giản',
    },
  ];

  const designTools = [
    { name: 'Figma', img: 'https://www.canhcam.vn/wp-content/uploads/2024/07/19.webp' },
    { name: 'Photoshop', img: 'https://www.canhcam.vn/wp-content/uploads/2024/07/20.webp' },
    { name: 'Illustrator', img: 'https://www.canhcam.vn/wp-content/uploads/2024/07/21.webp' },
    { name: 'InVision', img: 'https://www.canhcam.vn/wp-content/uploads/2024/07/22.webp' },
    { name: 'Marvel', img: 'https://www.canhcam.vn/wp-content/uploads/2024/07/23.webp' },
  ];

  const webTechs = [
    { name: 'React', img: 'https://www.canhcam.vn/wp-content/uploads/2024/07/24.webp' },
    { name: 'CSS', img: 'https://www.canhcam.vn/wp-content/uploads/2024/07/25.webp' },
    { name: 'HTML5', img: 'https://www.canhcam.vn/wp-content/uploads/2024/07/26.webp' },
    { name: 'Javascript', img: 'https://www.canhcam.vn/wp-content/uploads/2024/07/27.webp' },
    { name: 'jQuery', img: 'https://www.canhcam.vn/wp-content/uploads/2024/07/28.webp' },
    { name: 'AngularJS', img: 'https://www.canhcam.vn/wp-content/uploads/2024/07/29.webp' },
    { name: '.NET', img: 'https://www.canhcam.vn/wp-content/uploads/2024/07/30.webp' },
    { name: 'WordPress', img: 'https://www.canhcam.vn/wp-content/uploads/2024/07/31.webp' },
    { name: 'WooCommerce', img: 'https://www.canhcam.vn/wp-content/uploads/2024/07/32.webp' },
    { name: 'PHP', img: 'https://www.canhcam.vn/wp-content/uploads/2024/07/33.webp' },
    { name: 'Laravel', img: 'https://www.canhcam.vn/wp-content/uploads/2024/07/34.webp' },
    { name: 'Java', img: 'https://www.canhcam.vn/wp-content/uploads/2024/07/35.webp' },
  ];

  const mobileTechs = [
    { name: 'React Native', img: 'https://www.canhcam.vn/wp-content/uploads/2024/07/36.webp' },
    { name: 'ionic', img: 'https://www.canhcam.vn/wp-content/uploads/2024/07/37.webp' },
    { name: 'angular', img: 'https://www.canhcam.vn/wp-content/uploads/2024/07/38.webp' },
    { name: 'ios', img: 'https://www.canhcam.vn/wp-content/uploads/2024/07/39.webp' },
    { name: 'android', img: 'https://www.canhcam.vn/wp-content/uploads/2024/07/40.webp' },
  ];

  return (
    <div className="bg-white font-[Montserrat,sans-serif] text-neutral-800">

      {/* ========== HERO BANNER ========== */}
      <section className="relative overflow-hidden bg-black min-h-[480px] lg:min-h-[580px] flex items-center">
        {/* Background video */}
        <div className="absolute inset-0 z-0">
          <video
            ref={(el) => {
              if (el) {
                el.muted = true;
                el.defaultMuted = true;
                el.volume = 0;
              }
            }}
            autoPlay
            loop
            muted
            defaultMuted
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
            className="w-full h-full object-cover opacity-60"
          >
            <source src="/backgroundhd_1920_1080_25fps.mp4" type="video/mp4" />
            <source src="/backgroundhd_1920_1080_25fps.webm" type="video/webm" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />

          {/* Grid lines overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px)',
              backgroundSize: '25% 100%',
            }}
          />
        </div>

        {/* Banner Text Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-28 w-full">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Giới thiệu
            </h1>
            <div className="w-20 h-1 bg-[#e8001d] mt-4 mb-6" />
            <p className="font-light text-2xl md:text-4xl lg:text-5xl text-white leading-tight">
              Cam kết mang đến những ý tưởng sáng tạo nhưng khả thi
            </p>
          </div>
        </div>
      </section>

      {/* ========== GLOBAL BREADCRUMB ========== */}
      <section className="border-b border-neutral-200 bg-[#f9f9f9] py-3.5">
        <div className="max-w-7xl mx-auto px-6 md:px-16 flex items-center gap-2 text-xs md:text-sm text-neutral-500">
          <button
            onClick={onNavigateHome}
            className="hover:text-[#e8001d] transition-colors cursor-pointer"
          >
            Trang chủ
          </button>
          <span>/</span>
          <span className="text-neutral-800 font-semibold">Giới thiệu công ty Cánh Cam</span>
        </div>
      </section>

      {/* ========== SECTION 1: WE ARE CANHCAM ========== */}
      <section className="py-20 md:py-24 relative z-10 bg-white" id="intro-section">
        <div className="max-w-4xl mx-auto text-center px-6 md:px-12 flex flex-col gap-6 group">
          <h2 className="text-3xl md:text-5xl font-black text-neutral-900 hover:text-[#e8001d] group-hover:text-[#e8001d] transition-colors duration-300 tracking-tight cursor-pointer">
            We are CanhCam
          </h2>
          <div className="w-14 h-1 bg-[#e8001d] mx-auto transition-all duration-300 group-hover:w-24" />
          <div className="text-lg md:text-2xl text-neutral-700 leading-relaxed font-light">
            <p>
              Thông qua <strong className="text-neutral-900 font-semibold">thiết kế website</strong> &amp; <strong className="text-neutral-900 font-semibold">sáng tạo nội dung</strong> cho website, mỗi ngày Cánh Cam luôn thực hiện với khát khao làm cho việc <strong className="text-neutral-900 font-semibold">kinh doanh online</strong> của khách hàng trở nên dễ dàng và hiệu quả hơn.
            </p>
          </div>
        </div>
      </section>

      {/* ========== SECTION 2: TỔNG QUAN (OVERVIEW) ========== */}
      <section className="py-16 md:py-24 bg-neutral-50 border-y border-neutral-200" id="overview-section">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Content (cols 1-6) */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e8001d]">Về chúng tôi</span>
              <h3 className="text-3xl md:text-5xl font-black text-neutral-900 leading-tight">
                Tổng quan
              </h3>
              <div className="w-16 h-1 bg-[#e8001d]" />
              <div className="text-base md:text-lg text-neutral-700 leading-relaxed space-y-4 font-normal">
                <p>
                  Chúng tôi tự hào được đồng hành cùng với sự phát triển lớn mạnh của hơn <b>6000 doanh nghiệp trong và ngoài nước</b> đến từ nhiều ngành nghề với quy mô lớn nhỏ khác nhau.
                </p>
                <p>
                  Là bạn đồng hành của bạn trong môi trường kinh doanh trực tuyến không ngừng thay đổi hàng ngày với vô vàn cơ hội và không ít thách thức, <strong className="text-[#e8001d]">Công ty thiết kế website</strong> Cánh Cam không chỉ tư vấn mà còn trực tiếp cùng bạn đưa ra những chiến lược web toàn diện cho việc kinh doanh trở nên tốt hơn.
                </p>
              </div>
            </div>

            {/* Right Image (cols 7-12) */}
            <div className="lg:col-span-6 relative z-20">
              <div
                className="relative overflow-hidden rounded-2xl shadow-xl group cursor-pointer"
                onClick={() => setLightboxImg('https://www.canhcam.vn/wp-content/uploads/2024/07/2-2.webp')}
              >
                <div style={{ paddingTop: 'calc(420/640*100%)' }} className="relative w-full">
                  <img
                    src="https://www.canhcam.vn/wp-content/uploads/2024/07/2-2.webp"
                    alt="Tổng quan Cánh Cam"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 3: LỊCH SỬ PHÁT TRIỂN (SWIPER / TIMELINE) ========== */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-white" id="history">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          {/* Header row with title & indicator */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10 md:mb-14">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e8001d]">Chặng đường phát triển</span>
              <h3 className="text-3xl md:text-5xl font-black text-neutral-900 mt-1">
                Lịch sử phát triển
              </h3>
            </div>
            {/* Arrows navigation */}
            <div className="flex items-center gap-2 self-end sm:self-center">
              <button
                onClick={() => setActiveHistoryIndex((prev) => (prev > 0 ? prev - 1 : historyItems.length - 1))}
                className="w-10 h-10 rounded-full border border-neutral-300 hover:border-[#e8001d] hover:bg-[#e8001d] hover:text-white flex items-center justify-center transition-all cursor-pointer"
                aria-label="Previous milestone"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                onClick={() => setActiveHistoryIndex((prev) => (prev < historyItems.length - 1 ? prev + 1 : 0))}
                className="w-10 h-10 rounded-full border border-neutral-300 hover:border-[#e8001d] hover:bg-[#e8001d] hover:text-white flex items-center justify-center transition-all cursor-pointer"
                aria-label="Next milestone"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Active History Slide */}
          <div className="bg-[#fcfcfc] border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              {/* Image side */}
              <div className="lg:col-span-7 relative overflow-hidden bg-neutral-900" style={{ minHeight: '380px' }}>
                <div style={{ paddingTop: 'calc(640/1280*100%)' }} className="relative w-full h-full min-h-[380px]">
                  <img
                    src={historyItems[activeHistoryIndex].image}
                    alt={historyItems[activeHistoryIndex].year}
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-700 cursor-pointer"
                    onClick={() => setLightboxImg(historyItems[activeHistoryIndex].image)}
                  />
                </div>
              </div>

              {/* Text side */}
              <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-center text-center lg:text-left">
                <div className="text-4xl md:text-5xl font-black text-neutral-950 mb-6">
                  {historyItems[activeHistoryIndex].date}
                </div>
                <p className="text-base md:text-xl text-neutral-700 leading-relaxed font-light">
                  {historyItems[activeHistoryIndex].desc}
                </p>
              </div>
            </div>
          </div>

          {/* Swiper Thumbs / Year selector tabs */}
          <div className="mt-10 flex items-center justify-center flex-wrap gap-3 md:gap-4">
            {historyItems.map((item, i) => (
              <button
                key={i}
                onClick={() => setActiveHistoryIndex(i)}
                className={`px-6 py-3 rounded-full text-sm md:text-base font-bold transition-all duration-300 cursor-pointer ${
                  activeHistoryIndex === i
                    ? 'bg-[#e8001d] text-white shadow-lg scale-105'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900'
                }`}
              >
                {item.year}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SECTION 4: SỨ MỆNH & TẦM NHÌN + VIDEO MELBOURNE ========== */}
      <section className="py-20 relative z-20 bg-[#fafafa]" id="mission-vision">
        {/* Banner with Play Video */}
        <div className="max-w-7xl mx-auto px-6 md:px-16 mb-16">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
            <div style={{ paddingTop: 'calc(600/1760*100%)', minHeight: '320px' }} className="relative w-full">
              <img
                src="https://www.canhcam.vn/wp-content/uploads/2024/07/3.webp"
                alt="Cánh Cam Melbourne Australia"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />

              {/* Overlay Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center px-6 z-10">
                <button
                  onClick={() => setShowVideoModal(true)}
                  className="w-16 h-16 md:w-20 md:h-20 bg-white/90 hover:bg-[#e8001d] text-[#e8001d] hover:text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 cursor-pointer group/btn"
                  aria-label="Play video Cánh Cam Australia"
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="translate-x-0.5">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
                <h3 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white drop-shadow-md">
                  Cánh Cam đã có mặt tại Melbourne Australia
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Sứ mệnh & Tầm nhìn 2 Columns */}
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
            {/* Sứ mệnh */}
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-neutral-200/80 hover:shadow-xl transition-shadow flex flex-col gap-4">
              <div className="w-10 h-10 rounded-full bg-[#e8001d]/10 text-[#e8001d] flex items-center justify-center font-black">
                01
              </div>
              <h4 className="text-3xl md:text-4xl font-black text-neutral-900">
                Sứ mệnh
              </h4>
              <div className="w-12 h-1 bg-[#e8001d]" />
              <p className="text-base md:text-lg text-neutral-700 leading-relaxed font-normal">
                Áp dụng phương pháp tiếp cận toàn diện, chúng tôi thách thức các chuẩn mực thông thường để xây dựng, tối ưu hóa và thúc đẩy doanh nghiệp của khách hàng nhằm tạo điều kiện thuận lợi cho khả năng lãnh đạo của họ trong ngành công nghiệp tương ứng.
              </p>
            </div>

            {/* Tầm nhìn */}
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-neutral-200/80 hover:shadow-xl transition-shadow flex flex-col gap-4">
              <div className="w-10 h-10 rounded-full bg-[#e8001d]/10 text-[#e8001d] flex items-center justify-center font-black">
                02
              </div>
              <h4 className="text-3xl md:text-4xl font-black text-neutral-900">
                Tầm nhìn
              </h4>
              <div className="w-12 h-1 bg-[#e8001d]" />
              <p className="text-base md:text-lg text-neutral-700 leading-relaxed font-normal">
                Là một trong những nhà cung cấp <strong>giải pháp thiết kế website</strong> &amp; thương hiệu số hàng đầu Đông Nam Á, CanhCam đặt mục tiêu trở thành một công ty uy tín tại các thị trường tiềm năng như Úc và Mỹ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 5: OUR DIFFERENCES + GALLERY ========== */}
      <section className="py-20 md:py-28 bg-white border-t border-neutral-200" id="content-section">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#e8001d] block mb-3">
              OUR DIFFERENCES
            </span>
            <h3 className="text-3xl md:text-5xl font-black text-neutral-900 tracking-tight leading-tight mb-6">
              NỘI DUNG LÀ TRÁI TIM CỦA WEBSITE
            </h3>
            <div className="w-16 h-1 bg-[#e8001d] mx-auto mb-6" />
            <div className="text-base md:text-lg text-neutral-700 leading-relaxed font-normal space-y-4">
              <p>
                Rất nhiều công ty có thể tạo ra <strong>thiết kế web đẹp</strong>. Tuy nhiên, quan trọng nhất là phải thể hiện được điều khách hàng cần – nội dung tiếp thị và trải nghiệm sản phẩm/dịch vụ trên kênh online. Để có được hơn 6000 trang web vẫn đang hoạt động ổn định và mang về kết quả kinh doanh hiệu quả như hiện tại, Cánh Cam luôn bắt đầu mỗi dự án từ việc lên chiến lược nội dung bài bản gồm mục đích, mục tiêu và lộ trình đi đến thành công.
              </p>
              <p className="text-[#e8001d] font-semibold">
                Nhờ nội dung ấn tượng, dịch vụ/sản phẩm của bạn sẽ được thể hiện chi tiết, dễ hiểu, gần gũi, súc tích và khác biệt so với đối thủ cạnh tranh.
              </p>
            </div>
          </div>

          {/* 5 Gallery Images Grid */}
          <div className="grid grid-cols-12 gap-3 md:gap-5 mt-8">
            {/* Top row: 2 images (6 cols each) */}
            <div
              className="col-span-12 sm:col-span-6 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
              onClick={() => setLightboxImg('https://www.canhcam.vn/wp-content/uploads/2024/07/4-1.webp')}
            >
              <div style={{ paddingTop: 'calc(416/624*100%)' }} className="relative w-full overflow-hidden">
                <img
                  src="https://www.canhcam.vn/wp-content/uploads/2024/07/4-1.webp"
                  alt="Content our love our heart images 1"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div
              className="col-span-12 sm:col-span-6 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
              onClick={() => setLightboxImg('https://www.canhcam.vn/wp-content/uploads/2024/07/5-1.webp')}
            >
              <div style={{ paddingTop: 'calc(416/624*100%)' }} className="relative w-full overflow-hidden">
                <img
                  src="https://www.canhcam.vn/wp-content/uploads/2024/07/5-1.webp"
                  alt="Content our love our heart images 2"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Bottom row: 3 images (4 cols each) */}
            <div
              className="col-span-12 sm:col-span-4 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
              onClick={() => setLightboxImg('https://www.canhcam.vn/wp-content/uploads/2024/07/6-1.webp')}
            >
              <div style={{ paddingTop: 'calc(416/624*100%)' }} className="relative w-full overflow-hidden">
                <img
                  src="https://www.canhcam.vn/wp-content/uploads/2024/07/6-1.webp"
                  alt="Content our love our heart images 3"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div
              className="col-span-12 sm:col-span-4 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
              onClick={() => setLightboxImg('https://www.canhcam.vn/wp-content/uploads/2024/07/7-1.webp')}
            >
              <div style={{ paddingTop: 'calc(416/624*100%)' }} className="relative w-full overflow-hidden">
                <img
                  src="https://www.canhcam.vn/wp-content/uploads/2024/07/7-1.webp"
                  alt="Content our love our heart images 4"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div
              className="col-span-12 sm:col-span-4 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
              onClick={() => setLightboxImg('https://www.canhcam.vn/wp-content/uploads/2024/07/8.webp')}
            >
              <div style={{ paddingTop: 'calc(416/624*100%)' }} className="relative w-full overflow-hidden">
                <img
                  src="https://www.canhcam.vn/wp-content/uploads/2024/07/8.webp"
                  alt="Content our love our heart images 5"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 6: TẬN HƯỞNG THÀNH QUẢ XỨNG ĐÁNG ========== */}
      <section className="py-20 md:py-24 bg-neutral-50" id="enjoy-section">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Text left */}
            <div className="lg:col-span-6 flex flex-col gap-5">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e8001d]">Giá trị vượt trội</span>
              <h3 className="text-3xl md:text-5xl font-black text-neutral-900 leading-tight">
                TẬN HƯỞNG THÀNH QUẢ XỨNG ĐÁNG
              </h3>
              <div className="w-16 h-1 bg-[#e8001d]" />
              <p className="text-base md:text-lg text-neutral-700 leading-relaxed font-normal">
                Trong mỗi chiến dịch, dự án đã qua, Cánh Cam kỳ vọng có được thành quả tuyệt vời. Nhưng trên hết, Cánh Cam mong muốn đem đến cho các khách hàng, đối tác của mình những trải nghiệm vượt trội chỉ có tại Cánh Cam, bởi mang đến cho bạn cơ hội tận hưởng những kết quả ngoạn mục về doanh số cũng là mở ra nhiều cơ hội hợp tác giữa chúng ta trong tương lai. Chọn Cánh Cam, bạn hoàn toàn có thể yên tâm về một trang web xứng tầm, xác lập được vị thế của doanh nghiệp bạn trên thị trường. Cánh Cam luôn sẵn lòng trở thành người bạn đồng hành cùng chặng đường phát triển sắp tới của doanh nghiệp bạn.
              </p>
            </div>

            {/* Image right */}
            <div className="lg:col-span-6">
              <div
                className="relative overflow-hidden rounded-2xl shadow-xl group cursor-pointer"
                onClick={() => setLightboxImg('https://www.canhcam.vn/wp-content/uploads/2024/07/9.webp')}
              >
                <img
                  src="https://www.canhcam.vn/wp-content/uploads/2024/07/9.webp"
                  alt="Tận hưởng thành quả xứng đáng"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 7: KHÔNG GIAN SÁNG TẠO ĐẦY CẢM HỨNG ========== */}
      <section className="py-20 md:py-28 bg-white" id="inspiring-section">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="max-w-4xl mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e8001d] block mb-2">Môi trường làm việc</span>
            <h3 className="text-3xl md:text-5xl font-black text-neutral-900 mb-6">
              KHÔNG GIAN SÁNG TẠO ĐẦY CẢM HỨNG
            </h3>
            <div className="w-16 h-1 bg-[#e8001d] mb-6" />
            <p className="text-base md:text-lg text-neutral-700 leading-relaxed font-normal">
              Thoạt nhìn, văn phòng của Cánh Cam không giống nơi làm việc của một công ty, nó được thiết kế như một quán cà phê nơi có những chiếc bàn nhỏ, hàng ghế dài êm ái và những hình vẽ thông minh, ngộ nghĩnh trên tường. Môi trường làm việc độc đáo này là chất xúc tác tuyệt vời truyền cảm hứng cho nhân viên Cánh Cam hào hứng “chơi đùa” cùng công việc mỗi ngày. Tại đây, nhân viên có thể phát huy tối đa năng lực sáng tạo với những ý tưởng táo bạo. Lẽ tự nhiên, công việc sáng tạo luôn cần được làm bởi những bộ óc biết tạo ra sự tò mò.
            </p>
          </div>

          {/* Grid 1 large image + 3 small */}
          <div className="grid grid-cols-12 gap-3 md:gap-6">
            {/* 1 Large image spanning 12 cols */}
            <div
              className="col-span-12 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 group cursor-pointer"
              onClick={() => setLightboxImg('https://www.canhcam.vn/wp-content/uploads/2024/07/10.webp')}
            >
              <div style={{ paddingTop: 'calc(480/1280*100%)' }} className="relative w-full overflow-hidden">
                <img
                  src="https://www.canhcam.vn/wp-content/uploads/2024/07/10.webp"
                  alt="Không gian sáng tạo Cánh Cam 1"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* 3 Images spanning 4 cols each */}
            <div
              className="col-span-12 sm:col-span-4 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
              onClick={() => setLightboxImg('https://www.canhcam.vn/wp-content/uploads/2024/07/11.webp')}
            >
              <div style={{ paddingTop: 'calc(296/406*100%)' }} className="relative w-full overflow-hidden">
                <img
                  src="https://www.canhcam.vn/wp-content/uploads/2024/07/11.webp"
                  alt="Không gian sáng tạo Cánh Cam 2"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div
              className="col-span-12 sm:col-span-4 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
              onClick={() => setLightboxImg('https://www.canhcam.vn/wp-content/uploads/2024/07/12.webp')}
            >
              <div style={{ paddingTop: 'calc(296/406*100%)' }} className="relative w-full overflow-hidden">
                <img
                  src="https://www.canhcam.vn/wp-content/uploads/2024/07/12.webp"
                  alt="Không gian sáng tạo Cánh Cam 3"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div
              className="col-span-12 sm:col-span-4 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
              onClick={() => setLightboxImg('https://www.canhcam.vn/wp-content/uploads/2024/07/13.webp')}
            >
              <div style={{ paddingTop: 'calc(296/406*100%)' }} className="relative w-full overflow-hidden">
                <img
                  src="https://www.canhcam.vn/wp-content/uploads/2024/07/13.webp"
                  alt="Không gian sáng tạo Cánh Cam 4"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 8: THUỘC VỀ THẾ GIỚI CỦA BẠN ========== */}
      <section className="py-20 md:py-28 bg-neutral-50 border-t border-neutral-200" id="canhcam-world-section">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="max-w-4xl mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e8001d] block mb-2">Đồng hành mọi nơi</span>
            <h3 className="text-3xl md:text-5xl font-black text-neutral-900 mb-6">
              THUỘC VỀ THẾ GIỚI CỦA BẠN
            </h3>
            <div className="w-16 h-1 bg-[#e8001d] mb-6" />
            <p className="text-base md:text-lg text-neutral-700 leading-relaxed font-normal">
              Bởi người dùng mục tiêu mới là người quyết định tính hiệu quả của trang web, Cánh Cam luôn chủ động tiếp cận để nắm bắt những ham muốn tiềm ẩn của người dùng và hình thành bức tranh tổng thể về nhu cầu thị trường. Nói cách khác, nơi nào có khách hàng của bạn, nơi đó có Cánh Cam. Phá vỡ mọi nguyên tắc thông thường, nơi làm việc của chúng tôi không chỉ giới hạn trong văn phòng mà được mở rộng ra tại rất nhiều địa điểm thú vị khác. Cánh Cam cam kết sẽ đồng hành cùng bạn đưa ra các chiến lược web tối ưu giúp việc kinh doanh trở nên tốt hơn.
            </p>
          </div>

          {/* Row 1: [2.05fr_1fr] */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 md:gap-6">
            <div
              className="sm:col-span-8 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
              onClick={() => setLightboxImg('https://www.canhcam.vn/wp-content/uploads/2024/07/14.webp')}
            >
              <img
                src="https://www.canhcam.vn/wp-content/uploads/2024/07/14.webp"
                alt="Canh Cam is your world 1"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div
              className="sm:col-span-4 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
              onClick={() => setLightboxImg('https://www.canhcam.vn/wp-content/uploads/2024/07/15.webp')}
            >
              <img
                src="https://www.canhcam.vn/wp-content/uploads/2024/07/15.webp"
                alt="Canh Cam is your world 2"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Row 2: [1fr_2.05fr] */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 md:gap-6 mt-3 md:mt-6">
            <div
              className="sm:col-span-4 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
              onClick={() => setLightboxImg('https://www.canhcam.vn/wp-content/uploads/2024/07/16.webp')}
            >
              <img
                src="https://www.canhcam.vn/wp-content/uploads/2024/07/16.webp"
                alt="Canh Cam is your world 3"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div
              className="sm:col-span-8 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
              onClick={() => setLightboxImg('https://www.canhcam.vn/wp-content/uploads/2024/07/17.webp')}
            >
              <img
                src="https://www.canhcam.vn/wp-content/uploads/2024/07/17.webp"
                alt="Canh Cam is your world 4"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 9: MEET OUR LEADERS ========== */}
      <section className="py-20 md:py-28 bg-white border-t border-neutral-200" id="our-leader">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e8001d]">Ban lãnh đạo</span>
            <h2 className="text-3xl md:text-5xl font-black text-neutral-900 mt-2 mb-4">
              Meet Our Leaders
            </h2>
            <p className="text-neutral-600 text-base md:text-lg">
              Những con người tâm huyết dẫn dắt và định hình chuẩn mực thiết kế tại Cánh Cam.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {leaders.map((leader, i) => (
              <div
                key={i}
                className="group bg-[#fcfcfc] rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col border border-neutral-200/70"
              >
                <div className="relative overflow-hidden aspect-[304/420] bg-neutral-200">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                    <p className="text-white text-xs italic leading-relaxed">
                      "{leader.quote}"
                    </p>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1 gap-1">
                  <h4 className="text-lg font-bold text-neutral-950 group-hover:text-[#e8001d] transition-colors leading-snug">
                    {leader.name}
                  </h4>
                  <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">
                    {leader.role}
                  </p>
                  <p className="text-xs text-neutral-700 font-medium line-clamp-2 mt-auto">
                    {leader.quote}
                  </p>
                  <div className="w-10 h-1 bg-[#e8001d] mt-3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SECTION 10: NHỮNG CON SỐ NỔI BẬT ========== */}
      <section
        className="py-20 md:py-24 text-white relative z-20"
        id="numbers"
        style={{ background: 'linear-gradient(135deg, #e8001d 0%, #c0001a 50%, #990013 100%)' }}
      >
        <div className="max-w-4xl mx-auto text-center px-6 mb-16">
          <h3 className="text-3xl md:text-5xl font-black text-white mb-4">
            Những con số nổi bật
          </h3>
          <p className="text-base md:text-xl text-white/90 leading-relaxed font-light">
            Cánh Cam là <strong>công ty thiết kế web</strong> hàng đầu tại Việt Nam. Đội ngũ tận tâm và sáng tạo của chúng tôi cam kết cung cấp các giải pháp website vượt qua sự mong đợi của khách hàng.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-6 border-r border-white/20 last:border-r-0">
              <div className="text-5xl md:text-7xl font-extrabold flex items-center justify-center">
                100<span className="text-3xl md:text-5xl ml-1">%</span>
              </div>
              <div className="text-sm md:text-base text-white/90 font-semibold mt-4">
                Tỷ lệ cam kết (về chất lượng, thời gian và chi phí)
              </div>
            </div>

            <div className="flex flex-col items-center text-center p-6 border-r border-white/20 last:border-r-0">
              <div className="text-5xl md:text-7xl font-extrabold flex items-center justify-center">
                6000<span className="text-3xl md:text-5xl ml-1">+</span>
              </div>
              <div className="text-sm md:text-base text-white/90 font-semibold mt-4">
                Dự án hoàn thành
              </div>
            </div>

            <div className="flex flex-col items-center text-center p-6 border-r border-white/20 last:border-r-0">
              <div className="text-5xl md:text-7xl font-extrabold flex items-center justify-center">
                25<span className="text-3xl md:text-5xl ml-1">%</span>
              </div>
              <div className="text-sm md:text-base text-white/90 font-semibold mt-4">
                Tiết kiệm chi phí cho hoạt động kinh doanh
              </div>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <div className="text-5xl md:text-7xl font-extrabold flex items-center justify-center">
                20<span className="text-3xl md:text-5xl ml-1">+</span>
              </div>
              <div className="text-sm md:text-base text-white/90 font-semibold mt-4">
                Năm kinh nghiệm
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 11: TECHNOLOGIES & TOOLS ========== */}
      <section className="py-20 md:py-28 bg-[#fafafa]" id="technology">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e8001d]">Nền tảng kỹ thuật</span>
            <h2 className="text-3xl md:text-5xl font-black text-neutral-900 mt-2 mb-4">
              Technologies &amp; Tools
            </h2>
            <p className="text-neutral-600 text-base md:text-lg">
              Để tạo ra các trang web đáp ứng và hấp dẫn, Cánh Cam đã đầu tư vào các công nghệ tiên tiến. Khám phá các công nghệ hàng đầu của chúng tôi được tích hợp trong mọi dự án thiết kế web.
            </p>
          </div>

          <div className="flex flex-col gap-16">
            {/* Design Tools */}
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-neutral-200/80">
              <h4 className="text-center text-xl md:text-2xl font-bold text-neutral-900 mb-8 uppercase tracking-wider">
                Design Tools
              </h4>
              <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
                {designTools.map((tool, i) => (
                  <div
                    key={i}
                    className="p-4 bg-neutral-50 rounded-xl hover:shadow-md transition-all duration-300 border border-neutral-100 flex items-center justify-center hover:scale-105"
                    style={{ width: '160px', height: '80px' }}
                  >
                    <img
                      src={tool.img}
                      alt={tool.name}
                      title={tool.name}
                      className="max-h-12 max-w-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Web Technology */}
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-neutral-200/80">
              <h4 className="text-center text-xl md:text-2xl font-bold text-neutral-900 mb-8 uppercase tracking-wider">
                Web Technology
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
                {webTechs.map((tech, i) => (
                  <div
                    key={i}
                    className="p-4 bg-neutral-50 rounded-xl hover:shadow-md transition-all duration-300 border border-neutral-100 flex items-center justify-center hover:scale-105 h-24"
                  >
                    <img
                      src={tech.img}
                      alt={tech.name}
                      title={tech.name}
                      className="max-h-12 max-w-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Technology */}
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-neutral-200/80">
              <h4 className="text-center text-xl md:text-2xl font-bold text-neutral-900 mb-8 uppercase tracking-wider">
                Mobile technology
              </h4>
              <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
                {mobileTechs.map((tech, i) => (
                  <div
                    key={i}
                    className="p-4 bg-neutral-50 rounded-xl hover:shadow-md transition-all duration-300 border border-neutral-100 flex items-center justify-center hover:scale-105"
                    style={{ width: '160px', height: '80px' }}
                  >
                    <img
                      src={tech.img}
                      alt={tech.name}
                      title={tech.name}
                      className="max-h-12 max-w-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 12: FOLLOW US / BANNER FOOTER ========== */}
      <section className="relative z-20 overflow-hidden" id="banner-follow-us">
        <div className="relative min-h-[360px] md:min-h-[420px] flex items-center">
          <img
            src="https://www.canhcam.vn/wp-content/uploads/2024/09/footer_bg.jpg"
            alt="Cánh Cam - Web Design Agency uy tín chuyên nghiệp TPHCM"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 w-full py-16">
            <div className="max-w-2xl flex flex-col gap-6">
              <h3 className="text-3xl md:text-5xl font-black text-white leading-tight">
                Bạn đã sẵn sàng khởi động dự án của mình ngay hôm nay chưa?
              </h3>
              <div>
                <a
                  href="https://www.canhcam.vn/lien-he"
                  className="inline-flex items-center justify-center px-10 py-3.5 bg-white hover:bg-[#e8001d] text-neutral-900 hover:text-white font-bold text-base rounded-full shadow-xl transition-all duration-300 hover:scale-105"
                  title="Hãy theo chúng tôi trên hành trình chuyển đổi kỹ thuật số xanh"
                >
                  Liên hệ
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== VIDEO MODAL (MELBOURNE AUSTRALIA) ========== */}
      {showVideoModal && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowVideoModal(false)}
        >
          <div
            className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/20 hover:bg-[#e8001d] text-white rounded-full flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close video modal"
            >
              ✕
            </button>
            <div className="relative" style={{ paddingTop: '56.25%' }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/67QGX_3Kht8?autoplay=1"
                title="Cánh Cam Australia"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {/* ========== IMAGE LIGHTBOX MODAL ========== */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-[110] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setLightboxImg(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] flex items-center justify-center">
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute -top-12 right-0 w-10 h-10 bg-white/20 hover:bg-[#e8001d] text-white rounded-full flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close preview"
            >
              ✕
            </button>
            <img
              src={lightboxImg}
              alt="Preview"
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

    </div>
  );
}
