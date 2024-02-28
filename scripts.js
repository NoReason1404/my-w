
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu-btn');
  const menu = document.querySelector('.menu');

  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      menu.classList.remove('active');
    }
  });
});



document.addEventListener('DOMContentLoaded', function () {
    var openPopupButton = document.getElementById('openPopup');
    var closePopupButton = document.querySelector('.close');
    var popup = document.getElementById('popup');

    openPopupButton.addEventListener('click', function () {
        popup.style.display = 'block';
    });

    closePopupButton.addEventListener('click', function () {
        popup.style.display = 'none';
    });
});

document.querySelectorAll('.nav__link').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelector('.header').scrollIntoView({ behavior: 'smooth' });
    });
  });

  
  
  var slides = document.getElementsByClassName('slide');
  for (var i = 0; i < slides.length; i++) {
    slides[i].addEventListener('click', function() {
      Array.prototype.forEach.call(slides, function(s) {
        s.style.display = 'none'; // скрываем все карточки
      });
      this.style.display = 'block'; // показываем только нажатую карточку
    });
  }

  




  document.addEventListener('DOMContentLoaded', () => {
    const products = document.querySelectorAll('.product');
    const categoryFilter = document.getElementById('category-filter');

    categoryFilter.addEventListener('change', (event) => {
        const filterValue = event.target.value;
        products.forEach(product => {
            if (product.dataset.category === filterValue || filterValue === 'all') {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });
});