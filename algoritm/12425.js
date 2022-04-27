const search = (item,arr) =>{
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