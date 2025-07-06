 document.addEventListener('DOMContentLoaded', function() {
    const messageInput = document.querySelector('.message-input');
    const inputContainer = messageInput.closest('.bg-white');
    const voiceIcon = document.querySelector('.voice-icon');
    const sendIcon = document.querySelector('.send-icon');
    
    messageInput.addEventListener('input', function(e) {
      if (e.target.value.trim() !== '') {
        inputContainer.classList.add('has-text');
      } else {
        inputContainer.classList.remove('has-text');
      }
    });
    
    // برای کلیک روی آیکون send
    sendIcon.addEventListener('click', function() {
      // کد ارسال پیام اینجا قرار می‌گیرد
      console.log('ارسال پیام:', messageInput.value);
      // messageInput.value = ''; // در صورت نیاز می‌توانید اینپوت را خالی کنید
    });
  });