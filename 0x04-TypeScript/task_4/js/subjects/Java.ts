namespace Subjects {
    export interface Teacher {
        experienceTeachingJava?: number
    }

    export class Java extends Subjects.Subject {
        getRequirements(): string {
            return `Here is the list of requirements for Java`
        }
        getAvailableTeachers(): string {
            if (!this.teacher) {
                return `No available teacher`
            }
            return `Available Teacher: ${this.teacher.firstName}`
        }
    }
}