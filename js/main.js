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
getRandomIntFromInterval(3, 7);

  function stringLength(inputTxt, maxLength)
{
			if(inputTxt.length < maxLength)
			{
			return true;
			}

}
stringLength('Любой текст', 20);

