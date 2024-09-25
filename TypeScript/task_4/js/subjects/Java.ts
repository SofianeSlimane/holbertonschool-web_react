namespace Subjects {
    
    export interface Teacher {
        experienceTeachingJava?: number
    }
    class Java extends Subject {
        getRequirements(){
            return "Here is the list of requirements for React";
        }

        getAvailableTeacher(){
            if (!this.teacher.experienceTeachingJava){
                return "No available teacher";
            }
            return `Available Teacher ${this.teacher.firstName}`
    }
}
}