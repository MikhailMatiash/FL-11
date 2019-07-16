const inputData = [
    {
      '_id': '5b5e3168c6bf40f2c1235cd6',
      'index': 0,
      'birthday': '2016-03-18T00:00:00',
      'eyeColor': 'green',
      'name': 'Stein',
      'favoriteFruit': 'apple'
    },
    {
      '_id': '5b5e3168e328c0d72e4f27d8',
      'index': 1,
      'birthday': '1991-02-11T00:00:00',
      'eyeColor': 'blue',
      'name': 'Cortez',
      'favoriteFruit': 'strawberry'
    },
    {
      '_id': '5b5e3168cc79132b631c666a',
      'index': 2,
      'birthday': '1984-04-17T00:00:00',
      'eyeColor': 'blue',
      'name': 'Suzette',
      'favoriteFruit': 'apple'
    },
    {
      '_id': '5b5e31682093adcc6cd0dde5',
      'index': 3,
      'birthday': '1994-04-17T00:00:00',
      'eyeColor': 'green',
      'name': 'George',
      'favoriteFruit': 'banana'
    }
]

function getNumbers(str) {
  let a = str.split('');
  let res = [];
  for (let i = 0; i < a.length; i++) {
    if (Number(a[i])) {
      res.push(+a[i]);
    }
  }
  return res;
}

function findTypes() {
  let res = {};
  for (let i = 0; i < arguments.length; i++) {
    let type = typeof arguments[i];
    if (res.hasOwnProperty(type)) {
      res[type] += 1;
    } else {
      res[type] = 1;
    }
  }
  return res;
}

function executeforEach(arr, funct) {
  for (let i = 0; i < arr.length; i++) {
    funct(arr[i]);
  }
}

function mapArray(arr, funct) {
  let res = [];
  executeforEach(arr, function (el) {
    res.push(funct(el));
  });
  return res;
}

function filterArray(arr, funct) {
  let res = [];
  executeforEach(arr, function(el) {
    if (funct(el)) {
      res.push(el);
    }
  });
  return res;
}

function showFormattedDate(date) {
  const MONTHS_LETTER = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];
  let dat = date.getDate();
  let monthsLetter = MONTHS_LETTER[date.getMonth()];
  let datGetFulYear = date.getFullYear();
  return `Date: ${dat} of ${monthsLetter}, ${datGetFulYear}`;
}

function canConvertToDate(str) {
  let date = new Date(str);
  date = date.toDateString();
  return date !== 'Invalid Date';
}

function daysBetween(date1, date2) {
  let difference = date2.getTime() - date1.getTime();
  let msInDay = 86400000;
  let res = Math.abs(Math.round(difference / msInDay));
  return res;
}

function getAmountOfAdultPeople(data) {
  let adult = 0;
 filterArray(data, user => user.age > 18 && ++adult);
 return adult;
}

function keys(obj) {
  let res = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      res.push(key);
    }
  }
  return res;
}

function values(obj) {
  let res = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      res.push(obj[key]);
    }
  }
  return res;
}
