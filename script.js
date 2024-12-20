function rc5Encrypt(plainText, key) {
    let encrypted = '';
    for (let i = 0; i < plainText.length; i++) {
        encrypted += String.fromCharCode(plainText.charCodeAt(i) + key);
    }
    return encrypted;
}

document.getElementById('encryptBtn').addEventListener('click', function () {
    const inputText = document.getElementById('inputText').value;
    const key = parseInt(document.getElementById('key').value);
    
    if (!key || key < 1) {
        alert('Введите верный ключ!');
        return;
    }

    const encryptedText = rc5Encrypt(inputText, key);
    document.getElementById('outputText').value = encryptedText;
});