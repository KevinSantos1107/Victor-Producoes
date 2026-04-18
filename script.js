// ============================
// FAQ — ACORDEÃO
// ============================
function toggleFaq(el) {
  var item = el.parentElement;
  var ans = item.querySelector('.faq-a');
  var inner = item.querySelector('.faq-a-inner');
  var isOpen = item.classList.contains('open');

  // Fecha todos os itens abertos
  document.querySelectorAll('.faq-item').forEach(function(i) {
    i.classList.remove('open');
    i.querySelector('.faq-a').style.maxHeight = '0';
  });

  // Abre o item clicado (somente se estava fechado)
  if (!isOpen) {
    item.classList.add('open');
    ans.style.maxHeight = inner.scrollHeight + 'px';
  }
}

// ============================
// ANIMAÇÕES FADE-IN AO ROLAR
// ============================
var observerOptions = {
  threshold: 0.10,
  rootMargin: '0px 0px -40px 0px'
};

var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(function(el) {
  observer.observe(el);
});

// ============================
// NAV — DESTAQUE AO ROLAR
// ============================
var nav = document.querySelector('nav');

window.addEventListener('scroll', function() {
  if (window.scrollY > 20) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
}, { passive: true });
