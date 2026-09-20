import React, { useState } from 'react';

// Featured Categories Data
const CATEGORIES = [
  {
    id: 'kinh-nghiem-thiet-ke-website',
    name: 'Kinh nghiệm thiết kế website',
    image: 'https://www.canhcam.vn/wp-content/uploads/2026/07/kinh-nghiem-thiet-ke-website.webp',
    categoriesCount: 3,
    articlesCount: 213,
    articles: [
      {
        title: 'Thiết Kế Website Cơ Khí – Giải Pháp Phát Triển Doanh Nghiệp B2B',
        date: '2024-08-15',
        readTime: '6 phút đọc',
        summary: 'Website ngành cơ khí không chỉ đơn thuần là bộ mặt thương hiệu, mà còn là công cụ kinh doanh B2B đắc lực giúp tiếp cận đối tác chiến lược và gia tăng năng lực cạnh tranh.'
      },
      {
        title: 'Để thiết kế website bất động sản đẳng cấp chuyên nghiệp',
        date: '2024-08-12',
        readTime: '8 phút đọc',
        summary: 'Bất động sản là ngành hàng giá trị cao đòi hỏi website phải phản ánh được đẳng cấp sang trọng, tích hợp bản đồ quy hoạch, hình ảnh 360 độ và bộ lọc dự án trực quan.'
      },
      {
        title: 'Thiết kế website ngân hàng chuyên nghiệp',
        date: '2024-08-10',
        readTime: '7 phút đọc',
        summary: 'Khám phá những tiêu chuẩn bảo mật khắt khe, thiết kế UX/UI tối ưu và hạ tầng công nghệ bền vững cần có khi xây dựng cổng thông tin số cho ngân hàng và tổ chức tài chính.'
      },
    ],
  },
  {
    id: 'kien-thuc-website',
    name: 'Kiến thức về website/hosting',
    image: 'https://www.canhcam.vn/wp-content/uploads/2026/07/kien-thus-ve-website.webp',
    categoriesCount: 5,
    articlesCount: 112,
    articles: [
      {
        title: 'Dịch vụ chăm sóc website chuyên nghiệp',
        date: '2024-08-14',
        readTime: '5 phút đọc',
        summary: 'Tại sao doanh nghiệp cần dịch vụ chăm sóc website định kỳ? Bảo trì hệ thống, cập nhật bảo mật, tối ưu tốc độ và làm mới nội dung là chìa khóa duy trì thứ hạng SEO.'
      },
      {
        title: 'Thiết kế website Shopify chuyên nghiệp & Hướng dẫn chi tiết',
        date: '2024-08-05',
        readTime: '10 phút đọc',
        summary: 'Tất tần tật quy trình xây dựng website thương mại điện tử trên nền tảng Shopify: từ chọn giao diện, thiết lập cổng thanh toán quốc tế đến tối ưu chuyển đổi bán hàng.'
      },
      {
        title: 'Top 20 Web hosting Free không chứa quảng cáo phổ biến',
        date: '2024-07-28',
        readTime: '6 phút đọc',
        summary: 'Đánh giá chi tiết 20 dịch vụ hosting miễn phí uy tín, tốc độ ổn định, hỗ trợ SSL và không bị chèn quảng cáo khó chịu dành cho sinh viên và dự án thử nghiệm.'
      },
    ],
  },
  {
    id: 'kien-thuc-seo',
    name: 'Kiến thức SEO',
    image: 'https://www.canhcam.vn/wp-content/uploads/2026/07/kien-thuc-seo-1.webp',
    categoriesCount: null,
    articlesCount: 52,
    articles: [
      {
        title: 'Top 15 Công Ty Dịch Vụ SEO 2026',
        date: '2025-01-10',
        readTime: '9 phút đọc',
        summary: 'Tổng hợp và xếp hạng các agency cung cấp dịch vụ SEO uy tín nhất Việt Nam dựa trên năng lực triển khai thực tế, cam kết tăng trưởng traffic và tỷ lệ ROI minh bạch.'
      },
      {
        title: 'SEO là gì? Tổng quan về SEO và cách SEO website hiệu quả',
        date: '2024-08-08',
        readTime: '12 phút đọc',
        summary: 'Cẩm nang toàn diện về tối ưu hóa công cụ tìm kiếm: SEO Onpage, SEO Offpage, SEO Technical, thuật toán Google Search và cách xây dựng chiến lược từ khóa thống trị trang 1.'
      },
      {
        title: 'Dịch vụ SEO tổng thể – Giải pháp tăng trưởng bền vững cho doanh nghiệp',
        date: '2024-07-15',
        readTime: '7 phút đọc',
        summary: 'Khác biệt giữa SEO từ khóa đơn lẻ và SEO tổng thể: cách thức bao phủ toàn bộ nhu cầu tìm kiếm của khách hàng và chuyển hóa traffic thành doanh thu dài hạn.'
      },
    ],
  },
  {
    id: 'marketing',
    name: 'Kiến thức Marketing',
    image: 'https://www.canhcam.vn/wp-content/uploads/2026/07/kien-thuc-marketing.webp',
    categoriesCount: 2,
    articlesCount: 112,
    articles: [
      {
        title: 'Influencer Marketing là gì? Xây dựng chiến lược influencer marketing hiệu quả',
        date: '2024-08-01',
        readTime: '8 phút đọc',
        summary: 'Bí quyết lựa chọn đúng KOLs/KOCs phù hợp với tệp khách hàng, đo lường hiệu quả chiến dịch và phòng ngừa rủi ro khủng hoảng truyền thông trong kỷ nguyên số.'
      },
      {
        title: 'Seeding là gì? Các phương pháp seeding hiệu quả',
        date: '2024-07-22',
        readTime: '5 phút đọc',
        summary: 'Nghệ thuật gieo mầm thông tin tự nhiên trên các hội nhóm mạng xã hội, diễn đàn và blog nhằm kích thích thảo luận và định hướng dư luận tích cực về sản phẩm.'
      },
      {
        title: 'Top kênh bán hàng B2B hiệu quả và tăng doanh số',
        date: '2024-07-10',
        readTime: '7 phút đọc',
        summary: 'Phân tích các kênh tiếp cận khách hàng doanh nghiệp hiệu quả nhất: LinkedIn, Website Inbound Marketing, Hội chợ thương mại, Email Outreach và Direct Sales.'
      },
    ],
  },
  {
    id: 'cong-nghe',
    name: 'Công nghệ',
    image: 'https://www.canhcam.vn/wp-content/uploads/2026/07/cong-nghe.webp',
    categoriesCount: null,
    articlesCount: 58,
    articles: [
      {
        title: '24 cách tải video trên web từ website không cho download',
        date: '2024-08-09',
        readTime: '11 phút đọc',
        summary: 'Hướng dẫn cụ thể 24 cách tải video chất lượng cao từ YouTube, Facebook, TikTok và các trang web chặn download bằng tiện ích trình duyệt, phần mềm và script mã nguồn mở.'
      },
      {
        title: 'Ứng dụng AI cho doanh nghiệp: lợi ích, giải pháp và các bước triển khai hiệu quả',
        date: '2024-07-30',
        readTime: '9 phút đọc',
        summary: 'Làm thế nào để tích hợp trí tuệ nhân tạo (Generative AI, Chatbot, tự động hóa quy trình) vào vận hành doanh nghiệp để cắt giảm 40% chi phí và nâng cao năng suất.'
      },
      {
        title: 'Top Phần Mềm Bán Hàng Phổ Biến, Dễ Dùng Nhất',
        date: '2024-07-18',
        readTime: '6 phút đọc',
        summary: 'So sánh tính năng, chi phí và khả năng mở rộng của các phần mềm quản lý bán hàng POS hàng đầu dành cho cửa hàng bán lẻ và chuỗi kinh doanh đa chi nhánh.'
      },
    ],
  },
  {
    id: 'tai-phan-mem',
    name: 'Tải phần mềm',
    image: 'https://www.canhcam.vn/wp-content/uploads/2026/07/tai-phan-mem.webp',
    categoriesCount: null,
    articlesCount: 23,
    articles: [
      {
        title: '24 cách tải video trên web từ website không cho download',
        date: '2024-08-09',
        readTime: '11 phút đọc',
        summary: 'Cách lấy link video trực tiếp từ mã nguồn HTML5, sử dụng DevTools F12 và các công cụ dòng lệnh chuyên dụng không dính virus.'
      },
      {
        title: 'Download Internet Download Manager – Tải IDM miễn phí',
        date: '2024-08-02',
        readTime: '4 phút đọc',
        summary: 'Cập nhật phiên bản mới nhất của trình tăng tốc download IDM, hướng dẫn cài đặt, kích hoạt bản quyền an toàn và khắc phục lỗi không bắt link trên Google Chrome.'
      },
      {
        title: 'Top 10 phần mềm diệt virus miễn phí phổ biến',
        date: '2024-07-12',
        readTime: '8 phút đọc',
        summary: 'Tổng hợp 10 phần mềm antivirus miễn phí tốt nhất cho máy tính Windows và macOS giúp chống lại mã độc tống tiền (ransomware), spyware và trojan hiệu quả.'
      },
    ],
  },
];

