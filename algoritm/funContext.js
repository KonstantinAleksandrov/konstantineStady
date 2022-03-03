'use strict'
/* const user = {id: 1, name: "Max", surname: "Jonson", age: 22, relations: [2, 4]}

function User(defaultProps) {
    this.user = {...defaultProps} // Объект класса User

    this.setNewProps = function(data){ // Метод класса User
        this.user = {...this.user, ...data}
    }

    this.getUser = function(){
        return this.user
    }

    this.setRelations = function(newRelations){
        this.user = {...this.user, relations : newRelations}
    }

} */


/* function UserList(defaultData){
    this.users = [...defaultData]

    this.setNewChild = function(newUser) {
        this.users = [...this.users, newUser]
    }

    this.getUsers = function(){
        return this.users
    }
    this.changeChild = function(id,{...obj}) {

    }
} */


/* const myUser = new User(user)
myUser.setNewProps({family: "big", job: "designer"})
myUser.setRelations([1,2])
console.log(myUser.getUser())
 */

/* const myUserList = new UserList([])
 myUserList.setNewChild(myUser) 
//console.log(myUserList.getUsers()[0].getUser())
myUserList.setNewChild()
console.log(myUserList.getUsers()) */




const persons = [
    {id: 1, name: "Max", surname: "Jonson", age: 22, relations: [2, 4]},
    {id: 2, name: "john", surname: "Smith", age: 26, relations: [1,3]},
    {id: 3, name: "Keny", surname: "Pit", age: 31, relations: [2]},
    {id: 4, name: "Mary", surname: "Jane", age: 21, relations: [2,3]}
]

function User(defaultProps) {
    this.user = {...defaultProps}

    this.setNewProps = function (data) {
        this.user = {...this.user, ...data}
    }

    this.setRelations = function(newRelations){
        this.user = {...this.user, relations : newRelations}
    }

    this.getUser = function(){
        return this.user
    }

    this.changeData = function(obj) {
        this.user = {id : this.user.id,...obj}
    }
    this.getValues = function(values) {
        const results = []
        values.forEach((item) =>{
            results.push({[item] : this.user[item]})
        })
        return results
    }
}


function UserList(defaultData) {
    this.users = [...defaultData]

    this.setNewUsers = function(arr) {
        const newUsers = []
        for(let i = 0; i < arr.length;i++){
            const myUser = new User(arr[i])
            newUsers.push(myUser)
        }
        this.users = [...this.users, ...newUsers]
    }

    this.changeUserData = function(id,{...obj}) {
        for (let i = 0;i < this.users.length; i++){
             if (this.users[i].user.id === id) {
                this.users[i].changeData(obj)
                break
            } 
        }
    }

    this.getList = function() {
        return this.users
    }

    this.addNewPerson = function(arr,{...obj}) {
        arr.push(obj)
        myUserList.setNewUsers(persons)
    }


    this.deletePerson = function(arr,id) {
        for(let i = 0; i < arr.length;i++) {
            if (arr[i].id === id) {
                arr.splice(i,1)
                break
            }
        }
        myUserList.setNewUsers(persons)
    }

    this.getRelations = function(arr) {
        return arr.map((item) =>{
            for(let j = 0; j < this.users.length;j++) {
                if (this.users[j].user.id === item) {
                    return this.users[j].user
                }
            }
        })
    }

    this.showRelations = function(id) {
         for (let i = 0;i < this.users.length; i++) {
            if (this.users[i].user.id === id) {
                  return this.getRelations(this.users[i].user.relations) 
            }
        } 
    }

    this.showValue = function(id,...values) {
        for(let i = 0; i < this.users.length; i ++) {
            if (this.users[i].user.id === id) {
                 return this.users[i].getValues(values) 
            }
        }
    }

}


const myUserList = new UserList([])
//myUserList.addNewPerson(persons,{id: 5, name: "Elena", surname: "beautiful", age: 17, relations: [1,2]}) 
 myUserList.setNewUsers(persons) 
console.log(myUserList.showValue(4,'name','age')) 


