import ServerInstance from '../Config/ServerInstance';

export const ForgotPassword = async (ReqBody) => {

  try {
    const response = await ServerInstance.post('/Forgot', ReqBody)
    console.log(response.data);
    return response.data.mail;
  } catch (err) { console.log(err); }
}