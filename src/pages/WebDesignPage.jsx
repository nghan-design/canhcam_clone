import React, { useState } from 'react';

export default function WebDesignPage({ onNavigateHome }) {
  const [activeStrategyToggle, setActiveStrategyToggle] = useState(0);
  const [activeCriteriaToggle, setActiveCriteriaToggle] = useState(null);
  const [activeWorkflowStep, setActiveWorkflowStep] = useState(0);
  const [showAllIndustries, setShowAllIndustries] = useState(false);
  const [activeIndustryHover, setActiveIndustryHover] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);
  const [lightboxImg, setLightboxImg] = useState(null);
  const [currentTeamSlide, setCurrentTeamSlide] = useState(0);
  const [currentProjectSlide, setCurrentProjectSlide] = useState(0);
  const [currentReviewSlide, setCurrentReviewSlide] = useState(0);

  const strategyToggles = [
    {
      title: 'Số hóa thương hiệu và khẳng định vị thế',
      content:
        'Với hơn 80 triệu người dùng Internet tại Việt Nam (tính đến năm 2026), website là nơi duy nhất bạn toàn quyền kiểm soát cách thương hiệu xuất hiện. Không phụ thuộc vào thuật toán của mạng xã hội, thiết kế website chuyên nghiệp giúp bạn xây dựng uy tín tuyệt đối thông qua sự chuyên nghiệp và nhất quán.',
    },
    {
      title: 'Tiếp cận khách hàng đa kênh, đa điểm',
      content:
        'Theo xu hướng hành vi người tiêu dùng mới nhất, có đến 85% người dùng tìm kiếm, so sánh thông tin trên website trước khi thực hiện giao dịch tại cửa hàng hoặc liên hệ hotline. Thiết kế website uy tín đóng vai trò là "trung tâm điều hướng", giúp bạn đón đầu tệp khách hàng tiềm năng bất kể múi giờ hay rào cản địa lý.',
    },
    {
      title: 'Tối ưu tỷ lệ chuyển đổi và tăng trưởng doanh thu',
      content:
        'Không chỉ dừng lại ở việc giới thiệu, thiết kế website hiện đại là một bộ máy bán hàng tự động 24/7. Việc tích hợp các giải pháp thanh toán và thu thập dữ liệu (Data-driven) giúp doanh nghiệp hiểu rõ hành vi khách hàng, từ đó tối ưu quy trình bán hàng và gia tăng lợi nhuận đột phá.',
    },
    {
      title: 'Tăng tương tác và cá nhân hóa trải nghiệm',
      content:
        'Hơn 92% người dùng đánh giá cao các doanh nghiệp có hệ thống hỗ trợ trực tuyến (Chatbot AI, Knowledge Base) ngay trên website. Điều này không chỉ giúp giải đáp thắc mắc tức thì mà còn tạo dựng mối quan hệ bền vững giữa khách hàng và thương hiệu.',
    },
    {
      title: 'Tối ưu chi phí Marketing dài hạn',
      content:
        'So với việc phụ thuộc vào chi phí quảng cáo ngày càng đắt đỏ trên Facebook hay Google, đầu tư vào thiết kế web chuẩn SEO là một chiến lược đầu tư một lần nhưng mang lại giá trị vĩnh viễn. Một website có thứ hạng cao sẽ giúp bạn sở hữu nguồn traffic tự nhiên dồi dào mà không tốn thêm ngân sách click.',
    },
    {
      title: 'Làm chủ dữ liệu để bứt phá',
      content:
        'Mọi lượt truy cập, mọi hành vi nhấp chuột đều được ghi lại một cách minh bạch. Đây là cơ sở dữ liệu quý giá giúp doanh nghiệp đo lường chính xác hiệu quả kinh doanh và điều chỉnh chiến lược kịp thời theo biến động thị trường.',
    },
  ];

  const benefits = [
    {
      title: 'Nâng cao uy tín thương hiệu',
      img: 'https://www.canhcam.vn/wp-content/uploads/2024/08/6.jpg',
      content:
        'Xây dựng thương hiệu, nâng cao giá trị uy tín thương hiệu luôn là mục tiêu hàng đầu trong bản kế hoạch marketing của mỗi công ty. Và thiết kế website doanh nghiệp chính là một trong những việc đầu tiên sẽ phải xúc tiến nếu muốn thương hiệu của mình xuất hiện trên không gian mạng.',
    },
    {
      title: 'Gia tăng hiệu quả kinh doanh',
      img: 'https://www.canhcam.vn/wp-content/uploads/2024/08/benef02.jpeg',
      content:
        'Với thiết kế trang web tuỳ biến, Cánh Cam luôn đảm bảo doanh nghiệp của bạn sẽ không bỏ lỡ bất kì cơ hội nào để có thêm khách hàng và gia tăng doanh thu. Việc đăng sản phẩm mới có thể tiến hành ở nhiều địa điểm chỉ cần có smartphone, laptop hay tablet. Việc tiếp nhận, xử lí đơn hàng, trả lời phản hồi khách hàng sẽ được thông báo với bạn ngay lập tức để giải quyết kịp thời.',
    },
    {
      title: 'Website hoạt động thông minh',
      img: 'https://www.canhcam.vn/wp-content/uploads/2024/08/benef3.jpeg',
      content:
        'Tính thẩm mỹ trong lĩnh vực thiết kế web thôi vẫn chưa đủ. Tại Công ty Cánh Cam, tính bảo mật và tốc độ truy cập luôn là mối quan tâm hàng đầu của các developer khi tạo ra một sản phẩm website. Do đó, chúng tôi định hướng lựa chọn nền tảng web ổn định, thông minh, bảo mật cao và được sử dụng rộng rãi trên toàn cầu.',
    },
  ];

  const criteriaCol1 = [
    {
      title: 'Tương thích mọi thiết bị',
      content:
        'Thiết kế web không chỉ đẹp mắt mà còn mang về nhiều lượt truy cập, nhiều đơn hàng, với công nghệ responsive giúp website có thể tự động thích ứng trên mọi thiết bị, phát huy hết sức mạnh của nó.',
    },
    {
      title: 'Tốc độ',
      content:
        'Tốc độ tải trang là yếu tố không thể bỏ qua khi nói đến trải nghiệm người dùng. Theo nghiên cứu, người dùng thường có xu hướng rời khỏi một website nếu thời gian tải trang quá lâu. Sử dụng các công cụ nén ảnh, tối ưu mã nguồn và các phương pháp tối ưu hóa tốc độ tải trang sẽ giúp cải thiện tình trạng này.',
    },
    {
      title: 'Quản lý đơn giản',
      content:
        'Hệ thống quản lý nội dung hiện đại, tiện lợi, đồng thời tối ưu dữ liệu để phù hợp hơn với mọi thiết bị. Giúp dễ dàng cập nhật và quản lý nội dung trên website của bạn.',
    },
    {
      title: 'Chi phí hiệu quả',
      content:
        'Cho dù nhu cầu thiết kế web như thế nào thì động cơ quyết định vẫn là tiết kiệm nhiều chi phí. Nhiều ưu đãi đi kèm giúp hạn chế mức chi phí bỏ ra của doanh nghiệp nhưng vẫn thu về hiệu quả cao nhất.',
    },
    {
      title: 'Thiết kế website chuẩn SEO',
      content:
        'Bố cục, cấu trúc trang tối ưu, mang lại hiệu quả trong việc SEO trên mọi thiết bị, giúp website có thứ hạng cao trên các công cụ tìm kiếm.',
    },
    {
      title: 'Tối ưu hóa trải nghiệm người dùng (UX)',
      content:
        'Cánh Cam luôn thiết kế những website hướng đến sự thân thiện với người dùng, giúp tối đa hoá tỉ lệ chuyển đổi và gia tăng doanh số cho doanh nghiệp của bạn.',
    },
  ];

  const criteriaCol2 = [
    {
      title: 'Giao diện thân thiện và dễ sử dụng (UI)',
      content: (
        <p>
          Giao diện người dùng (UI) cần phải được thiết kế sao cho thân thiện và dễ sử dụng. Bố cục rõ ràng sẽ giúp người dùng tìm kiếm thông tin nhanh chóng và hiệu quả. Hãy chắc chắn rằng các nút điều hướng được đặt ở vị trí dễ thấy, font chữ rõ ràng và màu sắc hài hòa.
        </p>
      ),
    },
    {
      title: 'Nội dung',
      content: (
        <div className="space-y-2">
          <p>
            Nội dung website cần phải chất lượng, độc đáo và hữu ích cho người dùng. Đừng quên tối ưu hóa nội dung với từ khóa chính và đảm bảo rằng nội dung của bạn có chiều sâu, giải đáp được những thắc mắc mà khách hàng có thể gặp phải.
          </p>
          <p>
            Cấu trúc website cũng đóng vai trò quan trọng trong SEO. Sử dụng các thẻ HTML như heading, title, và alt text sẽ giúp công cụ tìm kiếm hiểu rõ nội dung của bạn. Hệ thống liên kết nội bộ và liên kết ngoại cũng cần được chú trọng, giúp tăng độ tin cậy cho website của bạn.
          </p>
        </div>
      ),
    },
    {
      title: 'Nhiều tính năng',
      content: (
        <div className="space-y-2">
          <p>
            Thiết kế website nhiều tính năng là việc tạo một trang web không chỉ đơn thuần là một nơi để hiển thị thông tin, mà còn tích hợp nhiều chức năng khác nhau, giúp người dùng tương tác và thực hiện các hành động một cách thuận tiện.
          </p>
          <p className="font-semibold text-neutral-800">Những tính năng thường được tích hợp vào website:</p>
          <ul className="grid grid-cols-2 gap-1.5 pt-1 text-xs sm:text-sm">
            {[
              'Công cụ tìm kiếm',
              'Lọc và sắp xếp',
              'Giỏ hàng và thanh toán',
              'Đăng ký và đăng nhập',
              'Liên hệ',
              'Blog',
              'Diễn đàn',
              'Chat trực tuyến',
              'Đánh giá và bình luận',
              'Tích hợp mạng xã hội',
              'Bản đồ',
              'Video',
              'Email marketing',
              'Phân tích dữ liệu',
            ].map((feat, idx) => (
              <li key={idx} className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e8001d]" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      title: 'Công nghệ',
      content: (
        <div className="space-y-2">
          <p>
            Để có một website hiện đại và hiệu quả, doanh nghiệp cần hợp tác với các <strong>công ty thiết kế website chuyên nghiệp</strong>, có kinh nghiệm và cập nhật liên tục các công nghệ mới.
          </p>
          <p className="font-semibold text-neutral-800">Các công nghệ cốt lõi trong thiết kế website:</p>
          <ul className="space-y-1 text-xs sm:text-sm">
            <li>
              <strong className="text-neutral-800">• Ngôn ngữ lập trình:</strong> HTML, CSS, JavaScript là bộ ba ngôn ngữ nền tảng để xây dựng cấu trúc, giao diện và tương tác của website.
            </li>
            <li>
              <strong className="text-neutral-800">• Framework:</strong> như Angular, React, Vue.js giúp đơn giản hóa quá trình phát triển, tăng tốc độ và tạo ra các ứng dụng web phức tạp.
            </li>
            <li>
              <strong className="text-neutral-800">• CMS:</strong> WordPress, Joomla, Drupal là những CMS phổ biến, cho phép quản lý nội dung website một cách dễ dàng.
            </li>
            <li>
              <strong className="text-neutral-800">• Cloud computing:</strong> Giúp lưu trữ dữ liệu, tính toán và triển khai ứng dụng một cách linh hoạt và hiệu quả.
            </li>
          </ul>
          <p className="font-semibold text-neutral-800 pt-1">Ứng dụng các công nghệ tiên tiến:</p>
          <ul className="space-y-1 text-xs sm:text-sm">
            <li>
              <strong className="text-neutral-800">• AI (Trí tuệ nhân tạo):</strong> Ứng dụng trong chatbots, trợ lý ảo, cá nhân hóa trải nghiệm.
            </li>
            <li>
              <strong className="text-neutral-800">• VR & AR:</strong> Tạo ra các trải nghiệm tương tác sống động, hữu ích cho bất động sản, nội thất.
            </li>
            <li>
              <strong className="text-neutral-800">• SPA & PWA:</strong> Cải thiện tốc độ tải trang, cho phép cài đặt và sử dụng offline.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Bảo mật',
      content: (
        <div className="space-y-2">
          <p>
            Bảo mật và an toàn là yếu tố không thể thiếu trong thiết kế web. Một website không an toàn có thể gây thiệt hại lớn cho doanh nghiệp, từ mất dữ liệu đến hình ảnh xấu về thương hiệu.
          </p>
          <ul className="space-y-2 text-xs sm:text-sm pt-1">
            <li>
              <strong className="text-neutral-800">Sử dụng chứng chỉ SSL:</strong> Chứng chỉ SSL giúp mã hóa dữ liệu truyền tải giữa website và người dùng, bảo vệ thông tin cá nhân của khách hàng và hiển thị biểu tượng khóa bảo mật cạnh URL.
            </li>
            <li>
              <strong className="text-neutral-800">Sao lưu dữ liệu & phòng chống virus:</strong> Sao lưu dữ liệu thường xuyên để tránh mất mát, kết hợp các biện pháp phòng vệ và tường lửa định kỳ bảo vệ trước các cuộc tấn công mạng.
            </li>
          </ul>
        </div>
      ),
    },
  ];

  const techPlatforms = [
    { name: 'CSS', img: 'https://www.canhcam.vn/wp-content/uploads/2024/08/css-160x100-1.jpeg' },
    { name: 'Figma', img: 'https://www.canhcam.vn/wp-content/uploads/2024/08/figma-160x100-1.png' },
    { name: 'jQuery', img: 'https://www.canhcam.vn/wp-content/uploads/2024/08/jquery-160x100-1.png' },
    { name: 'Ionic', img: 'https://www.canhcam.vn/wp-content/uploads/2024/08/ionic-160x100-1.png' },
    { name: 'AngularJS', img: 'https://www.canhcam.vn/wp-content/uploads/2024/08/angular-js-160x100-1.png' },
    { name: 'Angular', img: 'https://www.canhcam.vn/wp-content/uploads/2024/08/angular-160x100-1.jpeg' },
    { name: 'React', img: 'https://www.canhcam.vn/wp-content/uploads/2024/08/react-160x100-1.jpeg' },
    { name: 'Apple iOS', img: 'https://www.canhcam.vn/wp-content/uploads/2024/08/apple-160x100-1.jpg' },
    { name: '.NET', img: 'https://www.canhcam.vn/wp-content/uploads/2024/08/dotnet-160x100-1.jpeg' },
    { name: 'Android', img: 'https://www.canhcam.vn/wp-content/uploads/2024/08/android-160x100-1.jpeg' },
    { name: 'Laravel', img: 'https://www.canhcam.vn/wp-content/uploads/2024/08/laravel-160x100-1.jpeg' },
    { name: 'JS5', img: 'https://www.canhcam.vn/wp-content/uploads/2024/08/js5-160x100-1.jpeg' },
    { name: 'HTML5', img: 'https://www.canhcam.vn/wp-content/uploads/2024/08/html5-160x100-1.jpeg' },
    { name: 'PHP', img: 'https://www.canhcam.vn/wp-content/uploads/2024/08/php-160x100-1.jpeg' },
    { name: 'WooCommerce', img: 'https://www.canhcam.vn/wp-content/uploads/2024/08/woo-commerce-160x100-1.jpeg' },
    { name: 'Illustrator', img: 'https://www.canhcam.vn/wp-content/uploads/2024/08/ai-160x100-1.jpeg' },
    { name: 'Java', img: 'https://www.canhcam.vn/wp-content/uploads/2024/08/java-160x100-1.jpeg' },
    { name: 'Photoshop', img: 'https://www.canhcam.vn/wp-content/uploads/2024/08/photoshop-160x100-1.jpeg' },
    { name: 'React Native', img: 'https://www.canhcam.vn/wp-content/uploads/2024/08/react-native-160x100-1.jpeg' },
    { name: 'WordPress', img: 'https://www.canhcam.vn/wp-content/uploads/2024/08/wordpress-160x100-1.jpeg' },
    { name: 'Wix', img: 'https://www.canhcam.vn/wp-content/uploads/2024/08/wix-160x100-1.jpeg' },
  ];

  const industries = [
    {
      name: 'Bất Động Sản',
      img: 'https://www.canhcam.vn/wp-content/uploads/2024/08/bds.jpeg',
      desc: 'Website bất động sản dành cho chủ đầu tư, sàn giao dịch và môi giới chuyên nghiệp. Website hỗ trợ hiển thị dự án, tìm kiếm theo khu vực – giá – loại hình, tích hợp bản đồ, form đăng ký và công cụ quản lý khách hàng nhằm tăng lead và hỗ trợ đội ngũ kinh doanh.',
    },
    {
      name: 'Dầu Khí',
      img: 'https://www.canhcam.vn/wp-content/uploads/2024/08/dau-khi.jpeg',
      desc: 'Website dầu khí dành cho doanh nghiệp năng lượng, khai thác và kỹ thuật công nghiệp. Website tập trung giới thiệu năng lực dự án, hồ sơ kỹ thuật, chứng nhận chất lượng và tiêu chuẩn an toàn, đồng thời hỗ trợ đa ngôn ngữ để nâng cao uy tín và kết nối đối tác trong và ngoài nước.',
    },
    {
      name: 'Bán Hàng',
      img: 'https://www.canhcam.vn/wp-content/uploads/2024/08/truong-hoc.jpeg',
      desc: 'Website bán hàng giúp doanh nghiệp xây dựng kênh kinh doanh trực tuyến hiệu quả. Website tích hợp quản lý sản phẩm, giỏ hàng, thanh toán, tối ưu trải nghiệm mua sắm và chuẩn SEO, hỗ trợ tăng tỷ lệ chuyển đổi và phát triển doanh thu bền vững.',
    },
    {
      name: 'Trường Học',
      img: 'https://www.canhcam.vn/wp-content/uploads/2024/08/san-xuat.jpeg',
      desc: 'Website giáo dục – trường học dành cho các trường mầm non, phổ thông, cao đẳng và đại học. Website hỗ trợ giới thiệu chương trình đào tạo, tin tức – sự kiện, đăng ký tuyển sinh trực tuyến và cổng thông tin phụ huynh – học sinh, giúp nhà trường nâng cao hình ảnh và hiệu quả truyền thông tuyển sinh.',
    },
    {
      name: 'Tài Chính - Ngân Hàng',
      img: 'https://www.canhcam.vn/wp-content/uploads/2026/03/thiet-ke-website-tai-chinh-ngan-hang.webp',
      desc: 'Website tài chính – ngân hàng dành cho ngân hàng, công ty tài chính, bảo hiểm và tổ chức đầu tư. Website chú trọng bảo mật, minh bạch thông tin, tích hợp tra cứu sản phẩm – lãi suất – biểu phí và đăng ký tư vấn trực tuyến, giúp nâng cao uy tín và thu hút khách hàng tiềm năng.',
    },
    {
      name: 'Khách Sạn - Resort',
      img: 'https://www.canhcam.vn/wp-content/uploads/2026/03/thiet-ke-website-khach-san-resort.webp',
      desc: 'Website khách sạn – resort giúp nâng cao hình ảnh thương hiệu và tối ưu đặt phòng trực tuyến. Website tích hợp hệ thống booking online, quản lý phòng, bảng giá linh hoạt và hình ảnh chất lượng cao, hỗ trợ tăng lượng đặt phòng trực tiếp và giảm phụ thuộc vào các nền tảng OTA.',
    },
    {
      name: 'Nhà Hàng - Ẩm Thực - F&B',
      img: 'https://www.canhcam.vn/wp-content/uploads/2026/03/thiet-ke-website-nha-hang-am-thuc.webp',
      desc: 'Website nhà hàng – ẩm thực – F&B giúp thương hiệu giới thiệu menu, hình ảnh món ăn và thu hút khách hàng trực tuyến. Website tích hợp menu điện tử, đặt bàn online, đặt món giao tận nơi và kết nối mạng xã hội, hỗ trợ tăng trải nghiệm khách hàng và doanh thu.',
    },
    {
      name: 'Bệnh Viện, Phòng Khám',
      img: 'https://www.canhcam.vn/wp-content/uploads/2026/03/thiet-ke-website-benh-vien.webp',
      desc: 'Website bệnh viện – phòng khám giúp cơ sở y tế nâng cao uy tín và tối ưu trải nghiệm đặt lịch khám trực tuyến. Website tích hợp giới thiệu chuyên khoa – bác sĩ, đặt lịch hẹn online, tư vấn và cập nhật kiến thức sức khỏe, hỗ trợ tiếp cận bệnh nhân hiệu quả.',
    },
    {
      name: 'Logistic, Vận Tải',
      img: 'https://www.canhcam.vn/wp-content/uploads/2026/03/thiet-ke-website-van-tai-logistic.webp',
      desc: 'Website logistics – vận tải dành cho doanh nghiệp giao nhận, vận chuyển và xuất nhập khẩu. Website hỗ trợ giới thiệu dịch vụ, tra cứu vận đơn, báo giá nhanh và quản lý tuyến vận chuyển, giúp nâng cao hình ảnh chuyên nghiệp và kết nối đối tác trong và ngoài nước.',
    },
    {
      name: 'Du Lịch',
      img: 'https://www.canhcam.vn/wp-content/uploads/2026/03/thiet-ke-website-du-lich.webp',
      desc: 'Website du lịch không chỉ là nơi giới thiệu tour mà còn là công cụ bán hàng và tạo niềm tin. Một website du lịch chuyên nghiệp cần đẹp, truyền cảm hứng và tối ưu chuyển đổi.',
    },
    {
      name: 'Thời Trang - May Mặc',
      img: 'https://www.canhcam.vn/wp-content/uploads/2026/03/thiet-ke-website-thoi-trang.webp',
      desc: 'Website thời trang – may mặc giúp thương hiệu giới thiệu bộ sưu tập, xây dựng hình ảnh chuyên nghiệp và phát triển kênh bán hàng trực tuyến. Website tối ưu trải nghiệm mua sắm, quản lý sản phẩm và hỗ trợ gia tăng doanh thu trong ngành thời trang.',
    },
    {
      name: 'Nội Thất',
      img: 'https://www.canhcam.vn/wp-content/uploads/2026/03/thiet-ke-website-noi-that.webp',
      desc: 'Website nội thất giúp doanh nghiệp giới thiệu sản phẩm, trưng bày dự án và xây dựng showroom online chuyên nghiệp. Website chú trọng hình ảnh thẩm mỹ, bố cục hiện đại và trải nghiệm người dùng, hỗ trợ nâng cao uy tín thương hiệu và thu hút khách hàng.',
    },
  ];

  const workflowSteps = [
    {
      step: '01',
      title: 'Thảo luận về dự án',
      subtitle: 'Thấu hiểu nhanh, hành động kịp thời.',
      desc: 'Trước khi triển khai dự án, Cánh Cam dành thời gian để đánh giá mục tiêu, động lực và yêu cầu đặt ra. Tất cả các vị trí tại Cánh Cam từ bộ phận thiết kế web cho đến lập trình web đều tham gia vào cả giai đoạn trình bày lẫn giai đoạn đánh giá ban đầu.',
      bullets: [
        'Thiết lập mục tiêu và chỉ số KPI',
        'Phân tích các kênh truyền thông',
        'Phân tích đối thủ cạnh tranh',
        'Phân tích khách hàng mục tiêu',
        'Tương tác người dùng',
      ],
    },
    {
      step: '02',
      title: 'Lập kế hoạch',
      subtitle: 'Nguồn tài nguyên giá trị nhất của doanh nghiệp là thời gian.',
      desc: 'Việc hoạch định chi tiết là vô cùng cần thiết. Cánh Cam để khách hàng tham gia vào quá trình hoạch định quan trọng này, chia sẻ thông tin dự án cũng như thảo luận trước về những rủi ro có thể xảy ra.',
      bullets: [
        'Lên kế hoạch dự án và nội dung',
        'Xác định diện mạo người dùng và các giai đoạn mua hàng',
        'Phân loại và cấu trúc thông tin',
        'Hệ thống các giải pháp',
      ],
    },
    {
      step: '03',
      title: 'Thiết kế',
      subtitle: 'Phá vỡ mọi quy tắc thông thường',
      desc: 'Người dùng mục tiêu mới là người quyết định tính hiệu quả của website. Cánh Cam chủ động nắm bắt ham muốn tiềm ẩn của người dùng nhằm đưa ra thiết kế cao cấp khác biệt hoàn toàn nhưng vẫn tối ưu UX/UI.',
      bullets: [
        'Xác định đối tượng khách hàng mục tiêu',
        'Nắm bắt thế mạnh của thương hiệu, sản phẩm',
        'Định hình phong cách, xu thế, điểm nhấn & tính vượt trội',
        'Vẽ giao diện đồ họa độc bản',
        'Sáng tạo hiệu ứng & tương tác mobile',
      ],
    },
    {
      step: '04',
      title: 'Lập trình',
      subtitle: 'Biến mọi ý tưởng thành hiện thực.',
      desc: 'Cánh Cam lập trình web-core trên nền tảng tân tiến nhất hiện nay, mang lại thuận tiện cho nhà quản trị web. Dễ dàng tích hợp ERP, CRM, Cổng thanh toán, tối ưu tốc độ load và tiêu chuẩn SEO hàng đầu.',
      bullets: [
        'Lập trình giao diện người dùng front-end',
        'Lập trình khối chức năng, tiện ích của website',
        'Lập trình phần mềm quản trị tổng thể web (CMS)',
        'Tích hợp các hệ thống (API) bên ngoài vào website',
      ],
    },
    {
      step: '05',
      title: 'Viết nội dung',
      subtitle: 'Nội dung là trái tim của website',
      desc: 'Thiết kế website đẹp thôi là chưa đủ, quan trọng nhất là phải thể hiện được điều khách hàng cần – nội dung tiếp thị và trải nghiệm sản phẩm/dịch vụ trên kênh online. Cánh Cam luôn bắt đầu mỗi dự án từ việc lên chiến lược nội dung bài bản gồm mục đích, mục tiêu và lộ trình đi đến thành công. Nhờ nội dung ấn tượng, dịch vụ/sản phẩm của bạn sẽ được thể hiện chi tiết, dễ hiểu, gần gũi, súc tích và khác biệt so với đối thủ cạnh tranh.',
      bullets: [
        'Hoạch định nội dung và xác định keyword',
        'Sáng tạo và Sản xuất nội dung',
        'Tối ưu hóa công cụ tìm kiếm',
        'Ứng dụng vào thiết kế website',
      ],
    },
    {
      step: '06',
      title: 'Chạy chính thức',
      subtitle: 'Tận hưởng thành quả xứng đáng',
      desc: 'Chọn Cánh Cam, bạn hoàn toàn có thể yên tâm về một trang web xứng tầm, xác lập được vị thế của doanh nghiệp bạn trên thị trường. Chúng tôi sẵn lòng trở thành người bạn đồng hành cùng chặng đường phát triển thương hiệu online của doanh nghiệp bắt đầu từ lúc website vận hành chính thức.',
      bullets: [
        'Chuẩn bị hạ tầng Domain, Server',
        'Đóng gói sourcecode, back-up',
        'Cài đặt vận hành thử nghiệm, kiểm tra tính tương thích, bảo mật',
        'Theo dõi đo lường hiệu quả website',
      ],
    },
  ];

  const teamSlides = [
    'https://www.canhcam.vn/wp-content/uploads/2024/08/slide-01.webp',
    'https://www.canhcam.vn/wp-content/uploads/2024/08/slide-03.webp',
    'https://www.canhcam.vn/wp-content/uploads/2024/08/slide-02.webp',
    'https://www.canhcam.vn/wp-content/uploads/2024/08/slide-04.webp',
    'https://www.canhcam.vn/wp-content/uploads/2024/08/slide-05.webp',
    'https://www.canhcam.vn/wp-content/uploads/2024/08/slide-06.webp',
  ];

  const featuredProjects = [
    {
      title: 'Thiết kế website bán hàng Sony Promotion: Giải pháp tăng trưởng doanh số đột phá',
      img: 'https://www.canhcam.vn/wp-content/uploads/2024/08/1-2.webp',
      link: 'https://www.canhcam.vn/sony-promotion',
      tag: 'Bán Hàng / E-commerce',
    },
    {
      title: 'Thiết kế Website Chubb Life Việt Nam: Số hóa Giải pháp Bảo vệ Tài chính',
      img: 'https://www.canhcam.vn/wp-content/uploads/2025/01/FIX-2_CHUBB-LIFE.webp',
      link: 'https://www.canhcam.vn/chubb-life-viet-nam',
      tag: 'Bảo Hiểm / Tài Chính',
    },
    {
      title: 'Thiết kế Website Tuyển dụng KFC Việt Nam: Số hóa Trải nghiệm Ứng viên',
      img: 'https://www.canhcam.vn/wp-content/uploads/2024/08/kfc-recruitment.jpg',
      link: 'https://www.canhcam.vn/kfc-viet-nam-lam-website-tuyen-dung-cho-rieng-minh',
      tag: 'Tuyển Dụng / F&B',
    },
    {
      title: 'Thiết kế Website ô tô Rolls-Royce Motor Cars: Đỉnh cao Trải nghiệm Thượng lưu',
      img: 'https://www.canhcam.vn/wp-content/uploads/2025/02/new.png',
      link: 'https://www.canhcam.vn/rolls-royce-moto-cars-hcm',
      tag: 'Ô Tô / Luxury',
    },
    {
      title: 'Thiết kế Website bán lẻ nội thất JYSK chuẩn Scandinavian – Cánh Cam',
      img: 'https://www.canhcam.vn/wp-content/uploads/2024/08/4.webp',
      link: 'https://www.canhcam.vn/jysk-thiet-ke-website-canh-cam',
      tag: 'Nội Thất / Bán Lẻ',
    },
    {
      title: 'Thiết kế Website Tập đoàn Amata: Kiến tạo Thành phố Công nghiệp Thông minh',
      img: 'https://www.canhcam.vn/wp-content/uploads/2024/11/amata-2.png',
      link: 'https://www.canhcam.vn/amata',
      tag: 'Khu Công Nghiệp',
    },
    {
      title: 'Thiết kế Website Đại học FPT TP.HCM: Trải nghiệm Giáo dục Công nghệ đỉnh cao',
      img: 'https://www.canhcam.vn/wp-content/uploads/2024/12/HINH-1-885x589-3.png',
      link: 'https://www.canhcam.vn/dh-fpt-lam-web-voi-giao-dien-hoan-toan-moi',
      tag: 'Giáo Dục / Đại Học',
    },
    {
      title: 'Thiết kế Website Bệnh viện Quốc tế Mỹ (AIH): Chuẩn mực Y tế Hoa Kỳ',
      img: 'https://www.canhcam.vn/wp-content/uploads/2025/02/THUMBNAIL-885x589-16.webp',
      link: 'https://www.canhcam.vn/benh-vien-quoc-te-my',
      tag: 'Y Tế / Bệnh Viện',
    },
    {
      title: 'Thiết kế Website An Phước – Pierre Cardin: Đẳng cấp Thời trang Quý ông',
      img: 'https://www.canhcam.vn/wp-content/uploads/2024/08/An-Phuoc-5.png',
      link: 'https://www.canhcam.vn/an-phuoc-pierre-cardin-thiet-ke-website-tai-canh-cam',
      tag: 'Thời Trang May Mặc',
    },
    {
      title: 'Thiết kế Website PV Drilling: Khẳng định Vị thế Tiên phong Ngành Dầu khí',
      img: 'https://www.canhcam.vn/wp-content/uploads/2025/03/THUMBNAIL885x589-1-scaled.webp',
      link: 'https://www.canhcam.vn/pv-drilling',
      tag: 'Năng Lượng / Dầu Khí',
    },
  ];

  const testimonials = [
    {
      quote:
        '“Nền tảng kỹ thuật của website SonyCenter được xây dựng vững, nên rất ít khi có lỗi, đặc biệt về mặt bảo mật, web luôn đáp ứng được chuẩn cao nhất từ tập đoàn Sony đề ra khi vận hành. Ngoài ra, đội ngũ Cánh Cam đã đáp ứng tốt những hỗ trợ về kỹ thuật & tư vấn vận hành, việc này giúp website ổn định, xử lý sự cố được nhanh chóng, đảm bảo sự hài lòng cho khách hàng của chúng tôi.”',
      author: 'Lý Anh Quân',
      position: 'Sony Center Management – South Sales Dept.',
    },
    {
      quote:
        '“Nền tảng giao diện bán hàng thương mại điện tử mới đã và đang giúp chúng tôi tiếp cận nhiều khách hàng hơn với hơn 50.000 đơn hàng đặt online mỗi năm. Bên cạnh đó, những dịch vụ hỗ trợ, nâng cấp website cũng được Cánh Cam xử lý nhanh chóng, đảm bảo quy trình mua hàng của khách hàng Domino Pizza luôn hiệu quả.”',
      author: 'Trần Minh Phong',
      position: 'Domino Pizza – IT Manager',
    },
    {
      quote:
        '“Tốt – Ổn định - Hiệu quả là những điều chúng tôi nói về Cánh Cam khi thực hiện website của Twin. Twin.vn đã được khách hàng và đối tác của Twin đánh giá cao ngay từ ngày vận hành đầu tiên.”',
      author: 'Nguyễn Hiếu Hậu',
      position: 'Twin – Co-Founder & Business Development Director',
    },
    {
      quote:
        '“Website Mr.Vui giúp chúng tôi mở rộng phạm vi kinh doanh tốt hơn. Không chỉ hoạt động hiệu quả về mặt doanh số, website còn giúp tăng khả năng nhận diện thương hiệu Mr.Vui một cách đáng kể với khách hàng trên internet.”',
      author: 'Phan Thanh Nghi',
      position: 'Mr.Vui – Business Development Director',
    },
    {
      quote:
        '“Doanh thu online đã tăng một cách vượt bậc chỉ sau một thời gian ngắn sử dụng, khách hàng có thể tương tác hoàn toàn dễ dàng với những bước mua hàng vô cùng đơn giản trên website của Cánh Cam là kết quả thực tế về sự lựa đúng đắn của Samsonite.”',
      author: 'KHANH NGUYEN, Ms.',
      position: 'Samsonite – Business Development Manager',
    },
  ];

  const clientLogosRow1 = [
    { name: 'Sony', img: 'https://www.canhcam.vn/wp-content/uploads/2024/07/sony.png' },
    { name: 'Chubb', img: 'https://www.canhcam.vn/wp-content/uploads/2024/07/chubb.png' },
    { name: 'KFC', img: 'https://www.canhcam.vn/wp-content/uploads/2024/07/kfc.png' },
    { name: 'JYSK', img: 'https://www.canhcam.vn/wp-content/uploads/2024/08/jysk.png' },
    { name: 'Rolls-Royce', img: 'https://www.canhcam.vn/wp-content/uploads/2024/08/roll-royce.png' },
  ];

  const clientLogosRow2 = [
    { name: 'Nệm Liên Á', img: 'https://www.canhcam.vn/wp-content/uploads/2024/08/lien-a.png' },
    { name: 'S&A architecture', img: 'https://www.canhcam.vn/wp-content/uploads/2024/08/SA-architecture.png' },
    { name: 'Obayashi', img: 'https://www.canhcam.vn/wp-content/uploads/2024/07/obayashi.png' },
    { name: 'Toshiba', img: 'https://www.canhcam.vn/wp-content/uploads/2024/07/toshiba.png' },
    { name: 'Cathay Life', img: 'https://www.canhcam.vn/wp-content/uploads/2024/07/cathay-life.png' },
    { name: 'GS', img: 'https://www.canhcam.vn/wp-content/uploads/2024/07/gs.png' },
  ];

  const clientLogosRow3 = [
    { name: 'Murad', img: 'https://www.canhcam.vn/wp-content/uploads/2024/07/murad.png' },
    { name: 'WHA', img: 'https://www.canhcam.vn/wp-content/uploads/2024/07/wha.png' },
    { name: 'Amata', img: 'https://www.canhcam.vn/wp-content/uploads/2024/07/amata.png' },
    { name: 'Whirlpool', img: 'https://www.canhcam.vn/wp-content/uploads/2024/07/whirlpool.png' },
    { name: 'CP Group', img: 'https://www.canhcam.vn/wp-content/uploads/2024/07/cp-group.png' },
    { name: 'PV Oil', img: 'https://www.canhcam.vn/wp-content/uploads/2024/11/logo_v2_cua_pv_oil.png' },
    { name: 'ACB', img: 'https://www.canhcam.vn/wp-content/uploads/2024/11/acbl1.png' },
  ];

  const faqs = [
    {
      q: 'Chi phí thiết kế website tại Cánh Cam là bao nhiêu?',
      a: 'Chi phí thiết kế website tại Cánh Cam được tính toán dựa trên quy mô, tính năng đặc thù và yêu cầu riêng biệt của từng doanh nghiệp. Chúng tôi cung cấp các gói giải pháp tối ưu chi phí từ website giới thiệu doanh nghiệp chuẩn SEO đến các hệ thống thương mại điện tử hoặc cổng thông tin phức hợp.',
    },
    {
      q: 'Thời gian thiết kế và hoàn thiện một website thường mất bao lâu?',
      a: 'Thông thường thời gian triển khai một dự án website chuyên nghiệp dao động từ 3 đến 8 tuần tùy thuộc vào độ phức tạp của giao diện, khối lượng tính năng lập trình và tiến độ cung cấp tài liệu nội dung từ phía khách hàng.',
    },
    {
      q: 'Website sau khi bàn giao có chuẩn SEO và tối ưu trên di động không?',
      a: '100% website do Cánh Cam thiết kế đều đạt chuẩn SEO On-page từ cấu trúc thẻ heading, sitemap, thẻ schema, tốc độ tải trang cao đến công nghệ Responsive thích ứng hoàn hảo trên mọi kích thước màn hình (Smartphone, Tablet, Desktop).',
    },
    {
      q: 'Doanh nghiệp có toàn quyền sở hữu mã nguồn và dữ liệu website không?',
      a: 'Sau khi hoàn tất nghiệm thu và bàn giao dự án, Cánh Cam bàn giao toàn bộ mã nguồn, tài khoản quản trị và cơ sở dữ liệu cho doanh nghiệp. Khách hàng nắm giữ 100% quyền sở hữu tài sản số của mình.',
    },
    {
      q: 'Chính sách bảo hành và hỗ trợ sau khi website đi vào hoạt động như thế nào?',
      a: 'Cánh Cam cam kết bảo hành kỹ thuật trọn đời đối với các lỗi phát sinh trong mã nguồn do chúng tôi phát triển, đồng thời đội ngũ kỹ thuật luôn sẵn sàng hỗ trợ trực tuyến 24/7 để giải quyết mọi thắc mắc và đảm bảo hệ thống vận hành liên tục, ổn định.',
    },
    {
      q: 'Người không am hiểu lập trình có tự quản trị và cập nhật nội dung được không?',
      a: 'Hệ thống CMS quản trị do Cánh Cam tùy biến cực kỳ trực quan, thân thiện và dễ sử dụng bằng tiếng Việt. Ngoài ra, chúng tôi có tài liệu hướng dẫn và buổi đào tạo trực tiếp cho đội ngũ nhân sự của bạn trước khi bàn giao.',
    },
    {
      q: 'Website có khả năng nâng cấp và tích hợp các phần mềm bên ngoài (ERP, CRM, Cổng thanh toán) không?',
      a: 'Kiến trúc website của Cánh Cam được xây dựng theo chuẩn mở, sẵn sàng tích hợp API với các phần mềm quản lý như SAP, Salesforce, Odoo, HubSpot, các cổng thanh toán (VNPay, Momo, ZaloPay, Visa/Mastercard) và các đơn vị giao nhận.',
    },
  ];

  const displayedIndustries = showAllIndustries ? industries : industries.slice(0, 6);

  return (
    <div className="bg-white font-[Montserrat,sans-serif] text-neutral-800">

      {/* ========== SECTION 1: HERO VIDEO BANNER ========== */}
      <section className="relative overflow-hidden bg-black min-h-[600px] lg:h-[calc(100vh-4rem)] flex items-end">
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
            className="w-full h-full object-cover"
          >
            <source src="https://www.canhcam.vn/wp-content/uploads/2025/01/BANNER-CANH-CAM.mp4" type="video/mp4" />
            <source src="/backgroundhd_1920_1080_25fps.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px)',
              backgroundSize: '25% 100%',
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 pb-16 md:pb-24 w-full">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-[#e8001d]/20 border border-[#e8001d]/50 text-[#e8001d] font-bold text-xs uppercase tracking-widest rounded-full mb-4">
              Cánh Cam Agency
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
              Thiết Kế Website Chuyên Nghiệp Chuẩn SEO TPHCM
            </h1>
            <p className="text-white/85 text-lg md:text-2xl font-light mb-6 leading-relaxed">
              Công Ty Thiết Kế Web Uy Tín Với 20 Năm Kinh Nghiệm &amp; 6.000+ Khách Hàng Đồng Hành.
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <a
                href="tel:+842862730815"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#e8001d] hover:bg-[#c0001a] text-white font-bold rounded-full transition-all duration-300 shadow-xl hover:scale-105"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.64A2 2 0 012 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
                </svg>
                <span>Gọi cho chúng tôi</span>
              </a>
              <div className="flex items-center gap-2 text-white/90 text-sm">
                <span className="text-yellow-400 text-lg">★★★★★</span>
                <span className="font-bold">4.9/5</span>
                <span className="text-white/60">(3.879+ đánh giá)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== BREADCRUMB ========== */}
      <section className="border-b border-neutral-200 bg-[#f9f9f9] py-3.5">
        <div className="max-w-7xl mx-auto px-6 md:px-16 flex items-center gap-2 text-xs md:text-sm text-neutral-500">
          <button onClick={onNavigateHome} className="hover:text-[#e8001d] transition-colors cursor-pointer">
            Trang chủ
          </button>
          <span>/</span>
          <span className="text-neutral-800 font-semibold">Thiết kế website</span>
        </div>
      </section>

      {/* ========== SECTION 2: GIỚI THIỆU DỊCH VỤ THIẾT KẾ WEBSITE ========== */}
      <section className="py-20 md:py-28 bg-white" id="about-service">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 flex flex-col gap-6">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e8001d]">Tiêu chuẩn dẫn đầu</span>
              <h2 className="text-3xl md:text-5xl font-black text-neutral-900 leading-tight">
                Giới Thiệu Dịch Vụ Thiết Kế Website Cánh Cam Agency.
              </h2>
              <div className="w-16 h-1 bg-[#e8001d]" />
              <div className="text-base md:text-lg text-neutral-700 leading-relaxed space-y-4 font-normal">
                <p>
                  Với sự cạnh tranh hiện nay và kinh nghiệm hơn 20 năm trong lĩnh vực <strong>thiết kế website</strong>, Cánh Cam hiểu rõ <strong>thiết kế website đẹp</strong> thôi là chưa đủ, một website hiệu quả phải là một công cụ tạo ra doanh thu thực tế và vận hành bền vững cho doanh nghiệp.
                </p>
                <p>
                  Không chỉ tập trung vào giao diện đẹp, sự khác biệt khi <strong>thiết kế website chuyên nghiệp</strong> tại Cánh Cam là các tiêu chuẩn cao hơn, tập trung sâu vào ba trụ cột cốt lõi:
                </p>

                <div className="space-y-4 pt-2">
                  <div className="p-5 bg-neutral-50 rounded-xl border-l-4 border-[#e8001d] shadow-sm">
                    <h4 className="font-bold text-neutral-900 text-base md:text-lg mb-1">
                      Tối ưu tỷ lệ chuyển đổi (CRO)
                    </h4>
                    <p className="text-sm md:text-base text-neutral-600">
                      Nghiên cứu hành vi người dùng để sắp xếp cấu trúc UX/UI, tối ưu trải nghiệm khách hàng từ click chuột đến hành động mua hàng và liên hệ tư vấn.
                    </p>
                  </div>

                  <div className="p-5 bg-neutral-50 rounded-xl border-l-4 border-neutral-900 shadow-sm">
                    <h4 className="font-bold text-neutral-900 text-base md:text-lg mb-1">
                      Thiết kế website chuẩn SEO
                    </h4>
                    <p className="text-sm md:text-base text-neutral-600">
                      Tối ưu mã nguồn website và tốc độ tải trang ngay từ khâu lập trình, giúp website dễ dàng xuất hiện trong lượt tìm kiếm Google và tiết kiệm chi phí quảng cáo.
                    </p>
                  </div>

                  <div className="p-5 bg-neutral-50 rounded-xl border-l-4 border-[#e8001d] shadow-sm">
                    <h4 className="font-bold text-neutral-900 text-base md:text-lg mb-1">
                      Khả năng vận hành &amp; Mở rộng
                    </h4>
                    <p className="text-sm md:text-base text-neutral-600">
                      Với kinh nghiệm thực chiến từ hơn 6.000 dự án, Cánh Cam xây dựng hệ thống ổn định, dễ dàng tích hợp thêm các tính năng mới khi doanh nghiệp phát triển.
                    </p>
                  </div>
                </div>

                <p className="pt-2 font-medium text-neutral-800">
                  Đừng chỉ thiết kế một trang web – hãy cùng Cánh Cam xây dựng một nền tảng website khác biệt.
                </p>
              </div>
            </div>

            {/* Dual Scroll Columns */}
            <div className="lg:col-span-6 relative h-[680px] lg:h-[720px] overflow-hidden rounded-3xl p-3 bg-neutral-50/80 border border-neutral-200 shadow-lg">
              {/* Top & Bottom subtle gradient fade masks */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-neutral-50 via-neutral-50/80 to-transparent z-10 rounded-t-3xl" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-neutral-50 via-neutral-50/80 to-transparent z-10 rounded-b-3xl" />

              <div className="grid grid-cols-2 gap-4 h-full">
                <div className="flex flex-col gap-4 animate-marquee-y">
                  {[
                    'https://www.canhcam.vn/wp-content/uploads/2024/08/ui2.png',
                    'https://www.canhcam.vn/wp-content/uploads/2025/01/HINH-3.png',
                    'https://www.canhcam.vn/wp-content/uploads/2025/01/HINH-TRANG-_THIET-KE-WEBSITE__HINH-5.png',
                    'https://www.canhcam.vn/wp-content/uploads/2025/01/HINH-TRANG-_THIET-KE-WEBSITE__HINH-4.png',
                  ].map((src, i) => (
                    <div
                      key={i}
                      className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer bg-white"
                      onClick={() => setLightboxImg(src)}
                    >
                      <img src={src} alt={`Dự án Cánh Cam ${i + 1}`} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300" />
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-4 animate-marquee-y-reverse">
                  {[
                    'https://www.canhcam.vn/wp-content/uploads/2025/01/HINH-TRANG-_THIET-KE-WEBSITE__HINH-3.png',
                    'https://www.canhcam.vn/wp-content/uploads/2025/01/HINH-TRANG-_THIET-KE-WEBSITE__HINH-2.png',
                    'https://www.canhcam.vn/wp-content/uploads/2025/01/HINH-TRANG-_THIET-KE-WEBSITE__HINH-1.png',
                    'https://www.canhcam.vn/wp-content/uploads/2024/08/ui2.png',
                  ].map((src, i) => (
                    <div
                      key={i}
                      className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer bg-white"
                      onClick={() => setLightboxImg(src)}
                    >
                      <img src={src} alt={`Dự án Cánh Cam ${i + 5}`} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 3: VÌ SAO THIẾT KẾ WEBSITE LÀ CHIẾN LƯỢC NĂM 2026 ========== */}
      <section className="py-20 md:py-28 bg-[#f8f9fa] border-y border-neutral-200" id="why-design">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e8001d] block mb-2">Chiến lược kinh doanh</span>
            <h2 className="text-3xl md:text-5xl font-black text-neutral-900 leading-tight mb-4">
              Vì Sao Thiết Kế Website Là Chiến Lược Của Doanh Nghiệp Năm 2026?
            </h2>
            <div className="w-16 h-1 bg-[#e8001d] mb-4" />
            <p className="text-neutral-700 text-base md:text-lg leading-relaxed font-normal">
              Website đã trở thành địa điểm quan trọng thứ hai, đại diện cho thương hiệu của doanh nghiệp. Nếu không có một website chuẩn chỉnh, doanh nghiệp của bạn đang vô tình "vắng mặt" trước hàng chục triệu khách hàng tiềm năng.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 flex flex-col gap-3">
              {strategyToggles.map((item, i) => {
                const isOpen = activeStrategyToggle === i;
                return (
                  <div
                    key={i}
                    className="bg-white rounded-xl border border-neutral-200 overflow-hidden transition-all duration-200 shadow-xs"
                  >
                    <button
                      onClick={() => setActiveStrategyToggle(isOpen ? null : i)}
                      className="w-full p-5 text-left font-bold text-base md:text-lg text-neutral-900 hover:text-[#e8001d] flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <span>{item.title}</span>
                      <span className={`text-xl transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#e8001d]' : 'text-neutral-400'}`}>
                        ▼
                      </span>
                    </button>
                    {isOpen && (
                      <div className="p-5 pt-0 text-neutral-600 text-sm md:text-base leading-relaxed border-t border-neutral-100">
                        {item.content}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="lg:col-span-5">
              <div
                className="rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
                onClick={() => setLightboxImg('https://www.canhcam.vn/wp-content/uploads/2024/08/5.png')}
              >
                <img
                  src="https://www.canhcam.vn/wp-content/uploads/2024/08/5.png"
                  alt="Vì sao nên thiết kế website"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* Stats Box */}
          <div className="mt-16 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-neutral-200">
            <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-8 text-center md:text-left">
              Những Con Số Định Hình Tiêu Chuẩn Thiết Kế Website Trong Năm 2026
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="p-4 border-r border-neutral-200 last:border-r-0">
                <div className="text-4xl md:text-5xl font-black text-[#e8001d]">74%</div>
                <div className="text-sm text-neutral-700 font-medium mt-2">
                  Khách hàng xác định mức độ uy tín dựa trên thẩm mỹ giao diện website.
                </div>
              </div>

              <div className="p-4 border-r border-neutral-200 last:border-r-0">
                <div className="text-4xl md:text-5xl font-black text-neutral-900">94%</div>
                <div className="text-sm text-neutral-700 font-medium mt-2">
                  Người tiêu dùng có ấn tượng tốt hơn về doanh nghiệp có website chuyên nghiệp.
                </div>
              </div>

              <div className="p-4 border-r border-neutral-200 last:border-r-0">
                <div className="text-4xl md:text-5xl font-black text-[#e8001d]">3 giây</div>
                <div className="text-sm text-neutral-700 font-medium mt-2">
                  Là "thời gian vàng": 53% người dùng sẽ rời đi ngay nếu tải chậm hơn mức này.
                </div>
              </div>

              <div className="p-4">
                <div className="text-4xl md:text-5xl font-black text-neutral-900">x2</div>
                <div className="text-sm text-neutral-700 font-medium mt-2">
                  Lưu lượng truy cập tự nhiên tăng gấp đôi nếu cấu trúc chuẩn SEO từ đầu.
                </div>
              </div>
            </div>
            <div className="text-xs text-neutral-400 mt-6 text-center">
              Nguồn: Google Research, Stanford Web Credibility Project, Forbes Website Statistics 2025
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 4: NHỮNG LỢI ÍCH KHI THIẾT KẾ WEB CHUẨN SEO ========== */}
      <section className="py-20 md:py-28 bg-white" id="benefits">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e8001d] block mb-2">Giá trị cốt lõi</span>
            <h2 className="text-3xl md:text-5xl font-black text-neutral-900 mb-4">
              Những Lợi Ích Khi Thiết Kế Web Chuẩn SEO Tại Cánh Cam.
            </h2>
            <div className="w-16 h-1 bg-[#e8001d] mb-4" />
            <p className="text-neutral-700 text-base md:text-lg leading-relaxed font-normal">
              Khám phá cách Công ty thiết kế website Cánh Cam giúp khách hàng bán hàng trực tuyến hiệu quả và tạo ấn tượng thương hiệu tốt hơn thông qua chiến lược ưu việt dưới đây.
            </p>
          </div>

          <div className="flex flex-col gap-12">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden border border-neutral-200/80 shadow-sm hover:shadow-xl transition-shadow bg-neutral-50"
              >
                <div className="lg:col-span-6 relative min-h-[300px] overflow-hidden bg-neutral-900">
                  <img
                    src={benefit.img}
                    alt={benefit.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 cursor-pointer"
                    onClick={() => setLightboxImg(benefit.img)}
                  />
                </div>
                <div className="lg:col-span-6 p-8 md:p-14 flex flex-col justify-center">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#e8001d] mb-2">Lợi ích 0{i + 1}</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
                    {benefit.title}
                  </h3>
                  <div className="w-12 h-1 bg-[#e8001d] mb-4" />
                  <p className="text-neutral-600 text-base md:text-lg leading-relaxed font-normal">
                    {benefit.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SECTION 5: CÁC TIÊU CHUẨN THIẾT KẾ WEBSITE CHUYÊN NGHIỆP ========== */}
      <section className="py-20 md:py-28 bg-[#f8f9fa] border-y border-neutral-200" id="criteria">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e8001d] block mb-2">Tiêu chuẩn kỹ thuật</span>
            <h2 className="text-3xl md:text-5xl font-black text-neutral-900 mb-4">
              Các Tiêu Chuẩn Thiết Kế Website Chuyên Nghiệp tại Cánh Cam
            </h2>
            <div className="w-16 h-1 bg-[#e8001d]" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Image */}
            <div className="lg:col-span-4 sticky top-24">
              <div
                className="rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
                onClick={() => setLightboxImg('https://www.canhcam.vn/wp-content/uploads/2024/08/7.png')}
              >
                <img
                  src="https://www.canhcam.vn/wp-content/uploads/2024/08/7.png"
                  alt="Tiêu chuẩn thiết kế website"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Right Criteria list - 2 Columns of toggles */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-neutral-200">
              {/* Column 1 */}
              <div className="flex flex-col gap-3">
                {criteriaCol1.map((item, i) => {
                  const key = `c1-${i}`;
                  const isOpen = activeCriteriaToggle === key;
                  return (
                    <div key={key} className="border-b border-neutral-200 pb-3">
                      <button
                        onClick={() => setActiveCriteriaToggle(isOpen ? null : key)}
                        className="w-full py-3 text-left font-bold text-base md:text-lg text-neutral-900 hover:text-[#e8001d] flex items-center justify-between gap-3 cursor-pointer"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-[#e8001d] font-bold text-sm">+</span>
                          <span>{item.title}</span>
                        </div>
                      </button>
                      {isOpen && (
                        <div className="pt-2 text-neutral-600 text-sm leading-relaxed">
                          {item.content}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Column 2 */}
              <div className="flex flex-col gap-3">
                {criteriaCol2.map((item, i) => {
                  const key = `c2-${i}`;
                  const isOpen = activeCriteriaToggle === key;
                  return (
                    <div key={key} className="border-b border-neutral-200 pb-3">
                      <button
                        onClick={() => setActiveCriteriaToggle(isOpen ? null : key)}
                        className="w-full py-3 text-left font-bold text-base md:text-lg text-neutral-900 hover:text-[#e8001d] flex items-center justify-between gap-3 cursor-pointer"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-[#e8001d] font-bold text-sm">+</span>
                          <span>{item.title}</span>
                        </div>
                      </button>
                      {isOpen && (
                        <div className="pt-2 text-neutral-600 text-sm leading-relaxed">
                          {item.content}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* CTA Consult Button */}
          <div className="flex justify-center mt-12">
            <a
              href="tel:02862730815"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#e8001d] hover:bg-[#c0001a] text-white font-bold rounded-full transition-all duration-300 shadow-xl hover:scale-105 group"
            >
              <span>Liên hệ tư vấn ngay</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ========== SECTION 6: CÁC NỀN TẢNG CÔNG NGHỆ THIẾT KẾ WEB ========== */}
      <section className="py-20 md:py-28 bg-white" id="technology-section">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e8001d]">Công nghệ cốt lõi</span>
            <h2 className="text-3xl md:text-5xl font-black text-neutral-900 mt-2 mb-4">
              Các Nền Tảng Công Nghệ Thiết Kế Web Của Cánh Cam
            </h2>
            <p className="text-neutral-600 text-base md:text-lg">
              Khám phá các công nghệ hàng đầu của Cánh Cam được tích hợp trong mọi dự án web.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4">
            {techPlatforms.map((tech, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-[4px_4px_32px_16px_rgba(0,0,0,0.03)] border border-neutral-100 hover:border-[#e8001d] hover:shadow-lg transition-all duration-300 p-4 flex items-center justify-center group h-24 cursor-default"
              >
                <img
                  src={tech.img}
                  alt={tech.name}
                  title={tech.name}
                  className="max-h-12 max-w-full object-contain group-hover:scale-105 transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SECTION 7: THIẾT KẾ WEBSITE THEO YÊU CẦU - ĐA LĨNH VỰC ========== */}
      <section className="py-20 md:py-28 bg-[#f8f9fa] border-y border-neutral-200" id="industries-section">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="w-full mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e8001d] block mb-2">Đa dạng ngành nghề</span>
            <h2 className="text-3xl md:text-5xl font-black text-neutral-900 leading-tight mb-4">
              Thiết Kế Website Theo Yêu Cầu - Đa Lĩnh Vực
            </h2>
            <div className="w-16 h-1 bg-[#e8001d] mb-6" />
            <div className="text-neutral-700 text-base md:text-lg leading-relaxed space-y-3 font-normal">
              <p>
                Mỗi lĩnh vực kinh doanh đều có đặc điểm riêng về hành vi khách hàng, quy trình vận hành và mục tiêu chuyển đổi. Vì vậy, website không thể thiết kế theo một khuôn mẫu chung.
              </p>
              <p>
                Cánh Cam xây dựng cấu trúc, giao diện và tính năng dựa trên đặc thù từng ngành – từ tài chính, giáo dục, bất động sản đến thương mại điện tử, sản xuất hay dịch vụ. Chúng tôi tập trung vào việc <strong>thiết kế website theo yêu cầu</strong> riêng để đảm bảo website đáp ứng đúng nhu cầu thị trường và hỗ trợ tối đa hoạt động marketing.
              </p>
              <p>
                Thay vì chỉ cung cấp một mẫu website có sẵn, Cánh Cam phát triển nền tảng website phù hợp với chiến lược kinh doanh riêng của từng doanh nghiệp.
              </p>
            </div>
          </div>

          {/* Active Industry Big Preview + List */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
            {/* Left Big Preview */}
            <div className="lg:col-span-5 sticky top-24 hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-neutral-900 aspect-[4/3]">
                <img
                  src={industries[activeIndustryHover].img}
                  alt={industries[activeIndustryHover].name}
                  className="w-full h-full object-cover transition-all duration-500"
                />
              </div>
              <div className="mt-4 p-5 bg-white rounded-xl shadow-xs border border-neutral-200">
                <h4 className="text-xl font-bold text-[#e8001d]">
                  {industries[activeIndustryHover].name}
                </h4>
                <p className="text-sm text-neutral-600 mt-2 leading-relaxed">
                  {industries[activeIndustryHover].desc}
                </p>
              </div>
            </div>

            {/* Right List of items */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              {displayedIndustries.map((ind, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setActiveIndustryHover(i)}
                  className={`p-6 rounded-2xl bg-white border transition-all duration-200 cursor-pointer ${
                    activeIndustryHover === i ? 'border-[#e8001d] shadow-md -translate-y-0.5' : 'border-neutral-200 shadow-xs'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-neutral-100 lg:hidden">
                        <img src={ind.img} alt={ind.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <span className="text-xs uppercase text-neutral-400 font-bold">Thiết kế website</span>
                        <h4 className="text-xl font-bold text-neutral-900 group-hover:text-[#e8001d]">
                          {ind.name}
                        </h4>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#e8001d] px-3 py-1 bg-[#e8001d]/10 rounded-full self-start sm:self-center">
                      Xem chi tiết
                    </span>
                  </div>
                  <p className="text-sm text-neutral-600 mt-3 leading-relaxed">
                    {ind.desc}
                  </p>
                </div>
              ))}

              {/* View more button */}
              <button
                onClick={() => setShowAllIndustries(!showAllIndustries)}
                className="w-full py-4 mt-2 bg-white border border-neutral-300 hover:border-[#e8001d] hover:text-[#e8001d] rounded-xl font-bold text-sm transition-all duration-200 cursor-pointer shadow-xs"
              >
                {showAllIndustries ? 'Thu gọn lĩnh vực ▲' : 'Xem thêm các lĩnh vực khác ▼'}
              </button>

              {/* Consultation button */}
              <div className="mt-4 flex justify-start">
                <a
                  href="tel:02862730815"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#e8001d] hover:bg-[#c0001a] text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:scale-105"
                >
                  <span>Liên hệ tư vấn</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 8: NHỮNG CON SỐ THỐNG KÊ ẤN TƯỢNG ========== */}
      <section
        className="py-20 md:py-24 text-white relative z-20"
        id="numbers"
        style={{ background: 'linear-gradient(135deg, #e8001d 0%, #c0001a 50%, #990013 100%)' }}
      >
        <div className="max-w-4xl mx-auto text-center px-6 mb-16">
          <h3 className="text-3xl md:text-5xl font-black text-white mb-4">
            Những Con Số Thống Kê Ấn Tượng
          </h3>
          <p className="text-base md:text-xl text-white/90 leading-relaxed font-light">
            Cánh Cam là <strong>công ty thiết kế web tại Hồ Chí Minh</strong> với nhiều năm kinh nghiệm. Đội ngũ tận tâm và sáng tạo của chúng tôi cam kết cung cấp các giải pháp website vượt qua sự mong đợi của khách hàng.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-6 border-r border-white/20 last:border-r-0">
              <div className="text-5xl md:text-7xl font-extrabold">
                20<span className="text-3xl md:text-5xl ml-1">+</span>
              </div>
              <div className="text-sm md:text-base text-white/90 font-semibold mt-4">
                Năm kinh nghiệm
              </div>
            </div>

            <div className="flex flex-col items-center text-center p-6 border-r border-white/20 last:border-r-0">
              <div className="text-5xl md:text-7xl font-extrabold">
                25<span className="text-3xl md:text-5xl ml-1">%</span>
              </div>
              <div className="text-sm md:text-base text-white/90 font-semibold mt-4">
                Tiết kiệm chi phí cho hoạt động kinh doanh
              </div>
            </div>

            <div className="flex flex-col items-center text-center p-6 border-r border-white/20 last:border-r-0">
              <div className="text-5xl md:text-7xl font-extrabold">
                100<span className="text-3xl md:text-5xl ml-1">%</span>
              </div>
              <div className="text-sm md:text-base text-white/90 font-semibold mt-4">
                Tỷ lệ cam kết (về chất lượng, thời gian và chi phí)
              </div>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <div className="text-5xl md:text-7xl font-extrabold">
                6000<span className="text-3xl md:text-5xl ml-1">+</span>
              </div>
              <div className="text-sm md:text-base text-white/90 font-semibold mt-4">
                Dự án
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 9: QUY TRÌNH THIẾT KẾ WEBSITE ========== */}
      <section className="py-20 md:py-28 bg-white" id="workflow-section">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e8001d] block mb-2">Quy trình chuyên nghiệp</span>
            <h2 className="text-3xl md:text-5xl font-black text-neutral-900 mb-4">
              Quy Trình Thiết Kế Website Của Cánh Cam
            </h2>
            <div className="w-16 h-1 bg-[#e8001d]" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image */}
            <div className="lg:col-span-5 hidden lg:block">
              <div
                className="rounded-tr-[80px] rounded-bl-[80px] overflow-hidden shadow-2xl group cursor-pointer"
                onClick={() => setLightboxImg('https://www.canhcam.vn/wp-content/uploads/2024/11/quy-trinh.webp')}
              >
                <img
                  src="https://www.canhcam.vn/wp-content/uploads/2024/11/quy-trinh.webp"
                  alt="Quy trình thiết kế website Cánh Cam"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Right Steps Accordion */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              {workflowSteps.map((step, i) => {
                const isOpen = activeWorkflowStep === i;
                return (
                  <div
                    key={i}
                    className="border-b border-neutral-200 pb-4 transition-all duration-200"
                  >
                    <button
                      onClick={() => setActiveWorkflowStep(isOpen ? null : i)}
                      className="w-full text-left flex items-start justify-between gap-4 py-2 cursor-pointer group"
                    >
                      <div>
                        <div className="text-2xl font-black text-neutral-900 group-hover:text-[#e8001d] transition-colors">
                          {step.step}. {step.title}
                        </div>
                        <p className="text-sm font-semibold text-neutral-500 mt-1">
                          {step.subtitle}
                        </p>
                      </div>
                      <span className={`text-2xl font-bold transition-transform duration-300 ${isOpen ? 'rotate-45 text-[#e8001d]' : 'text-neutral-400'}`}>
                        +
                      </span>
                    </button>
                    {isOpen && (
                      <div className="pt-4 text-neutral-600 text-sm md:text-base leading-relaxed">
                        <p className="mb-4">{step.desc}</p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {step.bullets.map((b, j) => (
                            <li key={j} className="flex items-center gap-2 text-sm text-neutral-700">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#e8001d]" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Consultation button */}
              <div className="pt-4 flex justify-start">
                <a
                  href="tel:02862730815"
                  className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#e8001d] hover:bg-[#c0001a] text-white font-bold rounded-full transition-all duration-300 shadow-xl hover:scale-105"
                >
                  <span>Liên hệ tư vấn ngay</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 10: ĐỘI NGŨ THIẾT KẾ WEB CỦA CÔNG TY CÁNH CAM ========== */}
      <section className="py-20 md:py-28 bg-[#f8f9fa] relative z-20 border-t border-neutral-200" id="our-team">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Heading & Download Profiles */}
            <div className="lg:col-span-5 flex flex-col justify-center gap-6">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e8001d]">Đồng hành cùng bạn</span>
              <h2 className="text-3xl md:text-5xl font-black text-neutral-900 leading-tight">
                Đội Ngũ Thiết Kế Web Của Công Ty Cánh Cam
              </h2>
              <div className="w-16 h-1 bg-[#e8001d]" />
              <div className="text-neutral-600 text-base md:text-lg space-y-3 leading-relaxed">
                <p>Mọi sự hợp tác tốt đẹp đều bắt đầu từ một cuộc trò chuyện.</p>
                <p>
                  Hãy liên hệ với chúng tôi để được <strong>tư vấn thiết kế web</strong>, mọi mong muốn của bạn sẽ được lắng nghe.
                </p>
              </div>

              <div className="flex flex-col gap-4 mt-2">
                <a
                  href="https://www.canhcam.vn/wp-content/uploads/2025/04/OverviewCC_VN_29112024.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 flex items-center justify-between bg-white border border-neutral-200 rounded-2xl group hover:bg-[#e8001d] transition-all duration-300 shadow-xs hover:shadow-xl hover:-translate-y-0.5"
                >
                  <div>
                    <div className="text-xs uppercase font-medium tracking-wider text-neutral-500 group-hover:text-white/80 transition-colors">
                      Hồ sơ năng lực (Tiếng Việt)
                    </div>
                    <div className="text-lg text-[#e8001d] font-bold group-hover:text-white transition-colors">
                      CanhCam Profile
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-neutral-100 group-hover:bg-white/20 flex items-center justify-center transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#e8001d] group-hover:text-white transition-colors">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                  </div>
                </a>

                <a
                  href="https://www.canhcam.vn/wp-content/uploads/2025/04/OverviewCC_EN_20112024.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 flex items-center justify-between bg-white border border-neutral-200 rounded-2xl group hover:bg-[#e8001d] transition-all duration-300 shadow-xs hover:shadow-xl hover:-translate-y-0.5"
                >
                  <div>
                    <div className="text-xs uppercase font-medium tracking-wider text-neutral-500 group-hover:text-white/80 transition-colors">
                      Company Profile (English)
                    </div>
                    <div className="text-lg text-[#e8001d] font-bold group-hover:text-white transition-colors">
                      CanhCam Profile
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-neutral-100 group-hover:bg-white/20 flex items-center justify-center transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#e8001d] group-hover:text-white transition-colors">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Column: Team Slider */}
            <div className="lg:col-span-7">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-neutral-900 aspect-[16/10] group">
                <img
                  src={teamSlides[currentTeamSlide]}
                  alt={`Đội ngũ thiết kế website Cánh Cam hình ${currentTeamSlide + 1}`}
                  className="w-full h-full object-cover transition-all duration-700 cursor-zoom-in group-hover:scale-105"
                  onClick={() => setLightboxImg(teamSlides[currentTeamSlide])}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                {/* Slider Navigation Controls */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-10">
                  <div className="flex items-center gap-2">
                    {teamSlides.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentTeamSlide(idx)}
                        className={`h-2.5 rounded-full transition-all cursor-pointer ${
                          currentTeamSlide === idx ? 'w-8 bg-[#e8001d]' : 'w-2.5 bg-white/60 hover:bg-white'
                        }`}
                        aria-label={`Slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setCurrentTeamSlide((prev) => (prev === 0 ? teamSlides.length - 1 : prev - 1))}
                      className="w-10 h-10 rounded-full bg-black/50 hover:bg-[#e8001d] text-white flex items-center justify-center transition-colors cursor-pointer"
                      aria-label="Previous image"
                    >
                      ←
                    </button>
                    <button
                      onClick={() => setCurrentTeamSlide((prev) => (prev === teamSlides.length - 1 ? 0 : prev + 1))}
                      className="w-10 h-10 rounded-full bg-black/50 hover:bg-[#e8001d] text-white flex items-center justify-center transition-colors cursor-pointer"
                      aria-label="Next image"
                    >
                      →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 11: CÁC DỰ ÁN NỔI BẬT ========== */}
      <section className="py-20 md:py-28 bg-white relative z-20" id="featured-projects">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e8001d] block mb-2">Portfolio</span>
              <h2 className="text-3xl md:text-5xl font-black text-neutral-900">
                Các Dự Án Nổi Bật
              </h2>
              <div className="w-16 h-1 bg-[#e8001d] mt-4" />
            </div>

            {/* Slider controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setCurrentProjectSlide((prev) => (prev === 0 ? Math.max(0, featuredProjects.length - 3) : prev - 1))}
                className="w-12 h-12 rounded-full border border-neutral-300 hover:border-[#e8001d] hover:bg-[#e8001d] hover:text-white text-neutral-700 flex items-center justify-center transition-all cursor-pointer shadow-xs"
                aria-label="Previous project"
              >
                ←
              </button>
              <button
                onClick={() => setCurrentProjectSlide((prev) => (prev >= featuredProjects.length - 3 ? 0 : prev + 1))}
                className="w-12 h-12 rounded-full border border-neutral-300 hover:border-[#e8001d] hover:bg-[#e8001d] hover:text-white text-neutral-700 flex items-center justify-center transition-all cursor-pointer shadow-xs"
                aria-label="Next project"
              >
                →
              </button>
            </div>
          </div>

          {/* Projects Carousel / Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.slice(currentProjectSlide, currentProjectSlide + 3).map((item, idx) => (
              <div
                key={idx}
                className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-neutral-100 hover:border-[#e8001d]/40 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5"
              >
                <div className="relative aspect-[16/11] overflow-hidden bg-neutral-100">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1.5 bg-black/70 backdrop-blur-md text-white text-xs font-bold rounded-full">
                      {item.tag}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between">
                  <h3 className="text-lg md:text-xl font-bold text-neutral-900 group-hover:text-[#e8001d] transition-colors line-clamp-2 mb-4 leading-snug">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 text-[#e8001d] font-bold text-sm">
                    <span>Khám phá dự án</span>
                    <span className="group-hover:translate-x-1.5 transition-transform">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* All Projects View Indicator */}
          <div className="mt-8 flex justify-center items-center gap-2">
            {Array.from({ length: featuredProjects.length - 2 }).map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setCurrentProjectSlide(dotIdx)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  currentProjectSlide === dotIdx ? 'w-8 bg-[#e8001d]' : 'w-2 bg-neutral-300 hover:bg-neutral-400'
                }`}
                aria-label={`Go to page ${dotIdx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ========== SECTION 12: TRẢI NGHIỆM CỦA KHÁCH HÀNG ========== */}
      <section className="py-20 md:py-28 bg-[#f8f9fa] relative z-20" id="testimonials">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="p-8 md:p-16 lg:p-20 rounded-[40px] md:rounded-[80px] border-2 border-[#e8001d] bg-white shadow-xl relative overflow-hidden">
            <div className="max-w-4xl">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e8001d] block mb-2">Đánh giá thực tế</span>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-neutral-900 leading-tight mb-8">
                Trải Nghiệm Của Khách Hàng Khi Thiết Kế Web Tại Cánh Cam
              </h2>
              <div className="w-16 h-1 bg-[#e8001d] mb-8" />

              <div className="relative min-h-[160px] md:min-h-[180px]">
                <blockquote className="text-base md:text-xl lg:text-2xl text-neutral-700 italic leading-relaxed font-light transition-opacity duration-300">
                  {testimonials[currentReviewSlide].quote}
                </blockquote>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-lg md:text-xl font-bold text-[#e8001d]">
                    {testimonials[currentReviewSlide].author}
                  </div>
                  <div className="text-sm md:text-base text-neutral-500 font-medium">
                    {testimonials[currentReviewSlide].position}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setCurrentReviewSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                    className="w-12 h-12 rounded-full border border-neutral-300 hover:border-[#e8001d] hover:bg-[#e8001d] hover:text-white text-neutral-700 flex items-center justify-center transition-all cursor-pointer shadow-xs"
                    aria-label="Previous review"
                  >
                    ←
                  </button>
                  <span className="text-sm font-bold text-neutral-400">
                    {currentReviewSlide + 1} / {testimonials.length}
                  </span>
                  <button
                    onClick={() => setCurrentReviewSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                    className="w-12 h-12 rounded-full border border-neutral-300 hover:border-[#e8001d] hover:bg-[#e8001d] hover:text-white text-neutral-700 flex items-center justify-center transition-all cursor-pointer shadow-xs"
                    aria-label="Next review"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 13: KHÁCH HÀNG TIÊU BIỂU CỦA CÁNH CAM ========== */}
      <section className="py-20 md:py-24 bg-white relative z-20 border-b border-neutral-200" id="client-logos">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e8001d]">Khách hàng tin chọn</span>
            <h2 className="text-3xl md:text-5xl font-black text-neutral-900 mt-2 mb-4">
              Khách Hàng Tiêu Biểu Của Cánh Cam
            </h2>
            <div className="w-16 h-1 bg-[#e8001d] mx-auto" />
          </div>

          <div className="flex flex-col gap-5">
            {/* Row 1 */}
            <div className="flex flex-wrap justify-center items-center gap-4">
              {clientLogosRow1.map((c, i) => (
                <div
                  key={i}
                  className="w-36 sm:w-44 md:w-52 h-24 bg-white border border-neutral-200 hover:border-[#e8001d] rounded-xl p-4 flex items-center justify-center transition-all duration-300 shadow-xs hover:shadow-lg hover:-translate-y-1 group"
                >
                  <img
                    src={c.img}
                    alt={c.name}
                    title={c.name}
                    className="max-h-12 max-w-full object-contain filter group-hover:brightness-105 transition-all"
                  />
                </div>
              ))}
            </div>

            {/* Row 2 */}
            <div className="flex flex-wrap justify-center items-center gap-4">
              {clientLogosRow2.map((c, i) => (
                <div
                  key={i}
                  className="w-36 sm:w-44 md:w-52 h-24 bg-white border border-neutral-200 hover:border-[#e8001d] rounded-xl p-4 flex items-center justify-center transition-all duration-300 shadow-xs hover:shadow-lg hover:-translate-y-1 group"
                >
                  <img
                    src={c.img}
                    alt={c.name}
                    title={c.name}
                    className="max-h-12 max-w-full object-contain filter group-hover:brightness-105 transition-all"
                  />
                </div>
              ))}
            </div>

            {/* Row 3 */}
            <div className="flex flex-wrap justify-center items-center gap-4">
              {clientLogosRow3.map((c, i) => (
                <div
                  key={i}
                  className="w-36 sm:w-44 md:w-52 h-24 bg-white border border-neutral-200 hover:border-[#e8001d] rounded-xl p-4 flex items-center justify-center transition-all duration-300 shadow-xs hover:shadow-lg hover:-translate-y-1 group"
                >
                  <img
                    src={c.img}
                    alt={c.name}
                    title={c.name}
                    className="max-h-12 max-w-full object-contain filter group-hover:brightness-105 transition-all"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 14: FAQ ACCORDION ========== */}
      <section className="py-20 md:py-28 bg-[#f8f9fa] border-t border-neutral-200" id="faq-section">
        <div className="max-w-5xl mx-auto px-6 md:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e8001d]">Giải đáp thắc mắc</span>
            <h3 className="text-3xl md:text-5xl font-black text-neutral-900 mt-2 mb-4">
              Câu Hỏi Thường Gặp
            </h3>
            <p className="text-neutral-600 text-base md:text-lg">
              Những câu hỏi phổ biến của doanh nghiệp khi triển khai thiết kế website tại Cánh Cam.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => {
              const isOpen = activeFaq === i;
              return (
                <div
                  key={i}
                  className="border border-neutral-200 rounded-2xl overflow-hidden transition-all duration-200 bg-white shadow-xs"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : i)}
                    className="w-full p-6 text-left font-bold text-base md:text-lg text-neutral-900 hover:text-[#e8001d] flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <span className={`text-2xl transition-transform duration-300 ${isOpen ? 'rotate-45 text-[#e8001d]' : 'text-neutral-400'}`}>
                      +
                    </span>
                  </button>
                  {isOpen && (
                    <div className="p-6 pt-2 text-neutral-600 text-sm md:text-base leading-relaxed bg-white border-t border-neutral-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== SECTION 11: FOLLOW US BANNER ========== */}
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
                  href="tel:02862730815"
                  className="inline-flex items-center justify-center px-10 py-3.5 bg-white hover:bg-[#e8001d] text-neutral-900 hover:text-white font-bold text-base rounded-full shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  Liên hệ tư vấn ngay
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

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
