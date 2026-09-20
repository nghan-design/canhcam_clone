import React, { useState } from 'react';

// Dữ liệu 7 dịch vụ chính của Cánh Cam
const SERVICES = [
  {
    id: 1,
    num: '01',
    title: 'Thiết Kế Website Bán Hàng Chuyên Nghiệp, Hiện Đại',
    tagline: 'E-Commerce Solutions',
    desc: 'Gia tăng doanh số bán hàng trên kênh online cũng như xây dựng vị thế trên thị trường của bạn với những giải pháp thương mại điện tử (TMĐT) hàng đầu. Đó là những gì dịch vụ thiết kế website bán hàng của chúng tôi mang lại.',
    image: 'https://www.canhcam.vn/wp-content/uploads/2024/10/ecomerce-webdesign.jpg',
    badges: ['E-Commerce', 'Tối ưu tỷ lệ chuyển đổi', 'Thanh toán đa kênh', 'Quản trị đồng bộ'],
    features: [
      'Giao diện UI/UX thiết kế độc bản theo phong cách thương hiệu',
      'Tích hợp cổng thanh toán: VNPay, Momo, ZaloPay, OnePay, Visa/Mastercard',
      'Đồng bộ tồn kho đa sàn: Shopee, Lazada, TikTok Shop, POS',
      'Tối ưu tốc độ tải trang dưới 1.8s đạt chuẩn Google PageSpeed 90+',
    ],
    link: 'https://www.canhcam.vn/thiet-ke-website-ban-hang',
  },
  {
    id: 2,
    num: '02',
    title: 'Dịch Vụ Chăm Sóc Website',
    tagline: 'Website Maintenance & Care',
    desc: 'Chăm sóc website là một trong những yếu tố quan trọng nhất để duy trì sự hiện diện trực tuyến hiệu quả. Một trang web không chỉ cần được thiết kế đẹp mắt mà còn phải hoạt động ổn định và liên tục, từ việc tối ưu hóa tốc độ tải trang đến việc bảo mật thông tin của người dùng.',
    image: 'https://www.canhcam.vn/wp-content/uploads/2025/02/featured.webp',
    badges: ['Bảo trì 24/7', 'Bảo mật SSL/Cloudflare', 'Tối ưu SEO on-page', 'Sao lưu tự động'],
    features: [
      'Giám sát hệ thống và khắc phục sự cố 24/7 liên tục',
      'Cập nhật nội dung, banner khuyến mãi định kỳ chuẩn SEO',
      'Quét mã độc, vá lỗ hổng bảo mật và chống tấn công DDoS',
      'Báo cáo hiệu năng hàng tháng, tối ưu dung lượng và băng thông',
    ],
    link: 'https://www.canhcam.vn/cham-soc-website',
  },
  {
    id: 3,
    num: '03',
    title: 'Thiết Kế App Mobile',
    tagline: 'Mobile App Development',
    desc: 'Thiết kế và lập trình chuyên nghiệp các ứng dụng di động và ứng dụng web (MVP), cung cấp các sản phẩm phần mềm phù hợp với nhu cầu chuyển đổi số và trải nghiệm thân thiện với người dùng trên mọi thiết bị.',
    image: 'https://www.canhcam.vn/wp-content/uploads/2024/10/thiet-ke-mobile-scaled.jpg',
    badges: ['iOS & Android', 'React Native & Flutter', 'UI/UX Mobile First', 'Push Notifications'],
    features: [
      'Ứng dụng mượt mà, tối ưu trên cả 2 hệ điều hành iOS & Android',
      'Hệ thống thông báo đẩy (Push Notifications) thông minh giữ chân khách hàng',
      'Đăng nhập một chạm qua Apple ID, Google, Zalo, OTP SMS',
      'Dễ dàng tích hợp với hệ thống ERP/CRM có sẵn của doanh nghiệp',
    ],
    link: 'https://www.canhcam.vn/thiet-ke-app-mobile',
  },
  {
    id: 4,
    num: '04',
    title: 'Sáng Tạo Nội Dung',
    tagline: 'Creative Content & Copywriting',
    desc: 'Xây dựng nội dung website sáng tạo, thu hút và giữ chân khách hàng hiệu quả, đặc biệt từ khóa, nội dung được tối ưu chuẩn SEO giúp gia tăng thứ hạng trên công cụ tìm kiếm bởi đội ngũ Copywriter dày dặn kinh nghiệm.',
    image: 'https://www.canhcam.vn/wp-content/uploads/2024/10/mobileapp.jpg',
    badges: ['Content chuẩn SEO', 'Storytelling thương hiệu', 'Bài viết PR báo chí', 'Kịch bản Video'],
    features: [
      'Nghiên cứu bộ từ khóa tiềm năng theo phễu hành vi người dùng',
      'Xây dựng câu chuyện thương hiệu chạm đến cảm xúc khách hàng mục tiêu',
      'Bài viết chuẩn SEO kỹ thuật cao: Schema, thẻ heading, meta title/description',
      'Sáng tạo nội dung social, infographic và tài liệu bán hàng (Sales Kit)',
    ],
    link: 'https://www.canhcam.vn/sang-tao-noi-dung',
  },
  {
    id: 5,
    num: '05',
    title: 'Chiến Dịch Quảng Cáo',
    tagline: 'Performance Marketing & Ads',
    desc: 'Chiến dịch quảng cáo bám sát mục tiêu kinh doanh sẽ mang bạn đến gần khách hàng tiềm năng một cách nhanh chóng với chi phí tối ưu nhất, đo lường chuyển đổi minh bạch và tăng trưởng doanh thu vượt bậc.',
    image: 'https://www.canhcam.vn/wp-content/uploads/2024/10/onlinemarketing.jpg',
    badges: ['Google Ads', 'Meta Ads', 'TikTok Ads', 'Tối ưu ROI/ROAS'],
    features: [
      'Thiết lập chiến dịch tìm kiếm Google Search Ads, Shopping Ads, GDN',
      'Quảng cáo đa tầng Facebook/Instagram Ads tiếp cận đúng đối tượng mục tiêu',
      'Retargeting bám đuổi thông minh khách hàng đã từng vào website',
      'Đo lường chỉ số ROI/ROAS chi tiết, minh bạch qua Google Analytics 4',
    ],
    link: 'https://www.canhcam.vn/chien-dich-quang-cao',
  },
  {
    id: 6,
    num: '06',
    title: 'Dịch Vụ Hosting & Domain',
    tagline: 'Cloud Hosting & Domain Name',
    desc: 'Dịch vụ hosting và domain là hai yếu tố không thể thiếu trong thiết kế website. Domain đóng vai trò là địa chỉ định danh duy nhất trên internet, trong khi Cloud Hosting chất lượng cao là nền tảng vững chắc đảm bảo website vận hành ổn định và tải nhanh.',
    image: 'https://www.canhcam.vn/wp-content/uploads/2024/08/hosting-ten-mien.png',
    badges: ['NVMe SSD Enterprise', 'Uptime 99.9%', 'Bảo mật DDoS', 'Miễn phí SSL Let\'s Encrypt'],
    features: [
      'Máy chủ đám mây đặt tại Tier 3 Data Center (Viettel, FPT, VNPT)',
      'Ổ cứng 100% NVMe SSD tốc độ đọc/ghi gấp 10 lần SSD thông thường',
      'Hỗ trợ đăng ký tên miền quốc tế (.com, .net) và quốc gia (.vn, .com.vn)',
      'Backup tự động hàng ngày (Daily Backup) lưu trữ 14 ngày gần nhất',
    ],
    link: 'https://www.canhcam.vn/hosting-ten-mien',
  },
  {
    id: 7,
    num: '07',
    title: 'Chứng Chỉ Số SSL',
    tagline: 'SSL Security Certificates',
    desc: 'Bảo vệ thông tin truyền tải giữa người dùng và máy chủ website, nâng cao độ uy tín của doanh nghiệp và cải thiện thứ hạng tìm kiếm trên Google với các gói chứng chỉ số SSL tiêu chuẩn quốc tế từ các Certificate Authority hàng đầu thế giới.',
    image: 'https://www.canhcam.vn/wp-content/uploads/2024/10/banner-mobile-4.webp',
    badges: ['Mã hóa 256-bit', 'Xác thực DV / OV / EV', 'Google SEO Ranking', 'Thanh địa chỉ xanh'],
    features: [
      'Mã hóa dữ liệu cấp cao bảo vệ thông tin mật khẩu và giao dịch thẻ',
      'Loại bỏ cảnh báo "Không bảo mật" gây mất uy tín trên trình duyệt Chrome/Safari',
      'Tăng điểm uy tín SEO Google nhờ giao thức HTTPS chuẩn bảo mật',
      'Đa dạng gói: DV cá nhân, OV tổ chức doanh nghiệp, EV thanh xanh cao cấp',
    ],
    link: 'https://www.canhcam.vn/chung-chi-so-ssl',
  },
];

