class Person {
    constructor(fName, age, gender, qualification, skills, phoneNo, mail) {
        this.fName = fName;
        this.age = age;
        this.gender = gender;
        this.mail = mail;
        this.phoneNo = phoneNo;
        this.qualification = qualification;
        this.skills = skills
    }
    getPersonDetails() {
        return `Hello, I am ${this.fName}. I have completed ${this.qualification} in the year 2017. Currently i am learning ${this.skills}. I am looking for a great oppurtunity in your organisation. Feel free to contact me ${this.phoneNo} and through mail ${this.mail}. Thank you!`
    }
}
var p1 = new Person("priya", "25", "female", "B.E", "Javascript", "1234567890", "sdfgh@gamil.com")
console.log(p1.getPersonDetails());