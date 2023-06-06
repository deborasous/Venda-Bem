import React, { useEffect, useState } from "react";
import { Route, useNavigate } from "react-router-dom";
import { auth } from "../service/firebase";
// import { getAuth, onAuthStateChanged} from 'firebase/auth'

const PrivateRoute = ({ element: Element, ...rest }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((user) => {
      setUser(user);
    });

    return unsubscribe;
  }, []);

  if (!user) {
    navigate("/entrar");
    return null;
  }

  return <Route {...rest} element={<Element />} />;
};

export default PrivateRoute;
