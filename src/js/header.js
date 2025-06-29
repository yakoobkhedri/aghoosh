
// modal

let profile = document.getElementById('profile');
let openProfile = document.getElementById('openProfile');
let closeProfile = document.getElementById('closeProfile');
let wallet = document.getElementById('wallet');
let openWallet = document.getElementById('openWallet');
let closeWallet = document.getElementById('closeWallet');
let message = document.getElementById('message');
let openMessage = document.getElementById('openMessage');
let closeMessage = document.getElementById('closeMessage');
let requestHistory = document.getElementById('requestHistory');
let openRequestHistory = document.getElementById('openRequestHistory');
let closeRequestHistory = document.getElementById('closeRequestHistory');

openProfile.addEventListener('click', function () {
  profile.classList.add('active');
});
closeProfile.addEventListener('click', function () {
  profile.classList.remove('active');
});

openWallet.addEventListener('click', function () {
  wallet.classList.add('active');
});
closeWallet.addEventListener('click', function () {
  wallet.classList.remove('active');
});

openMessage.addEventListener('click', function () {
  message.classList.add('active');
});
closeMessage.addEventListener('click', function () {
  message.classList.remove('active');
});

openRequestHistory.addEventListener('click', function () {
  requestHistory.classList.add('active');
});
closeRequestHistory.addEventListener('click', function () {
  requestHistory.classList.remove('active');
});
