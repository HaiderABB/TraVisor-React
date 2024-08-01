import ServerInstance from '../Config/ServerInstance';

export const UpdatePassword = async (ReqBody) => {

  try {
    const axiosObject = await ServerInstance.post('/Forgot', ReqBody)
    return { password: axiosObject.data.password }
  } catch (err) {
    return { password: err.response.data.password }
  }
}