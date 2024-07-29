import ServerInstance from '../Config/ServerInstance';

export const UserSignUp = async (ReqBody) => {

  try {
    const response = await ServerInstance.post('/Registration', ReqBody)
    console.log(response.data);
    return response.data.user;
  } catch (err) { console.log(err); }
}