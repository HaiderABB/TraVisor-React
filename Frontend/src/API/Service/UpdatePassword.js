import AuthClient from '../Config/AuthClient';

export const UpdatePassword = async (ReqBody) => {

  try {
    const response = await AuthClient.post('/Forgot', ReqBody)
    console.log(response.data);
    return response.data.password;
  } catch (err) { console.log(err); }
}