export default function ServicesPage({ onNavigateHome }) {
  const [selectedService, setSelectedService] = useState(null);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', service: '', note: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleOpenConsultation = (service) => {
    setSelectedService(service);
    setFormData((prev) => ({ ...prev, service: service.title }));
    setFormSubmitted(false);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setSelectedService(null);
      setFormSubmitted(false);
      setFormData({ name: '', phone: '', email: '', service: '', note: '' });
    }, 2500);
  };

  return (
    <div className="bg-white font-[Montserrat,sans-serif] text-neutral-800 min-h-screen">

      {/* ========== SECTION 1: HERO BANNER ========== */}
      <section className="page-banner-main relative overflow-hidden bg-black min-h-[460px] md:min-h-[540px] lg:min-h-[600px] flex items-center">
        {/* Background Image */}
        <picture className="absolute inset-0 w-full h-full">
          <source
            type="image/webp"
            srcSet="https://www.canhcam.vn/wp-content/uploads/2025/02/dich-vu.webp"
            media="(min-width:650px)"
          />
          <source
            type="image/webp"
            srcSet="https://www.canhcam.vn/wp-content/uploads/2025/02/dich-vu-mobile.webp"
          />
          <img
            src="https://www.canhcam.vn/wp-content/uploads/2025/02/dich-vu.webp"
            alt="Dịch vụ Cánh Cam"
            className="w-full h-full object-cover opacity-60"
          />
        </picture>

        {/* Overlay Gradients */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background: 'radial-gradient(499.72% 141.42% at 0 100%, rgba(0,0,0,0.85) 0, rgba(0,0,0,0.4) 60%, transparent 100%)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 z-10" />

        {/* Vertical Grid Lines */}
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px)',
            backgroundSize: '25% 100%',
          }}
        />

        {/* Banner Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-16 w-full pt-28 pb-16">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white/90 text-xs font-semibold tracking-wider uppercase mb-6 border border-white/15">
              <span className="w-2 h-2 rounded-full bg-[#e8001d] animate-ping" />
              Giải pháp số toàn diện
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-6">
              Dịch vụ
            </h1>
            <p className="text-white/85 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              Cung cấp hệ sinh thái dịch vụ kỹ thuật số trọn gói: từ thiết kế website bán hàng cao cấp, phát triển ứng dụng di động, sáng tạo nội dung chuẩn SEO đến hạ tầng Cloud Hosting tốc độ cao.
            </p>
          </div>
        </div>
      </section>

      {/* ========== SECTION 2: BREADCRUMB & STATS STRIP ========== */}
      <section className="border-b border-neutral-200 bg-neutral-50/70">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs">
          {/* Breadcrumb */}
          <nav aria-label="breadcrumbs" className="flex items-center gap-2 text-neutral-500 font-medium">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (onNavigateHome) onNavigateHome();
              }}
              className="hover:text-[#e8001d] transition-colors"
            >
              Trang chủ
            </a>
            <span className="text-neutral-300">/</span>
            <span className="text-neutral-800 font-semibold">Dịch Vụ</span>
          </nav>

          {/* Quick Stats Highlights */}
          <div className="flex items-center gap-6 text-neutral-600 font-medium overflow-x-auto no-scrollbar">
            <span className="flex items-center gap-1.5 whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e8001d]" />
              <strong>7</strong> Dịch vụ trọng tâm
            </span>
            <span className="flex items-center gap-1.5 whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e8001d]" />
              <strong>20+</strong> Năm kinh nghiệm
            </span>
            <span className="flex items-center gap-1.5 whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e8001d]" />
              <strong>2,500+</strong> Dự án thành công
            </span>
          </div>
        </div>
      </section>

      {/* ========== SECTION 3: DETAILED SERVICES LIST (7 SERVICES) ========== */}
      <section className="relative z-10 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col gap-24 lg:gap-32">
          {SERVICES.map((service, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={service.id}
                id={`service-${service.id}`}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
              >
                {/* Text Content Column */}
                <div
                  className={`lg:col-span-6 flex flex-col gap-6 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  {/* Number & Tagline */}
                  <div className="flex items-center gap-4">
                    <span className="text-3xl md:text-4xl font-black text-[#e8001d]/30 font-mono tracking-tighter">
                      {service.num}
                    </span>
                    <span className="h-px flex-1 bg-neutral-200" />
                    <span className="text-xs uppercase tracking-widest text-[#e8001d] font-bold">
                      {service.tagline}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-neutral-900 leading-tight tracking-tight hover:text-[#e8001d] transition-colors">
                    <a href={service.link} target="_blank" rel="noreferrer">
                      {service.title}
                    </a>
                  </h2>

                  {/* Description */}
                  <p className="text-neutral-600 text-base md:text-lg leading-relaxed font-light">
                    {service.desc}
                  </p>

                  {/* Key Features List */}
                  <div className="bg-neutral-50 rounded-2xl p-5 md:p-6 border border-neutral-100 flex flex-col gap-3">
                    <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-bold">Điểm nổi bật</h4>
                    <ul className="grid grid-cols-1 gap-2.5">
                      {service.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-3 text-sm text-neutral-700">
                          <svg
                            className="w-5 h-5 text-[#e8001d] flex-shrink-0 mt-0.5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {service.badges.map((badge, bIdx) => (
                      <span
                        key={bIdx}
                        className="px-3 py-1 bg-neutral-100 text-neutral-600 rounded-full text-xs font-medium"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex items-center gap-4 pt-2">
                    <button
                      onClick={() => handleOpenConsultation(service)}
                      className="px-7 py-3 bg-[#e8001d] hover:bg-[#c70019] text-white rounded-full text-sm font-bold shadow-lg shadow-[#e8001d]/20 transition-all duration-300 hover:scale-105 cursor-pointer flex items-center gap-2"
                    >
                      Nhận tư vấn ngay
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>

                    <a
                      href={service.link}
                      target="_blank"
                      rel="noreferrer"
                      className="px-6 py-3 border border-neutral-300 hover:border-neutral-800 text-neutral-700 hover:text-neutral-900 rounded-full text-sm font-semibold transition-colors duration-200"
                    >
                      Tìm hiểu thêm
                    </a>
                  </div>
                </div>

                {/* Media Image Column */}
                <div
                  className={`lg:col-span-6 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="relative group rounded-3xl overflow-hidden shadow-2xl bg-neutral-900 border border-neutral-200/80">
                    <div className="aspect-[16/11] overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" />

                    {/* Quick Badge */}
                    <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white pointer-events-none">
                      <span className="px-3.5 py-1.5 bg-black/60 backdrop-blur-md rounded-full text-xs font-semibold">
                        Cánh Cam Agency
                      </span>
                      <span className="w-10 h-10 rounded-full bg-[#e8001d] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                          <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========== SECTION 4: WHY CHOOSE US (TIÊU CHUẨN DỊCH VỤ CÁNH CAM) ========== */}
      <section className="bg-neutral-900 text-white py-20 lg:py-28 relative overflow-hidden">
        {/* Background Subtle Glows */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#e8001d]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#e8001d]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-[#e8001d] font-bold block mb-3">
              Cam kết chất lượng
            </span>
            <h3 className="text-3xl md:text-5xl font-black leading-tight tracking-tight mb-5">
              Tại sao hơn 2,500+ doanh nghiệp chọn Cánh Cam?
            </h3>
            <p className="text-white/70 text-base md:text-lg font-light leading-relaxed">
              Mỗi giải pháp được thiết kế riêng biệt để giúp doanh nghiệp bứt phá doanh số và khẳng định vị thế trên thị trường số.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                ),
                title: '20+ Năm Kinh Nghiệm',
                desc: 'Được thành lập từ năm 2005, Cánh Cam là đối tác công nghệ tin cậy của các tập đoàn đa quốc gia và thương hiệu hàng đầu.',
              },
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ),
                title: 'Thiết Kế Độc Bản',
                desc: 'Không sử dụng template có sẵn. 100% giao diện được nghiên cứu và thiết kế riêng biệt theo cá tính từng thương hiệu.',
              },
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                ),
                title: 'Công Nghệ Tiên Tiến',
                desc: 'Ứng dụng kiến trúc headless, React, Node.js, Cloudflare CDN và hạ tầng Cloud Server hiệu năng vượt trội.',
              },
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                ),
                title: 'Đồng Hành Trọn Đời',
                desc: 'Chính sách bảo hành, bảo trì và hỗ trợ kỹ thuật nhanh chóng 24/7 giúp website của bạn luôn vận hành trơn tru.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#e8001d]/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col gap-4"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#e8001d]/20 text-[#e8001d] flex items-center justify-center">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-white">{item.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SECTION 5: MODAL TƯ VẤN DỊCH VỤ ========== */}
      {selectedService && (
        <div
          className="fixed inset-0 z-[120] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-xl w-full p-6 md:p-8 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 bg-neutral-100 hover:bg-[#e8001d] text-neutral-600 hover:text-white rounded-full flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Đóng"
            >
              ✕
            </button>

            {formSubmitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">Gửi yêu cầu thành công!</h3>
                <p className="text-neutral-600 text-sm">
                  Chuyên viên Cánh Cam sẽ liên hệ lại với bạn trong vòng 15 phút.
                </p>
              </div>
            ) : (
              <div>
                <span className="text-xs uppercase tracking-wider text-[#e8001d] font-bold block mb-1">
                  Đăng ký tư vấn
                </span>
                <h3 className="text-xl md:text-2xl font-black text-neutral-900 mb-4 leading-snug">
                  {selectedService.title}
                </h3>
                <p className="text-neutral-500 text-xs md:text-sm mb-6">
                  Để lại thông tin để nhận báo giá chi tiết và lộ trình triển khai phù hợp với ngân sách của doanh nghiệp.
                </p>

                <form onSubmit={handleSubmitForm} className="flex flex-col gap-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">Họ và tên *</label>
                    <input
                      type="text"
                      required
                      placeholder="Ví dụ: Nguyễn Văn A"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 focus:border-[#e8001d] focus:outline-none text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">Số điện thoại *</label>
                      <input
                        type="tel"
                        required
                        placeholder="0901 234 567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 focus:border-[#e8001d] focus:outline-none text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">Email</label>
                      <input
                        type="email"
                        placeholder="email@congty.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 focus:border-[#e8001d] focus:outline-none text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">Ghi chú yêu cầu</label>
                    <textarea
                      rows="3"
                      placeholder="Nêu sơ bộ quy mô dự án hoặc tính năng bạn mong muốn..."
                      value={formData.note}
                      onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 focus:border-[#e8001d] focus:outline-none text-sm resize-none"
                    />
                  </div>

                  <div className="flex items-center justify-end gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setSelectedService(null)}
                      className="px-5 py-2.5 rounded-full border border-neutral-300 text-neutral-700 hover:bg-neutral-100 text-sm font-semibold transition-colors cursor-pointer"
                    >
                      Hủy
                    </button>
                    <button
                      type="submit"
                      className="px-7 py-2.5 rounded-full bg-[#e8001d] hover:bg-[#c70019] text-white text-sm font-bold shadow-lg shadow-[#e8001d]/25 transition-all cursor-pointer"
                    >
                      Gửi yêu cầu
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ========== SECTION 6: CTA BANNER FOLLOW US (Cuối trang) ========== */}
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
                  className="inline-flex items-center justify-center px-10 py-3.5 bg-white hover:bg-[#e8001d] text-neutral-900 hover:text-white font-bold text-base rounded-full shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
                  title="Hãy theo chúng tôi trên hành trình chuyển đổi kỹ thuật số xanh"
                >
                  Liên hệ
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
