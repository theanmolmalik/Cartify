import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        !isAuthenticated && (
            <button className="login-with-google-btn" onClick={() => loginWithRedirect()}>
                Sign In with Google Account
            </button>
        )
    )
}

export default LoginButton;