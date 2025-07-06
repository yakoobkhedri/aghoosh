let inputbox = Array.from(document.getElementsByClassName('inputbox'));

// اضافه کردن رویداد کلیک به هر inputbox
inputbox.forEach((item) => {
    item.addEventListener('click', function (e) {
        e.stopPropagation(); // جلوگیری از انتشار رویداد به document
        inputbox.forEach((items) => { items.classList.remove('active'); });
        item.classList.add('active');
    });
});

// اضافه کردن رویداد کلیک به document
document.addEventListener('click', function () {
    inputbox.forEach((item) => {
        item.classList.remove('active');
    });
});