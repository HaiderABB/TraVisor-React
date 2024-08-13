import ServerInstance from '../Config/ServerInstance';

export const UserSignUp = async (ReqBody) => {

  try {
    const response = await ServerInstance.post('/Registration', ReqBody)
    return { network: true, reg: response.data.user && response.data.email };
  } catch (err) {
    if (err.code === "ERR_NETWORK") {
      return {
        network: false, reg: false
      }
    }
    return { network: true, reg: false }
  }
}