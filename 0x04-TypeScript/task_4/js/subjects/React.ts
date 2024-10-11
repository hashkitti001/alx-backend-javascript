namespace Subjects {
    export interface Teacher {
        experienceTeachingReact?: number;
    }
    export class React extends Subjects.Subject {
        getRequirements(): string {
            return `Here is the list of requirements for React`
        }
        getAvailableTeachers(): string {
            if (!this.teacher || this.teacher.experienceTeachingReact <= 0) {
                return `No available teacher`
            }
            return `Available Teacher ${this.teacher.firstName}`
        }
    }
}
