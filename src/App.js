import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignOutPage from "./pages/sign-in-and-sign-out/sign-in-and-sign-out.component";
import { auth } from "./firebase/firebase.utils";

function App() {
  const [currentUser, setCurrentUser] = useState(null);


useEffect(() => {
auth.onAuthStateChanged(user=> {
    setCurrentUser(user);
    console.log("Login: ", currentUser )
  })
}, [currentUser])
  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignOutPage} />
      </Switch>
    </div>
  );
}

export default App;
