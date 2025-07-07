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

$(document).ready(function() {
  $('#timepicker-input').timepicker({
    timeFormat: 'HH:mm',       // فرمت 24 ساعته
    interval: 30,              // فاصله 30 دقیقه‌ای
    minTime: '00:00',          // شروع از نیمه‌شب
    maxTime: '23:30',          // پایان در 23:30 (آخرین بازه)
    defaultTime: '12:00',      // زمان پیش‌فرض
    startTime: '00:00',        // زمان شروع در dropdown
    dynamic: false,            // اسکرول دینامیک غیرفعال
    dropdown: true,            // نمایش dropdown
    scrollbar: true            // نمایش اسکرول بار
  });

  $('#timepicker-input2').timepicker({
    timeFormat: 'HH:mm',       // فرمت 24 ساعته
    interval: 30,              // فاصله 30 دقیقه‌ای
    minTime: '00:00',          // شروع از نیمه‌شب
    maxTime: '23:30',          // پایان در 23:30
    defaultTime: '12:00',      // زمان پیش‌فرض
    startTime: '00:00',        // زمان شروع در dropdown
    dynamic: false,            // اسکرول دینامیک غیرفعال
    dropdown: true,            // نمایش dropdown
    scrollbar: true            // نمایش اسکرول بار
  });
});