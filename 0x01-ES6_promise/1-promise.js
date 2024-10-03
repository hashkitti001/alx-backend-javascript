export default function getResponseFromAPI(success) {
  return new Promise((res, rej) => {
    if (success) {
      return res({
        status: 200,
        body: 'Success',
      });
    }
    rej(new Error('The fake API is not working currently'));
  });
}
