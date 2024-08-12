import ServerInstance from '../Config/ServerInstance';

export const ForgotPassword = async (ReqBody) => {

  try {
    const axiosObject = await ServerInstance.post('/Forgot', ReqBody)
    return axiosObject.data.mail

  } catch (err) {
    return err.response.data.mail
  }
}