import { useEffect, useState, useContext } from 'react';
import './App.css'
import SignUp from './Components/SignUp';
import Signin from './Components/Signin';
import Protected from './Components/Protected';
import Subscribe from './Components/Subscribe';

function App() {
  const [tokenAuth, setTokenAuth] = useState(null || JSON.parse(sessionStorage.getItem('token')));
 

  return (
    <div className="App">99
      {/* {tokenAuth ? <Protected /> : <Signin />} */}
      {tokenAuth ? <Protected /> : <Signin />}
      {/* <Protected />  */}
      <Subscribe/>
    </div>
  );
}

export default App;