import {useEffect} from 'react'
import logoDark from '@images/logo-dark.svg'
import cx from 'classnames'
import { Button } from '@mui/material'
import { useAuth } from '@contexts/AuthContext'
import GoogleIcon from '@mui/icons-material/Google';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
// import APIClient from "./../../APIClient";

const LoginScreen = () => {
    const loginScreenClassname = cx({
        'login-screen': true
    })


    useEffect(() => {
    })
    const auth = useAuth()

    return (
        <div className={loginScreenClassname}>
            <div className="login-container">
                <div className="img-container">
                    <img src={logoDark} alt=""/>
                </div>
                <div className="text-content">
                    <div className="title">Log In</div>
                    <div className="sub-title">to start storing</div>
                    
                </div>
                <Button
                    onClick={() => {
                        auth.signInWithGoogle()
                    }} endIcon={<GoogleIcon />}>Sign In To Continue</Button>
                <Button
                    onClick={() => {
                        (window as any).location = "https://youtu.be/zBlSC2ViJBM" as any
                    }} endIcon={<PlayCircleFilledWhiteIcon />}>How to use app</Button>
            </div>
        </div>
    )
}

export default LoginScreen
