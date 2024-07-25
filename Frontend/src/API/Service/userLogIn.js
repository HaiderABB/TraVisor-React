import AuthClient from '../Config/AuthClient';

export const UserlogIn = async (ReqBody) => {

  try {
    const response = await AuthClient.post('/Authentication', ReqBody)
    console.log(response.data);
    return response;
  } catch (err) { console.log(err); }
}