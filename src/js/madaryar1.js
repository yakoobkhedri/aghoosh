   document.addEventListener('DOMContentLoaded', function() {
        const detailsContainer = document.getElementById('details-container');
        const childrenDetails = document.getElementById('children-details');
        
        // شیء برای ذخیره وضعیت انتخاب‌های کاربر
        const userSelections = {
            babies: [],
            children: []
        };

        // تابع برای ایجاد کنترل‌های تعداد نوزاد/کودک
        function createCounter(label, initialValue, container) {
            const wrapper = document.createElement('div');
            wrapper.className = 'flex items-center gap-5 mb-3';
            
            const labelEl = document.createElement('p');
            labelEl.className = 'text-xs text-[#41588E] w-[68px]';
            labelEl.textContent = label;
            
            const plusBtn = document.createElement('div');
            plusBtn.className = 'w-4 h-4 rounded-full bg-info flex-center cursor-pointer';
            plusBtn.innerHTML = `<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 5H9" stroke="#F7F7F7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5 9V1" stroke="#F7F7F7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`;
            
            const input = document.createElement('input');
            input.type = 'number';
            input.min = '0';
            input.value = initialValue;
            input.className = 'w-4 border-0 outline-none bg-transparent text-center text-xs text-[#41588E] counter-input';
            input.dataset.target = label.includes('نوزاد') ? 'baby' : 'child';
            
            const minusBtn = document.createElement('div');
            minusBtn.className = 'w-4 h-4 rounded-full bg-info flex-center cursor-pointer';
            minusBtn.innerHTML = `<svg width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1H9" stroke="#F7F7F7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`;
            
            const text = document.createElement('p');
            text.className = 'text-xs text-[#41588E]';
            text.textContent = `${initialValue} ${label.includes('نوزاد') ? 'نوزاد' : 'کودک'}`;
            
            wrapper.appendChild(labelEl);
            wrapper.appendChild(plusBtn);
            wrapper.appendChild(input);
            wrapper.appendChild(minusBtn);
            wrapper.appendChild(text);
            
            // رویدادهای افزایش و کاهش
            const updateCount = () => {
                text.textContent = `${input.value} ${label.includes('نوزاد') ? 'نوزاد' : 'کودک'}`;
                updateAgeFields();
            };
            
            plusBtn.addEventListener('click', () => {
                input.value = parseInt(input.value) + 1;
                updateCount();
            });
            
            minusBtn.addEventListener('click', () => {
                if (parseInt(input.value) > 0) {
                    input.value = parseInt(input.value) - 1;
                    updateCount();
                }
            });
            
            input.addEventListener('change', () => {
                if (parseInt(input.value) < 0) input.value = 0;
                updateCount();
            });
            
            container.appendChild(wrapper);
            return input;
        }
        
        // ایجاد کنترل‌های اولیه
        const babyCounter = createCounter('تعداد نوزادها', 0, detailsContainer);
        const childCounter = createCounter('تعداد کودک', 0, detailsContainer);
        
        // تابع برای به‌روزرسانی فیلدهای سن
        function updateAgeFields() {
            const babyCount = parseInt(babyCounter.value);
            const childCount = parseInt(childCounter.value);
            
            // ذخیره وضعیت فعلی قبل از به‌روزرسانی
            saveCurrentSelections();
            
            // حذف فیلدهای سن موجود
            const existingAgeFields = document.querySelectorAll('.age-field');
            existingAgeFields.forEach(field => {
                field.style.opacity = '0';
                setTimeout(() => field.remove(), 200);
            });
            
            // ایجاد فیلدهای سن نوزادان
            setTimeout(() => {
                for (let i = 1; i <= babyCount; i++) {
                    const savedAge = userSelections.babies[i-1]?.age || 0;
                    createAgeField(`سن نوزاد ${i}`, 'baby', i, savedAge);
                }
                
                // ایجاد فیلدهای سن کودکان
                for (let i = 1; i <= childCount; i++) {
                    const savedAge = userSelections.children[i-1]?.age || 0;
                    createAgeField(`سن کودک ${i}`, 'child', i, savedAge);
                }
                
                // به‌روزرسانی جزئیات کودکان پس از ایجاد فیلدهای سن
                updateChildDetails();
            }, 200);
        }
        
        // تابع برای ذخیره وضعیت فعلی انتخاب‌ها
        function saveCurrentSelections() {
            userSelections.babies = [];
            userSelections.children = [];
            
            document.querySelectorAll('.age-input').forEach(input => {
                const type = input.dataset.type;
                const index = parseInt(input.dataset.index) - 1;
                const age = parseInt(input.value);
                
                const section = input.closest('.age-field').nextElementSibling;
                if (!section) return;
                
                const healthStatus = section.querySelector('.health-radio:checked')?.value || 'healthy';
                const conditions = [];
                section.querySelectorAll('.condition-item').forEach(item => {
                    conditions.push(item.textContent.trim());
                });
                
                const allergies = {
                    food: section.querySelector('input[type="checkbox"]:nth-of-type(1)')?.checked || false,
                    medicine: section.querySelector('input[type="checkbox"]:nth-of-type(2)')?.checked || false,
                    cane: section.querySelector('input[type="checkbox"]:nth-of-type(3)')?.checked || false,
                    walker: section.querySelector('input[type="checkbox"]:nth-of-type(4)')?.checked || false,
                    wheelchair: section.querySelector('input[type="checkbox"]:nth-of-type(5)')?.checked || false
                };
                
                const notes = section.querySelector('input[type="text"]')?.value || '';
                
                if (type === 'baby') {
                    userSelections.babies[index] = { age, healthStatus, conditions, allergies, notes };
                } else {
                    userSelections.children[index] = { age, healthStatus, conditions, allergies, notes };
                }
            });
        }
        
        // تابع برای ایجاد فیلد سن
        function createAgeField(label, type, index, initialValue) {
            const wrapper = document.createElement('div');
            wrapper.className = 'flex items-center gap-5 mb-3 age-field';
            wrapper.style.opacity = '0';
            wrapper.style.transition = 'opacity 0.2s ease';
            
            const labelEl = document.createElement('p');
            labelEl.className = 'text-xs text-[#41588E] w-[68px]';
            labelEl.textContent = label;
            
            const plusBtn = document.createElement('div');
            plusBtn.className = 'w-4 h-4 rounded-full bg-info flex-center cursor-pointer';
            plusBtn.innerHTML = `<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 5H9" stroke="#F7F7F7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5 9V1" stroke="#F7F7F7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`;
            
            const input = document.createElement('input');
            input.type = 'number';
            input.min = '0';
            input.value = initialValue;
            input.className = 'w-4 border-0 outline-none bg-transparent text-center text-xs text-[#41588E] age-input';
            input.dataset.type = type;
            input.dataset.index = index;
            
            const minusBtn = document.createElement('div');
            minusBtn.className = 'w-4 h-4 rounded-full bg-info flex-center cursor-pointer';
            minusBtn.innerHTML = `<svg width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1H9" stroke="#F7F7F7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`;
            
            const text = document.createElement('p');
            text.className = 'text-xs text-[#41588E]';
            text.textContent = `${initialValue} ${type === 'baby' ? 'ماهه' : 'ساله'}`;
            
            wrapper.appendChild(labelEl);
            wrapper.appendChild(plusBtn);
            wrapper.appendChild(input);
            wrapper.appendChild(minusBtn);
            wrapper.appendChild(text);
            
            // نمایش تدریجی فیلد جدید
            setTimeout(() => {
                wrapper.style.opacity = '1';
            }, 10);
            
            // رویدادهای افزایش و کاهش سن
            const updateAge = () => {
                text.textContent = `${input.value} ${type === 'baby' ? 'ماهه' : 'ساله'}`;
                updateChildDetails();
            };
            
            plusBtn.addEventListener('click', () => {
                input.value = parseInt(input.value) + 1;
                updateAge();
            });
            
            minusBtn.addEventListener('click', () => {
                if (parseInt(input.value) > 0) {
                    input.value = parseInt(input.value) - 1;
                    updateAge();
                }
            });
            
            input.addEventListener('change', () => {
                if (parseInt(input.value) < 0) input.value = 0;
                updateAge();
            });
            
            detailsContainer.appendChild(wrapper);
        }
        
        // تابع برای به‌روزرسانی جزئیات کودکان
        function updateChildDetails() {
            // ذخیره وضعیت فعلی قبل از به‌روزرسانی
            saveCurrentSelections();
            
            // حذف با انیمیشن
            const existingSections = document.querySelectorAll('.child-detail-section');
            existingSections.forEach(section => {
                section.style.opacity = '0';
                section.style.transition = 'opacity 0.2s ease';
                setTimeout(() => section.remove(), 200);
            });
            
            setTimeout(() => {
                const babyInputs = document.querySelectorAll('.age-input[data-type="baby"]');
                const childInputs = document.querySelectorAll('.age-input[data-type="child"]');
                
                babyInputs.forEach((input, index) => {
                    const age = parseInt(input.value);
                    createChildDetailSection(`نوزاد ${index + 1}`, age, 'baby', index);
                });
                
                childInputs.forEach((input, index) => {
                    const age = parseInt(input.value);
                    createChildDetailSection(`کودک ${age} ساله`, age, 'child', index);
                });
            }, 200);
        }
        
        // تابع برای ایجاد بخش جزئیات هر کودک/نوزاد
        function createChildDetailSection(title, age, type, index) {
            const savedData = type === 'baby' ? 
                (userSelections.babies[index] || {}) : 
                (userSelections.children[index] || {});
            
            const section = document.createElement('div');
            section.className = 'mt-3 child-detail-section';
            section.style.opacity = '0';
            section.style.transition = 'opacity 0.2s ease';
            
            section.innerHTML = `
                <p class="font-bold text-sm text-[#2B3F6C]">${title}</p>
                <div class="flex items-center mt-4 gap-11">
                    <label class="flex items-center gap-3 cursor-pointer">
                        <input type="radio" name="${type}-${index}-health" class="cursor-pointer health-radio" value="healthy" 
                            ${savedData.healthStatus === 'healthy' ? 'checked' : ''}>
                        <p class="text-xs text-[#2B3F6C]">سالم</p>
                    </label>
                    <label class="flex items-center gap-3 cursor-pointer">
                        <input type="radio" name="${type}-${index}-health" class="cursor-pointer health-radio" value="special"
                            ${savedData.healthStatus === 'special' ? 'checked' : ''}>
                        <p class="text-xs text-[#2B3F6C]">دارای شرایط خاص</p>
                    </label>
                </div>
                <div class="mt-4 condition-selector" style="display: ${savedData.healthStatus === 'special' ? 'block' : 'none'};">
                    <select class="text-[#A3A3A3] text-xs bg-[#F5F5F5] rounded-[9px] w-full h-8 px-3 shadow-2 condition-dropdown">
                        <option value="">انتخاب کنید</option>
                        <option value="لکنت زبان">لکنت زبان</option>
                        <option value="افسردگی">افسردگی</option>
                        <option value="اوتیسم">اوتیسم</option>
                        <option value="نقص توجه">نقص توجه</option>
                    </select>
                    <div class="mt-2 flex items-center flex-wrap gap-4 conditions-container">
                        ${savedData.conditions ? savedData.conditions.map(condition => `
                            <div class="flex items-center gap-2 bg-[#6CC7FF] rounded-xl py-1 px-3 shadow-2 condition-item">
                                <svg class="cursor-pointer remove-condition" width="9" height="11" viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 1L1 9.99993M8 10L1 1.00007" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                                <p class="text-white text-xs">${condition}</p>
                            </div>
                        `).join('') : ''}
                    </div>
                </div>
                <div class="mt-7">
                    <div class="flex items-center gap-4 flex-wrap">
                        <label class="flex items-center gap-4 text-xs text-[#41588E] cursor-pointer">
                            <input type="checkbox" class="cursor-pointer" ${savedData.allergies?.food ? 'checked' : ''}>
                            <p>آلرژی غذایی</p>
                        </label>
                        <label class="flex items-center gap-4 text-xs text-[#41588E] cursor-pointer">
                            <input type="checkbox" class="cursor-pointer" ${savedData.allergies?.medicine ? 'checked' : ''}>
                            <p>آلرژی دارویی</p>
                        </label>
                        <label class="flex items-center gap-4 text-xs text-[#41588E] cursor-pointer">
                            <input type="checkbox" class="cursor-pointer" ${savedData.allergies?.cane ? 'checked' : ''}>
                            <p>عصا</p>
                        </label>
                        <label class="flex items-center gap-4 text-xs text-[#41588E] cursor-pointer">
                            <input type="checkbox" class="cursor-pointer" ${savedData.allergies?.walker ? 'checked' : ''}>
                            <p>واکر</p>
                        </label>
                        <label class="flex items-center gap-4 text-xs text-[#41588E] cursor-pointer">
                            <input type="checkbox" class="cursor-pointer" ${savedData.allergies?.wheelchair ? 'checked' : ''}>
                            <p>ویلچر</p>
                        </label>
                    </div>
                    <input class="my-2 border rounded-xl shadow-2 py-3 px-4 text-xs w-full outline-none" 
                        placeholder="سایر توضیحات (فیلد متنی اضافی)" value="${savedData.notes || ''}">
                </div>
            `;
            
            childrenDetails.appendChild(section);
            
            // نمایش تدریجی بخش جدید
            setTimeout(() => {
                section.style.opacity = '1';
            }, 10);
            
            // مدیریت رویدادهای شرایط خاص
            const healthRadios = section.querySelectorAll('.health-radio');
            const conditionSelector = section.querySelector('.condition-selector');
            const conditionDropdown = section.querySelector('.condition-dropdown');
            const conditionsContainer = section.querySelector('.conditions-container');
            
            healthRadios.forEach(radio => {
                radio.addEventListener('change', function() {
                    if (this.value === 'special') {
                        conditionSelector.style.display = 'block';
                    } else {
                        conditionSelector.style.display = 'none';
                        // هنگام تغییر به حالت سالم، شرایط را حذف نکنید
                    }
                });
            });
            
            conditionDropdown.addEventListener('change', function() {
                if (this.value) {
                    addCondition(this.value, conditionsContainer);
                    this.value = '';
                }
            });
            
            // اضافه کردن رویداد حذف به شرایط موجود
            section.querySelectorAll('.remove-condition').forEach(btn => {
                btn.addEventListener('click', function() {
                    this.closest('.condition-item').remove();
                });
            });
            
            function addCondition(condition, container) {
                // بررسی تکراری نبودن شرط
                const existingConditions = container.querySelectorAll('.condition-item');
                for (let item of existingConditions) {
                    if (item.textContent.includes(condition)) {
                        return;
                    }
                }
                
                const conditionElement = document.createElement('div');
                conditionElement.className = 'flex items-center gap-2 bg-[#6CC7FF] rounded-xl py-1 px-3 shadow-2 condition-item';
                
                conditionElement.innerHTML = `
                    <svg class="cursor-pointer remove-condition" width="9" height="11" viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 1L1 9.99993M8 10L1 1.00007" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <p class="text-white text-xs">${condition}</p>
                `;
                
                conditionElement.querySelector('.remove-condition').addEventListener('click', function() {
                    conditionElement.remove();
                });
                
                container.appendChild(conditionElement);
            }
        }
        
        // مقداردهی اولیه
        updateAgeFields();
    });