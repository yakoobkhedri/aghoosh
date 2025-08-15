document.addEventListener('DOMContentLoaded', function() {
  const galleryInput = document.getElementById('galleryInput');
  const cameraInput = document.getElementById('cameraInput');
  const previewImage = document.getElementById('previewImage');
  const deleteBtn = document.getElementById('deleteBtn');
  
  // انتخاب عکس از گالری
  galleryInput.addEventListener('change', function(e) {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      
      reader.onload = function(event) {
        previewImage.src = event.target.result;
      };
      
      reader.readAsDataURL(e.target.files[0]);
    }
  });
  
  // گرفتن عکس با دوربین
  cameraInput.addEventListener('change', function(e) {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      
      reader.onload = function(event) {
        previewImage.src = event.target.result;
      };
      
      reader.readAsDataURL(e.target.files[0]);
    }
  });
  
  // حذف عکس
  deleteBtn.addEventListener('click', function() {
    previewImage.src = '../../img/frame.png';
    galleryInput.value = '';
    cameraInput.value = '';
  });
  
  // برای بهبود UX، کلیک روی دکمه‌های والد را هم پردازش می‌کنیم
  document.getElementById('galleryBtn').addEventListener('click', function() {
    galleryInput.click();
  });
  
  document.getElementById('cameraBtn').addEventListener('click', function() {
    cameraInput.click();
  });
});