
// modal

let profileEdit = document.getElementById('profileEdit');
let openProfileEdit = document.getElementById('openProfileEdit');
let closeProfileEdit = document.getElementById('closeProfileEdit');

openProfileEdit.addEventListener('click', function () {
  profileEdit.classList.add('active');
});
closeProfileEdit.addEventListener('click', function () {
  profileEdit.classList.remove('active');
});

