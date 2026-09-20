import React, { useState, useEffect } from 'react';

const STEPS = [
  {
    id: 1,
    num: '01',
    stepId: 'step-1',
    name: 'Thảo Luận Về Dự Án',
    slogan: 'Thấu hiểu nhanh, hành động kịp thời',
    desc: 'Trước khi triển khai dự án, chúng tôi dành thời gian để đánh giá mục tiêu, động lực và yêu cầu đặt ra. Tất cả các vị trí tại Cánh Cam từ bộ phận thiết kế cho đến lập trình đều tham gia vào cả giai đoạn trình bày lẫn giai đoạn đánh giá ban đầu của mỗi dự án.',
    bullets: [
      'Thiết lập mục tiêu và chỉ số KPI rõ ràng',
      'Phân tích các kênh truyền thông hiện tại của doanh nghiệp',
      'Phân tích đối thủ cạnh tranh trực tiếp & gián tiếp',
      'Xây dựng chân dung khách hàng mục tiêu (Customer Persona)',
      'Định hình trải nghiệm và hành vi tương tác người dùng',
    ],
    image: 'https://www.canhcam.vn/wp-content/uploads/2024/07/step-1.png',
  },
  {
    id: 2,
    num: '02',
    stepId: 'step-2',
    name: 'Lập Kế Hoạch',
    slogan: 'Nguồn tài nguyên giá trị nhất của doanh nghiệp là thời gian.',
    desc: 'Do đó, việc hoạch định chi tiết là vô cùng cần thiết. Cánh Cam sẽ để khách hàng tham gia vào quá trình hoạch định quan trọng này, chia sẻ thông tin có liên quan đến dự án cũng như thảo luận trước về những rủi ro có thể xảy ra.',
    bullets: [
      'Lên kế hoạch tiến độ dự án (Gantt Chart) và chiến lược nội dung',
      'Xác định diện mạo người dùng và các giai đoạn trong phễu mua hàng',
      'Phân loại và xây dựng sơ đồ cấu trúc thông tin (Sitemap / Wireframe)',
      'Hệ thống hóa các giải pháp kỹ thuật và hạ tầng công nghệ',
    ],
    image: 'https://www.canhcam.vn/wp-content/uploads/2024/07/step-2.png',
  },
  {
    id: 3,
    num: '03',
    stepId: 'step-3',
    name: 'Viết Nội Dung',
    slogan: 'Nội dung là trái tim của website.',
    desc: 'Thiết kế website đẹp thôi là chưa đủ, quan trọng nhất là phải thể hiện được điều khách hàng cần – nội dung tiếp thị và trải nghiệm sản phẩm/dịch vụ trên kênh online. Cánh Cam luôn bắt đầu mỗi dự án từ việc lên chiến lược nội dung bài bản gồm mục đích, mục tiêu và lộ trình đi đến thành công.',
    bullets: [
      'Hoạch định nội dung theo phễu chuyển đổi và nghiên cứu bộ keyword SEO',
      'Sáng tạo và sản xuất nội dung câu chuyện thương hiệu độc bản',
      'Tối ưu hóa các tiêu chuẩn kỹ thuật tìm kiếm (SEO On-page & Meta)',
      'Tích hợp thông điệp truyền thông mượt mà vào bố cục thiết kế',
    ],
    image: 'https://www.canhcam.vn/wp-content/uploads/2024/07/step-3.png',
  },
  {
    id: 4,
    num: '04',
    stepId: 'step-4',
    name: 'Thiết Kế',
    slogan: 'Phá vỡ mọi quy tắc thông thường',
    desc: 'Hơn ai hết Cánh Cam hiểu được người dùng mục tiêu mới là người quyết định tính hiệu quả của trang web. Vì thế chúng tôi luôn chủ động tiếp cận để nắm bắt những mong muốn tiềm ẩn của người dùng và hình thành bức tranh tổng thể nhằm đưa ra một thiết kế hoàn toàn khác biệt và mới lạ so với các đối thủ trong ngành nhưng vẫn đảm bảo giá trị UX/UI tối ưu.',
    bullets: [
      'Xác định gu thẩm mỹ chuẩn mực cho đối tượng khách hàng mục tiêu',
      'Làm nổi bật thế mạnh vượt trội của thương hiệu và sản phẩm',
      'Định hình phong cách đồ họa, hệ thống màu sắc và font chữ nhận diện',
      'Thiết kế giao diện UI đa màn hình (Desktop, Tablet, Mobile)',
      'Sáng tạo hiệu ứng chuyển động mượt mà (Micro-animations) tăng trải nghiệm',
    ],
    image: 'https://www.canhcam.vn/wp-content/uploads/2024/07/step-4.png',
  },
  {
    id: 5,
    num: '05',
    stepId: 'step-5',
    name: 'Lập Trình',
    slogan: 'Biến mọi ý tưởng thành hiện thực.',
    desc: 'Cánh Cam lập trình web-core trên nền tảng tân tiến nhất hiện nay, mang lại thuận tiện cho nhà quản trị web. Dễ dàng tích hợp các hệ thống như ERP, CRM, Digital Marketing, Cổng thanh toán, đối tác giao nhận, Sàn TMĐT… Tối ưu tốc độ load web & tiêu chí SEO là những ưu tiên hàng đầu.',
    bullets: [
      'Lập trình giao diện người dùng front-end chuẩn HTML5, CSS3, JavaScript/React',
      'Phát triển khối chức năng tiện ích chuyên sâu và logic nghiệp vụ backend',
      'Xây dựng hệ thống quản trị nội dung (CMS) trực quan, bảo mật cao',
      'Tích hợp các hệ thống API bên ngoài (Cổng thanh toán, ERP, CRM, Vận chuyển)',
    ],
    image: 'https://www.canhcam.vn/wp-content/uploads/2024/07/step-5.png',
  },
  {
    id: 6,
    num: '06',
    stepId: 'step-6',
    name: 'Chạy Chính Thức',
    slogan: 'Tận hưởng thành quả xứng đáng.',
    desc: 'Chọn Cánh Cam, bạn hoàn toàn có thể yên tâm về một trang web xứng tầm, xác lập được vị thế của doanh nghiệp bạn trên thị trường. Chúng tôi sẵn lòng trở thành người bạn đồng hành cùng chặng đường phát triển thương hiệu online của doanh nghiệp bắt đầu từ lúc website vận hành chính thức.',
    bullets: [
      'Thiết lập và kiểm tra hạ tầng Cloud Server, Domain, Chứng chỉ SSL',
      'Đóng gói source code chuẩn hóa và thiết lập sao lưu dự phòng tự động',
      'Vận hành thử nghiệm (UAT), rà soát tương thích đa trình duyệt và bảo mật',
      'Bàn giao tài liệu hướng dẫn và đào tạo đội ngũ quản trị website',
      'Theo dõi chỉ số hiệu năng và bảo trì đồng hành trọn đời',
    ],
    image: 'https://www.canhcam.vn/wp-content/uploads/2024/07/step-6.png',
  },
];

