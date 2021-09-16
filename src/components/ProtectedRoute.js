import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute({ loggedIn, ...props }) {

  if (!loggedIn) {
    return <Redirect to="/sing-in" />
  }
  return <Route {...props} />
}

export default ProtectedRoute;