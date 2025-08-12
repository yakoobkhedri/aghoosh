// modal

let searching = document.getElementById('searching');
let openSearching = document.getElementById('openSearching');
let closeSearching =document.getElementById('closeSearching');


openSearching.addEventListener('click', function () {
  searching.classList.add('active');
});

closeSearching.addEventListener('click', function () {
  searching.classList.remove('active');
});


searching.addEventListener('click', function(e) {
  // اگر عنصر کلیک شده خود searching باشد (و نه فرزندانش)
  if (e.target === searching) {
    searching.classList.remove('active');
    searching.querySelector('#box').classList.remove('active');
  }
});
