import uploadPhoto from './5-photo-reject';

async function handleProfileSignup(firstName, lastName, fileName) {
  const p1 = {
    status: 'pending',
  };

  const p2 = {
    status: 'pending',
  };

  try {
    const signup = await signUpUser(firstName, lastName);

    p1.status = 'resolved';
    p1.value = signup;
  } catch (error) {
    p1.status = 'rejected';
    p1.value = error.toString();
  }

  try {
    const upload = await uploadPhoto(fileName);

    p2.status = 'resolved';
    p2.value = upload;
  } catch (error) {
    p2.status = 'rejected';
    p2.value = error.toString();
  }

  return [p1, p2];
}

export default handleProfileSignup;
