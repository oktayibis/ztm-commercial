import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignOutPage from "./pages/sign-in-and-sign-out/sign-in-and-sign-out.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.action";

function App(props) {

	useEffect(() => {
		auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth); // First check is user exist, if no create user in database and return userRef number
				userRef.onSnapshot((snapShot) => {
					props.setCurrentUser({ // Pass currentUser as props						id: snapShot.id, // Call user id with snapShot object
						...snapShot.data(), // Call snapShot data with .data() method
					});
				});
			} else {
				props.setCurrentUser(userAuth);
			}
		});
	}, []);
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/shop" component={ShopPage} />
				<Route exact path="/signin" render={() => props.currentUser ? (<Redirect to="/" />) : <SignInAndSignOutPage />} />
			</Switch>
		</div>
	);
}
const mapStateToProps = ({ user }) => ({
	currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps )(App);
