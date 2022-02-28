const user = {id: 1, name: "Max", surname: "Jonson", age: 22, relations: [2, 4]}

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
}

function UserList(defaultData){
    this.users = [...defaultData]

    this.setNewChild = function(newUser) {
        this.users = [...this.users, newUser]
    }

    this.getUsers = function(){
        return this.users
    }
}


const myUser = new User(user)
myUser.setNewProps({family: "big", job: "designer"})
myUser.setRelations([1,2])
///console.log(myUser.getAllUsers(), user)


const myUserList = new UserList([])
myUserList.setNewChild(myUser)
console.log(myUserList.getUsers()[0].getUser())

