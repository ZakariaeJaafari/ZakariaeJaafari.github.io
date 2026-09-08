import type { Dictionary } from "./types";

export const ar: Dictionary = {
  meta: {
    title: "Zakariae Jaafari — مهندس برمجيات · هندسة البيانات",
    description:
      "مهندس برمجيات في الرباط متخصص في الأنظمة الخلفية بـ Java وSpring، مع مشاريع هندسة بيانات مختبَرة بـ Python وdbt وDuckDB وBruin.",
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
    kickerAvailability: "منفتح على فرص في أوروبا الناطقة بالفرنسية",
    title: "مهندس برمجيات · هندسة البيانات",
    headline: "Java 21 · Spring Boot · Kafka · Python · dbt · DuckDB",
    summary:
      "مهندس برمجيات بأكثر من أربع سنوات في بناء خدمات Java وSpring Boot للقطاع العام والمؤسسات. توسّع مشاريعي العامة هذا الأساس الخلفي إلى أنابيب بيانات مختبَرة بـ Python وdbt وDuckDB وBruin.",
    viewProjects: "عرض المشاريع",
    photoAlt: "صورة زكرياء جعفري بقميص أبيض على خلفية فاتحة.",
  },
  about: {
    heading: "نبذة",
    paragraphs: [
      "أنا مهندس برمجيات في الرباط بأكثر من أربع سنوات بين الخدمات الرقمية العمومية وشركات الخدمات التقنية. في وكالة التنمية الرقمية (ADD) أبني خدمات Java 21 وSpring Boot، وواجهات Angular وReact، وتكاملات Kafka وRedis، وإدارة الهوية عبر Keycloak، والتسليم بـ Docker وKubernetes. قبل ذلك طورت خدمات Spring وتطبيقات Angular لدى Inetum المغرب.",
      "تكمّل مشاريعي العامة في هندسة البيانات هذه الخبرة الخلفية: مخطط نجمي مختبَر بـ dbt وDuckDB على 109 ملايين صف مصدر، وأنبوب Bruin يعمل على DuckDB وMotherDuck، وتحميل Kestra متحقق منه إلى PostgreSQL. أنا مهندس دولة في Data and Software Engineering من INSEA، وأتممت برنامج تبادل في الذكاء الاصطناعي بجامعة لافال، وأعمل بالعربية والفرنسية والإنجليزية.",
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
      "ثلاثة مشاريع قابلة للفحص تغطي هندسة الأنظمة الخلفية والتحليلات وELT السحابي. تبقى أعمال الدورة المساندة على GitHub دون إرباك الانطباع الأول.",
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
    "data-analytics": {
      oneLiner:
        "هندسة تحليلات لرحلات TLC في نيويورك: dbt وDuckDB يحوّلان Parquet إلى مخطط نجمي مختبَر.",
      role: "رئيسي",
      description:
        "مستودع analytics engineering للتاكسي الأصفر والأخضر. ingest_data.py يُنزل الملفات الشهرية إلى Parquet في DuckDB (مخطط prod). ثم يبني dbt طبقات staging وintermediate وmarts. عمل من Zoomcamp الوحدة 04، محليًا بدل BigQuery.",
      problem:
        "تنشر TLC عشرات الملايين من الصفوف بأسماء أعمدة مختلفة بين الأصفر والأخضر. يحتاج المحلل نماذج مكتوبة وموثّقة قابلة للربط.",
      solution:
        "تحميل Parquet إلى DuckDB ثم بناء staging → intermediate → marts عبر dbt. تُنشئ الطبقة الوسيطة trip_id من حبيبات الرحلة المستقرة كاملة؛ فقد كانت مفتاح مختصر سابق يسقط 202,906 رحلة صحيحة. يحتفظ النموذج المصحح بكل 8,298,395 صفًا لشهر يناير، وتمنع fixture في CI تكرار الخطأ.",
      features: [
        "ingest_data.py: CSV.gz → Parquet → مخطط DuckDB prod",
        "Staging للأصفر والأخضر بتسمية موحّدة",
        "مخطط نجمي: dim_zones وdim_vendors وfct_trips تزايدي وfct_monthly_zone_revenue",
        "بذور المناطق وأنواع الدفع؛ دوال ماكرو",
        "حزم dbt_utils وcodegen؛ وثائق dbt محلية",
      ],
    },
    "dataplatforme-bruin": {
      oneLiner:
        "ELT عبر Bruin على DuckDB وMotherDuck: إدخال PyArrow بالدفعات، فحوصات جودة، تقارير يومية.",
      role: "مساند",
      description:
        "أنبوب ELT لتاكسي نيويورك على Bruin. أصول Python تجلب parquet وتُخرج دفعات 150 ألف صف إلى DuckDB أو MotherDuck. أصول SQL تنقّي وتزيل التكرار ثم تجمّع trips_report. نفس الرمز، بيئتان. Zoomcamp الوحدة 05.",
      problem:
        "حمولة Arrow واحدة تتجاوز حد Bruin (~256 ميغابايت) في الأشهر الكبيرة (يناير 2020: 6.4 ملايين صف).",
      solution:
        "trips.py مولّد: تخزين parquet محليًا، دفعات، إلحاق عند الإدخال. Staging تزايدي مع ROW_NUMBER. الإنتاج: قاعدة MotherDuck nyc_taxi. استعلام 8 سبتمبر 2026: 6,405,008 صفًا مدخلًا، 6,370,784 في staging، 312 صف تقرير. bruin validate محليًا: 4 أصول بلا مشاكل.",
      features: [
        "أربعة أصول: إدخال، lookup دفع، staging، تقرير",
        "دفعات PyArrow من 150 ألف صف",
        "فحوصات أعمدة وتميّز في staging",
        "DuckDB محلي وMotherDuck بنفس SQL",
      ],
    },
    "workflow-orchestration": {
      oneLiner:
        "ETL مجدول بـ Kestra: ملفات TLC الشهرية إلى PostgreSQL عبر COPY ثم MERGE.",
      role: "مساند",
      description:
        "تدفق Kestra (postgres_taxi_scheduled) ينزّل شهر TLC المختار، ويستخدم PostgreSQL COPY إلى جدول مرحلي، وينشئ مفتاح MD5 حتميًا، ثم يدمج البيانات في yellow_tripdata أو green_tripdata. يشغّل Docker Compose منصة Kestra ومخزن بياناتها الوصفية وPostgreSQL وpgAdmin.",
      problem:
        "يجب إدخال الملفات الشهرية دون تكرار عند إعادة التشغيل، ومخطط الأصفر يختلف عن الأخضر.",
      solution:
        "تختار المدخلات نوع التاكسي والفترة بصيغة YYYY-MM، ما يجعل التشغيل اليدوي والمجدول حتميًا. تنشئ المهام المتفرعة الجداول ثم تستخدم COPY وMERGE على unique_row_id. أُعيد التحقق بنجاح من تشغيل بيانات يناير 2021 الصفراء على Kestra 1.1.20، وحُمّل 7,774,773 صفًا إلى PostgreSQL.",
      features: [
        "خادم Kestra مع مخزن بيانات وصفية Postgres",
        "COPY مرحلي وMERGE دون تكرار",
        "DDL منفصل للأصفر والأخضر",
        "مجدول شهري ووسم backfill",
        "pgAdmin على المنفذ 8085، قاعدة ny_taxi",
        "تشغيل يناير 2021 متحقق منه: SUCCESS و7,774,773 صفًا أصفر",
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
    intro: "تقنيات مدعومة بالخبرة المهنية أو بمشاريع عامة قابلة للفحص.",
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
        ],
      },
      {
        name: "المنصّة والأمن",
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
          "Keycloak / IAM",
          "Mendix",
        ],
      },
      {
        name: "هندسة البيانات",
        items: [
          "Python",
          "pandas",
          "dbt",
          "DuckDB",
          "MotherDuck",
          "Bruin",
          "PyArrow",
          "Parquet",
          "Kestra",
          "Docker Compose",
        ],
      },
    ],
  },
  education: {
    heading: "التكوين",
    certsHeading: "الشهادات",
    items: [
      {
        title: "برنامج تبادل في علوم الحاسوب — الذكاء الاصطناعي",
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
      "مقيم في الرباط. منفتح على أدوار مهندس برمجيات ومهندس بيانات في أوروبا الناطقة بالفرنسية، بما فيها فرق منصات البيانات حيث تنتقل Java وKafka وPython.",
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
