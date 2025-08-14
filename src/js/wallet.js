
// modal

let changecart = document.getElementById('changecart');
let openChangeCart = document.getElementById('openChangeCart');
let closeChangecart = document.getElementById('closeChangecart');
let myWithdrawal = document.getElementById('myWithdrawal');
let openMyWithdrawal = document.getElementById('openMyWithdrawal');
let closeMyWithdrawal = document.getElementById('closeMyWithdrawal');

openChangeCart.addEventListener('click', function () {
  changecart.classList.add('active');
});
closeChangecart.addEventListener('click', function () {
  changecart.classList.remove('active');
});

openMyWithdrawal.addEventListener('click', function () {
  myWithdrawal.classList.add('active');
});
closeMyWithdrawal.addEventListener('click', function () {
  myWithdrawal.classList.remove('active');
});