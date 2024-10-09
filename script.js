const calculateBtn = document.getElementById('calculate');

calculateBtn.addEventListener('click', function () {
    let weight = document.querySelector('#weight').value;
    let height = document.querySelector('#height').value;
    if (isNaN(weight) && isNaN(height)) {
      alert('Please fill out the input fields.');
      return false;
  } else if (isNaN(weight)) {
      alert('Please enter your weight.');
      return false;
  } else if (isNaN(height)) {
      alert('Please enter your height.');
      return false;
  }
  
  let BMI = weight / ((height/100) ** 2);
  BMI = BMI.toFixed(2);

  let result = document.querySelector('#result');
  result.innerText = BMI;
  console.log(BMI);
  
 
  
 let status = '';
 if (BMI < 18.5) {
    status = "Underweight";
 }
 if (BMI >= 18.5 && BMI < 25) {
    status = "Normal";
 }
 if (BMI >= 25 && BMI < 30) {
    status = "Overweight";
 }
 if (BMI >= 30 && BMI < 35) {
    status = "Moderately Obese";
 }
 if (BMI >= 35 && BMI < 40) {
    status = "Severely Obese";
 }
 if (BMI >= 40) {
    status = "Morbidly Obese";
 }
  let comment = document.querySelector('.comment');
  comment.innerHTML = `You are : <span id="comment">${status}</span>`;

});




