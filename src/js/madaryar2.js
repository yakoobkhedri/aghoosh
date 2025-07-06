document.addEventListener('DOMContentLoaded', function() {
        const dropdownBtns = document.querySelectorAll('.dropdownBtn');
        
        dropdownBtns.forEach(btn => {
            const content = btn.nextElementSibling;
            
            // مخفی کردن اولیه
            content.style.maxHeight = '0';
            content.style.opacity = '0';
            
            btn.addEventListener('click', function() {
                this.classList.toggle('active');
                
                if (content.classList.contains('show')) {
                    // بستن با انیمیشن
                    content.style.maxHeight = '0';
                    content.style.opacity = '0';
                    setTimeout(() => {
                        content.classList.remove('show');
                    }, 400); // مطابق با مدت زمان transition
                } else {
                    // باز کردن با انیمیشن
                    content.classList.add('show');
                    content.style.maxHeight = '1000px';
                    content.style.opacity = '1';
                }
            });
        });
    });