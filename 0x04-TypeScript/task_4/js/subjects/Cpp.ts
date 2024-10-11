namespace Subjects {
    export interface Teacher {
        experienceTeachingC?: number
    }
   
    export class Cpp extends Subject {
        get getRequirements(): string{
            return 'Here is the list of requirement for Cpp'
        }

        get getAvailableTeacher(): string {
            if(!this.teacher || this.teacher.experienceTeachingC <= 0){
                return 'No available teacher'
            }
            return `Available Teacher ${this.teacher}`
        }
    }
}