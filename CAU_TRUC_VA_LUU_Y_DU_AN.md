# TÀI LIỆU DỰ ÁN: CÂY THƯ MỤC & NHỮNG ĐIỀU LƯU Ý

> **Dự án:** Canh Cam Clone (Website Công ty Thiết Kế Website Cánh Cam)  
> **Công nghệ:** React 18, Vite, Tailwind CSS, Vanilla CSS, SVG Icons  
> **Mục tiêu:** Xây dựng website doanh nghiệp cao cấp, mượt mà, cấu trúc module hóa chuẩn mực, dễ bảo trì và mở rộng.

---

## PHẦN 1: SƠ ĐỒ CÂY THƯ MỤC (DIRECTORY TREE)

Toàn bộ mã nguồn dự án được tổ chức gọn gàng trong thư mục `src/` theo mô hình tách bạch rõ ràng giữa Components, Pages, Data và Styles:

```
canhcam-clone/
├── index.html                   # HTML gốc khởi động ứng dụng (font Montserrat, SEO meta)
├── package.json                 # Quản lý dependencies (React, Vite, Tailwind)
├── tailwind.config.js           # Cấu hình màu sắc, breakpoints và theme Tailwind
├── vite.config.js               # Cấu hình Vite build & dev server
├── CAU_TRUC_VA_LUU_Y_DU_AN.md   # File Markdown hướng dẫn kỹ thuật dự án
├── src/
│   ├── main.jsx                 # Điểm khởi tạo React DOM (root entry)
│   ├── App.jsx                  # Router điều phối trung tâm & State quản lý trang hiện tại
│   ├── App.css                  # Hiệu ứng chuyển động (Marquee slider, animations, pulse)
│   ├── index.css                # Khởi tạo Tailwind Directives & CSS reset
│   ├── data/
│   │   └── navigation.js        # Dữ liệu Menu điều hướng chính & Sub-menu xổ xuống
│   ├── components/              # Các components dùng chung toàn hệ thống
│   │   ├── Header/
│   │   │   ├── Header.jsx       # Thanh Header trên cùng (Desktop Nav + Mobile Topbar)
│   │   │   └── QuarterMenu.jsx  # Menu quạt 1/4 hình tròn đặc trưng thương hiệu Cánh Cam
│   │   ├── Footer/
│   │   │   └── Footer.jsx       # Chân trang đầy đủ + Breadcrumb động theo từng page
│   │   └── Common/
│   │       └── FloatingButtons.jsx # Nút Back to top, Gọi hotline trực tiếp, Nhắn tin Messenger
│   └── pages/                   # 7 trang độc lập tương ứng với sitemap website Cánh Cam
│       ├── HomePage.jsx         # 1. Trang Chủ (Video Hero, Tại sao chọn, Dự án, Đối tác, Dịch vụ...)
│       ├── AboutPage.jsx        # 2. Giới Thiệu (Lịch sử phát triển, Sứ mệnh, Lãnh đạo, Con số)
│       ├── WebDesignPage.jsx    # 3. Thiết Kế Website (Quy chuẩn thiết kế, gói giải pháp, công nghệ)
│       ├── PortfolioPage.jsx    # 4. Đã Thiết Kế (Bộ lọc 19 ngành nghề, popup chi tiết, phân trang)
│       ├── ServicesPage.jsx     # 5. Dịch Vụ (7 dịch vụ cốt lõi, tư vấn, cam kết chất lượng)
│       ├── WorkflowPage.jsx     # 6. Quy Trình (Quy trình 6 bước sticky bar, timeline, cam kết)
│       └── BlogPage.jsx         # 7. Blog (6 chuyên mục chính, 8 bài viết nổi bật, đăng ký nhận tin)
```

---

## PHẦN 2: CHI TIẾT VAI TRÒ TỪNG MODULE & FILE

