export type Language = 'zh' | 'vi';

export type HeroCopy = {
  eyebrow: string;
  title: string;
  subtitle: string;
  badges: string[];
  primaryCta: string;
  secondaryCta: string;
  hint: string;
  mediaTag: string;
  mediaAlt: string;
};

export type SellingCopy = {
  title: string;
  subtitle: string;
  cards: {
    icon: string;
    title: string;
    desc: string;
  }[];
};

const buildTeapotGallery = (startIndex: number) =>
  Array.from({ length: 8 }, (_, idx) => `/images/teapot-${String(startIndex + idx).padStart(2, '0')}.jpg`);

const TEAPOT_SET_A = buildTeapotGallery(1); // 01-08
const TEAPOT_SET_B = buildTeapotGallery(9); // 09-16
const TEAPOT_SET_C = buildTeapotGallery(17); // 17-24

const XISHI_GALLERY = TEAPOT_SET_A;
const SHIPIAO_GALLERY = TEAPOT_SET_B;
const XIJIANGYUE_GALLERY = TEAPOT_SET_C;
const XISHI_COVER = XISHI_GALLERY[0];
const SHIPIAO_COVER = SHIPIAO_GALLERY[0];
const XIJIANGYUE_COVER = XIJIANGYUE_GALLERY[0];

type SocialAsset = {
  type: 'image' | 'video';
  src: string;
  poster?: string;
};
const createImageAssets = (paths: string[]): SocialAsset[] =>
  paths.filter(Boolean).map((src) => ({ type: 'image' as const, src }));

const SOCIAL_SET_A = createImageAssets(['/images/social-01-01.jpg', '/images/social-01-02.jpg']);
const SOCIAL_SET_B = createImageAssets(['/images/social-02-01.jpg', '/images/social-02-02.jpg']);
const SOCIAL_SET_C_IMAGES = createImageAssets(['/images/social-03-img1.jpg', '/images/social-03-img2.jpg']);
const SOCIAL_SET_C_VIDEOS: SocialAsset[] = [
  { type: 'video', src: '/videos/social-03-video1.mp4', poster: '/images/social-03-img1.jpg' },
  { type: 'video', src: '/videos/social-03-video2.mp4', poster: '/images/social-03-img2.jpg' },
  { type: 'video', src: '/videos/social-03-video3.mp4', poster: '/images/social-03-img1.jpg' }
];
const SOCIAL_SET_C: SocialAsset[] = [...SOCIAL_SET_C_IMAGES, ...SOCIAL_SET_C_VIDEOS];

export type FeaturedCopy = {
  title: string;
  subtitle: string;
  cta: string;
  previewLabel: string;
  products: {
    name: string;
    desc: string;
    highlights: string[];
    cover: string;
    gallery: string[];
  }[];
};

export type SocialProofCopy = {
  title: string;
  subtitleIntro: string;
  subtitleHighlight: string;
  subtitleOutro: string;
  stats: string[];
  previewLabel: string;
  cards: {
    cover: string;
    gallery?: SocialAsset[];
    title: string;
    desc: string;
    fit?: 'cover' | 'contain';
    previewLabel?: string;
  }[];
};

export type BenefitsCopy = {
  title: string;
  items: {
    title: string;
    desc: string;
  }[];
};

export type PersonaCopy = {
  badge: string;
  heading: string;
  intro: string;
  bullets: string[];
  note: string;
  signature: string;
};

export type FinalCtaCopy = {
  title: string;
  body: string;
  primaryCta: string;
  secondaryCta: string;
  note: string;
};

export type FooterCopy = {
  text: string;
};

export type MetaCopy = {
  title: string;
  description: string;
};

export type PageCopy = {
  meta: MetaCopy;
  hero: HeroCopy;
  selling: SellingCopy;
  featured: FeaturedCopy;
  social: SocialProofCopy;
  benefits: BenefitsCopy;
  persona: PersonaCopy;
  finalCta: FinalCtaCopy;
  footer: FooterCopy;
};

