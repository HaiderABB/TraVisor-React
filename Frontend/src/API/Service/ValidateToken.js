import ServerInstance from '../Config/ServerInstance';

export const ValidateToken = async (ReqBody) => {

  try {
    const response = await ServerInstance.post('/Validate', ReqBody)
    return (response.data.authenticated && response.data.token);
  } catch (err) { return false }
}