const person1 = {
    firstName: "Marco",
    lastName: "Alarcon",
    id: 123456789,
    fullName: function(){
        return firstName + " " + this.lastName;
    }
}