import React from 'react'
import GoogleLogin from 'react-google-login';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const clientId = '838335059884-l34fcj6rlhsua0rt9aho5bsehfo13q9s.apps.googleusercontent.com';
    const navigate = useNavigate();

    const onSuccess = (response) => {
        console.log('Login Success', response);
        if (response?.wc?.access_token) {
            // localStorage.setItem('user', response.w3.ig);
            navigate('/search');
        }


    };
    const onFailure = (response) => {
        console.log('Login Failed', response);
    };
    return (
        <div>
            <GoogleLogin
                disabled={false}
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    )
}

export default Login;