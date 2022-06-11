const search = (item,arr) => {
    let low = 0
    let hight = arr.length - 1
    while(low <= hight){
      let mid = Math.floor((low + hight) / 2)
      let guess = arr[mid]
      if(guess === item){
        return mid
      }else if (guess < item){
        low = mid + 1
      }else if (guess > item){
        hight = mid - 1
      }
      
    }
  }
  console.log(search(10,[1,2,3,4,5,6,7,8,9,10]))




//?email=greyewi%40gmail.com&name=%D0%A1%D0%B5%D1%80%D0%B3%D0%B5%D0%B9&age=5
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://gorest.co.in/public/v2/users',
  headers: { }
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });