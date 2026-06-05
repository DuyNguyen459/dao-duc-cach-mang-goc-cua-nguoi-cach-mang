export const navItems = [
  { id: 'hero', label: 'Mở đầu' },
  { id: 'duc-la-goc-intro', label: 'Video: Đế quốc La Mã' },
  { id: 'duc-la-goc-answer', label: 'Phân tích nguyên nhân' },
  { id: 'duc-la-goc', label: 'Đức là gốc' },
  { id: 'standards', label: 'Chuẩn mực' },
  { id: 'inner-enemy', label: 'Giặc nội xâm' },
  { id: 'documents', label: 'Văn kiện XIV' },
  { id: 'discipline', label: 'Kỷ luật & đổi mới' },
  { id: 'genz', label: 'Gen Z & AI' },
  { id: 'declaration', label: 'AI Declaration' }
];

export const hero = {
  title: 'Đạo đức cách mạng  Gốc của người cách mạng',

};

export const sections = [
  {
    id: 'duc-la-goc-intro',
    number: '01',
    member: 'Phan Thanh Đức',
    kicker: 'Dẫn dắt',
    title: 'Sụp đổ của Đế quốc La Mã',
    lead: 'Tại sao một đế quốc hùng mạnh và tồn tại lâu như vậy lại sụp đổ và biến mất mãi mãi trên bản đồ thế giới?',
    videoUrl: '/videos/7899268136682.mp4',
    isIntroSlide: true
  },
  {
    id: 'duc-la-goc-answer',
    number: '01',
    member: 'Phan Thanh Đức',
    kicker: 'Phân tích nguyên nhân',
    title: 'Nguyên nhân sụp đổ Đế quốc La Mã',
    lead: 'Sự sụp đổ của Đế quốc La Mã, ngoài các cuộc xâm lược bên ngoài, nguyên nhân quan trọng còn đến từ:',
    causes: [
      'Tham nhũng',
      'Đấu đá quyền lực',
      'Tầng lớp cầm quyền xa rời nhân dân',
      'Sự suy giảm kỷ cương trong bộ máy nhà nước'
    ],
    reflection: 'Nhìn nhận từ những gì đã thấy trong quá khứ, liệu những gì đã từng xảy ra ở đế chế La Mã có lặp lại với các quốc gia khác hiện nay?'
  },
  {
    id: 'duc-la-goc',
    number: '01',
    member: 'Phan Thanh Đức',
    kicker: 'Đặt vấn đề',
    title: 'Vì sao đạo đức là cái gốc?',
    lead:
      'Một tổ chức có thể mạnh về lực lượng, kỹ thuật và quyền lực, nhưng nếu suy yếu từ bên trong thì nền tảng lãnh đạo sẽ lung lay.',
    points: [
      'Sự sụp đổ của nhiều đế chế không chỉ đến từ kẻ thù bên ngoài mà còn từ tham nhũng, đấu đá quyền lực và xa rời nhân dân.',
      'Khi đạo đức suy giảm, tài năng và quyền lực dễ biến thành công cụ phục vụ lợi ích riêng.',
      'Trong tư tưởng Hồ Chí Minh, đạo đức cách mạng là nền tảng quyết định khả năng lãnh đạo nhân dân.',
      'Đức là gốc, nhưng Đức và Tài phải đi đôi; tài càng lớn thì đức càng phải cao.'
    ],
    quote:
      'Cũng như sông thì có nguồn mới có nước, không có nguồn thì sông cạn. Cây phải có gốc, không có gốc thì cây héo. Người cách mạng phải có đạo đức...',
    pattern: 'source-root',
    cards: [
      ['Sông - Nguồn', 'Có nguồn thì dòng chảy mới bền vững.'],
      ['Cây - Gốc', 'Có gốc thì cành lá mới xanh tốt.'],
      ['Người cách mạng - Đạo đức', 'Có đạo đức thì tài năng mới phụng sự nhân dân.']
    ]
  },
  {
    id: 'standards',
    number: '02',
    member: 'Hoàng Anh Khoa',
    kicker: 'Chuẩn mực cốt lõi',
    title: 'Đạo đức phải được rèn luyện trong đời sống cụ thể',
    lead:
      'Đạo đức cách mạng không dừng ở khẩu hiệu, mà hiện ra trong thói quen học tập, làm việc, tiêu dùng, ứng xử và phụng sự cộng đồng.',
    quote: 'Ngọc càng mài càng sáng, vàng càng luyện càng trong.',
    pattern: 'root-web',
    standards: [
      ['Cần', 'Siêng năng, có kế hoạch, làm việc đến nơi đến chốn.', 'Chủ động chuẩn bị bài, không học đối phó.'],
      ['Kiệm', 'Tiết kiệm thời gian, tiền bạc, công sức; tránh lãng phí.', 'Quản trị thời gian học tập và chi tiêu cá nhân.'],
      ['Liêm', 'Trong sạch, không tham lam, không vụ lợi.', 'Trung thực trong thi cử và nghiên cứu.'],
      ['Chính', 'Ngay thẳng, dám bảo vệ lẽ phải, dám sửa sai.', 'Nhận trách nhiệm khi làm việc nhóm chưa tốt.'],
      ['Chí công vô tư', 'Đặt lợi ích chung lên trên lợi ích cá nhân.', 'Không thiên vị trong đánh giá đóng góp nhóm.'],
      ['Quốc tế trong sáng', 'Yêu chuộng hòa bình, tôn trọng tiến bộ nhân loại.', 'Học hỏi công nghệ mới với tinh thần trách nhiệm.']
    ]
  },
  {
    id: 'inner-enemy',
    number: '03',
    member: 'Hoàng Bảo Ân',
    kicker: 'Nhận diện thách thức',
    title: '“Giặc nội xâm”',
    lead:
      'Sự suy thoái từ bên trong đội ngũ cán bộ, đảng viên.',
    threatCards: [
      [
        'BIỂU HIỆN',
        [
          'Suy thoái tư tưởng, đạo đức, lối sống',
          'Chủ nghĩa cá nhân',
          'Tham ô, lãng phí, quan liêu',
          'Lạm quyền, trục lợi, xa dân'
        ]
      ],
      [
        'MỨC ĐỘ NGUY HIỂM',
        [
          'Nằm ngay trong bộ máy, trong người có chức quyền',
          'Làm suy yếu kỷ luật và đạo đức cách mạng',
          'Làm xói mòn niềm tin của nhân dân đối với Đảng'
        ]
      ],
      [
        'PHÒNG, CHỐNG',
        [
          'Rèn luyện cần, kiệm, liêm, chính',
          'Kiểm soát quyền lực',
          'Dựa vào nhân dân giám sát',
          'Xử lý nghiêm sai phạm, không có vùng cấm'
        ]
      ]
    ],
    quote:
      'Nếu giặc ngoại xâm xâm phạm lãnh thổ, thì ‘giặc nội xâm’ xâm phạm niềm tin, đạo đức và sức mạnh của Đảng.'
  },
  {
    id: 'documents',
    number: '04',
    member: 'Trần Đặng Minh Quân',
    kicker: 'Phân tích văn kiện',
    title: 'Đạo đức trong Văn kiện Đại hội XIV',
    lead:
      'Vấn đề đạo đức được đặt trong chỉnh thể xây dựng Đảng, xây dựng văn hóa và xây dựng con người Việt Nam phát triển toàn diện.',
    quote:
      'Đạo đức không chỉ là phẩm chất cá nhân mà là nền tảng chính trị - văn hóa - xã hội để củng cố uy tín của Đảng và niềm tin của nhân dân.',
    pillars: ['Chính trị', 'Tư tưởng', 'Đạo đức', 'Tổ chức', 'Cán bộ'],
    citations: [
      ['VK ĐH XIV Tập 2, tr. 214', 'Xây dựng Đảng về đạo đức được đặc biệt quan tâm.'],
      ['VK ĐH XIV Tập 2, tr. 90', 'Đấu tranh chống suy thoái đạo đức, lối sống là nhiệm vụ cấp bách.'],
      ['VK ĐH XIV Tập 2, tr. 223', 'Đề cao trách nhiệm nêu gương của cán bộ, đảng viên.'],
      ['VK ĐH XIV Tập 2, tr. 258', 'Xây dựng con người Việt Nam phát triển toàn diện.'],
      ['VK ĐH XIV Tập 2, tr. 166-167', 'Đạo đức gắn với hệ giá trị văn hóa, gia đình và quốc gia.'],
      ['VK ĐH XIV Tập 2, tr. 378', 'Hoàn thiện lý luận, thể chế và chuẩn mực trong kỷ nguyên mới.']
    ]
  },
  {
    id: 'discipline',
    number: '05',
    member: 'Hoàng Nguyễn Trọng Nhã',
    kicker: 'Kỷ luật thép và đổi mới',
    title: 'Kỷ luật là lá chắn, đổi mới là động lực',
    lead:
      'Trong bối cảnh 40 năm đổi mới, kỷ luật và sáng tạo không đối lập nhau; chúng bổ sung để bảo vệ sự trong sạch và mở đường cho phát triển.',
    quote:
      'Kỷ luật thép không làm nhụt chí người dám làm, mà tạo hành lang minh bạch để những người tâm huyết tự tin cống hiến.',
    compare: [
      ['Bản chất', 'Bảo vệ sự trong sạch của hệ thống', 'Giải phóng năng lượng sáng tạo'],
      ['Vận hành', 'Không có vùng cấm, không có ngoại lệ', 'Thử nghiệm chính sách, chấp nhận rủi ro có kiểm soát'],
      ['Giá trị tương hỗ', 'Kiểm soát quyền lực', 'Khuyến khích 5 dám vì lợi ích chung'],
      ['Kết quả', 'Tăng niềm tin', 'Tạo động lực phát triển trong kỷ nguyên mới']
    ],
    dare: ['Dám nghĩ', 'Dám làm', 'Dám đột phá', 'Dám chịu trách nhiệm', 'Dám đổi mới sáng tạo']
  },
  {
    id: 'genz',
    number: '06',
    member: 'Nguyễn Đình Duy',
    kicker: 'Liên hệ sinh viên',
    title: 'Gen Z, AI và lựa chọn liêm chính',
    lead:
      'Với sinh viên hôm nay, đạo đức cách mạng không xa vời; nó bắt đầu từ học thật, làm thật, dùng công nghệ có trách nhiệm.',
    quote:
      'Đổi mới sáng tạo phải đi liền với trách nhiệm, liêm chính và đạo đức.',
    points: [
      'Sống có hoài bão và đóng góp thiết thực cho đất nước.',
      'Học tập để làm chủ công nghệ, không để công cụ làm chủ tư duy.',
      'Trung thực trong thi cử, nghiên cứu và làm việc nhóm.',
      'Hành xử văn minh trên không gian mạng và biết dùng AI có trách nhiệm.'
    ]
  }
];

