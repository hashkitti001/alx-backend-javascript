import ClassRoom from './0-classroom';
/**
 * Creates an array of {@link ClassRoom}s with a specific size.
 * @returns An array of @link ClassRoom s
 */
function initializeRooms() {
  const sm = new ClassRoom(19);
  const md = new ClassRoom(20);
  const lg = new ClassRoom(34);

  const result = [sm, md, lg];
  return result;
}

export default initializeRooms;
