function showMessage() {
    const message = document.getElementById('message');
    message.style.display = (message.style.display === 'none' || message.style.display === '') ? 'block' : 'none';
}