import React, { useEffect } from 'react'
import { Navigate, useNavigate } from "react-router-dom"
import { useContext } from 'react'
import { AuthContext } from '../../Contexts/AuthContext'


const ProtectedRoutes = ({ children }) => {

  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated, navigate])

  if (!isAuthenticated) {
    return null
  }

  return isAuthenticated ? children : null;

}

export default ProtectedRoutes
