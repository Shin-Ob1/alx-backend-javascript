import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const n1 = uploadPhoto();
  const n2 = createUser();

  return Promise.all([n1, n2]).then((value) => {
    console.log(`${value[0].body} ${value[1].firstName} ${value[1].lastName}`);
  })
    .catch(() => { console.log('Signup system offline'); });
}
