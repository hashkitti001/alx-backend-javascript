import { uploadPhoto, createUser } from './utils';

async function asyncUploader() {
  let res = {};

  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    res = { photo, user };
  } catch (e) {
    res = { photo: null, user: null };
  }
  return res;
}

export default asyncUploader;
