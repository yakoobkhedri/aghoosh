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