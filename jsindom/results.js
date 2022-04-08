'use strict'
// создает список из дерева вложенных обьектов 2мя способами
/* let data = {
    "Рыбы": {
      "форель": {},
      "лосось": {}
    },
  
    "Деревья": {
      "Огромные": {
        "секвойя": {},
        "дуб": {}
      },
      "Цветковые": {
        "яблоня": {
            'красная' : {},
            'зеленая':{},
        },
        "магнолия": {}
      }
    }
  };



  
   function createTreeText(obj){
      let li = ''
      let ul;
      for(let key in obj) {
          li += '<li>' + key + createTreeText(obj[key]) + '</li>' 
      }
      if(li){
          ul = '<ul>' + li + '</ul>'
      }
      return ul || ''
  }
  container.innerHTML = createTreeText(data) 


  const createDerevo = (obj) =>{
      let ul = document.createElement('ul')
      for(let key in obj) {
          let li = document.createElement('li')
          li.textContent = key
          li.append(createDerevo(obj[key]))
          ul.append(li)
      }
      if(ul.innerHTML){
          return ul
      }else return ''
  }
  container.append(createDerevo(data))  */


  ///////////////////////////////////////////////////////////////////////
