// modal

let withdrawal = document.getElementById('withdrawal');
let openWithdrawal = document.getElementById('openWithdrawal');
let closeWithdrawal = document.getElementById('closeWithdrawal');

openWithdrawal.addEventListener('click', function () {
  withdrawal.classList.add('active');
  withdrawal.querySelector('#box').classList.add('active');
});
closeWithdrawal.addEventListener('click', function () {
  withdrawal.classList.remove('active');
  withdrawal.querySelector('#box').classList.remove('active');
});

withdrawal.addEventListener('click', function(e) {
  // اگر عنصر کلیک شده خود withdrawal باشد (و نه فرزندانش)
  if (e.target === withdrawal) {
    withdrawal.classList.remove('active');
    withdrawal.querySelector('#box').classList.remove('active');
  }
});