
const weight = document.getElementById('weight');
const height = document.getElementById('height');
const btn = document.getElementById('btn');
const result = document.getElementById('result');
const answer = document.getElementById('answer');

function bmi() { // functie care calculeaza BMI

    const weightValue = parseFloat(weight.value);  // valoarea introdusa de user in campul de greutate
    const heightValue = parseFloat(height.value) / 100; // valoarea introdusa de user in campul de inaltime


    if (isNaN(weightValue) || isNaN(heightValue) || weightValue < 0 || heightValue < 0) {
        answer.innerText = ' Please enter valid data for Weight & Height.';
        answer.style.color = 'red';
        answer.style.fontWeight = 'bold';
        return; 
    }

    const bmiValue = weightValue / (heightValue * heightValue); // calcul BMI

    result.value = Math.round(bmiValue); // adauga valoarea BMI in campul final pentru vizualizare rezultat
    
    if (bmiValue < 18.5) {
        answer.innerText = ' Danger of anorexia';
        answer.style.color = 'red';
        answer.style.fontWeight = 'bold';
    }
    if (bmiValue < 25 && bmiValue >= 18) {
        answer.innerHTML = ' You are fine';
        answer.style.color = 'red';
        answer.style.fontWeight = 'bold';
    }
    if (bmiValue < 30 && bmiValue >= 25) {
        answer.innerHTML = ' Try the gym';
        answer.style.color = 'red';
        answer.style.fontWeight = 'bold';
    }
    if (bmiValue > 30) {
        answer.innerHTML = ' Quit mcdonalds';
        answer.style.color = 'red';
        answer.style.fontWeight = 'bold';
    }

}

btn.addEventListener('click', bmi); // actiunea prin care se apeleaza logica




