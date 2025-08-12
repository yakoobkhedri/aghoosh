// modal

let cancelRequest = document.getElementById('cancelRequest');
let openCancelRequest = document.getElementById('openCancelRequest');

openCancelRequest.addEventListener('click', function () {
  cancelRequest.classList.add('active');
  cancelRequest.querySelector('#box').classList.add('active');
});

cancelRequest.addEventListener('click', function(e) {
  // اگر عنصر کلیک شده خود cancelRequest باشد (و نه فرزندانش)
  if (e.target === cancelRequest) {
    cancelRequest.classList.remove('active');
    cancelRequest.querySelector('#box').classList.remove('active');
  }
});