// Featured Blog Posts Data
const FEATURED_POSTS = [
  {
    id: 1,
    title: 'Thiết Kế Website Bán Hàng Thu Hút Khách',
    date: 'August 8, 2024',
    category: 'E-commerce',
    image: 'https://www.canhcam.vn/wp-content/uploads/2024/08/Thiet-ke-website-ban-hang-thumbnail.webp',
    summary: 'Thiết kế website bán hàng không chỉ dừng lại ở giao diện bắt mắt mà cần tối ưu từng điểm chạm trong hành trình mua hàng của khách: tốc độ tải dưới 2s, thanh toán 1 bước và bộ lọc sản phẩm thông minh.',
  },
  {
    id: 2,
    title: 'Hướng dẫn tự thiết kế website dễ dàng với 6 bước',
    date: 'August 8, 2024',
    category: 'Cẩm nang thiết kế',
    image: 'https://www.canhcam.vn/wp-content/uploads/2024/08/6150cc451f442a145557788c_huong-dan-thiet-ke-website-voi-6-buoc-don-gian-2.jpeg',
    summary: 'Hướng dẫn chi tiết từ việc lựa chọn tên miền, đăng ký web hosting, chọn CMS phù hợp, cài đặt giao diện và tối ưu hóa chuẩn SEO giúp người mới bắt đầu có thể tự xây dựng website trong vòng 24 giờ.',
  },
  {
    id: 3,
    title: '10 font chữ cho website đẹp & Lưu ý khi chọn',
    date: 'August 8, 2024',
    category: 'Typography & UI',
    image: 'https://www.canhcam.vn/wp-content/uploads/2024/08/6150cc411f442a1455577745_10-font-chu-cho-website-dep-nhat-2023-2024-luu-y-khi-chon-1.jpeg',
    summary: 'Khám phá 10 bộ font chữ tiếng Việt không bị lỗi dấu đẹp nhất hiện nay (Montserrat, Inter Tight, Open Sans, Roboto...) cùng các nguyên tắc phối font heading và body text chuẩn mực trong thiết kế web.',
  },
  {
    id: 4,
    title: 'Top 5 Phần mềm SEO chuyên nghiệp được khuyên dùng hiện nay',
    date: 'April 1, 2025',
    category: 'Công cụ SEO',
    image: 'https://www.canhcam.vn/wp-content/uploads/2025/04/01-Thumbnail-phan-mem-seo-chuyen-nghiep.webp',
    summary: 'Phân tích chi tiết các công cụ SEO đỉnh cao như Ahrefs, SEMrush, Screaming Frog, Google Search Console và Moz Pro: từ nghiên cứu từ khóa, audit kỹ thuật đến theo dõi backlink đối thủ.',
  },
  {
    id: 5,
    title: 'Top 12 công ty thiết kế website được đánh giá cao hiện nay',
    date: 'August 8, 2024',
    category: 'Đánh giá Agency',
    image: 'https://www.canhcam.vn/wp-content/uploads/2024/08/6150cc451f442a145557787a_top-12-cong-ty-thiet-ke-website-tot-nhat-hien-nay-1.jpeg',
    summary: 'Danh sách 12 agency thiết kế website uy tín nhất Việt Nam với bề dày kinh nghiệm, đội ngũ sáng tạo mạnh mẽ, quy trình chuyên nghiệp và hàng nghìn dự án thành công cho các tập đoàn lớn.',
  },
  {
    id: 6,
    title: 'Thiết kế website cần bao nhiêu chi phí? Bảng giá và các khoản chi phí cần biết',
    date: 'August 8, 2024',
    category: 'Tư vấn chi phí',
    image: 'https://www.canhcam.vn/wp-content/uploads/2024/08/655daa064a69cf308ae3e7a1_thiet-ke-website-can-bao-nhieu-chi-phi-1.webp',
    summary: 'Bóc tách chi tiết toàn bộ các hạng mục chi phí: tên miền, hosting/cloud server, bản quyền thiết kế giao diện UI/UX, lập trình chức năng tùy biến, SSL bảo mật và chi phí vận hành hàng năm.',
  },
  {
    id: 7,
    title: 'Top 15 công ty thiết kế website tại Hà Nội',
    date: 'November 22, 2024',
    category: 'Agency Hà Nội',
    image: 'https://www.canhcam.vn/wp-content/uploads/2024/11/thiet-ke-website-chuyen-nghiep-tai-ha-noi1.webp',
    summary: 'Bảng xếp hạng 15 đơn vị thiết kế website hàng đầu khu vực miền Bắc, nổi bật với thế mạnh thiết kế thương hiệu số cho các tổng công ty, trường đại học và cơ quan ban ngành.',
  },
  {
    id: 8,
    title: '24 cách tải video trên web từ website không cho download',
    date: 'August 9, 2024',
    category: 'Thủ thuật công nghệ',
    image: 'https://www.canhcam.vn/wp-content/uploads/2024/08/649e732adb2de4e754e1ada7_24-cach-tai-video-tren-web-tu-website-khong-cho-download.jpeg',
    summary: 'Tổng hợp trọn vẹn các phương pháp tải video m3u8, blob video, video luồng stream và tải video khóa chuột phải chỉ với vài thao tác đơn giản không cần cài phần mềm phức tạp.',
  },
];

