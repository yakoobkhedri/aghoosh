let alert = Array.from(document.getElementsByClassName('alert'));
let closealert = Array.from(document.getElementsByClassName('closealert'));

closealert.forEach((item)=>{
    item.addEventListener('click', function () {
        item.parentElement.classList.remove('active');
    })
})
