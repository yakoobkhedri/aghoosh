// modal

let searching = document.getElementById('searching');
let openSearching = document.getElementById('openSearching');
let openSearching2 = document.getElementById('openSearching2');
let searchingFail = document.getElementById('searchingFail');
let openSearchingFail = document.getElementById('openSearchingFail');


openSearching.addEventListener('click', function () {
  searching.classList.add('active');
});

openSearching2.addEventListener('click', function () {
    searchingFail.classList.remove('active');
  searching.classList.add('active');
});


openSearchingFail.addEventListener('click', function () {
  searchingFail.classList.add('active');
});

searching.addEventListener('click', function(e) {
  // اگر عنصر کلیک شده خود searching باشد (و نه فرزندانش)
  if (e.target === searching) {
    searching.classList.remove('active');
    searching.querySelector('#box').classList.remove('active');
  }
});

searchingFail.addEventListener('click', function(e) {
  // اگر عنصر کلیک شده خود searchingFail باشد (و نه فرزندانش)
  if (e.target === searchingFail) {
    searchingFail.classList.remove('active');
    searchingFail.querySelector('#box').classList.remove('active');
  }
});