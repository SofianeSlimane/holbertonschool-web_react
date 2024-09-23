interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [propName: string]: any;
}

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };
  
  console.log(teacher3);


interface Directors extends Teacher {
    numberOfReports: number,
}

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
  console.log(director1);





  interface printTeacherFunction{
    printTeacher(firstName: string, lastName: string): string;
  }


  function printTeacher(firstName: string, lastName: string): string {
    return `${firstName[0]}. ${lastName}`;

  }

  console.log(printTeacher("Dark", "Soso"));



interface StudentClassInterface {
    
    firstName: string,
    lastName: string;
    workOnHomework(): string,
    displayName(): string,



}
  class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework(){
         return "Currently working";
    }

    displayName(){
        return this.firstName;
    }
  }

  const studClass1 = new StudentClass("C24", "LaTeam");
  console.log(studClass1); 