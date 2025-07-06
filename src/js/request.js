// modal

let cancelRequest = document.getElementById('cancelRequest');
let openCancelRequest = document.getElementById('openCancelRequest');
let closeCancelRequest = document.getElementById('closeCancelRequest');
let closeCancelRequest2 = document.getElementById('closeCancelRequest2')

openCancelRequest.addEventListener('click', function () {
  cancelRequest.classList.add('active');
  cancelRequest.querySelector('#box').classList.add('active');
});
closeCancelRequest.addEventListener('click', function () {
  cancelRequest.classList.remove('active');
  cancelRequest.querySelector('#box').classList.remove('active');
});
closeCancelRequest2.addEventListener('click', function () {
  cancelRequest.classList.remove('active');
  cancelRequest.querySelector('#box').classList.remove('active');
});

cancelRequest.addEventListener('click', function(e) {
  // اگر عنصر کلیک شده خود cancelRequest باشد (و نه فرزندانش)
  if (e.target === cancelRequest) {
    cancelRequest.classList.remove('active');
    cancelRequest.querySelector('#box').classList.remove('active');
  }
});