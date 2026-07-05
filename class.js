// class student {
//     constructor(name, score) {
//         this.name = name
//         this.score = score
//     }
//     getGrade (){
//         if (this.score >= 70 && this.score <= 100){
//             return ('A')
//         }else if(this.score >= 60 && this.score < 70){
//             return ('B');
            
//         }else if(this.score >= 50 && this.score < 60){
//             return ('C');
            
//         }else if(this.score >= 40 && this.score < 50){
//             return ('D');
            
//         }else if(this.score < 40) {
//             return ('F');
            
//         }else {
//             return ('no score');
            
//         }
//     }
//     isPass (){
//         if(this.score > 40 && this.score < 100){
//             return true
//         }else if(this.score < 40){
//             return false
//         }else {
//             return 'no score'
//         }
//     }
    
    
// }
// const student1 = new student("Doris",  80)
// const student2 = new student("John", 30)

// console.log(student2.getGrade());
// console.log(student2.isPass());




// class person {
//     #age;
//     constructor(name, age){
//         this.name = name
//         this.#age = age
//     }
//     get age(){
//         return this.#age
//     }
//     set age(number){
//         if(number< 0 || number > 100){
//             console.log('invalid age')
//             // this._age = 0
//         }else {
//             this.#age = number

//     }
// }
// }
// const person1 = new person('Doris', 1)
// person1.age = -1
// console.log(person1.age);





