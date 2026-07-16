class schoolSystem {
    static studentNum = 0
    constructor(){
        this.users = []
        
    }

    generateMatNo(faculty){
        schoolSystem.studentNum++
        const year = new Date().getFullYear();
        const matno = String(schoolSystem.studentNum).padStart(3, '0')
        return `UJ/${year}/${faculty}/${matno}`
    }

     isValid(email){
        return email.endsWith('@gmail.com')
    }

    classLevels(level){
            let validLevel = level>=100 && level<=500 && level % 100 ===0

            return validLevel


}

studentSignup(fn, ln, email, faculty, password, level){
    this.email = this.isValid(email);
    const validLevel = this.classLevels(level);

     if(!fn || !ln || !email || !faculty || !password || !level){
            return 'invalid signup credentials'
        }

    if(!validLevel || !this.email){
            return 'invalid level or invalid email'
        }
        
        const studentID = this.generateMatNo(faculty)
        this.users.push({
            fn,
            ln,
            email,
            faculty,
            password,
            level,
            studentID
        })

        return `Your ID is ${studentID}`

    }

    studentLogin(email, password){

        const user = this.users.find(user => user.email === email)
        

        if(!user){
            return 'unrecognized email'
        }

        if(user.password !== password){
            return 'unrecognized password'
        }



        return 'login successful'

    }
}

class staffs extends schoolSystem {
    static staffID = 0
    constructor(){
        super()
        this.Newstaff = []
    }
    generateID(faculty){
        const id = staffs.staffID++
        const staffYear = new Date().getFullYear()
        const specialID = String(id).padStart(2, '0')

        return `UJ - ${staffYear} - ${specialID}`
    }

    staffSignup(name, password, level, faculty){
        const ID = this.generateID(faculty)
        const validLevel = this.classLevels(level)
        if(!name || !password || !level || !faculty){
            return 'invalid login credentials'
        }
        if(!validLevel){
            return 'invalid level'
        }

        this.Newstaff.push({
            name,
            password,
            level,
            faculty,
            ID
        })

        console.log(`Mr/Mrs ${name} is assigned to teach ${level} level`);
        return `Your ID is ${ID}`
        
    }

    staffLogin(ID, password){
        const staff = this.Newstaff.find(staff => staff.ID === ID)

        if(!staff){
            return 'this ID does not exist'
        }
        if(staff.password !== password){
            return 'wrong password'
        }

        

        return 'login succeessful'

    }
}
   
const student = new schoolSystem()
const staff = new staffs()

// console.log(staff.staffSignup('Caleb', '5678', 200, 'NS'));
// console.log(staff.staffLogin('UJ - 2026 - 01', '5678' ));

// console.log(staff.staffSignup('John', "1234", 500, 'MS'));
// console.log(staff.staffLogin('UJ - 2026 - 02', "1234" ));



// console.log(student1);
// console.log(student1.isValid('philip@gmail.com'));
// console.log(student.studentSignup('Doris', 'Odinkaru', 'odinkarudoris@gmail.com', 'NS', '1234', 300));

console.log(student.studentSignup('Josh', 'Fafa', 'fafa@gmail.com', 'NS', '3214', 200));
// console.log(student1.identity());
// console.log(student1.classLevels(10));
console.log(student.studentLogin('fafa@gmail.com', '3214'));









