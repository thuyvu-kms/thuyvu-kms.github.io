/*
 * Bilingual support (EN / VI).
 * English lives in index.html (so the page works without JS and is indexed in English).
 * Vietnamese lives in the VI dictionary below, keyed by each element's data-i18n attribute.
 * To change wording: edit the English in index.html and the matching key here.
 */
(function () {
  var VI = {
    "skip": "Chuyển đến nội dung",
    "nav.about": "Giới thiệu",
    "nav.strengths": "Thế mạnh",
    "nav.experience": "Kinh nghiệm",
    "nav.credentials": "Chứng chỉ",
    "nav.contact": "Liên hệ",

    "hero.status": "Sẵn sàng cho vị trí Engineering Manager · TP. Hồ Chí Minh · Onsite / Hybrid / Remote",
    "hero.role": "Engineering Manager",
    "hero.lead": "Tôi dẫn dắt các đội kỹ thuật đa chức năng tại Việt Nam xây dựng sản phẩm mobile và web cho khách hàng quốc tế — và luôn giữ cân bằng giữa tốc độ và chất lượng.",
    "hero.sub": "Hơn 22 năm trong lĩnh vực phát triển và đảm bảo chất lượng phần mềm, hơn 18 năm dẫn dắt đội nhóm. Hiện quản lý 2 dự án với 18 kỹ sư tại KMS Technology cho khách hàng Mỹ.",
    "cta.contact": "Liên hệ với tôi",
    "cta.cv": "Tải CV",
    "hero.card": "Engineering Manager · 2021 – nay",

    "stat.years": "năm trong phát triển &amp; chất lượng phần mềm",
    "stat.leading": "năm dẫn dắt đội nhóm",
    "stat.crossfn": "năm quản lý đội đa chức năng dev + QA",
    "stat.engineers": "kỹ sư trong 2 dự án hiện tại",
    "stat.markets": "thị trường khách hàng: Mỹ · Canada · Anh · Trung Quốc",
    "stat.domains": "lĩnh vực, từ ngân hàng đến giải trí",

    "about.eyebrow": "Giới thiệu",
    "about.title": "Tiếng nói cân bằng giữa tốc độ và chất lượng",
    "about.p1": "Con đường đến với vai trò Engineering Manager của tôi bắt đầu từ chất lượng. Tôi khởi nghiệp với kiểm thử phần mềm viễn thông từ năm 2003, có hai năm làm việc onsite tại Ireland, và lần lượt trưởng thành từ kỹ sư QC lên consultant, project manager, QC leader và Scrum Master trước khi chuyển sang quản lý kỹ thuật tại KMS Technology.",
    "about.p2": "Hiện nay tôi đảm nhận cùng lúc bốn vai trò cho khách hàng Mỹ — <strong>engineering manager, project manager, Scrum Master và test automation manager</strong> — cho các đội iOS, Android, front-end và QA. Tôi làm việc trực tiếp với các bên liên quan, chuyển mục tiêu của họ thành backlog rõ ràng, ước lượng hợp lý, và đảm bảo mọi thứ được bàn giao đều đã được kiểm thử, tuân thủ quy trình và sẵn sàng phát hành.",
    "about.p3": "Tôi đã triển khai dự án cho khách hàng tại Mỹ, Canada, Anh và Trung Quốc trong các lĩnh vực Giải trí, Thể thao, Ngân hàng, Tài chính, Bảo hiểm, Y tế, Viễn thông và Kho dữ liệu.",

    "str.eyebrow": "Giá trị tôi mang lại",
    "str.title": "Bốn điều tôi làm tốt cho một tổ chức kỹ thuật",
    "str.1.title": "Lãnh đạo kỹ thuật &amp; delivery",
    "str.1.body": "Tôi chịu trách nhiệm về milestone, sản phẩm bàn giao, rủi ro và phụ thuộc trong các chương trình gồm nhiều đội onshore và offshore, đồng thời phối hợp với Delivery Director để mỗi dự án luôn bám sát các yếu tố thành công then chốt của khách hàng.",
    "str.1.a": "Từ yêu cầu → backlog được ưu tiên, ước lượng rõ ràng",
    "str.1.b": "Backlog offshore luôn sẵn sàng cho sprint trên Azure DevOps",
    "str.1.c": "Scrum, Kanban và Waterfall; lập kế hoạch release &amp; go-live",
    "str.2.title": "Chất lượng ngay từ thiết kế",
    "str.2.body": "Tôi xác định quality gate, Definition of Done và tiêu chí sẵn sàng phát hành, rồi đảm bảo chúng được tuân thủ thông qua code review, regression tự động và phân tích tĩnh trong CI/CD.",
    "str.2.a": "Chiến lược regression thống nhất với các bên liên quan",
    "str.2.b": "Dashboard độ bao phủ &amp; tỷ lệ pass hỗ trợ quyết định release",
    "str.2.c": "Quản trị release dựa trên nền tảng ngân hàng &amp; tài chính",
    "str.3.title": "Lãnh đạo con người",
    "str.3.body": "Tôi là quản lý trực tiếp của các kỹ sư phát triển và QA: 1:1, kế hoạch phát triển và đào tạo, đánh giá thử việc và hiệu suất. Tôi phát triển con người qua coaching, mentoring và giao việc thử thách.",
    "str.3.a": "Tuyển dụng, hội nhập và kèm cặp thành viên",
    "str.3.b": "Văn hóa kỹ sư chữ T, học chéo kỹ năng",
    "str.3.c": "Mục tiêu đội nhóm thực tế nhưng có tính thử thách",
    "str.4.title": "Các bên liên quan &amp; Agile coaching",
    "str.4.body": "Tôi chủ trì các buổi báo cáo tiến độ với khách hàng Mỹ, làm cầu nối giữa kỹ sư Mỹ và Việt Nam, và coaching đội nhóm về Scrum và DevOps thông qua cải tiến liên tục từ retrospective.",
    "str.4.a": "Giao tiếp ở cả cấp chiến lược và vận hành",
    "str.4.b": "Chứng chỉ PSM II và PMI-ACP",
    "str.4.c": "Tiếng Anh thành thạo — BULATS C2",

    "exp.eyebrow": "Kinh nghiệm",
    "exp.title": "Sự nghiệp được xây dựng qua từng lần thăng tiến",
    "exp.callout.title": "Từ Senior QA lên Engineering Manager trong năm năm",
    "exp.g1": "Senior QA · đội QA 12 người",
    "exp.g2": "Acting EM · 14 kỹ sư phát triển &amp; QA",
    "exp.g3": "Engineering Manager · 2 dự án, 18 kỹ sư",
    "exp.1.date": "2021 – nay",
    "exp.1.title": "Engineering Manager",
    "exp.1.body": "Dẫn dắt 2 dự án với 18 kỹ sư trong lĩnh vực Giải trí và Quản lý hợp đồng cho khách hàng Mỹ — iOS, Android native, front-end (Node.js, Angular) và QA (thủ công và tự động với Selenium, Playwright).",
    "exp.1.a": "Đảm nhận cùng lúc vai trò engineering manager, project manager, Scrum Master và test automation manager",
    "exp.1.b": "Báo cáo tiến độ epic của các đội Mobile, Front End và Test Automation cho khách hàng Mỹ, cảnh báo rủi ro trước khi ảnh hưởng đến cam kết",
    "exp.1.c": "Sở hữu chiến lược regression; tự động hóa regression cho mọi nền tảng và chạy theo lịch, kèm dashboard độ bao phủ và tỷ lệ pass/fail",
    "exp.1.d": "Đảm bảo các nguyên tắc chất lượng bằng code review, regression tự động và phân tích tĩnh trên Jenkins, SonarQube và GitHub",
    "exp.2.title": "Acting Engineering Manager",
    "exp.2.body": "Quản lý đội 14 kỹ sư phát triển và QA thiết kế và xây dựng một ứng dụng mobile — lập kế hoạch sprint, ước lượng, kế hoạch release và giao tiếp với khách hàng. Kèm cặp các kỹ sư senior và QA lead, trao đổi về hiệu suất và lộ trình nghề nghiệp.",
    "exp.3.title": "Senior QA",
    "exp.3.body": "Dẫn dắt đội QA 12 người: chiến lược, kế hoạch và bộ kiểm thử, chỉ số và báo cáo QA. Phối hợp với lập trình viên, product owner và khách hàng để phân tích yêu cầu.",
    "exp.4.title": "Senior QC → QC Leader",
    "exp.4.body": "Các dự án web trong lĩnh vực Ngân hàng, Bảo hiểm, Kho dữ liệu và Quản lý thể thao/nhân sự. Kiêm Scrum Master, dẫn dắt đội QC 9 người, xây dựng automation với Codeception và kiểm tra dữ liệu qua các tầng kho dữ liệu bằng SQL.",
    "exp.5.title": "Senior Support Analyst → QC Leader",
    "exp.5.body": "Làm việc trực tiếp với khách hàng quốc tế về kiểm thử thiết bị y tế và hỗ trợ ứng dụng tầng 2. Được thăng chức QC Leader/Điều phối viên của đội 6 người.",
    "exp.6.title": "Project Manager",
    "exp.6.body": "Quản lý 2 dự án hỗ trợ đấu thầu hợp đồng và tối ưu khách hàng cho một nhà mạng viễn thông lớn của Pháp. Dự án được chọn làm mẫu giới thiệu cho khách hàng mới.",
    "exp.7.title": "QA → Consultant → Acting PM",
    "exp.7.body": "Kiểm thử phần mềm viễn thông (tổng đài PBX, call center, VoIP), trong đó có hai năm onsite tại Ireland (2005 – 2007). Được thăng chức Acting PM dẫn dắt đội 14 kỹ sư QC.",

    "skills.eyebrow": "Lĩnh vực &amp; công nghệ",
    "skills.title": "Bối cảnh tôi đã triển khai",
    "skills.domains": "Lĩnh vực",
    "dom.ent": "Giải trí",
    "dom.sports": "Thể thao",
    "dom.bank": "Ngân hàng",
    "dom.fin": "Tài chính",
    "dom.ins": "Bảo hiểm",
    "dom.health": "Y tế",
    "dom.tel": "Viễn thông",
    "dom.dw": "Kho dữ liệu",
    "skills.tech": "Công nghệ đội của tôi sử dụng",
    "tech.apps": "Mobile &amp; web",
    "tech.cloud": "DevOps &amp; cloud",
    "tech.test": "Kiểm thử",
    "tech.data": "Dữ liệu",
    "tech.data.list": "MongoDB · PostgreSQL · SQL để kiểm tra dữ liệu và báo cáo",
    "tech.tools": "Công cụ delivery",
    "tech.note": "Hiểu biết thực tế từ việc dẫn dắt các đội delivery sử dụng những công nghệ này hằng ngày.",
    "ai.eyebrow": "AI trong công việc hằng ngày",
    "ai.text": "Các công cụ AI là một phần trong bộ công cụ hằng ngày của tôi — ChatGPT và Claude (Chat, Cowork và Claude Code). Chính trang này được xây dựng bằng Claude Code.",

    "cred.eyebrow": "Chứng chỉ",
    "cred.title": "Có chứng chỉ, và vẫn không ngừng học",
    "cred.certs": "Chứng chỉ",
    "cred.acp": "PMI Agile Certified Practitioner · 2024",
    "cred.bulats": "Tiếng Anh thương mại · British Council",
    "cred.edu": "Học vấn",
    "cred.e1.year": "2024 – 2027 · đang theo học",
    "cred.e1.major": "Công nghệ Thông tin",
    "cred.e1.school": "Học viện Công nghệ Bưu chính Viễn thông, cơ sở TP. Hồ Chí Minh",
    "cred.e2.major": "Ngôn ngữ Anh",
    "cred.e2.school": "Trường Đại học Mở Hà Nội",
    "cred.e3.major": "Viễn thông",
    "cred.e3.school": "Học viện Công nghệ Bưu chính Viễn thông, Hà Nội",
    "cred.langs": "Ngôn ngữ:",
    "cred.langs.list": "Tiếng Việt (bản ngữ) · Tiếng Anh (thành thạo, C2)",

    "contact.title": "Bạn đang tìm Engineering Manager?",
    "contact.body": "Tôi sẵn sàng cho các vị trí Engineering Manager, nơi delivery, chất lượng và sự phát triển của con người được coi trọng. Rất mong được trao đổi cùng bạn.",
    "contact.linkedin": "Kết nối trên LinkedIn ↗",
    "footer.built": "Xây dựng bằng Claude Code"
  };

  var TITLES = {
    en: "Vu Thi Thuy — Engineering Manager",
    vi: "Vu Thi Thuy — Engineering Manager"
  };

  var nodes = document.querySelectorAll("[data-i18n]");
  var EN = {};
  nodes.forEach(function (n) { EN[n.getAttribute("data-i18n")] = n.innerHTML; });

  var buttons = document.querySelectorAll(".lang button");

  function apply(lang) {
    var dict = lang === "vi" ? VI : EN;
    nodes.forEach(function (n) {
      var v = dict[n.getAttribute("data-i18n")];
      if (v != null) n.innerHTML = v;
    });
    document.documentElement.lang = lang;
    document.title = TITLES[lang];
    buttons.forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === lang));
    });
    try { localStorage.setItem("lang", lang); } catch (e) {}
  }

  function initialLang() {
    var q = new URLSearchParams(location.search).get("lang");
    if (q === "vi" || q === "en") return q;
    try {
      var saved = localStorage.getItem("lang");
      if (saved === "vi" || saved === "en") return saved;
    } catch (e) {}
    return "en";
  }

  buttons.forEach(function (b) {
    b.addEventListener("click", function () { apply(b.getAttribute("data-lang")); });
  });

  var start = initialLang();
  if (start !== "en") apply(start);

  // Gentle reveal on scroll
  var items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("in"); });
  }
})();
