/**
 * Represents a Holberton Course
 */
class HolbertonCourse {
  /**
  * Creates a new @see {@link HolbertonCourse}.
  *
  * @param {String} name - The name of the course.
  * @param {Number} length - How long the course is (in months).
  * @param {String[]} students - The names of students in the course.
  */
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  /**
     * Gets the name of the course
     */
  get name() {
    return this.name;
  }

  /**
     * Sets the name of the course
     * @param {value} value - The new value name should be set to
     */
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  /**
     * Gets the length of the course
     */
  get length() {
    return this._length;
  }

  /**
    * Sets the length of the course
    * @param {value} value - The new value length should be set to
    */
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = length;
  }

  /**
     * Gets the names of students in the course
     */
  get students() {
    return this._students;
  }

  /**
    * Sets the lists students of the course
    * @param {value} value - The new value students should be set to
    */
  set students(value) {
    if (!Array.isArray(value)) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}
export default HolbertonCourse;
