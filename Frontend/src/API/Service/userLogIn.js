import ServerInstance from '../Config/ServerInstance';

export const UserlogIn = async (ReqBody) => {

  try {
    const axiosObject = await ServerInstance.post('/Authentication', ReqBody)
    console.log(axiosObject)
    return {
      Email: axiosObject.data.Email, Password: axiosObject.data.Password
    }
  }
  catch (err) {
    console.log(err.response.data.Email)
    return {
      Email: err.response.data.Email, Password: err.response.data.Password
    }
  }
}