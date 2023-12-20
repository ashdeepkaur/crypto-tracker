import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner/Banner';
import CoinsTable from '../components/CoinsTable';
import Login from '../components/Login';
import { Button } from '@material-ui/core';
import Intro from '../components/Intro';

const Homepage = () => {
  const [_, setUser] = useState(false);
  const [showCoinsTable, setShowCoinsTable] = useState(false);
  const isLoggedIn = localStorage.getItem('logged-in');

  useEffect(() => {
    if (isLoggedIn) {
      setUser(true);
    }
  }, [isLoggedIn]);

  const onLoginSuccess = () => {
    setUser(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('logged-in');
    setUser(false);
  };

  const handleShowCoinsTable = () => {
    setShowCoinsTable(true);
  };

  return isLoggedIn ? (
    <>
      <Banner />
      {showCoinsTable ? (
        <CoinsTable />
      ) : (
        <Intro handleShowCoinsTable={handleShowCoinsTable} />
      )}
      <Button
        id='logout-btn'
        onClick={handleLogout}
        style={{
          backgroundColor: 'red',
          color: 'white',
          position: 'absolute',
          top: 10,
          right: 10,
        }}
      >
        Logout
      </Button>
    </>
  ) : (
    <Login onLoginSuccess={onLoginSuccess} />
  );
};

export default Homepage;