export const COPY: Record<Language, PageCopy> = {
  zh: {
    meta: {
      title: '宜兴手工紫砂壶 · 越南也能放心买',
      description: '小黄（Tiểu Hoàng）亲自挑选的宜兴手工紫砂壶，真实泥料、手工制作、可视频验证，直发越南。'
    },
    hero: {
      eyebrow: 'Yixing Authentic',
      title: '宜兴手工紫砂壶 · 越南也能放心买',
      subtitle:
        '小黄（Tiểu Hoàng）是宜兴丁蜀镇出生的选壶人，亲自挑选真实泥料手工壶，提供视频验证并直发越南。无论你在越南何处，只需加 Zalo 就能看到实时实拍、出水视频与特惠价格。',
      badges: ['真实泥料', '手工制作', '视频可验', '越南直发'],
      primaryCta: '加 Zalo 查看今日热门壶款',
      secondaryCta: 'Zalo 一对一咨询',
      hint: '提示：添加后发送「 想看壶 」，会有专业人员一对一服务咨询。',
      mediaTag: '小黄选壶实拍',
      mediaAlt: '宜兴手工紫砂壶实拍'
    },
    selling: {
      title: '越南客户为什么选择我们？',
      subtitle: '小黄和锦希团队突出越南直发、沟通无障碍、买壶安全 、售后无忧—— 让你在越南也能买到真正的宜兴紫砂。',
      cards: [
        {
          icon: '🛡️',
          title: '真正的原矿泥料',
          desc: '越南买家最担心买到假壶，我们提供泥料特写、自然光视频与检测报告截图。'
        },
        {
          icon: '✈️',
          title: '越南直发 · 运输破损包赔',
          desc: '5–7 天送达越南，顺丰/EMS 安全包装，途中破损立即补发或退款。'
        },
        {
          icon: '📷',
          title: '高清实拍 · 不修图',
          desc: '所有壶均为自然光实拍 + 手持视频，真实呈现泥色、颗粒与壶型线条。'
        },
        {
          icon: '👩‍💼',
          title: '会说中文的越南服务',
          desc: '可中文/越南语沟通，推荐适合越南常喝的乌龙、莲花茶、红茶壶型。'
        }
      ]
    },
    featured: {
      title: '越南用户最喜欢的壶款',
      subtitle: '展示越南买家最爱的3-6款壶款。点击即可加 Zalo 获取出水视频与更多角度。',
      cta: '加 Zalo 了解更多',
      previewLabel: '查看 8 张实拍',
      products: [
        {
          name: '西施 · 原矿朱泥 · 260ml',
          desc: '手工制作，圆润壶身搭配朱泥通透质感，适合越南乌龙/茉莉花茶。',
          highlights: ['手工制作', '原矿泥料', '出水视频可验'],
          cover: XISHI_COVER,
          gallery: XISHI_GALLERY
        },
        {
          name: '石瓢 · 段泥 · 320ml',
          desc: '经典石瓢，段泥颗粒感明显，配重稳定，适合家庭或办公室慢泡。',
          highlights: ['自然光实拍', '壶嘴顺畅', '附泥料放大照'],
          cover: SHIPIAO_COVER,
          gallery: SHIPIAO_GALLERY
        },
        {
          name: '西江月 · 原矿紫泥 · 220ml',
          desc: '壶型优雅，适合送礼。下单前可一对一视频检查壶身、盖口密合度。',
          highlights: ['支持刻字', '物流全程跟踪', '可拍越南口音讲解'],
          cover: XIJIANGYUE_COVER,
          gallery: XIJIANGYUE_GALLERY
        }
      ]
    },
    social: {
      title: '越南客户真实反馈 · 让你买得更放心',
      subtitleIntro: '已为越南客户寄出超过 ',
      subtitleHighlight: '10000+',
      subtitleOutro:
        ' 件紫砂作品 · 破损包赔 · 全程跟踪物流。',
      stats: ['📦 越南直发 5-7 天送达', '🔁 物流实时更新 + 视频确认'],
      previewLabel: '查看照片',
      cards: [
        {
          cover: '/images/hero-4.jpg',
          title: '越南买家 Zalo 聊天截图（隐去隐私）',
          desc: '每次发货前都会再次确认壶型、泥料、视频需求。',
          fit: 'contain'
        },
        {
          cover: '/images/hero-5.jpg',
          title: '越南本地开箱图',
          desc: '客户在胡志明的茶桌实拍，包装完好，壶色真实。'
        },
        {
          cover: '/images/social-03-img1.jpg',
          gallery: SOCIAL_SET_C,
          title: '视频：出水 / 泥料 / 口沿细节',
          desc: '下单前先看 1080P 视频，包含壶嘴顺畅度与盖接触面。',
          previewLabel: '看视频 + 照片'
        }
      ]
    },
    benefits: {
      title: '添加 Zalo，你将获得：',
      items: [
        { title: '今日热门壶款实拍图', desc: '第一时间推送越南买家喜欢的壶款，含多角度高清图。' },
        { title: '视频验证（泥料 / 出水 / 内部细节）', desc: '想看哪一处开口、滤网、盖沿，立刻拍给你。' },
        { title: '越南专属价格', desc: '比公开价格更优惠，支持越南盾或人民币结算。' },
        { title: '一对一选壶建议', desc: '由小黄根据家庭/办公室/送礼用途，推荐容量、壶型、泥料。' },
        { title: '紫砂快速入门指南', desc: '小黄整理的越南友好版，讲解养壶、开壶、日常保养。' }
      ]
    },
    persona: {
      badge: '人物 · 小黄',
      heading: '小黄（Tiểu Hoàng）— 锦希紫砂主理人',
      intro:
        '出生于宜兴丁蜀镇的 90 后选壶人，常年往返宜兴与越南，亲自把控泥料、做工与包装，只把相信的壶推荐给越南买家。',
      bullets: [
        '10 年亲自选壶经验，熟悉越南客户偏好',
        '会中文与基础越南语，可拍视频逐一讲解',
        '所有实拍、出水视频都由小黄亲自拍摄确认',
        '支持越南时区在线挑选，问题即时回复'
      ],
      note: '“我希望越南朋友在当地也能买到真正的宜兴紫砂，所以从选泥到打包都要自己盯。”',
      signature: '— 小黄 · Tiểu Hoàng'
    },
    finalCta: {
      title: '想看看适合你的紫砂壶？马上添加我们',
      body: '不知道怎么挑？小黄会根据你的用途和预算推荐壶型、泥料以及容量，减轻跨国选壶的顾虑。',
      primaryCta: '加 Zalo（推荐）',
      secondaryCta: 'Zalo 咨询',
      note: '提示：添加后发送「想看壶」，小黄会推送今日新品与实拍视频。'
    },
    footer: {
      text: '锦希紫砂 · 产地：江苏宜兴丁蜀镇 · 手工紫砂 | 页面仅用于产品展示与沟通引导'
    }
  },
  vi: {
    meta: {
      title: 'Ấm tử sa thủ công Nghi Hưng · Người Việt mua chính hãng',
      description: 'Ấm tử sa do Tiểu Hoàng tuyển chọn, đất nguyên khoáng thật, làm thủ công, quay video xác minh và ship thẳng về Việt Nam.'
    },
    hero: {
      eyebrow: 'Yixing Authentic',
      title: 'Ấm tử sa thủ công Nghi Hưng · Người Việt cũng mua chuẩn',
      subtitle:
        'Tiểu Hoàng sinh ra tại thị trấn Đinh Thục (Nghi Hưng), trực tiếp tuyển chọn ấm đất thật, làm thủ công, quay video xác minh và gửi thẳng về Việt Nam. Dù bạn ở đâu tại Việt Nam, chỉ cần thêm Zalo là xem ngay ảnh thực tế, video rót nước và mức giá ưu đãi.',
      badges: ['Đất nguyên khoáng thật', 'Thủ công', 'Video xác minh', 'Ship về Việt Nam'],
      primaryCta: 'Thêm Zalo xem ấm hot hôm nay',
      secondaryCta: 'Tư vấn 1-1 qua Zalo',
      hint: 'Gợi ý: sau khi thêm hãy nhắn “Muốn xem ấm / 想看壶”, sẽ có chuyên viên phục vụ 1-1.',
      mediaTag: 'Tiểu Hoàng tuyển chọn thực tế',
      mediaAlt: 'Ảnh thực tế ấm tử sa thủ công Yixing'
    },
    selling: {
      title: 'Vì sao khách Việt chọn chúng tôi?',
      subtitle:
        'Tiểu Hoàng và đội ngũ Jinxi nhấn mạnh ship thẳng, giao tiếp dễ dàng, mua ấm an toàn và hậu mãi rõ ràng — giúp bạn ở Việt Nam vẫn mua đúng ấm tử sa Yixing.',
      cards: [
        {
          icon: '🛡️',
          title: 'Đất nguyên khoáng thật',
          desc: 'Khách Việt sợ nhất mua nhầm đất giả, chúng tôi gửi cận cảnh chất đất và video ánh sáng tự nhiên để kiểm chứng.'
        },
        {
          icon: '✈️',
          title: 'Ship thẳng Việt Nam · Hư hỏng đền bù',
          desc: '5–7 ngày giao tận nơi, đóng gói nhiều lớp an toàn; nếu vỡ sẽ hoàn tiền hoặc gửi lại ngay.'
        },
        {
          icon: '📷',
          title: 'Ảnh/Video chân thực',
          desc: 'Toàn bộ ảnh và video đều quay dưới ánh sáng tự nhiên, không filter, thể hiện đúng màu đất và đường nét ấm.'
        },
        {
          icon: '👩‍💼',
          title: 'Tư vấn song ngữ Trung–Việt',
          desc: 'Đội ngũ nói được tiếng Trung và tiếng Việt cơ bản, gợi ý dáng ấm phù hợp trà Ô Long, trà sen hoặc hồng trà Việt Nam.'
        }
      ]
    },
    featured: {
      title: 'Những mẫu được khách Việt yêu thích',
      subtitle:
        'Hiển thị 3–6 mẫu khách Việt hỏi nhiều nhất (Tây Thi, Tây Giang Nguyệt, Thạch Phiêu...). Bấm để thêm Zalo nhận video rót nước và nhiều góc chụp.',
      cta: 'Thêm Zalo để xem thêm',
      previewLabel: 'Xem 8 ảnh thực tế',
      products: [
        {
          name: 'Tây Thi · Chu nê nguyên khoáng · 260ml',
          desc: 'Hoàn toàn thủ công, dáng tròn đầy với chất đất Chu Nê bóng, hợp trà Ô Long hoặc trà hoa nhài.',
          highlights: ['Thủ công', 'Đất nguyên khoáng', 'Có video rót nước'],
          cover: XISHI_COVER,
          gallery: XISHI_GALLERY
        },
        {
          name: 'Thạch Phiêu · Đoạn nê · 320ml',
          desc: 'Dáng Thạch Phiêu kinh điển, hạt đoạn nê nổi rõ, cân bằng chắc tay, phù hợp gia đình hoặc văn phòng.',
          highlights: ['Ảnh ánh sáng tự nhiên', 'Vòi rót mượt', 'Có ảnh macro chất đất'],
          cover: SHIPIAO_COVER,
          gallery: SHIPIAO_GALLERY
        },
        {
          name: 'Tây Giang Nguyệt · Tử nê nguyên khoáng · 220ml',
          desc: 'Form thanh lịch, tặng quà rất đẹp. Trước khi chốt có thể gọi video kiểm tra độ khít nắp và bề mặt.',
          highlights: ['Hỗ trợ khắc chữ', 'Theo dõi vận chuyển', 'Có clip giải thích giọng Việt'],
          cover: XIJIANGYUE_COVER,
          gallery: XIJIANGYUE_GALLERY
        }
      ]
    },
    social: {
      title: 'Phản hồi thật từ khách Việt · Mua yên tâm hơn',
      subtitleIntro: 'Đã gửi đến khách Việt hơn ',
      subtitleHighlight: '10000+',
      subtitleOutro: ' ấm tử sa · Đền bù nếu vỡ · Theo dõi hành trình vận chuyển.',
      stats: ['📦 Ship thẳng về Việt Nam trong 5–7 ngày', '🔁 Cập nhật hành trình + video xác nhận'],
      previewLabel: 'Xem ảnh',
      cards: [
        {
          cover: '/images/hero-4.jpg',
          title: 'Ảnh chat Zalo của khách Việt (ẩn thông tin)',
          desc: 'Trước khi gửi luôn xác nhận lại dáng ấm, chất đất và yêu cầu video chi tiết.',
          fit: 'contain'
        },
        {
          cover: '/images/hero-5.jpg',
          title: 'Ảnh mở hộp tại Việt Nam',
          desc: 'Khách tại TP.HCM chụp bàn trà bản địa, màu đất giống y hình, đóng gói nguyên vẹn.'
        },
        {
          cover: '/images/social-03-img1.jpg',
          gallery: SOCIAL_SET_C,
          title: 'Video: rót nước / chất đất / mép nắp',
          desc: 'Trước khi thanh toán sẽ gửi video 1080p thể hiện tia nước, chất đất và độ khít nắp.',
          previewLabel: 'Xem video + ảnh'
        }
      ]
    },
    benefits: {
      title: 'Thêm Zalo, bạn sẽ nhận được:',
      items: [
        { title: 'Ảnh thực tế các mẫu hot hôm nay', desc: 'Gửi ngay nhiều góc chụp HD của mẫu khách Việt yêu thích.' },
        { title: 'Video xác minh (đất/đường nước/chí tiết bên trong)', desc: 'Bạn cần xem điểm nào, chúng tôi quay đúng điểm đó.' },
        { title: 'Giá ưu đãi riêng cho Việt Nam', desc: 'Ưu đãi tốt hơn giá công khai, hỗ trợ thanh toán VND hoặc CNY.' },
        {
          title: 'Tư vấn chọn ấm 1-1',
          desc: 'Tiểu Hoàng gợi ý dung tích, dáng, chất đất phù hợp gia đình, văn phòng hay quà tặng.'
        },
        {
          title: 'Cẩm nang nhập môn tử sa nhanh',
          desc: 'Tài liệu do Tiểu Hoàng biên soạn, giải thích dưỡng/khai trà bằng ngôn ngữ dễ hiểu.'
        }
      ]
    },
    persona: {
      badge: 'Nhân vật · Tiểu Hoàng',
      heading: 'Tiểu Hoàng — Người tuyển chọn ấm chính tại Jinxi',
      intro:
        'Sinh ra ở thị trấn Đinh Thục (Nghi Hưng), Tiểu Hoàng có hơn 10 năm kinh nghiệm chọn ấm, thường xuyên bay sang Việt Nam để hiểu gu uống trà địa phương.',
      bullets: [
        '10 năm kinh nghiệm tuyển chọn, hiểu gu khách Việt',
        'Nói tiếng Trung + tiếng Việt căn bản, quay video giải thích rõ ràng',
        'Mọi ảnh và video đều do Tiểu Hoàng kiểm tra trước khi gửi',
        'Hỗ trợ khung giờ Việt Nam, có thể video call xác nhận ấm'
      ],
      note: '“Tôi muốn bạn ở Việt Nam vẫn mua được đúng ấm tử sa, nên từng khâu từ chọn đất đến đóng gói đều do mình kiểm soát.”',
      signature: '— Tiểu Hoàng'
    },
    finalCta: {
      title: 'Muốn xem chiếc ấm hợp với bạn? Thêm chúng tôi ngay',
      body: 'Tiểu Hoàng sẽ hỗ trợ chọn dáng và dung tích theo thói quen uống trà tại Việt Nam, giao tiếp bằng tiếng Trung hoặc tiếng Việt đơn giản.',
      primaryCta: 'Thêm Zalo (khuyên dùng)',
      secondaryCta: 'Chat Zalo',
      note: 'Gợi ý: sau khi thêm hãy nhắn “Muốn xem ấm / 想看壶”, Tiểu Hoàng sẽ gửi ngay ảnh HD và video mới nhất.'
    },
    footer: {
      text: '锦希紫砂 · Xuất xứ: thị trấn Đinh Thục, Nghi Hưng · Ấm tử sa thủ công | Trang chỉ để giới thiệu và hỗ trợ liên hệ'
    }
  }
};