export const dilemma = {
  situation:
    'Bạn phát hiện một bạn cùng nhóm dùng AI viết 100% bài tiểu luận cuối kỳ và nhận toàn bộ sản phẩm đó là của mình. Bạn ấy cho rằng dùng AI như vậy là đổi mới sáng tạo.',
  question:
    'Theo bạn, đây là “Sáng tạo” hay đang vi phạm chữ “Liêm”, chữ “Chính” trong đạo đức cách mạng?',
  options: [
    {
      label: 'Sáng tạo',
      tone: 'caution',
      response:
        'AI có thể hỗ trợ sáng tạo, nhưng không thể thay thế trách nhiệm học tập. Nếu nhận toàn bộ sản phẩm AI là chất xám của mình, hành động đó thiếu trung thực.'
    },
    {
      label: 'Vi phạm liêm chính',
      tone: 'correct',
      response:
        'Đây là lựa chọn phù hợp hơn. Dùng AI có trách nhiệm nghĩa là biết tham khảo, kiểm chứng, ghi nhận vai trò công cụ và tự mình làm chủ lập luận.'
    }
  ],
  analysis:
    'AI là công cụ hỗ trợ học tập và sáng tạo. Tuy nhiên, đổi mới sáng tạo phải đi liền với trách nhiệm, liêm chính và đạo đức.'
};

export const declaration = {
  title: 'AI Declaration - Tuyên bố sử dụng AI có trách nhiệm',
  body:
    'Nhóm đã sử dụng các công cụ AI như NotebookLM, ChatGPT để hỗ trợ tóm tắt tài liệu, lên ý tưởng kịch bản và tạo bộ câu hỏi trắc nghiệm. Tuy nhiên, nhóm cam kết: toàn bộ luận điểm lý luận, các trích dẫn từ Giáo trình Tư tưởng Hồ Chí Minh và Văn kiện Đại hội XIV đều do các thành viên trực tiếp đọc, kiểm chứng và biên tập. Nhóm làm chủ công cụ, chứ không để công cụ làm chủ tư duy của mình.',
  marks: ['Minh bạch', 'Kiểm chứng', 'Làm chủ công cụ']
};

export const references = [
  'Giáo trình Tư tưởng Hồ Chí Minh.',
  'Các trích dẫn, quan điểm của Chủ tịch Hồ Chí Minh về đạo đức cách mạng.',
  'Văn kiện Đại hội XIV của Đảng, Tập 2, các trang đã nêu trong nội dung.'
];
