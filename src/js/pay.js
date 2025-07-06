// modal

let pay = document.getElementById('pay');
let openPay = document.getElementById('openPay');


openPay.addEventListener('click', function () {
  pay.classList.add('active');
  pay.querySelector('#box').classList.add('active');
});

pay.addEventListener('click', function(e) {
  // اگر عنصر کلیک شده خود pay باشد (و نه فرزندانش)
  if (e.target === pay) {
    pay.classList.remove('active');
    pay.querySelector('#box').classList.remove('active');
  }
});