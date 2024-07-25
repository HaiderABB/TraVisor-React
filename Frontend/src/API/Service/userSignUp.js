import AuthClient from '../Config/AuthClient';

export const UserSignUp = async (ReqBody) => {

  try {
    const response = await AuthClient.post('/Registration', ReqBody)
    console.log(response.data);
    return response.data.user;
  } catch (err) { console.log(err); }
}