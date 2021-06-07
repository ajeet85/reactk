import React, { useEffect} from 'react';

//redux
import {Provider} from 'react-redux';
import store from './store';
import './App.css';
import setAuthToken from './utils/setAuthToken';
import {loadUser} from './store/actions/auth';
import Routes from './Routes'

if(localStorage.token){
  console.log('ap js ');
  setAuthToken(localStorage.token);
  }
const App = ()=>{
  useEffect(()=>{
    store.dispatch(loadUser());
  },[])

  return(
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}
export default App;
