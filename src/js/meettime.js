    document.addEventListener('DOMContentLoaded', function() {
            const checkboxes = document.querySelectorAll('input[name="conversation-type"]');
            const items = document.querySelectorAll('.checkbox-item');
            
            checkboxes.forEach((checkbox, index) => {
                checkbox.addEventListener('change', function() {
                    if (this.checked) {
                        // غیرفعال کردن سایر چک‌باکس‌ها
                        checkboxes.forEach((cb, i) => {
                            if (i !== index) {
                                cb.checked = false;
                                items[i].classList.remove('selected');
                            }
                        });
                        
                        // اضافه کردن کلاس selected به آیتم انتخاب شده
                        items[index].classList.add('selected');
                    } else {
                        // اگر چک‌باکس از حالت انتخاب خارج شد، کلاس selected را حذف کن
                        items[index].classList.remove('selected');
                    }
                });
            });
            
            // اضافه کردن event listener برای کلیک روی کل آیتم
            items.forEach((item, index) => {
                item.addEventListener('click', function(e) {
                    // اگر کاربر روی خود چک‌باکس کلیک نکرده باشد
                    if (e.target.type !== 'checkbox') {
                        const checkbox = this.querySelector('input[type="checkbox"]');
                        checkbox.checked = !checkbox.checked;
                        
                        // ایجاد event change برای فعال کردن منطق اصلی
                        const event = new Event('change');
                        checkbox.dispatchEvent(event);
                    }
                });
            });
        });