| File / Thư mục | Loại Component | Chức năng & Nhiệm vụ chính |
| :--- | :--- | :--- |
| **src/App.jsx** | `Router / Shell` | Layout shell và router trung tâm (~50 dòng). Quản lý state `currentPage` (`'home'`, `'about'`, `'thiet-ke-website'`, `'da-thiet-ke'`, `'dich-vu'`, `'quy-trinh'`, `'blog'`) và hàm chuyển trang `handleNavigate(page)` tự động cuộn lên đầu màn hình. |
| **src/data/navigation.js** | `Config Data` | Nơi duy nhất định nghĩa danh mục menu và danh sách menu con (sub-menu). Header và QuarterMenu đều lấy dữ liệu từ file này, giúp việc sửa đổi menu đồng bộ tuyệt đối. |
| **src/components/Header/Header.jsx** | `Shared Layout` | Thanh điều hướng đầu trang. Tự động chuyển đổi giao diện: trong suốt (transparent) khi ở đầu trang nền tối, và chuyển thành thanh màu trắng cố định có bóng đổ (`shadow-md`) khi cuộn chuột quá 20px. Hỗ trợ hover xổ sub-menu. |
| **src/components/Header/QuarterMenu.jsx** | `Shared Layout` | Menu góc 1/4 hình tròn màu đỏ thương hiệu `#e8001d`, có hiệu ứng gợn sóng đồng tâm, tìm kiếm nhanh, chuyển đổi ngôn ngữ và danh sách link chuyển trang mượt mà. |
| **src/components/Footer/Footer.jsx** | `Shared Layout` | Chân trang chuẩn Cánh Cam. Điểm đặc biệt: có thanh **Breadcrumb động** tự nhận diện trang đang mở (ví dụ: `Trang chủ / Blog`, `Trang chủ / Quy trình`). Bao gồm thông tin liên hệ 3 văn phòng (TP.HCM, Thủ Đức, Úc), form tư vấn và logo Bộ Công Thương / AUSCHAM. |
| **src/components/Common/FloatingButtons.jsx** | `Shared Utility` | Cụm nút tiện ích nổi cố định góc dưới bên phải: nút cuộn lên đầu trang (Back to top), nút gọi Hotline trực tiếp và nút kết nối Messenger. |
| **src/pages/HomePage.jsx** | `Page Component` | Trang chủ đầy đủ các section: Hero video nền tắt tiếng tự động, Tại sao chọn Cánh Cam, Lưới dự án nổi bật, Marquee chạy 35+ logo đối tác, Video giới thiệu Cánh Cam tại Úc, Slider dịch vụ có nút điều hướng trái/phải, Lưới 20 công nghệ, Thống kê con số và Form tư vấn. |
| **src/pages/AboutPage.jsx** | `Page Component` | Trang giới thiệu: Hero banner, tiêu đề "We are CanhCam" hover đỏ mượt mà, Lịch sử hình thành qua các mốc năm, Tầm nhìn - Sứ mệnh, Ban lãnh đạo và số liệu thành tựu. |
| **src/pages/WebDesignPage.jsx** | `Page Component` | Trang giải pháp thiết kế website: 3 tiêu chuẩn cốt lõi (CRO, SEO, Mở rộng), khung hình chạy marquee 2 cột căn giữa đồng trục, 2 gói thiết kế (Mẫu sẵn & Độc bản may đo), Khối thiết kế đa lĩnh vực trải đều toàn màn hình và bảng quy trình chi tiết. |
| **src/pages/PortfolioPage.jsx** | `Page Component` | Trang dự án đã thiết kế: Thanh lọc tương tác 19 ngành nghề, phân trang danh sách và Modal xem chi tiết dự án (phạm vi, công nghệ, hình ảnh mẫu). |
| **src/pages/ServicesPage.jsx** | `Page Component` | Trang tổng hợp dịch vụ: Bố cục 12 cột so le cho 7 dịch vụ chính (Website, Chăm sóc web, Bán hàng, App mobile, Content, Quảng cáo, Hosting & Domain), Modal nhận báo giá nhanh và cam kết chất lượng. |
| **src/pages/WorkflowPage.jsx** | `Page Component` | Trang quy trình làm việc: Thanh 6 bước dính (Sticky process bar) cuộn mượt đến từng bước, chi tiết danh mục checklist từng giai đoạn và 3 trụ cột cam kết. |
| **src/pages/BlogPage.jsx** | `Page Component` | Trang Blog tin tức: 6 khối chuyên mục lớn (Kinh nghiệm web, Hosting, SEO, Marketing, Công nghệ, Tải phần mềm), Form đăng ký nhận bản tin tương tác và Lưới 8 bài viết nổi bật có modal đọc tóm tắt. |
| **src/App.css** | `Global Style` | Chứa các keyframes chuyển động vô tận: `marquee-track` (chạy ngang logo đối tác), `marquee-y` & `marquee-y-reverse` (chạy dọc mockup điện thoại), `play-pulse` (nút play video) và class `.no-scrollbar` triệt tiêu thanh cuộn thô của trình duyệt. |

---

## PHẦN 3: NHỮNG ĐIỀU LƯU Ý QUAN TRỌNG KHI VẬN HÀNH & MỞ RỘNG

### 1. Cơ chế Điều hướng & Quản lý State trang (Routing System)
- **Không sử dụng Reload trang:** Hệ thống sử dụng State `currentPage` tại `src/App.jsx`. Khi chuyển trang, hàm `handleNavigate(pageKey)` sẽ cập nhật state và kích hoạt `window.scrollTo({ top: 0, behavior: 'smooth' })` giúp trải nghiệm chuyển trang diễn ra tức thì, không giật lag.
- **Các Key định danh trang:** `'home'`, `'about'`, `'thiet-ke-website'`, `'da-thiet-ke'`, `'dich-vu'`, `'quy-trinh'`, `'blog'`. Bất kỳ component nào nhận prop `onNavigate` đều có thể gọi hàm chuyển trang.


### 2. Hướng dẫn 4 bước thêm một Trang mới vào Website
1. **Bước 1:** Tạo file component mới trong thư mục `src/pages/` (ví dụ: `ContactPage.jsx`).
2. **Bước 2:** Khai báo thêm mục tương ứng trong file `src/data/navigation.js` (ví dụ: `{ label: 'Liên Hệ' }`).
3. **Bước 3:** Trong `src/App.jsx`, import component mới và thêm điều kiện render:
   ```jsx
   {currentPage === 'lien-he' && <ContactPage onNavigateHome={() => handleNavigate('home')} />}
   ```
4. **Bước 4:** Bổ sung điều kiện active và onClick trong `Header.jsx`, `QuarterMenu.jsx` và thêm breadcrumb tương ứng tại `Footer.jsx`.

---

> [!NOTE]
> **Quy chuẩn thương hiệu Cánh Cam:**  
> • **Màu đỏ chủ đạo:** `#e8001d` (dùng cho logo, nút kêu gọi hành động, icon active, thanh gạch chân trang).  
> • **Màu nền:** Nền tối `#000000 / #111827` (Hero banner); Nền sáng `#ffffff / #f8f9fa / #f5f5f5` (nội dung chính).  
> • **Font chữ chuẩn:** `Montserrat`, `Inter Tight`, `sans-serif`.
