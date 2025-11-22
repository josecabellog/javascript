

// metodos en JavaScript

const person = {
    name: "John",
    lastName: "Doe",
    age: 30,
    city: "New York",
    fullName: function() {
        return this.name + " " + this.lastName;
    },
    fullInfo: function(){
        return "This is" + " " + this.name + " " + this.lastName + ", and he is" +" " + this.age;
    }
}

console.log(person.fullInfo())