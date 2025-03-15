document.addEventListener('DOMContentLoaded', () => {
    const stringButton = document.getElementById('stringButton');
    let isVibrating = false;

    stringButton.addEventListener('click', () => {
        if (!isVibrating) {
            stringButton.classList.add('string-vibrate');
            stringButton.textContent = 'Stop String';
            isVibrating = true;
        } else {
            stringButton.classList.remove('string-vibrate');
            stringButton.textContent = 'String Effect';
            isVibrating = false;
        }
    });
});