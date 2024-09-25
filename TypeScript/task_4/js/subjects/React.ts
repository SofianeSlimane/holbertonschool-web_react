namespace Subjects {
    export interface Teacher {
        experienceTeachingReact?: number
    }
    
    class React extends Subject {
        getRequirements(){
            return "Here is the list of requirements for React";
        }

        getAvailableTeacher(){
            if (!this.teacher.experienceTeachingC){
                return "No available teacher";
            }
            return `Available Teacher ${this.teacher.firstName}`
        }
    }
}