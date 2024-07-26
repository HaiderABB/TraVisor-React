import AuthClient from '../Config/AuthClient';

export const ForgotPassword = async (ReqBody) => {

  try {
    const response = await AuthClient.post('/Forgot', ReqBody)
    console.log(response.data);
    return response.data.mail;
  } catch (err) { console.log(err); }
}