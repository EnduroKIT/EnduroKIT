
function sendTelegram(event) {
  event.preventDefault();

  const token = 'ВАШ_ТОКЕН';
  const chat_id = 'ВАШ_CHAT_ID';

  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const bike = document.getElementById('bike').value;
  const date = document.getElementById('date').value;

  const message = `Новая заявка на прокат мотоцикла:%0AИмя: ${name}%0AТелефон: ${phone}%0AМотоцикл: ${bike}%0AДата: ${date}`;

  fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${message}`)
    .then(() => alert('Заявка отправлена! Мы свяжемся с вами.'))
    .catch(() => alert('Ошибка отправки. Попробуйте позже.'));
}
