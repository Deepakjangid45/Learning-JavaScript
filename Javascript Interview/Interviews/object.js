//.1 create on object reperesting a car with propreties like Make model and year write a function to display all the proprties of the car
/**
 * 
let obj = {
    car: "name",
    model: "Maruti",
    year: 2023,
};
console.log(ab)
*/

//.2 define an object that represent a student infomaction inculading name,age,grade impliment a method to update the student grade(Class)
/**
 * 
class Student {
    constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
}
  updateGrade(newGrade) {
    this.grade = newGrade;
  }
}

const student1 = new Student("deepak", 1, 10);
student1.updateGrade(100);
console.log(student1.name);
console.log(student1.age);
console.log(student1.grade);
*/

//.3
/**
 * 
const student = {
    name: "deepak",
    age: 25,
    grade: 85,
    upGrade: function (newGrade) {
        this.grade = newGrade;
    },
};

student.upGrade(100);
console.log(student.grade);
*/

//.4 count Lengh of object
/**
 * 
const student = {
    name: "deepak",
    age: 25,
    grade: 85,
};
let count = 0;
for (let key in student) {
  count += 1;
//   console.log(key);
}
console.log(count);
*/

//.5 developer a program that accpatc an objeact and a property name and checks if the object has the specified proprety
/**
 * 
function ab(obj, propertyName) {
    for (let key in obj) {
        if (value == propertyName) {
            return true;
    } else {
      return false;
    }
}
}

let obj = {
    name: "deepak",
    class: 10,
  school: "AMHS FZK",
};
let propertyName = "deepak";
console.log(ab(obj, propertyName));

*/

//.6
/**
 * 
let obj = {
    name: "deepak",
    class: 10,
    school: "AMHS FZK",
};

console.log(obj['name'])
*/

//.7
/**
 * 
function ab(obj, property) {
    return obj.hasOwnProperty(hasOwnProperty);
}
let obj = {
  name: "deepak",
  class: 10,
  school: "AMHS FZK",
};
let property = "name";

console.log(ab(obj, property))

*/

//.8 
