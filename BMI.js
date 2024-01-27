let bmi=58/(91)^2
console.log(bmi);



if(bmi<18.5){
  console.log('YOU ARE UNDERWEIGHT');
}
else if(bmi>=18.5 && bmi<=24.5){
  console.log('YOU ARE NORMAL');
}
else if (bmi>=25 && bmi<=29.9) {
    console.log('you are overweight');
}

else{
    console.log('you are obese.');
}

