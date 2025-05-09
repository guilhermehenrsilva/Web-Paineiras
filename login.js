function login(event) {
    event.preventDefault();

    const user = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    const errorMsg = document.getElementById('error-msg');

    const userFix = 'admin@paineiras.com';
    const passFix = '12345';

    if (user === userFix && pass === passFix) {
      window.location.href = 'home.html';
    } else {
      errorMsg.style.display = 'block';
    }
    return false;
  }