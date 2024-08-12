import ServerInstance from '../Config/ServerInstance';

export const UpdatePassword = async (ReqBody) => {
  try {
    const axiosObject = await ServerInstance.put('/Forgot/Update', ReqBody)
    return { password: axiosObject.data.password }
  } catch (err) {
    return false
  }
}