// modal

let pay = document.getElementById('pay');
let openPay = document.getElementById('openPay');


openPay.addEventListener('click', function () {
  pay.classList.add('active');
  pay.querySelector('#box').classList.add('active');
});
