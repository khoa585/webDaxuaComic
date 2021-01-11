import React from "react";
import {
    Route,
    Redirect,
} from "react-router-dom";
import { AuthContext } from '../../../context/AuthContext'
function PrivateRoute({ children, ...rest }) {
    const { isLoggedIn, userData } = React.useContext(AuthContext);

    return (
        <Route
            {...rest}
            render={({ location }) =>
                !isLoggedIn && userData.admin !== 1 ? (
                    <Redirect
                        to={{
                            pathname: "/dang-nhap-admin",
                            state: { from: location }
                        }}
                    />
                ) : (
                        children
                    )
            }
        />
    );
}
export default PrivateRoute