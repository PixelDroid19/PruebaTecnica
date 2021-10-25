import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import SignInSide from "../Components/Login/SignInSide.js";
import { DashboardRouter } from "./DashboardRouter";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { loginEmailPassword, Usuario } from "../Redux/Action/actionLogin";

export default function AppRouter() {
  const dispatch = useDispatch();
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      if (user?.uid) {
        dispatch(loginEmailPassword(user.uid, user.displayName));
        dispatch(Usuario());
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setChecking(false);
    });
  }, [dispatch, setChecking, setIsLoggedIn]);

  if (checking) {
    return <h1>Espere...</h1>;
  }

  return (
    <Router>
      <Switch>
        <PublicRoute
          exact
          path="/login"
          component={SignInSide}
          isAuthenticated={isLoggedIn}
        />

        <PrivateRoute
          path="/"
          component={DashboardRouter}
          isAuthenticated={isLoggedIn}
        />
      </Switch>
    </Router>
  );
}
