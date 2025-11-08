document.getElementById('avatar-upload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    console.log('File selected:', file); // отладка

    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            console.log('File loaded successfully'); // отладка
            document.getElementById('avatar-preview').src = e.target.result;
            localStorage.setItem('userAvatar', e.target.result);
        }

        reader.onerror = function(e) {
            console.error('Error loading file:', e); // отладка ошибок
        }

        reader.readAsDataURL(file);
    }
});

window.addEventListener('load', function() {
    const savedAvatar = localStorage.getItem('userAvatar');
    console.log('Saved avatar found:', !!savedAvatar); // отладка

    if (savedAvatar) {
        document.getElementById('avatar-preview').src = savedAvatar;
    }
});
