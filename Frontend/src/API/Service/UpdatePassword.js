import ServerInstance from '../Config/ServerInstance';

export const UpdatePassword = async (ReqBody) => {

  try {
    const response = await ServerInstance.post('/Forgot', ReqBody)
    console.log(response.data);
    return response.data.password;
  } catch (err) { console.log(err); }
}