export default function BlogPage({ onNavigateHome }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState('all');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <div className="bg-[#fafafa] text-neutral-800 font-sans">
      {/* ========== HERO BANNER ========== */}
      <section className="relative overflow-hidden bg-black text-white pt-32 pb-24 lg:pt-40 lg:pb-28">
        {/* Background Overlay Texture */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/90 to-[#111] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#e8001d]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-4xl">
            {/* Title with brand accent line */}
            <div className="inline-block relative">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase text-white mb-4">
                Blog
              </h1>
              <div className="h-1 w-20 bg-[#e8001d] mb-6 rounded-full" />
            </div>

            <p className="text-xl sm:text-2xl lg:text-3xl font-light text-neutral-300 leading-snug">
              Blog chia sẻ kinh nghiệm kiến thức về thiết kế và website.
            </p>
          </div>
        </div>
      </section>

      {/* ========== BREADCRUMB ========== */}
      <div className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-3">
          <nav className="flex items-center text-sm text-neutral-500 gap-2">
            <button
              onClick={onNavigateHome}
              className="hover:text-[#e8001d] transition-colors cursor-pointer"
            >
              Trang chủ
            </button>
            <span>/</span>
            <span className="text-neutral-900 font-semibold">Blog</span>
          </nav>
        </div>
      </div>

      {/* ========== FEATURED CATEGORIES SECTION ========== */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          {/* Section Heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#e8001d]">
                CHUYÊN MỤC KIẾN THỨC
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 mt-1">
                Khám phá theo chuyên đề
              </h2>
            </div>
            <p className="text-neutral-500 text-sm md:text-base mt-2 md:mt-0 max-w-md">
              Tổng hợp hơn 500+ bài viết chuyên sâu về thiết kế web, SEO, công nghệ và tiếp thị số được chắt lọc qua 19+ năm kinh nghiệm thực chiến.
            </p>
          </div>

          {/* Categories Grid (2 Columns on MD+) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-100 flex flex-col group"
              >
                {/* Category Thumbnail Image with Zoom effect */}
                <div className="relative overflow-hidden aspect-[16/10] bg-neutral-100">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-neutral-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                    {cat.name}
                  </span>
                </div>

                {/* Category Content Box */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-neutral-900 group-hover:text-[#e8001d] transition-colors line-clamp-2">
                      {cat.name}
                    </h3>

                    {/* Sub-articles List */}
                    <ul className="mt-5 space-y-3.5 pl-5 list-decimal text-neutral-600 text-base">
                      {cat.articles.map((item, idx) => (
                        <li key={idx} className="hover:text-[#e8001d] transition-colors">
                          <button
                            onClick={() => setSelectedArticle({ ...item, category: cat.name })}
                            className="text-left font-medium hover:text-[#e8001d] transition-colors leading-snug cursor-pointer"
                          >
                            {item.title}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Bottom: View All Link + Stats */}
                  <div className="mt-8 pt-5 border-t border-neutral-100 flex items-center justify-between flex-wrap gap-4">
                    <button
                      onClick={() => {
                        // Open first article of this category as preview
                        setSelectedArticle({ ...cat.articles[0], category: cat.name });
                      }}
                      className="inline-flex items-center gap-1.5 text-base font-bold text-[#e8001d] hover:text-[#c40018] group/btn cursor-pointer"
                    >
                      <span className="border-b-2 border-[#e8001d] pb-0.5 group-hover/btn:-translate-y-0.5 transition-transform">
                        Xem tất cả
                      </span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover/btn:translate-x-1 transition-transform">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </button>

                    <div className="flex items-center gap-4 text-xs font-medium text-neutral-500">
                      {cat.categoriesCount && (
                        <span className="inline-flex items-center gap-1.5 bg-neutral-100 px-2.5 py-1 rounded-md">
                          <svg className="w-3.5 h-3.5 text-neutral-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                          </svg>
                          {cat.categoriesCount} chuyên mục
                        </span>
                      )}
                      <span className="inline-flex items-center gap-1.5 bg-neutral-100 px-2.5 py-1 rounded-md">
                        <svg className="w-3.5 h-3.5 text-neutral-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                          <polyline points="14 2 14 8 20 8" />
                          <line x1="16" y1="13" x2="8" y2="13" />
                          <line x1="16" y1="17" x2="8" y2="17" />
                        </svg>
                        {cat.articlesCount} bài viết
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== NEWSLETTER SUBSCRIBE SECTION ========== */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#111827] via-[#1f2937] to-[#111827] text-white py-20 lg:py-28">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#e8001d]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <span className="inline-block px-3 py-1 bg-[#e8001d]/20 text-[#e8001d] text-xs font-bold uppercase rounded-full tracking-wider mb-4">
            Bản tin Cánh Cam
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Đăng ký nhận bản tin
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto">
            Đừng bỏ lỡ những bài viết, xu hướng thiết kế web và cẩm nang công nghệ mới nhất từ CanhCam.
          </p>

          <form onSubmit={handleSubscribe} className="mt-8 max-w-xl mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Địa chỉ email của bạn..."
              required
              className="flex-1 px-5 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder-neutral-400 focus:outline-none focus:border-[#e8001d] focus:bg-white/15 transition-all text-sm sm:text-base backdrop-blur-sm"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-[#e8001d] hover:bg-[#c40018] text-white font-bold rounded-full transition-all shadow-lg hover:shadow-red-600/30 flex items-center justify-center gap-2 cursor-pointer group"
            >
              <span>Đăng ký</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:translate-x-1 transition-transform"
              >
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </form>

          {subscribed && (
            <div className="mt-4 inline-block bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm font-medium border border-green-500/30 animate-fade-in">
              Cảm ơn bạn! Chúng tôi đã ghi nhận email đăng ký của bạn.
            </div>
          )}
        </div>
      </section>

      {/* ========== FEATURED BLOG POSTS GRID (8 POSTS) ========== */}
      <section className="py-16 lg:py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#e8001d]">
                XU HƯỚNG & NỔI BẬT
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 mt-1">
                Bài viết nổi bật
              </h2>
            </div>
            <p className="text-sm text-neutral-500 mt-2 sm:mt-0">
              Cập nhật những thông tin và kiến thức được quan tâm nhiều nhất
            </p>
          </div>

          {/* 4 Columns Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURED_POSTS.map((post) => (
              <div
                key={post.id}
                onClick={() => setSelectedArticle(post)}
                className="bg-white rounded-lg overflow-hidden border border-neutral-200/70 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer"
              >
                {/* Post Image */}
                <div className="relative aspect-[16/11] overflow-hidden bg-neutral-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-black/70 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Post Info */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs text-neutral-400 font-medium tracking-wider uppercase">
                      {post.date}
                    </span>
                    <h3 className="text-base font-bold text-neutral-800 group-hover:text-black mt-2 leading-snug line-clamp-3 transition-colors">
                      {post.title}
                    </h3>
                  </div>

                  {/* Red accent bottom underline */}
                  <div className="mt-4 pt-3">
                    <div className="w-8 h-0.5 bg-[#e8001d] group-hover:w-16 transition-all duration-300 rounded-full" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== BOTTOM BANNER / FOLLOW US ========== */}
      <section className="relative overflow-hidden bg-neutral-900 text-white min-h-[380px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://www.canhcam.vn/wp-content/uploads/2024/09/footer_bg.jpg"
            alt="Cánh Cam Banner"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 w-full">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              Bạn đã sẵn sàng khởi động dự án của mình ngay hôm nay chưa?
            </h2>
            <p className="mt-4 text-neutral-300 text-base sm:text-lg">
              Hãy để đội ngũ chuyên gia Cánh Cam đồng hành cùng bạn trên hành trình chuyển đổi số và kiến tạo website đẳng cấp.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#e8001d] hover:bg-[#c40018] text-white font-bold rounded-full transition-all shadow-lg hover:shadow-red-600/30 text-base"
              >
                <span>Liên hệ tư vấn ngay</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========== ARTICLE MODAL PREVIEW ========== */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-in relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Image */}
            {selectedArticle.image && (
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-2xl">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/60 hover:bg-black text-white rounded-full flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Đóng"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            )}

            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-3 text-xs text-neutral-500 font-semibold uppercase tracking-wider mb-3">
                <span className="text-[#e8001d]">{selectedArticle.category || 'Blog Cánh Cam'}</span>
                {selectedArticle.date && (
                  <>
                    <span>•</span>
                    <span>{selectedArticle.date}</span>
                  </>
                )}
                {selectedArticle.readTime && (
                  <>
                    <span>•</span>
                    <span>{selectedArticle.readTime}</span>
                  </>
                )}
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 leading-tight">
                {selectedArticle.title}
              </h3>

              <div className="mt-5 text-neutral-600 leading-relaxed space-y-4 text-base">
                <p className="font-medium text-neutral-800 text-lg">
                  {selectedArticle.summary ||
                    'Nội dung chia sẻ chuyên sâu từ đội ngũ thiết kế và phát triển công nghệ Cánh Cam.'}
                </p>
                <p>
                  Trong xu hướng chuyển đổi số mạnh mẽ, website là hạt nhân cốt lõi định vị uy tín thương hiệu trên môi trường trực tuyến. Mỗi yếu tố từ tốc độ tải trang, trải nghiệm trên thiết bị di động đến cấu trúc nội dung đều trực tiếp tác động tới quyết định hợp tác của khách hàng.
                </p>
                <p>
                  Đội ngũ Cánh Cam luôn tuân thủ các quy chuẩn khắt khe về UI/UX quốc tế, công nghệ tối ưu SEO và bảo mật dữ liệu cấp doanh nghiệp để mang lại giải pháp toàn diện và bền vững nhất.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-200 flex items-center justify-between">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-6 py-2.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-semibold rounded-full text-sm transition-colors cursor-pointer"
                >
                  Đóng
                </button>
                <a
                  href="#contact"
                  onClick={() => setSelectedArticle(null)}
                  className="px-6 py-2.5 bg-[#e8001d] hover:bg-[#c40018] text-white font-bold rounded-full text-sm transition-colors"
                >
                  Tư vấn dịch vụ
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
