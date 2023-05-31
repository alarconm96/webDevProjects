function getPerson(num){
    switch (num) {
        case 1:
            document.getElementById("person-fname").innerText = person1.firstName;
            document.getElementById("person-lname").innerText = person1.lastName;
            document.getElementById("person-id").innerText = person1.id;
            break;
        case 2:
            document.getElementById("person-fname").innerText = person2.firstName;
            document.getElementById("person-lname").innerText = person2.lastName;
            document.getElementById("person-id").innerText = person2.id;
            break;
        case 3:
            document.getElementById("person-fname").innerText = person3.firstName;
            document.getElementById("person-lname").innerText = person3.lastName;
            document.getElementById("person-id").innerText = person3.id;
            break;
        default:
            document.getElementById("person-fname").innerText = person0.firstName;
            document.getElementById("person-lname").innerText = person0.lastName;
            document.getElementById("person-id").innerText = person0.id;
            break;
    }
}

const person0 = {
    firstName: "John",
    lastName: "Smith",
    id: 000000000,
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
}

const person1 = {
    firstName: "Marco",
    lastName: "Alarcon",
    id: 123456789,
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
}

const person2 = {
    firstName: "Monica",
    lastName: "Alarcon",
    id: 987654321,
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
}

const person3 = {
    firstName: "Gema",
    lastName: "Najarro",
    id: 192837465,
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
}