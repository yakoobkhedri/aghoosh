
// modal

let changecart = document.getElementById('changecart');
let openChangeCart = document.getElementById('openChangeCart');
let closeChangecart = document.getElementById('closeChangecart');

openChangeCart.addEventListener('click', function () {
  changecart.classList.add('active');
});
closeChangecart.addEventListener('click', function () {
  changecart.classList.remove('active');
});
