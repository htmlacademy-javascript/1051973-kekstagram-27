function getRandomIntFromInterval(minNumber, maxNumber) {
  if (minNumber < 0 || maxNumber < 0) {
    return NaN;
  }
minNumber = Math.floor(minNumber);
maxNumber = Math.ceil(maxNumber);
 if (minNumber === maxNumber) {
  return minNumber;
 }
 if (maxNumber > minNumber){
    return Math.floor(Math.random() * (minNumber - maxNumber + 1) + maxNumber);
  }
  else {
    return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
  }

  }
  const rndInt = getRandomIntFromInterval(3, 7)
  console.log(rndInt);


  function stringLength(inputTxt, maxLength)
{
			if(inputTxt.length > maxLength)
			{
			return false;
			}
			else
			{
			return true;
			}
}
const inputTxt = 'dfdsfsdfsfsd';
const maxLength = 20;
const stringL = stringLength(inputTxt, maxLength);
console.log(stringL);
