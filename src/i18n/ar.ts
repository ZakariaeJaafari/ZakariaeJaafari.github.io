import type { Dictionary } from "./types";

export const ar: Dictionary = {
  meta: {
    title: "Zakariae Jaafari — مهندس برمجيات · هندسة البيانات والذكاء الاصطناعي",
    description:
      "مهندس برمجيات في الرباط. Java وSpring Boot وKafka وPython — هندسة البرمجيات أولًا، مع توجه نحو هندسة البيانات والذكاء الاصطناعي التطبيقي.",
  },
  nav: {
    about: "نبذة",
    experience: "الخبرة",
    projects: "المشاريع",
    skills: "المهارات",
    education: "التكوين",
    contact: "التواصل",
    cv: "تحميل السيرة",
    menu: "القائمة",
    skip: "تجاوز إلى المحتوى",
    primary: "رئيسية",
    mobile: "الجوال",
    languages: "اللغة",
  },
  hero: {
    kickerLocation: "الرباط، المغرب",
    kickerAvailability: "منفتح على الفرص في أي مكان",
    title: "مهندس برمجيات · هندسة البيانات والذكاء الاصطناعي",
    headline: "Java · Spring Boot · Kafka · Python",
    summary:
      "مهندس برمجيات بأكثر من أربع سنوات على Java 21 وSpring Boot للقطاع العام والمؤسسات: خدمات مصغّرة قائمة على الأحداث، وAngular وReact، وKeycloak. يتجه نحو هندسة البيانات والذكاء الاصطناعي التطبيقي. مقيم في الرباط. يعمل بالفرنسية والإنجليزية والعربية. منفتح على أدوار مهندس برمجيات وFull-Stack في أوروبا الناطقة بالفرنسية.",
    viewProjects: "عرض المشاريع",
    photoAlt: "صورة زكرياء جعفري بقميص أبيض على خلفية فاتحة.",
  },
  about: {
    heading: "نبذة",
    paragraphs: [
      "أنا مهندس برمجيات في الرباط. منذ سبتمبر 2024 أعمل مهندسًا مستقلًا لدى وكالة التنمية الرقمية (ADD)، الوكالة الوطنية المغربية للتنمية الرقمية: خدمات Java 21 وSpring Boot، واجهات Angular وReact، Redis وKafka بين الخدمات، Docker وKubernetes للتسليم، وKeycloak للهوية. Mendix أداة أستخدمها عندما يقتضي الطلب ذلك — وليست محور العمل.",
      "قبل ذلك قضيت سنتين في Inetum المغرب، فرع مجموعة الخدمات الرقمية الفرنسية، مهندس برمجيات: خدمات مصغّرة، واجهات REST، Angular، Docker، اختبارات JUnit/Mockito، وMendix عندما كانت سرعة التسليم هي القيد. تكويني مهندس دولة في Data and Software Engineering من المعهد الوطني للإحصاء والاقتصاد التطبيقي، وسنة تبادل في الذكاء الاصطناعي بجامعة لافال، وتدريب تخرج في علم البيانات لدى Beneva في كيبيك.",
      "أبني توجهًا نحو هندسة البيانات والذكاء الاصطناعي التطبيقي على هذه القاعدة في هندسة البرمجيات. شهادة المعهد في Data and Software Engineering؛ وسنة لافال في الذكاء الاصطناعي؛ وتدريب Beneva في التجميع وقيمة حياة الزبون ومنحنيات البقاء؛ وأنبوب سيارات الأجرة في نيويورك على هذا الموقع ناتج عن Data Engineering Zoomcamp من DataTalksClub. أبحث أولًا عن أدوار مهندس برمجيات، بما فيها فرق منصات البيانات أو القريبة من الذكاء الاصطناعي حيث تنتقل Java وKafka وPython.",
    ],
    spoken: [
      { name: "العربية", level: "لغة أم" },
      { name: "الفرنسية", level: "بطلاقة" },
      { name: "الإنجليزية", level: "بطلاقة" },
    ],
  },
  experience: {
    heading: "الخبرة",
    environment: "البيئة التقنية",
    roles: [
      {
        id: "add",
        title: "مهندس برمجيات (مستقل)",
        company: "وكالة التنمية الرقمية (ADD)",
        location: "الرباط، المغرب",
        start: "سبتمبر 2024",
        end: "حتى الآن",
        summary:
          "الوكالة الوطنية المغربية للتنمية الرقمية. خدمات Java 21 / Spring Boot وواجهات Angular / React لخدمات رقمية عمومية — Kafka وRedis وKeycloak وDocker وKubernetes.",
        bullets: [
          "تصميم وبناء خدمات Java 21 / Spring Boot وواجهات Angular / React لخدمات رقمية عمومية، مع Kafka للأحداث بين الخدمات وRedis للتخزين المؤقت.",
          "النشر والتنسيق عبر Docker وKubernetes؛ وإدارة المصادقة والهوية عبر Keycloak.",
          "تغطية الخدمات باختبارات وحدية وتكاملية (JUnit وMockito) قبل الإصدار.",
          "جمع المتطلبات مباشرة مع الأطراف المعنية لدى العميل وتحويلها إلى عمل سبرنت.",
          "تأطير المطوّرين المبتدئين وقيادة أهداف السبرنت في Scrum.",
        ],
      },
      {
        id: "inetum",
        title: "مهندس برمجيات",
        company: "Inetum المغرب — مجموعة خدمات رقمية فرنسية",
        location: "الرباط، المغرب",
        start: "أغسطس 2022",
        end: "أغسطس 2024",
        bullets: [
          "بناء خدمات Spring Boot المصغّرة وواجهات REST لتطبيقات إنتاج، وفق Scrum.",
          "واجهات Angular مع فرق متعدّدة الاختصاصات؛ واختبارات وحدية وتكاملية (JUnit وMockito).",
          "تحوية الخدمات بـ Docker؛ وCI على Jenkins وGitLab. Mendix عندما كانت سرعة التسليم هي القيد.",
        ],
      },
      {
        id: "beneva",
        title: "متدرّب علم بيانات (تدريب نهاية الدراسة)",
        company: "Beneva",
        location: "كيبيك، كندا",
        start: "مايو 2022",
        end: "أغسطس 2022",
        bullets: [
          "تقسيم الزبائن بالتجميع ولوحات معلومات؛ وتقدير قيمة حياة الزبون ورسم منحنيات البقاء.",
          "تحليلات مقترحة لدعم قرارات الشركة (Python وscikit-learn وPyTorch وSQL وAzure).",
        ],
      },
    ],
  },
  projects: {
    heading: "مشاريع مختارة",
    intro:
      "أعمال عامة على GitHub. ChantiePro هو المشروع الذي يُفتح أولًا؛ وأنبوب سيارات الأجرة هو جزء هندسة البيانات.",
    details: "تفاصيل المشروع",
    github: "GitHub",
    demo: "تجربة حيّة",
    all: "كل المشاريع",
    overview: "نظرة عامة",
    problem: "المشكلة",
    solution: "الحل التقني",
    architecture: "الهندسة",
    inRepo: "ما يوجد في المستودع",
    screenshots: "الواجهة",
    decisions: "قرارات تقنية",
    technologies: "التقنيات",
    links: "روابط",
    source: "المصدر على GitHub",
    crumb: "المشاريع",
    pathLabel: "مسار الطلب والخدمات الخلفية",
    business: "خدمات الأعمال",
  },
  projectPages: {
    chantiepro: {
      oneLiner:
        "منصة إدارة أوراش قائمة على الأحداث: ستة عشر خدمة Spring Boot، وKafka، وواجهة Angular 18.",
      role: "المشروع الرئيسي",
      description:
        "مشروع هندسي شخصي يصوغ شركة بناء في ثلاث عشرة خدمة أعمال وثلاث خدمات منصّة. لكل خدمة مخطط PostgreSQL خاص. التغييرات التي يجب أن يلاحظها باقي النظام تنتقل كأحداث Kafka. مساحة عمل Angular 18 في Nx في الأعلى؛ وPrometheus وGrafana وLoki وZipkin في الأسفل.",
      problem:
        "الورش يتصرّف كمؤسسة صغيرة: تصل المواد وتُستهلك، تنتقل المعدات، تسجّل الفرق حضورها، وتحتاج المصاريف إلى موافقة، وكل حدث يجب أن يُطابق ميزانية المشروع. وضع ذلك في كتلة واحدة يربط كل تغيير بالباقي. الهدف كان تفكيك مجال حقيقي إلى خدمات قابلة للنشر مستقلة، مع الإبقاء على واجهة متماسكة.",
      solution:
        "تدخل الطلبات عبر Spring Cloud Gateway يتحقق من JWT مرة واحدة ويمرّر الهوية. تكتشف الخدمات بعضها عبر Eureka وتحمّل الإعداد من خادم إعداد. كل ما يجب أن يلاحظه سياق آخر — تغيّر حالة مشروع، الموافقة على مصروف — يُنشر على Kafka بدل استدعاء متزامن. البيانات مقيّدة بالمؤسسة عبر organizationId في JWT على طبقة الاستعلام. هذا ليس نموذج عزل متعدد المستأجرين مُحصّنًا.",
      features: [
        "ثلاث عشرة خدمة أعمال وثلاث خدمات منصّة (gateway وEureka وconfig server) على Java 21 وSpring Boot 3.3",
        "ست مكتبات مشتركة: DTO والأمن وKafka والتدقيق والاستثناءات ومرشحات الويب",
        "PostgreSQL 16، مخطط لكل خدمة، وترحيلات Flyway",
        "أحداث Kafka تستهلكها خدمات الإشعار والتدقيق والمالية",
        "ذاكرة Redis مؤقتة، وتخزين كائنات MinIO، وOpenAPI عبر springdoc",
        "Angular 18 في مستودع Nx مع NgRx Signal Store",
        "Prometheus وGrafana وLoki وZipkin",
        "التكامل المستمر: اختبارات Maven على JDK 21 بما فيها اختبارات تكامل Testcontainers/Flyway، وبناء Nx للإنتاج، والتحقق من Compose",
      ],
      decisions: [
        {
          title: "مخطط لكل خدمة، لا قاعدة مشتركة",
          body: "كل خدمة تملك جداولها. لا عمليات ضم بين الخدمات. يبقى النشر مستقلًا؛ وكل تعاون يمر عبر واجهة أو حدث.",
        },
        {
          title: "أحداث للتفاعل، وREST للأوامر",
          body: "يبقى REST المتزامن داخل حالة الاستخدام التي ينتظرها المستدعي. التدقيق والإشعارات لا يحتاجان ذلك المسار: يشتركان.",
        },
        {
          title: "مكتبات مشتركة بدل النسخ",
          body: "مرشحات JWT وأغلفة الأحداث وأشكال الأخطاء تعيش في وحدات Maven. خدمة جديدة ترث اصطلاحات المنصة بإعلان اعتماد.",
        },
      ],
    },
    "nyc-taxi-ingestion-pipeline": {
      oneLiner:
        "مهمة محوّاة، محدودة الذاكرة، تبث ملفات رحلات سيارات الأجرة الصفراء في نيويورك إلى PostgreSQL.",
      role: "مساند",
      description:
        "مهمة إدخال محوّاة تحمّل ملفات CSV الشهرية لسيارات الأجرة الصفراء من TLC إلى PostgreSQL على دفعات ثابتة الحجم، فتبقى ذروة الذاكرة ثابتة مهما كبر الملف. بُنيت أثناء متابعة وحدة Docker في Data Engineering Zoomcamp من DataTalksClub، ثم هُذّبت كمهمة مستقلة.",
      problem:
        "كل ملف شهري يحتوي ملايين الصفوف. قراءته كاملًا في إطار بيانات واحد وكتابته في معاملة واحدة تملأ الذاكرة كلما كبرت الملفات.",
      solution:
        "يُنتج pandas دفعات من 100 ألف صف. خريطة أنواع صريحة — منها Int64 القابل للقيم الفارغة — تُبقي مخطط كل دفعة مطابقًا، وهذا ما يمنع فشل الإدراج في منتصف المهمة. الكتابة الأولى تنشئ الجدول من المخطط دون صفوف؛ واللاحقة تُضيف. تُبنى الصورة من ملف قفل uv مُودَع.",
      features: [
        "بث CSV على دفعات من ملفات TLC العلنية",
        "أنواع وأختام زمنية صريحة لمخطط ثابت",
        "مكدس Docker Compose: PostgreSQL 18 بفحص صحة، وpgAdmin",
        "بيانات الاعتماد من متغيرات البيئة، لا من وسائط سطر الأوامر",
        "صورة قابلة لإعادة الإنتاج عبر ملف قفل uv",
      ],
      decisions: [
        {
          title: "حجم الدفعة ميزانية ذاكرة",
          body: "مائة ألف صف تكفي لإشغال القاعدة دون إرهاق حاسوب محمول.",
        },
        {
          title: "استبدال مرة ثم إضافة",
          body: "إعادة التشغيل تعيد بناء الجدول بدل تكرار الصفوف. هذا هو الافتراض الصحيح لأنبوب بهذا الحجم.",
        },
      ],
    },
    "face-detection-react": {
      oneLiner:
        "تطبيق React يكشف وجهًا في رابط صورة ويرسم إطارًا حوله.",
      role: "مساند",
      description:
        "تطبيق React بصفحة واحدة. تُلصق رابط الصورة، يُستدعى نموذج كشف الوجه من Clarifai، وتُحوَّل الإحداثيات المعيارية إلى إزاحات CSS، ويُرسم إطار على الصورة. مشروع واجهة مبكر، أُبقي لأن منطق التحويل ما زال مثالًا نظيفًا. لا خلفية ولا مصادقة ولا قاعدة بيانات.",
      problem:
        "يعيد Clarifai إطارًا بأربعة أعداد بين 0 و1 نسبةً إلى أبعاد الصورة. يحتاج المتصفح إزاحات CSS بالبكسل نسبةً إلى عنصر <img> المعروض، وقد يكون مُكبَّرًا.",
      solution:
        "تقرأ calculateFaceLocation عرض العنصر وارتفاعه وتضرب. تُعكس right وbottom لأن الطبقة تُموضَع بـ CSS right/bottom من الحافة المقابلة. مفتاح Clarifai يأتي من REACT_APP_CLARIFAI_API_KEY. تدمجه Create React App في الحزمة، فلا يُعامل كسرّ من جهة الخادم.",
      features: [
        "إدخال رابط وإجراء Detect على نموذج Clarifai",
        "تحويل الإحداثيات المعيارية إلى بكسل الصورة المعروضة",
        "حالات تحميل وخطأ، بما فيها غياب مفتاح الواجهة",
      ],
    },
  },
  skills: {
    heading: "المهارات",
    groups: [
      {
        name: "الخلفية",
        items: [
          "Java 21",
          "Spring Boot",
          "Spring Data JPA",
          "Hibernate",
          "Spring Security",
          "Spring Cloud",
          "REST APIs",
          "Microservices",
          "Mendix",
        ],
      },
      {
        name: "الواجهة",
        items: ["TypeScript", "JavaScript", "Angular", "React"],
      },
      {
        name: "البيانات والرسائل",
        items: [
          "SQL",
          "PostgreSQL",
          "Oracle DB",
          "Flyway",
          "Redis",
          "Kafka",
          "Keycloak / IAM",
        ],
      },
      {
        name: "المنصّة",
        items: [
          "Docker",
          "Kubernetes",
          "Maven",
          "Git",
          "GitLab",
          "Jenkins",
          "CI/CD",
          "JUnit",
          "Mockito",
          "Azure",
        ],
      },
      {
        name: "هندسة البيانات",
        items: [
          "Python",
          "pandas",
          "PostgreSQL",
          "Docker Compose",
          "Terraform",
          "GCP",
          "GCS",
          "BigQuery",
          "dbt",
          "DuckDB",
          "Kestra",
          "dlt",
          "Bruin",
          "Spark",
          "Kafka Streams",
          "KSQL",
          "Avro",
          "Flink",
        ],
      },
    ],
  },
  education: {
    heading: "التكوين",
    certsHeading: "الشهادات",
    items: [
      {
        title: "ماجستير في الإعلاميات — الذكاء الاصطناعي",
        school: "جامعة لافال",
        location: "كيبيك، كندا",
        start: "أغسطس 2021",
        end: "مايو 2022",
        note: "برنامج تبادل",
      },
      {
        title: "دبلوم مهندس دولة — Data and Software Engineering",
        school: "المعهد الوطني للإحصاء والاقتصاد التطبيقي",
        location: "الرباط، المغرب",
        start: "سبتمبر 2019",
        end: "مايو 2022",
      },
    ],
    certs: [
      {
        title: "Rapid Developer Certificate",
        issuer: "Mendix",
        date: "يناير 2024",
        credential: "69110",
      },
    ],
  },
  recommendation: {
    heading: "توصية",
    quote:
      "What stood out most about Zakaria was his calm confidence and his deep understanding of software development processes. Whether we were troubleshooting critical issues or brainstorming new features, he always brought thoughtful insights and dependable solutions. Beyond his technical talents, he has a remarkable ability to communicate ideas effectively and work seamlessly with both technical and non-technical stakeholders.",
    attribution: "Moncef Tokka",
    context: "زميل في وكالة التنمية الرقمية (ADD)",
  },
  contact: {
    heading: "التواصل",
    intro:
      "مقيم في الرباط. منفتح على أدوار مهندس برمجيات وFull-Stack في أوروبا الناطقة بالفرنسية، وعلى هندسة منصات البيانات أو القريبة من الذكاء الاصطناعي حيث تنتقل Java وKafka وPython.",
    email: "البريد",
    phone: "الهاتف",
    linkedin: "LinkedIn",
    github: "GitHub",
    cvVersions: "نسخ السيرة",
  },
  footer: {
    nameLine: "الرباط، المغرب",
  },
  notFound: {
    title: "الصفحة غير موجودة — Zakariae Jaafari",
    heading: "هذه الصفحة غير موجودة.",
    body: "ربما تغيّر العنوان، أو لم تُنشر الصفحة قط.",
    home: "العودة إلى الصفحة الرئيسة",
  },
};
