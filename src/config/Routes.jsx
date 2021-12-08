import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Detail from '../pages/detail/Detail';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';
import { connect } from "react-redux";
import PropTypes from "prop-types";
const Routes = ({
	component: Component,
	auth: { isAuthenticated, loading },
	...rest
}) => {
    console.log(isAuthenticated)
	return (
		<Switch>
            {isAuthenticated?<>
            			<Route path="/login" exact component={Login} />
                        <Route path="/register" exact component={Register} />
                        <Route path="/:category/search/:keyword" component={Catalog} />
                        <Route path="/:category/:id" component={Detail} />
                        <Route path="/:category" component={Catalog} />
                        <Route path="/" exact component={Home} />
            </>:
            <>
            <Route path="/register" exact component={Register} />
            <Route path="/"exact component={Login} />
            <Route path="/login"exact component={Login} />
            <Route path="/tv" exact component={Login} />
            <Route path="/movie" exact component={Login} />
            </>}

		</Switch>
	);
};
Routes.propTypes = {
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});
export default connect(mapStateToProps)(Routes);
