import ServerInstance from '../Config/ServerInstance';

export const UserlogIn = async (ReqBody) => {

  try {
    const response = await ServerInstance.post('/Authentication', ReqBody)
    console.log(response.data);
    return response;
  } catch (err) { console.log(err); }
}