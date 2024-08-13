import ServerInstance from '../Config/ServerInstance';

export const UserlogIn = async (ReqBody) => {

  try {
    const axiosObject = await ServerInstance.post('/Authentication', ReqBody)
    return {
      network: true, email: axiosObject.data.email, password: axiosObject.data.password, username: axiosObject.data.username
    }
  }
  catch (err) {
    if (err.code === "ERR_NETWORK") { return { network: false, email: false, password: false, username: false } }
    return {
      network: true, email: err.response.data.email, password: err.response.data.password, username: false
    }
  }
}