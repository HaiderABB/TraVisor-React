import AuthClient from '../Config/AuthClient';

export const UserSignUp = async (ReqBody) => {

  try {
    const response = await AuthClient.post('/Registration', ReqBody)
    // console.log(response);
    console.log(response.data);
  } catch (err) { console.log(err); }
}