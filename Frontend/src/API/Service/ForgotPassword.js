import ServerInstance from '../Config/ServerInstance';

export const ForgotPassword = async (ReqBody) => {

  try {
    const axiosObject = await ServerInstance.post('/Forgot', ReqBody)
    return {
      email: axiosObject.data.mail
    }
  } catch (err) {
    return {
      email: err.response.data.mail
    }
  }
}