import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Spinner from '../../Components/Common/Spinner';
import ServerInstance from '../../API/Config/ServerInstance';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const SetPassword = () => {

  const [token, setToken] = useState(false);
  const [loading, setLoading] = useState(true);
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  const query = useQuery();
  const jwt_token = query.get('id');
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);

    const postData = async () => {

      try {
        const response = await ServerInstance.post('/Validate', { jwt_token })
        setToken(response.data.authenticated && response.data.token);
      }
      catch (err) {
        setToken(false);
      }
    }
    postData();

  }, [jwt_token])

  const load = () => {
    if (token) {
      return <Outlet />
    }
    else
      navigate('');
  }

  return (
    <>
      {loading ? <Spinner /> : load()}
    </>
  )

};

export default SetPassword;
