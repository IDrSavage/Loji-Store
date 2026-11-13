/* =========================================================
   إعدادات المتجر — عدّلي هنا فقط
   ========================================================= */
window.STORE = {
  name: "LOJI",
  nameAr: "لوجي",
  // رقم واتساب اللي تستقبل عليه الطلبات (بدون + وبدون أصفار في البداية)
  whatsapp: "966576270207",
  // رابط مجموعة الواتساب (chat.whatsapp.com/...) — اتركيه فاضي إذا ما فيه
  groupLink: "",
  // رابط انستقرام أو تيك توك — اختياري
  instagram: "",
  tiktok: "",
  // رسوم التوصيل بالريال. null = تُحدَّد عند تأكيد الطلب
  deliveryFee: null,
  currency: "ر.س",

  // رابط Google Sheet اللي تنحفظ فيه الطلبات (من خطوات الإعداد). فاضي = ما ينحفظ
  ordersSheetUrl: "",
};

/* =========================================================
   المنتجات
   price: السعر بالريال (الأسعار الحالية مؤقتة — غيّريها)
   category: dilka | body | scent
   badge: كلمة صغيرة تظهر على الصورة (اختياري)
   available: false يخفي زر الإضافة ويكتب "نفدت الكمية"
   ========================================================= */
window.CATEGORIES = [
  { id: "all",   label: "الكل" },
  { id: "dilka", label: "الدلكة" },
  { id: "body",  label: "العناية بالجسم" },
  { id: "scent", label: "العطور" },
];

window.PRODUCTS = [
  {
    id: "dilka-sudani",
    name: "دلكة سودانية",
    category: "dilka",
    price: 45, // مؤقت
    img: "img/dilka-sudani.jpg",
    badge: "الأكثر طلبًا",
    short: "الدلكة الأصلية بريحتها المعروفة",
    desc: "دلكة سودانية تقليدية تقشّر البشرة بلطف وتخليها ناعمة ومعطّرة. تُستخدم قبل المناسبات وللعرايس، وتُفرك على الجسم بعد ترطيبه بزيت الدلكة.",
    available: true,
  },
  {
    id: "dilka-white",
    name: "دلكة بيضاء",
    category: "dilka",
    price: 50, // مؤقت
    img: "img/dilka-white.jpg",
    badge: "فيتامين C",
    short: "مدعّمة بفيتامين C لنضارة البشرة",
    desc: "نسخة فاتحة من الدلكة مدعّمة بفيتامين C، تقشّر وتنعّم البشرة وتعطيها نضارة وإشراقة.",
    available: true,
  },
  {
    id: "dilka-oil",
    name: "زيت دلكة",
    category: "dilka",
    price: 35, // مؤقت
    img: "img/dilka-oil.jpg",
    short: "رفيق الدلكة، يرطّب ويعطّر",
    desc: "زيت يُدهن به الجسم قبل الدلكة عشان تمشي بسهولة، ويترك البشرة مرطّبة وريحتها حلوة.",
    available: true,
  },
  {
    id: "khumra",
    name: "خُمرة",
    category: "scent",
    price: 40, // مؤقت
    img: "img/khumra.jpg",
    badge: "جسم وشعر",
    short: "عطر سوداني تقليدي للجسم والشعر",
    desc: "الخُمرة السودانية، خلطة عطرية تقليدية تُستخدم على الجسم والشعر، وريحتها تثبت طول اليوم.",
    available: true,
  },
  {
    id: "musk-powder",
    name: "بودرة مسك",
    category: "scent",
    price: 30, // مؤقت
    img: "img/musk-powder.jpg",
    short: "بودرة ناعمة بريحة المسك",
    desc: "بودرة جسم ناعمة بريحة المسك، تعطي إحساس بالانتعاش والنظافة.",
    available: true,
  },
  {
    id: "silk-cream",
    name: "كريم حرير",
    category: "body",
    price: 40, // مؤقت
    img: "img/silk-cream.jpg",
    short: "كريم مرطّب بزبدة الشيا والزيوت الطبيعية",
    desc: "كريم مرطّب بزبدة الشيا والزيوت الطبيعية، يخلّي البشرة ناعمة مثل الحرير.",
    available: true,
  },
  {
    id: "african-soap",
    name: "الصابونة الأفريقية",
    category: "body",
    price: 30, // مؤقت
    img: "img/african-soap.jpg",
    short: "بالأعشاب والزيوت الطبيعية",
    desc: "صابونة أفريقية بالأعشاب والزيوت الطبيعية، تنظّف البشرة بعمق وبلطف.",
    available: true,
  },
  {
    id: "body-scrub",
    name: "مقشّر للجسم",
    category: "body",
    price: 40, // مؤقت
    img: "img/body-scrub.jpg",
    short: "يزيل الجلد الميت ويجدد النعومة",
    desc: "مقشّر للجسم يزيل الجلد الميت ويخلّي البشرة ناعمة وجاهزة للترطيب.",
    available: true,
  },
];
