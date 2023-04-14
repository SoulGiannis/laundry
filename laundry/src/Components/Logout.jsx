import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

export default function Logout() {
  const history = useHistory();
  const logout = async () => {
    try {
      const res = await fetch('/logout', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      });
      if (res.status === 401 || !res) {
        window.alert('Please logout later');
      } else {
        history.push('/login');
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    logout();
  }, []);

  return <div></div>;
}
