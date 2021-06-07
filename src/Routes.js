import React, { Fragment} from 'react';
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Landing from './components/home/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Alert from './components/layout/Alert';
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';
//redux
//import {Provider} from 'react-redux';
//import store from './store';
//import './App.css';
//import setAuthToken from './utils/setAuthToken';
//import {loadUser} from './store/actions/auth';

const Routes = ()=>{
	return (
		<Router>
			<Fragment>
				<Header />
			  	<Route exact path='/' component={Landing} />
			  	<section className="container1">
			    	<Alert />
			    	<Switch>
					    <Route exact path='/register' component={Register} />
					    <Route exact path='/login' component={Login} />
					    <PrivateRoute exact path='/dashboard' component={Dashboard} />
				    </Switch>
			  	</section>
			  	<Footer />
			</Fragment>
		</Router>
	);
}
export default Routes;
