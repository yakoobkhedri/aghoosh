document.addEventListener('DOMContentLoaded', function() {
  const draggableCircle = document.getElementById('draggable-circle');
  const progressBar = document.getElementById('progress-bar');
  const progressNumber = document.getElementById('progress-number');
  const viewElement = document.querySelector('.view');
  const progressContainer = progressBar.parentElement;
  
  let isDragging = false;
  let initialX = 0;
  let initialProgressWidth = 0;
  const maxWidth = progressContainer.offsetWidth;
  const minValue = 1;
  const maxValue = 15;

  draggableCircle.addEventListener('mousedown', startDrag);
  document.addEventListener('mousemove', drag);
  document.addEventListener('mouseup', endDrag);

  function startDrag(e) {
    isDragging = true;
    initialX = e.clientX;
    initialProgressWidth = progressBar.offsetWidth;
    e.preventDefault();
  }

  function drag(e) {
    if (!isDragging) return;
    
    const deltaX = e.clientX - initialX;
    let newWidth = initialProgressWidth + deltaX;
    
    // محدود کردن عرض به عرض کل کانتینر
    newWidth = Math.max(0, Math.min(newWidth, maxWidth));
    
    // محاسبه مقدار جدید بر اساس عرض
    const progressPercentage = newWidth / maxWidth;
    const newValue = Math.round(minValue + (maxValue - minValue) * progressPercentage);
    
    // اعمال تغییرات
    progressBar.style.width = `${newWidth}px`;
    progressNumber.textContent = newValue;
    viewElement.textContent = `${newValue} سال`;
  }

  function endDrag() {
    isDragging = false;
  }
});