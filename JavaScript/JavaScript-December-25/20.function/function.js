investmentProblem(2000);

function investmentProblem(invest) {
  
  let month = 0;
  let fourthMonth = 0;

  while (invest < 3500) {
    month++;
    invest += invest * 0.1;
    if (month %4=== 0) {
      invest -= invest * 0.05;
      fourthMonth++;
    }
  }
  console.log("Suren ay :" + month);
  console.log("Son para :" + Math.floor(invest));
  console.log("Kayip sayisi :" + fourthMonth);
}
