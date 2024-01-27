  
  let age=78
  let student=false

  if (age<10) {
    console.log('For children is free');
  }
  else if(student){
    const discount= 800*50/100
    const payable=800 - discount

    console.log(payable);

  }
  else if (age>=60) {
    const discount= 800*15/100
    const payable=800 - discount

    console.log(payable);
  }

  else{
    console.log('Rgular fee is 800');
  }