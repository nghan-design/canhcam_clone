import React, { useState, useMemo } from 'react';

// Danh sách danh mục đầy đủ từ CanhCam
const CATEGORIES = [
  'Tất cả',
  'Doanh nghiệp – Tập đoàn',
  'Hàng hải – Dầu khí',
  'Thương mại điện tử',
  'Bất động sản',
  'Ngành xây dựng',
  'Kiến trúc – Nội thất',
  'Tài chính – Ngân hàng',
  'Sản xuất công nghiệp – cơ khí',
  'Logistic – Vận tải – Ô Tô',
  'Khách sạn – Resort – Du lịch',
  'Nhà hàng – Ẩm thực',
  'Chăm sóc sức khỏe',
  'Giáo dục – Trường học',
  'Công nghệ',
  'Thực phẩm',
  'Thời trang',
  'Tuyển dụng',
  'Giới thiệu sản phẩm',
];

// Danh sách dự án phong phú chuẩn Canh Cam
const ALL_PROJECTS = [
  {
    id: 1,
    title: 'Thiết kế website bán hàng Sony Promotion: Giải pháp tăng trưởng doanh số đột phá',
    desc: 'Website sản phẩm giới thiệu các ưu đãi, sản phẩm mới của Sony Việt Nam với trải nghiệm trực quan và tỉ lệ chuyển đổi vượt trội.',
    image: 'https://www.canhcam.vn/wp-content/uploads/2024/08/1-2.webp',
    categories: ['Thương mại điện tử', 'Giới thiệu sản phẩm', 'Công nghệ'],
    client: 'Sony Việt Nam',
    year: '2024',
    url: 'https://www.canhcam.vn/sony-promotion',
  },
  {
    id: 2,
    title: 'Thiết kế Website Tuyển dụng KFC Việt Nam: Số hóa Trải nghiệm Ứng viên',
    desc: 'Website tuyển dụng KFC Việt Nam tuyển dụng ứng viên trên khắp cả nước với quy trình nộp hồ sơ thông minh và quản trị tập trung.',
    image: 'https://www.canhcam.vn/wp-content/uploads/2024/08/kfc-recruitment.jpg',
    categories: ['Nhà hàng – Ẩm thực', 'Tuyển dụng', 'Doanh nghiệp – Tập đoàn'],
    client: 'KFC Việt Nam',
    year: '2024',
    url: 'https://www.canhcam.vn/kfc-viet-nam-lam-website-tuyen-dung-cho-rieng-minh',
  },
  {
    id: 3,
    title: 'Thiết kế Website Chubb Life Việt Nam: Số hóa Giải pháp Bảo vệ Tài chính',
    desc: 'Chubb Life Việt Nam công bố Ecard - danh thiếp điện tử cho nhân viên cùng hệ sinh thái số hóa bảo hiểm hiện đại.',
    image: 'https://www.canhcam.vn/wp-content/uploads/2025/01/FIX-2_CHUBB-LIFE.webp',
    categories: ['Tài chính – Ngân hàng', 'Doanh nghiệp – Tập đoàn'],
    client: 'Chubb Life',
    year: '2025',
    url: 'https://www.canhcam.vn/chubb-life-viet-nam',
  },
  {
    id: 4,
    title: 'Thiết kế Website bán lẻ nội thất JYSK chuẩn Scandinavian – Cánh Cam',
    desc: 'Website Ecommerce của JYSK tích hợp nhiều hệ thống mang đến cho khách hàng trải nghiệm mua sắm trực tuyến liền mạch.',
    image: 'https://www.canhcam.vn/wp-content/uploads/2024/08/4.webp',
    categories: ['Thương mại điện tử', 'Kiến trúc – Nội thất'],
    client: 'JYSK Việt Nam',
    year: '2024',
    url: 'https://www.canhcam.vn/jysk-thiet-ke-website-canhcam',
  },
  {
    id: 5,
    title: 'Thiết kế Website ô tô Rolls-Royce Motor Cars: Đỉnh cao Trải nghiệm Thượng lưu',
    desc: 'Website sang trọng của Rolls-Royce Motor Cars đánh dấu cột mốc quan trọng, chính thức bố đại lý ủy quyền đầu tiên tại TP HCM, Việt Nam.',
    image: 'https://www.canhcam.vn/wp-content/uploads/2025/02/new.png',
    categories: ['Logistic – Vận tải – Ô Tô', 'Doanh nghiệp – Tập đoàn'],
    client: 'Rolls-Royce Motor Cars HCM',
    year: '2025',
    url: 'https://www.canhcam.vn/rolls-royce-moto-cars-hcm',
  },
  {
    id: 6,
    title: 'Thiết kế Website Nội Thất Liên Á: Số hóa Thương hiệu Nệm hàng đầu Việt Nam',
    desc: 'Website doanh nghiệp giúp kết nối Liên Á với khách hàng tiềm năng trên thị trường nệm quốc tế và chuỗi showroom toàn quốc.',
    image: 'https://www.canhcam.vn/wp-content/uploads/2024/08/lienaa.png',
    categories: ['Kiến trúc – Nội thất', 'Doanh nghiệp – Tập đoàn', 'Thương mại điện tử'],
    client: 'Liên Á Mattress',
    year: '2024',
    url: 'https://www.canhcam.vn/nem-lien-a-thiet-ke-web-cho-thi-truong-quoc-te',
  },
  {
    id: 7,
    title: 'Thiết kế Website S&A Architecture: Ngôn ngữ kiến trúc trong không gian số',
    desc: 'Website độc bản tôn vinh vẻ đẹp những công trình kiến trúc biểu tượng với phong cách đồ họa tối giản, sang trọng.',
    image: 'https://www.canhcam.vn/wp-content/uploads/2024/08/THUMBNAIL_SA-ARCHITECTURE-1.webp',
    categories: ['Kiến trúc – Nội thất', 'Ngành xây dựng'],
    client: 'S&A Architecture',
    year: '2024',
    url: 'https://www.canhcam.vn/sa-architecture',
  },
  {
    id: 8,
    title: 'Thiết kế Website Tập đoàn Amata: Kiến tạo Thành phố Công nghiệp Thông minh',
    desc: 'Một nền tảng trực tuyến chuyên biệt giúp khẳng định vị thế và uy tín của Amata trong lĩnh vực bất động sản công nghiệp.',
    image: 'https://www.canhcam.vn/wp-content/uploads/2024/11/amata-2.png',
    categories: ['Bất động sản', 'Doanh nghiệp – Tập đoàn'],
    client: 'Tập đoàn Amata',
    year: '2024',
    url: 'https://www.canhcam.vn/amata',
  },
  {
    id: 9,
    title: 'Thiết kế Website Obayashi Vietnam: Chuẩn mực xây dựng từ Nhật Bản',
    desc: 'Website hiện đại, tinh tế, khẳng định vị thế và chất lượng của Obayashi - tổng thầu xây dựng hàng đầu Nhật Bản tại Việt Nam.',
    image: 'https://www.canhcam.vn/wp-content/uploads/2024/08/9.webp',
    categories: ['Ngành xây dựng', 'Doanh nghiệp – Tập đoàn'],
    client: 'Obayashi Vietnam',
    year: '2024',
    url: 'https://www.canhcam.vn/obayashi',
  },
  // Các dự án trang 2 & bổ trợ ngành nghề
  {
    id: 10,
    title: 'Thiết kế Website PV Drilling: Vững vàng vươn khơi cùng Tập đoàn Dầu khí',
    desc: 'Hệ thống website đa ngôn ngữ chuyên nghiệp giới thiệu năng lực giàn khoan và dịch vụ kỹ thuật dầu khí biển sâu.',
    image: 'https://picsum.photos/seed/pvdrilling/620/422',
    categories: ['Hàng hải – Dầu khí', 'Doanh nghiệp – Tập đoàn'],
    client: 'PV Drilling Corporation',
    year: '2024',
    url: '#',
  },
  {
    id: 11,
    title: 'Thiết kế Website Tập đoàn Hòa Phát: Vị thế Thép hàng đầu Đông Nam Á',
    desc: 'Cổng thông tin tập đoàn đa lĩnh vực với báo cáo tài chính, quản trị cổ đông và hệ thống phân phối phủ khắp toàn quốc.',
    image: 'https://picsum.photos/seed/hoaphat/620/422',
    categories: ['Sản xuất công nghiệp – cơ khí', 'Doanh nghiệp – Tập đoàn'],
    client: 'Tập đoàn Hòa Phát',
    year: '2024',
    url: '#',
  },
  {
    id: 12,
    title: 'Thiết kế Website Vinpearl Resort & Spa: Trải nghiệm Nghỉ dưỡng 5 Sao',
    desc: 'Nền tảng đặt phòng trực tuyến cao cấp, tích hợp tour du lịch và dịch vụ chuẩn quốc tế tại các quần thể đảo ngọc.',
    image: 'https://picsum.photos/seed/vinpearl/620/422',
    categories: ['Khách sạn – Resort – Du lịch', 'Doanh nghiệp – Tập đoàn'],
    client: 'Vinpearl Hotels & Resorts',
    year: '2024',
    url: '#',
  },
  {
    id: 13,
    title: 'Thiết kế Website Hệ thống Giáo dục Vinschool: Nâng tầm Tri thức Việt',
    desc: 'Cổng thông tin tuyển sinh, chương trình đào tạo chuẩn Cambridge và tương tác giữa phụ huynh - nhà trường.',
    image: 'https://picsum.photos/seed/vinschool/620/422',
    categories: ['Giáo dục – Trường học'],
    client: 'Hệ thống Vinschool',
    year: '2024',
    url: '#',
  },
  {
    id: 14,
    title: 'Thiết kế Website Bệnh viện Quốc tế Hoàn Mỹ: Y khoa Vì Sức khỏe Cộng đồng',
    desc: 'Hệ thống đặt lịch khám trực tuyến, tra cứu hồ sơ sức khỏe và cẩm nang y tế chuyên sâu hỗ trợ bệnh nhân 24/7.',
    image: 'https://picsum.photos/seed/hoanmy/620/422',
    categories: ['Chăm sóc sức khỏe', 'Doanh nghiệp – Tập đoàn'],
    client: 'Tập đoàn Y khoa Hoàn Mỹ',
    year: '2024',
    url: '#',
  },
  {
    id: 15,
    title: 'Thiết kế Website Masan Consumer: Thương hiệu Tiêu dùng Hàng triệu Gia đình',
    desc: 'Giới thiệu danh mục các nhãn hàng FMCG dẫn đầu thị trường và cam kết phát triển bền vững cùng người tiêu dùng.',
    image: 'https://picsum.photos/seed/masan/620/422',
    categories: ['Thực phẩm', 'Doanh nghiệp – Tập đoàn'],
    client: 'Masan Consumer',
    year: '2024',
    url: '#',
  },
  {
    id: 16,
    title: 'Thiết kế Website Thương hiệu Thời trang Canifa: Năng động & Đẳng cấp',
    desc: 'Gian hàng trực tuyến hiện đại với tính năng tìm kiếm thông minh, gợi ý phối đồ và thanh toán đa kênh tiện lợi.',
    image: 'https://picsum.photos/seed/canifa/620/422',
    categories: ['Thời trang', 'Thương mại điện tử'],
    client: 'Canifa Vietnam',
    year: '2024',
    url: '#',
  },
  {
    id: 17,
    title: 'Thiết kế Website Novaland Group: Bất động sản Đô thị Sinh thái',
    desc: 'Showcase các đại dự án đô thị và bất động sản du lịch với công nghệ 3D Tour và thực tế ảo trực quan.',
    image: 'https://picsum.photos/seed/novaland/620/422',
    categories: ['Bất động sản', 'Doanh nghiệp – Tập đoàn'],
    client: 'Novaland Group',
    year: '2024',
    url: '#',
  },
  {
    id: 18,
    title: 'Thiết kế Website FPT Software: Tiên phong Chuyển đổi số Toàn cầu',
    desc: 'Cổng thông tin năng lực công nghệ, giải pháp AI/Cloud và mạng lưới chi nhánh tại hơn 30 quốc gia trên thế giới.',
    image: 'https://picsum.photos/seed/fptsoft/620/422',
    categories: ['Công nghệ', 'Doanh nghiệp – Tập đoàn', 'Tuyển dụng'],
    client: 'FPT Software',
    year: '2024',
    url: '#',
  },
];

