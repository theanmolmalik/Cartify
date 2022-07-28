import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <button className="login-with-google-btn" onClick={() => logout({ returnTo: window.location.origin })}>
                Sign Out your Google Account
            </button>
        )
    )
}

export default LogoutButton;