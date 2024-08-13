import ServerInstance from '../Config/ServerInstance';

export const ForgotPassword = async (ReqBody) => {

  try {
    const axiosObject = await ServerInstance.post('/Forgot', ReqBody)
    return { network: true, mail: axiosObject.data.mail }

  } catch (err) {
    if (err.code === "ERR_NETWORK") { return { network: false, mail: false } }
    return { network: true, mail: err.response.data.mail }
  }
}