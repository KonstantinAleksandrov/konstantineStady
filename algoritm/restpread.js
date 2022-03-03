'use strict'
const user = [
    {id: 1, name: "Max", surname: "Jonson", age: 22, relations: [2, 4]},
    {id: 2, name: "Max", surname: "Jonson", age: 22, relations: [1,3] },
    {id: 3, name: "Max", surname: "Jonson", age: 22, relations: [2] },
    {id: 4, name: "Max", surname: "Jonson", age: 22, relations: [1] }
]

function addNewChild(id,name,surname,age,...rest) {
    const NewChild = {
        id,
        name,
        surname,
        age,
        relations: rest
    }
        return [...user,NewChild]
}
const abc = addNewChild(5,'max','jonson',25,3,4);


// Написать ф-ю, которая по идентификатору изменяет поля объекта. (id, {...object}) => ?????

 function changechild (id,{...Object}) {
    for (let i = 0;i < user.length;i++) {
        if (user[i].id === id) {
            user[i] = {id:user[i].id,...Object}
            break
        }
    }
} 
changechild (2,{name: "Max2", surname: "Jonson2", age: 225, relations: [2, 4]})





const deliteChild = (value) =>{
    for (let i = 0; i < user.length;i++) {
        if(user[i].id === value){
            user.splice(i,1)
            break
        }
    }
}
deliteChild(5);


const returnCurrentRelations = (value) =>{
    let newArr = []
     for (let i = 0; i < user.length;i++){
        if(user[i].id === value){
            return getRelationsData(user[i].relations)
            /* for(let j = 0,arr = user[i].relations;j < arr.length;j++){
                for(let k = 0;k < user.length; k++){
                    if(user[k].id === arr[j]){
                        newArr.push(user[k])
                        break
                    }
                }
            }
            break */
        }
    }
    return newArr
}

const getRelationsData = (relations) =>{
    return relations.map((relation)=>{
        for(let k = 0;k < user.length; k++){
            if(user[k].id === relation){
                return user[k]
            }
        }
    })
}
let arr = returnCurrentRelations(2)


function getValue(){
    const [id, ...fieldList] = arguments
    console.log(fieldList)
    const results = []

    fieldList.forEach((field) => {
        for(let i = 0; i < user.length; i++) {
            if(user[i].id === id) {
                results.push({[field]: user[i][field]})
            }
        }
    })
    return results

}
console.log(getValue(1, 'name', 'surname', 'relations'))
