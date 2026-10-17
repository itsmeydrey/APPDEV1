import React, { useState } from 'react';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  const [currentScreen, setCurrentScreen] = useState('login');

  return (
    <>
      {currentScreen === 'login' ? (
        <Login onSwitch={() => setCurrentScreen('signup')} />
      ) : (
        <SignUp onSwitch={() => setCurrentScreen('login')} />
      )}
    </>
  );
}

export default App;