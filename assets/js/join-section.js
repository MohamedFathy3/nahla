  // بيانات السكشن
  const joinData = {
    imageSrc: "assets/images/featured_01.png",
    imageAlt: "تحليلات",
    heading: "انضم إلى 100 شركة تعمل على تعزيز منتجاتها بالمتجر",
    description:
      "أنشئ متجرك الآن بأدوات مرنة وحلول متكاملة تساعدك في كل خطوة نحو نمو مبيعاتك وتسويق منتجاتك",
    buttonText: "أنشئ متجرك الآن",
    buttonAction: "startStore()", // اسم الدالة
  };

  // بناء الكود HTML داخل JavaScript
  const joinSection = document.getElementById("joinSection");

  joinSection.innerHTML = `
    <div class="card">
      <div class="card-image">
        <img src="${joinData.imageSrc}" alt="${joinData.imageAlt}" />
      </div>
      <div class="card-content">
        <h2>${joinData.heading}</h2>
        <p>${joinData.description}</p>
        <button class="join-btn" onclick="${joinData.buttonAction}">${joinData.buttonText}</button>
      </div>
    </div>
  `;

  // الدالة المفعلة عند الضغط
  function startStore() {
    alert("سيتم توجيهك لإنشاء متجرك 🚀");
    // window.location.href = "/signup";  // لو حابب توجه المستخدم
  }
