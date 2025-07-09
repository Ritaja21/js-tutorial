const form = document.querySelector('form')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results');
    results.style.padding = '10px';

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = "Please give a valid height"
    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = "Please give a valid weight"
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        if (bmi < 18.6) {
            results.innerHTML = `<span>You are underweight.${bmi}</span>`
        }
        if (bmi > 18.6 && bmi < 24.9) {
            results.innerHTML = `<span>Your weight is normal.${bmi}</span>`
        }
        if (bmi > 24.9) {
            results.innerHTML = `<span>You are overweight.${bmi}</span>`
        }
    }
});