function personalInfo(){
    const person = '{"name": "John", "age": 30, "location": "New York" }'
    const personInfo = JSON.parse(person)
     console.log(person);
    
    return `${personInfo.name} is ${personInfo.age} and lives in ${personInfo.location}`
}

console.log(personalInfo());