export default function WorkflowPage({ onNavigateHome }) {
  const [activeStep, setActiveStep] = useState(1);

  // Lắng nghe scroll để tự động highlight step tương ứng trên thanh điều hướng
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 240;

      for (let i = STEPS.length - 1; i >= 0; i--) {
        const stepEl = document.getElementById(STEPS[i].stepId);
        if (stepEl) {
          const top = stepEl.offsetTop;
          if (scrollPosition >= top) {
            setActiveStep(STEPS[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToStep = (stepId, id) => {
    setActiveStep(id);
    const el = document.getElementById(stepId);
    if (el) {
      const yOffset = -140;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white font-[Montserrat,sans-serif] text-neutral-800 min-h-screen">

      {/* ========== SECTION 1: HERO BANNER ========== */}
      <section className="page-banner-main relative overflow-hidden bg-black min-h-[460px] md:min-h-[540px] lg:min-h-[600px] flex items-center">
        {/* Background Image */}
        <picture className="absolute inset-0 w-full h-full">
          <source
            type="image/webp"
            srcSet="https://www.canhcam.vn/wp-content/uploads/2024/07/banner_workflow_pc.jpeg"
            media="(min-width:650px)"
          />
          <source
            type="image/webp"
            srcSet="https://www.canhcam.vn/wp-content/uploads/2024/07/banner_workflow_pc.jpeg"
          />
          <img
            src="https://www.canhcam.vn/wp-content/uploads/2024/07/banner_workflow_pc.jpeg"
            alt="Quy trình làm việc Cánh Cam"
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
              <span className="w-2 h-2 rounded-full bg-[#e8001d]" />
              Tiêu chuẩn chất lượng quốc tế
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-6">
              Quy trình làm việc
            </h1>
            <p className="text-white/85 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              Hệ thống 6 bước chuyên nghiệp được đúc kết qua hơn 20 năm thực chiến, kết hợp quản lý dự án chặt chẽ và sáng tạo không giới hạn.
            </p>
          </div>
        </div>
      </section>

      {/* ========== SECTION 2: BREADCRUMB ========== */}
      <section className="border-b border-neutral-200 bg-neutral-50/70">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-4 flex items-center justify-between text-xs">
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
            <span className="text-neutral-800 font-semibold">Quy trình</span>
          </nav>

          <span className="hidden sm:inline-block text-neutral-500 font-medium">
            6 Giai đoạn phát triển chuẩn mực
          </span>
        </div>
      </section>

      {/* ========== SECTION 3: INTRO MANIFESTO ========== */}
      <section className="py-16 md:py-20 bg-neutral-50 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-[#e8001d] font-bold block mb-3">
            Phương châm hành động
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-neutral-900 leading-tight mb-6">
            Đầy cảm hứng, thân thiện và đáng tin cậy!
          </h2>
          <p className="text-neutral-600 text-base md:text-xl font-light leading-relaxed">
            Bằng cách tiếp cận sáng tạo được kết hợp công nghệ tiên phong và chất lượng quản lý tiêu chuẩn cao, Cánh Cam sẽ gieo sự tự tin vào trang web để bạn thực sự tỏa sáng khi đạt mục tiêu tăng doanh thu lẫn mức độ nhận biết thương hiệu.
          </p>
        </div>
      </section>

      {/* ========== SECTION 4: STICKY WORKFLOW PROCESS BAR (6 STEPS TABS) ========== */}
      <section className="sticky top-16 z-30 py-4 px-4 md:px-8 bg-white/80 backdrop-blur-md border-y border-neutral-200 shadow-sm transition-all duration-300">
        <div className="max-w-6xl mx-auto">
          {/* Mobile / Desktop Step Buttons */}
          <div className="flex items-center justify-between gap-1 sm:gap-2 overflow-x-auto no-scrollbar py-1">
            {STEPS.map((step) => {
              const isActive = activeStep === step.id;
              return (
                <button
                  key={step.id}
                  onClick={() => scrollToStep(step.stepId, step.id)}
                  className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap flex-shrink-0 ${
                    isActive
                      ? 'bg-[#e8001d] text-white shadow-md shadow-[#e8001d]/30 scale-105'
                      : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900'
                  }`}
                >
                  <span className={`font-mono font-bold text-xs sm:text-sm ${isActive ? 'text-white' : 'text-[#e8001d]'}`}>
                    {step.num}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold">{step.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== SECTION 5: DETAILED STEP SECTIONS (6 STEPS) ========== */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col gap-20 lg:gap-28">
          {STEPS.map((step, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={step.id}
                id={step.stepId}
                className="scroll-mt-36 p-6 md:p-10 lg:p-12 rounded-3xl bg-neutral-50/80 border border-neutral-200/80 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                  {/* Left Column: Number & Content */}
                  <div className={`lg:col-span-7 flex flex-col gap-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="flex items-center gap-4">
                      <span className="text-5xl md:text-6xl font-black text-[#e8001d] font-mono tracking-tighter">
                        {step.num}
                      </span>
                      <span className="h-px flex-1 bg-neutral-200" />
                      <span className="px-3 py-1 bg-white border border-neutral-200 text-neutral-500 rounded-full text-xs font-semibold">
                        Giai đoạn {step.id}/6
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-4xl font-black text-neutral-900 leading-tight">
                      {step.name}
                    </h3>

                    <h4 className="text-base md:text-lg text-[#e8001d] font-semibold italic">
                      "{step.slogan}"
                    </h4>

                    <p className="text-neutral-600 text-sm md:text-base leading-relaxed font-light">
                      {step.desc}
                    </p>

                    {/* Bullet Points Checklist */}
                    <div className="pt-2">
                      <h5 className="text-xs uppercase tracking-wider text-neutral-400 font-bold mb-3">
                        Nội dung công việc cốt lõi:
                      </h5>
                      <ul className="flex flex-col gap-2.5">
                        {step.bullets.map((b, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-3 text-xs md:text-sm text-neutral-700">
                            <span className="w-5 h-5 rounded-full bg-[#e8001d]/10 text-[#e8001d] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                              ✓
                            </span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column: Illustration Image */}
                  <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-xl bg-white border border-neutral-200 group">
                      <img
                        src={step.image}
                        alt={step.name}
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========== SECTION 6: QUALITY COMMITMENT (3 PILLARS) ========== */}
      <section className="bg-neutral-900 text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-[#e8001d] font-bold block mb-3">
              Cam kết vận hành
            </span>
            <h3 className="text-3xl md:text-5xl font-black leading-tight mb-4">
              Chuẩn mực tạo nên sự khác biệt
            </h3>
            <p className="text-white/70 text-sm md:text-base font-light">
              Quy trình của Cánh Cam giúp doanh nghiệp kiểm soát 100% chất lượng và tiến độ.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-4">
              <span className="text-4xl text-[#e8001d] font-black">01</span>
              <h4 className="text-xl font-bold text-white">Minh Bạch Tiến Độ</h4>
              <p className="text-white/60 text-sm leading-relaxed font-light">
                Doanh nghiệp luôn có thể theo dõi tiến độ từng đầu việc hàng tuần qua hệ thống quản lý dự án chuyên nghiệp.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-4">
              <span className="text-4xl text-[#e8001d] font-black">02</span>
              <h4 className="text-xl font-bold text-white">Đảm Bảo Deadline</h4>
              <p className="text-white/60 text-sm leading-relaxed font-light">
                Cam kết bàn giao đúng hạn theo từng mốc tiến độ thỏa thuận trong hợp đồng với sự kiểm định chất lượng khắt khe.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-4">
              <span className="text-4xl text-[#e8001d] font-black">03</span>
              <h4 className="text-xl font-bold text-white">Hỗ Trợ Toàn Diện</h4>
              <p className="text-white/60 text-sm leading-relaxed font-light">
                Đội ngũ chuyên viên kỹ thuật luôn đồng hành từ khâu khởi tạo ý tưởng đến suốt thời gian website vận hành online.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 7: CTA BANNER FOLLOW US (Cuối trang) ========== */}
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
