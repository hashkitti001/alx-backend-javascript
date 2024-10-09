interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

var studentOne: Student = {
    firstName: 'Joanne',
    lastName: 'Meyers',
    age: 21,
    location: 'Poughkeepsie'
}

var studentTwo: Student = {
    firstName: 'Vogel',
    lastName: 'Dantzig',
    age: 43,
    location: 'Vienna'
}

var studentList: Array<Student> = [studentOne, studentTwo]
var stylesheet: string = "\n body { display: flex; flex-direction: row;} \n table { justify-content: center;}"
function displayStudents(students: Array<Student>): void{
    const table = document.createElement('table');
    const tableHead = document.createElement('thead');
    const headRow = document.createElement('tr');
    const tableBody = document.createElement('tbody');
    headRow.insertAdjacentHTML('beforeend', '<td>FirstName</td>')
    headRow.insertAdjacentHTML('beforeend', '<td>Location</td>');

    for (const student of students){
        const bodyRow = document.createElement('tr');
        bodyRow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`)
        bodyRow.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`)
        tableBody.insertAdjacentElement('beforeend', bodyRow);
    }
    table.insertAdjacentElement('beforeend', tableHead);
    table.insertAdjacentElement('beforeend', tableBody);
    document.body.insertAdjacentElement('beforeend', table);
}
displayStudents(studentList);
const styles = document.createElement('style');

styles.innerHTML = stylesheet;

document.title = 'Task 0'