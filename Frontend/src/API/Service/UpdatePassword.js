import ServerInstance from '../Config/ServerInstance';

export const UpdatePassword = async (ReqBody) => {
  try {
    const axiosObject = await ServerInstance.put('/Forgot/Update', ReqBody)
    return { network: true, password: axiosObject.data.password }
  } catch (err) {

    if (err.code === "ERR_NETWORK") {
      return { network: false, password: false }
    }

    else {
      return {
        network: true, password: false
      }
    }
  }
}