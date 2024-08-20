document.getElementById('generateButton').addEventListener('click', function() {
    const minValue = parseInt(document.getElementById('minValue').value, 10);
    const maxValue = parseInt(document.getElementById('maxValue').value, 10);
    const resultDiv = document.getElementById('result');

    if (isNaN(minValue) || isNaN(maxValue) || minValue > maxValue) {
        resultDiv.textContent = 'Please enter valid minimum and maximum values.';
        resultDiv.style.color = 'red';
        return;
    }

    const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    resultDiv.textContent = `Generated Number: ${randomNumber}`;
    resultDiv.style.color = '#007bff';
});