const ITEMS_PER_PAGE = 9;

export default function PortfolioPage({ onNavigateHome }) {
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');
  const [currentPageNum, setCurrentPageNum] = useState(1);
  const [selectedProject, setSelectedProject] = useState(null);

  // Lọc dự án theo danh mục
  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'Tất cả') {
      return ALL_PROJECTS;
    }
    return ALL_PROJECTS.filter((p) => p.categories.includes(selectedCategory));
  }, [selectedCategory]);

  // Phân trang
  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE) || 1;
  const currentProjects = useMemo(() => {
    const start = (currentPageNum - 1) * ITEMS_PER_PAGE;
    return filteredProjects.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredProjects, currentPageNum]);

  const handleSelectCategory = (cat) => {
    setSelectedCategory(cat);
    setCurrentPageNum(1);
  };

  const handlePageChange = (page) => {
    setCurrentPageNum(page);
    window.scrollTo({ top: 120, behavior: 'smooth' });
  };

  return (
    <div className="bg-neutral-50 font-[Montserrat,sans-serif] text-neutral-800 min-h-screen pt-24 pb-0">

      {/* ========== BỘ LỌC DANH MỤC (TABS) - ĐÃ BỎ PHẦN TIÊU ĐỀ "ĐÃ THIẾT KẾ" Ở ĐẦU THEO YÊU CẦU ========== */}
      <section className="relative z-20 py-8 px-4 sm:px-8 border-b border-neutral-200/80 bg-white/70 backdrop-blur-md sticky top-16 transition-all duration-300 shadow-sm">
        <div className="max-w-7xl mx-auto">
          {/* Thanh cuộn danh mục mượt mà */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-2 -my-2 flex-nowrap md:flex-wrap md:justify-center">
            {CATEGORIES.map((category, idx) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={idx}
                  onClick={() => handleSelectCategory(category)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#e8001d] text-white shadow-md shadow-[#e8001d]/25 scale-105'
                      : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== DANH SÁCH DỰ ÁN (PROJECT GRID) ========== */}
      <section className="relative z-10 py-12 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        {/* Số lượng kết quả hiển thị */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-neutral-200 text-sm text-neutral-500">
          <span>
            Hiển thị <strong className="text-neutral-800">{filteredProjects.length}</strong> dự án {selectedCategory !== 'Tất cả' && `trong danh mục "${selectedCategory}"`}
          </span>
          {selectedCategory !== 'Tất cả' && (
            <button
              onClick={() => handleSelectCategory('Tất cả')}
              className="text-[#e8001d] hover:underline font-medium text-xs flex items-center gap-1 cursor-pointer"
            >
              <span>✕</span> Xóa bộ lọc
            </button>
          )}
        </div>

        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-neutral-200 shadow-sm">
            <svg className="w-16 h-16 mx-auto text-neutral-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <h4 className="text-xl font-bold text-neutral-800 mb-2">Chưa có dự án trong danh mục này</h4>
            <p className="text-neutral-500 mb-6 text-sm">Vui lòng chọn danh mục khác hoặc quay lại danh sách tất cả dự án.</p>
            <button
              onClick={() => handleSelectCategory('Tất cả')}
              className="px-6 py-2.5 bg-[#e8001d] text-white rounded-full font-medium text-sm hover:bg-[#c70019] transition-colors cursor-pointer"
            >
              Xem tất cả dự án
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProjects.map((project) => (
              <article
                key={project.id}
                className="group bg-white rounded-xl overflow-hidden border border-neutral-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                {/* Ảnh đại diện dự án */}
                <div
                  className="relative overflow-hidden bg-neutral-100 cursor-pointer"
                  style={{ paddingTop: 'calc(380 / 608 * 100%)' }}
                  onClick={() => setSelectedProject(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  {/* Overlay gradient nhẹ khi hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Badge danh mục chính */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
                    <span className="px-2.5 py-1 bg-black/70 backdrop-blur-sm text-white text-[11px] font-semibold rounded-md">
                      {project.categories[0]}
                    </span>
                  </div>
                </div>

                {/* Nội dung dự án */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className="text-lg md:text-xl font-bold text-neutral-900 group-hover:text-[#e8001d] transition-colors leading-snug mb-3 line-clamp-2">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => {
                          e.preventDefault();
                          setSelectedProject(project);
                        }}
                      >
                        {project.title}
                      </a>
                    </h2>
                    <p className="text-sm text-neutral-600 line-clamp-3 leading-relaxed mb-4">
                      {project.desc}
                    </p>
                  </div>

                  {/* Footer card */}
                  <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
                    <span className="font-medium text-neutral-700">{project.client}</span>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-[#e8001d] font-bold hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      Chi tiết
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* ========== PHÂN TRANG (PAGINATION) ========== */}
        {totalPages > 1 && (
          <div className="mt-14 flex items-center justify-center gap-2">
            {/* Nút Trước */}
            <button
              onClick={() => handlePageChange(Math.max(1, currentPageNum - 1))}
              disabled={currentPageNum === 1}
              className={`w-10 h-10 rounded-full flex items-center justify-center font-medium text-sm transition-colors cursor-pointer ${
                currentPageNum === 1
                  ? 'text-neutral-300 cursor-not-allowed'
                  : 'bg-white border border-neutral-200 text-neutral-700 hover:bg-[#e8001d] hover:text-white hover:border-[#e8001d]'
              }`}
              aria-label="Trang trước"
            >
              ←
            </button>

            {/* Các số trang */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
              const isActive = currentPageNum === page;
              return (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#e8001d] text-white shadow-md shadow-[#e8001d]/30 scale-105'
                      : 'bg-white border border-neutral-200 text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900'
                  }`}
                >
                  {page < 10 ? `0${page}` : page}
                </button>
              );
            })}

            {/* Nút Sau */}
            <button
              onClick={() => handlePageChange(Math.min(totalPages, currentPageNum + 1))}
              disabled={currentPageNum === totalPages}
              className={`w-10 h-10 rounded-full flex items-center justify-center font-medium text-sm transition-colors cursor-pointer ${
                currentPageNum === totalPages
                  ? 'text-neutral-300 cursor-not-allowed'
                  : 'bg-white border border-neutral-200 text-neutral-700 hover:bg-[#e8001d] hover:text-white hover:border-[#e8001d]'
              }`}
              aria-label="Trang kế tiếp"
            >
              →
            </button>
          </div>
        )}
      </section>

      {/* ========== MODAL XEM CHI TIẾT DỰ ÁN ========== */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[120] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Nút đóng */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/60 hover:bg-[#e8001d] text-white rounded-full flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Đóng"
            >
              ✕
            </button>

            {/* Ảnh cover trong popup */}
            <div className="relative aspect-[16/9] w-full bg-neutral-900 overflow-hidden">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="px-3 py-1 bg-[#e8001d] text-xs font-bold rounded-full mb-2 inline-block">
                  {selectedProject.client}
                </span>
                <h3 className="text-xl md:text-2xl font-black leading-tight">
                  {selectedProject.title}
                </h3>
              </div>
            </div>

            {/* Thông tin chi tiết */}
            <div className="p-6 md:p-8 flex flex-col gap-6">
              <div>
                <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-bold mb-2">Mô tả dự án</h4>
                <p className="text-base text-neutral-700 leading-relaxed">{selectedProject.desc}</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 bg-neutral-50 rounded-xl border border-neutral-100 text-sm">
                <div>
                  <span className="block text-xs text-neutral-400 font-medium">Khách hàng</span>
                  <strong className="text-neutral-800">{selectedProject.client}</strong>
                </div>
                <div>
                  <span className="block text-xs text-neutral-400 font-medium">Năm thực hiện</span>
                  <strong className="text-neutral-800">{selectedProject.year}</strong>
                </div>
                <div>
                  <span className="block text-xs text-neutral-400 font-medium">Lĩnh vực</span>
                  <strong className="text-neutral-800">{selectedProject.categories.join(', ')}</strong>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2.5 rounded-full border border-neutral-300 text-neutral-700 hover:bg-neutral-100 text-sm font-semibold transition-colors cursor-pointer"
                >
                  Đóng
                </button>
                <a
                  href={selectedProject.url}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-2.5 rounded-full bg-[#e8001d] hover:bg-[#c70019] text-white text-sm font-semibold shadow-md transition-all cursor-pointer flex items-center gap-2"
                >
                  Xem website gốc
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========== SECTION: CTA BANNER FOLLOW US (Cuối trang) ========== */}
      <section className="relative z-20 overflow-hidden mt-16" id="banner-follow-us">
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
