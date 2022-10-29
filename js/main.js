
const MIN_PHOTO_NUMBER = 1;
const PHOTO_OBJECTS_NUMBER = 25;
const DESCRIPTIONS = [
  'beach',
  'goToTheBeach',
  'sea',
  'girlwithTits',
  'soup',
  'blackCar',
  'strawberry',
  'juice',
  'airplane',
  'shoes',
  'road',
  'whiteCar',
  'salad',
  'sushiCat',
  'uggBoots',
  'sky',
  'choir',
  'redCar',
  'slippers',
  'palmTrees',
  'dinner',
  'sunset',
  'crab',
  'concert',
  'bigCar',
];
const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const NAME = [
  `Арсений`,
  `Ксения`,
  `Владимир`,
  `Артем`,
  `Николай`,
  `Алексей`,
  `Иван`,
  `Александра`,
  `Роман`,
  `Петр`,
  `Василий`,
  `Александр`,
  `Елизавета`,
];


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


  function stringLength(inputTxt, maxLength)
{
if(inputTxt.length < maxLength)
{
return true;
}

}
stringLength('Любой текст', 20);





 function getPhoto(i) {
  return {
    id: i,
    url: `photos/${getRandomIntFromInterval(MIN_PHOTO_NUMBER, PHOTO_OBJECTS_NUMBER)}.jpg`,
    description: DESCRIPTIONS[getRandomIntFromInterval(0, DESCRIPTIONS.length - 1)],
    likes: getRandomIntFromInterval(15,200),
    comments: {
      id: getRandomIntFromInterval(15,1000),
      avatar: `img/avatar-${getRandomIntFromInterval(1,6)}.svg`,
      message: COMMENTS[getRandomIntFromInterval(0, COMMENTS.length - 1)],
      name: NAME[getRandomIntFromInterval(0, NAME.length - 1)],
    },
  }
 }

function getPhotosObjects(photoNumber) {
  const photosArray = [];
  for (let i = 1; i <= photoNumber; i++) {
    photosArray.push(getPhoto(i));
  }
  return photosArray;
}


console.log(getPhotosObjects (PHOTO_OBJECTS_NUMBER));

