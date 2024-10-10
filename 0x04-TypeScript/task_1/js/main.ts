interface Teacher  {
    readonly firstName: string
    readonly lastName: string
    fullTimeEmployee: boolean
    yearsOfExperience?: number
    location: string
    [index:string]: any
}


interface Directors extends Teacher {
    numberOfTeacher: number
}

function printTeacher(firstName: string, lastName: string): string{
    return `${firstName[0]}. ${lastName}`
}
interface printTeacherFunction {
    (firstName: string, lastName: string): string
}

interface IStudentClassConstructor {
    new (firstName: string, lastName: string): IStudentClass
}
interface IStudentClass {
    workOnHomework(): string,
    displayName(): string
}

export class StudentClass implements IStudentClass {
    private _firstName!: string
    private _lastName!: string

    constructor(firstName: string, lastName: string){
        this._firstName = firstName
        this._lastName = lastName
    }
    workOnHomework(): string {
        return 'Currently working'
    }
    displayName(): string {
        return this._firstName
    }
}
export default Teacher