document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    // إزالة active من كل الأزرار
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const category = btn.id; // استخدم id بدل data-category
    const cards = document.querySelectorAll('.template-card');

    cards.forEach(card => {
      if (category === 'all' || card.getAttribute('data-category') === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// عند تحميل الصفحة، عرض فئة "مطاعم"
window.addEventListener('DOMContentLoaded', () => {
  const defaultBtn = document.getElementById('مطاعم');
  if (defaultBtn) defaultBtn.click();
});

// السلة
function addToCart(title) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(title);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`تمت إضافة "${title}" إلى السلة 🛒`);
}
