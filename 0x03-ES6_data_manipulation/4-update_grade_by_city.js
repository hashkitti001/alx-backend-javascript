function updateStudentGradeByCity(students, city, newGrade) {
  const defaultGrade = { grade: 'N/A' };
  return students
    .filter((student) => student.location === city)
    .map((student) => ({
      id: student.id,
      firstName: student.firstName,
      location: student.location,
      grade: (newGrade
        .filter((grade) => grade.studentId === student.id)
        .pop() || defaultGrade).grade,
    }));
}
export default updateStudentGradeByCity;
