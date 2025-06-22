const plans = [
  {
    label: "خطة البداية",
    title: "الأساسية",
    price: "$8",
    yearly: "بتكلفة 96 دولاراً سنوياً",
    best: false,
    features: [
      "تصميم متجاوب",
      "واجهة مستخدم سهلة الاستخدام",
      "طرق دفع متعددة و آمنة",
      "تصميم بسيط و سهل التصفح",
      "نظام إدارة محتوى",
      "سهولة الإنشاء و تعديل المنتجات",
      "مساعدة تقنية أساسية خلال فترة الإطلاق",
    ],
    disabled: [4, 5, 6]
  },
  {
    label: "الأفضل",
    title: "المتقدمه",
    price: "$32",
    yearly: "بتكلفة 300 دولاراً سنوياً",
    best: true,
    features: [
      "تصميم متجاوب",
      "واجهة مستخدم سهلة الاستخدام",
      "طرق دفع متعددة و آمنة",
      "تصميم بسيط و سهل التصفح",
      "نظام إدارة محتوى",
      "سهولة الإنشاء و تعديل المنتجات",
      "مساعدة تقنية أساسية خلال فترة الإطلاق",
    ],
    disabled: []
  },
  {
    label: "المحبوبة",
    title: "المتوسطة",
    price: "$16",
    yearly: "بتكلفة 243 دولاراً سنوياً",
    best: false,
    features: [
      "تصميم متجاوب",
      "واجهة مستخدم سهلة الاستخدام",
      "طرق دفع متعددة و آمنة",
      "تصميم بسيط و سهل التصفح",
      "نظام إدارة محتوى",
      "سهولة الإنشاء و تعديل المنتجات",
      "مساعدة تقنية أساسية خلال فترة الإطلاق",
    ],
    disabled: [6]
  }
];

const container = document.getElementById("plans-container");

plans.forEach(plan => {
  const div = document.createElement("div");
  div.className = `plan ${plan.best ? "best" : ""}`;
  div.innerHTML = `
    <div class="label">${plan.label}</div>
    <h3>${plan.title}</h3>
    <div class="price">${plan.price} <span>/ شهرياً</span></div>
    <div class="yearly">${plan.yearly}</div>
    <ul class="features">
      ${plan.features
        .map((feature, index) =>
          `<li class="${plan.disabled.includes(index) ? "disabled" : ""}">${feature}</li>`
        )
        .join("")}
    </ul>
  `;
    // <a href="#" class="btn">ابدأ الآن</a>
  
  container.appendChild(div);
});
