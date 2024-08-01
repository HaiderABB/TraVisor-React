import ServerInstance from '../Config/ServerInstance';

export const UserSignUp = async (ReqBody) => {

  try {
    const response = await ServerInstance.post('/Registration', ReqBody)
    return response.data.user;
  } catch (err) { return false }
}