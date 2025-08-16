

document.addEventListener('DOMContentLoaded', function() {
  // modal
  
  let chargeWallet = document.getElementById('chargeWallet');
  let openChargeWallet = document.getElementById('openChargeWallet');
  let closeChargeWallet = document.getElementById('closeChargeWallet');
  
  
  openChargeWallet.addEventListener('click', function () {
    chargeWallet.classList.add('active');
  });
  closeChargeWallet.addEventListener('click', function () {
    chargeWallet.classList.remove('active');
  })
  chargeWallet.addEventListener('click', function(e) {
    // اگر عنصر کلیک شده خود chargeWallet باشد (و نه فرزندانش)
    if (e.target === chargeWallet) {
      chargeWallet.classList.remove('active');
      chargeWallet.querySelector('#box').classList.remove('active');
    }
  });
  // swiper
    // مقدار اولیه
  let currentAmount = 800000;
  const minAmount = 100000;
  const step = 100000;
  
  // Swiper initialization
  var moneySwiper = new Swiper(".money", {
    slidesPerView: 3,
    spaceBetween: 12,
    loop: true,
    centeredSlides: true,
    initialSlide: 1,
    
    on: {
      init: function() {
        updateActiveSlide(this);
      },
      slideChange: function() {
        updateActiveSlide(this);
      },
      click: function() {
        this.slideTo(this.clickedIndex);
      }
    }
  });

  // Update active slide style and current amount
  function updateActiveSlide(swiper) {
    swiper.slides.forEach(slide => {
      slide.querySelector('div').classList.remove('active');
    });
    
    const activeSlide = swiper.slides[swiper.activeIndex];
    activeSlide.querySelector('div').classList.add('active');
    
    currentAmount = parseInt(activeSlide.getAttribute('data-value'));
    updateDisplay();
  }

  // Format price with Persian digits and separators
  function formatPrice(price) {
    return new Intl.NumberFormat('fa-IR').format(price);
  }

  // Update the displayed value
  function updateDisplay() {
    document.querySelector('.current-value').textContent = formatPrice(currentAmount) + ' تومان';
  }

  // Plus button click handler
  document.querySelector('.plus').addEventListener('click', function() {
    currentAmount += step;
    updateDisplay();
    slideToAmount(currentAmount);
  });

  // Minus button click handler
  document.querySelector('.minus').addEventListener('click', function() {
    if (currentAmount <= minAmount) return;
    currentAmount -= step;
    updateDisplay();
    slideToAmount(currentAmount);
  });

  // Find slide with specific amount and slide to it
  function slideToAmount(amount) {
    const slides = moneySwiper.slides;
    for (let i = 0; i < slides.length; i++) {
      if (parseInt(slides[i].getAttribute('data-value')) === amount) {
        moneySwiper.slideTo(i);
        return;
      }
    }
  }

  // Initialize display
  updateDisplay();
});