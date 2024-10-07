function getStudentsByLocation(list, city) {
  return list.filter((item) => item.location === city);
}
export default getStudentsByLocation;
