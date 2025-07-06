document.addEventListener('DOMContentLoaded', function() {
    const nationalCodeInput = document.getElementById('nationalCode');
    const phoneNumberInput = document.getElementById('phoneNumber');
    const verificationCodeInput = document.getElementById('verificationCode');
    const resendButton = document.getElementById('resendButton');
    const termsCheckbox = document.getElementById('termsCheckbox');
    const loginButton = document.getElementById('loginButton');
    
    // Validate inputs to only accept numbers
    [nationalCodeInput, phoneNumberInput, verificationCodeInput].forEach(input => {
      input.addEventListener('input', function(e) {
        this.value = this.value.replace(/[^0-9]/g, '');
        validateForm();
      });
    });
    
    // Validate national code (10 digits)
    nationalCodeInput.addEventListener('blur', function() {
      if (this.value.length !== 10) {
        this.style.borderColor = 'red';
      } else {
        this.style.borderColor = '';
      }
      validateForm();
    });
    
    // Validate phone number (11 digits)
    phoneNumberInput.addEventListener('blur', function() {
      if (this.value.length !== 11) {
        this.style.borderColor = 'red';
      } else {
        this.style.borderColor = '';
      }
      validateForm();
    });
    
    // Terms checkbox change
    termsCheckbox.addEventListener('change', validateForm);
    
    // Resend button click handler
    resendButton.addEventListener('click', function() {
      startResendTimer();
    });
    
    // Form validation function
    function validateForm() {
      const isNationalCodeValid = nationalCodeInput.value.length === 10;
      const isPhoneNumberValid = phoneNumberInput.value.length === 11;
      const isTermsAccepted = termsCheckbox.checked;
      
      if (isNationalCodeValid && isPhoneNumberValid && isTermsAccepted) {
        loginButton.disabled = false;
        loginButton.classList.remove('bg-[#E0E0E0]', 'text-[#A3A3A3]');
        loginButton.classList.add('bg-primary', 'text-white');
      } else {
        loginButton.disabled = true;
        loginButton.classList.add('bg-[#E0E0E0]', 'text-[#A3A3A3]');
        loginButton.classList.remove('bg-primary', 'text-white');
      }
    }
    
    // Resend timer function
    function startResendTimer() {
      let timeLeft = 120; // 2 minutes in seconds
      resendButton.disabled = true;
      
      const timer = setInterval(function() {
        timeLeft--;
        
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        
        resendButton.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        
        if (timeLeft <= 0) {
          clearInterval(timer);
          resendButton.textContent = 'ارسال مجدد';
          resendButton.disabled = false;
        }
      }, 1000);
    }
  });