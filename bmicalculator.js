window.onload = () => {
    let button = document.querySelector("#btn");
    button.addEventListener("click", calculatebmi);
}

function calculatebmi() {
    let height = document.getElementById("height").value
    let weight = document.getElementById("weight").value
    let total = document.getElementById("total");

   
    let bmi = (weight / ((height * height) / 10000)).toFixed(1);

    if (bmi < 18.6) {
        total.innerHTML = `Under Weight: <span>${bmi}</span>`;
    } 
    else if (bmi >= 18.6 && bmi < 24.9) {
        total.innerHTML = `Normal: <span>${bmi}</span>`;
    } 
    
    else {
        total.innerHTML = `Over Weight: <span>${bmi}</span>`;
    }
}

