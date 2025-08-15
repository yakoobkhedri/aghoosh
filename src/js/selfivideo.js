  // عناصر DOM
  const startBtn = document.getElementById('startBtn');
  const retakeBtn = document.getElementById('retakeBtn');
  const uploadBtn = document.getElementById('uploadBtn');
  const videoPreview = document.getElementById('videoPreview');
  const canvasPreview = document.getElementById('canvasPreview');
  
  // متغیرهای global
  let mediaStream = null;
  let recordedChunks = [];
  let mediaRecorder = null;
  
  // شروع ضبط ویدیو
  startBtn.addEventListener('click', async () => {
    try {
      // درخواست دسترسی به دوربین
      mediaStream = await navigator.mediaDevices.getUserMedia({ 
        video: {
          facingMode: 'user', // استفاده از دوربین سلفی
          width: { ideal: 640 },
          height: { ideal: 640 }
        }, 
        audio: true 
      });
      
      // نمایش ویدیوی زنده
      videoPreview.srcObject = mediaStream;
      videoPreview.classList.remove('hidden');
      startBtn.classList.add('hidden');
      uploadBtn.classList.remove('hidden');
      
      // شروع ضبط ویدیو
      recordedChunks = [];
      mediaRecorder = new MediaRecorder(mediaStream);
      
      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          recordedChunks.push(event.data);
        }
      };
      
      mediaRecorder.start();
      
      // بعد از 10 ثانیه ضبط به صورت خودکار متوقف می‌شود
      setTimeout(() => {
        stopRecording();
      }, 10000);
      
    } catch (error) {
      console.error('خطا در دسترسی به دوربین:', error);
      alert('خطا در دسترسی به دوربین. لطفاً مجوزهای لازم را بررسی کنید.');
    }
  });
  
  // توقف ضبط و نمایش پیش‌نمایش
  function stopRecording() {
    if (mediaRecorder && mediaRecorder.state !== 'inactive') {
      mediaRecorder.stop();
    }
    
    if (mediaStream) {
      mediaStream.getTracks().forEach(track => track.stop());
    }
    
    // نمایش پیش‌نمایش ویدیو
    const blob = new Blob(recordedChunks, { type: 'video/mp4' });
    const videoURL = URL.createObjectURL(blob);
    
    // پخش ویدیوی ضبط شده برای پیش‌نمایش
    videoPreview.srcObject = null;
    videoPreview.src = videoURL;
    videoPreview.muted = false;
    
    // ذخیره ویدیو برای آپلود
    uploadBtn.dataset.videoBlobUrl = videoURL;
  }
  
  // ضبط مجدد ویدیو
  retakeBtn.addEventListener('click', () => {
    if (videoPreview.srcObject) {
      videoPreview.srcObject.getTracks().forEach(track => track.stop());
    }
    
    videoPreview.srcObject = null;
    videoPreview.src = '';
    videoPreview.classList.add('hidden');
    canvasPreview.classList.add('hidden');
    
    startBtn.classList.remove('hidden');
    uploadBtn.classList.add('hidden');
  });
  
  // آپلود ویدیو
  uploadBtn.addEventListener('click', () => {
    const videoBlobUrl = uploadBtn.dataset.videoBlobUrl;
    if (!videoBlobUrl) {
      alert('لطفاً ابتدا ویدیو را ضبط کنید.');
      return;
    }
    
    // در اینجا می‌توانید ویدیو را به سرور آپلود کنید
    // مثال با استفاده از fetch:
    fetch(videoBlobUrl)
      .then(res => res.blob())
      .then(blob => {
        const formData = new FormData();
        formData.append('video', blob, 'selfie-video.mp4');
        
        // آپلود به سرور (آدرس سرور شما)
        return fetch('https://your-server.com/upload', {
          method: 'POST',
          body: formData
        });
      })
      .then(response => {
        if (response.ok) {
          alert('ویدیو با موفقیت آپلود شد.');
        } else {
          throw new Error('خطا در آپلود ویدیو');
        }
      })
      .catch(error => {
        console.error('خطا در آپلود:', error);
        alert('خطا در آپلود ویدیو. لطفاً دوباره امتحان کنید.');
      });
  });