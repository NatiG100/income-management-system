import React, { useState, useEffect } from 'react';
import { LOGIN } from '../../../constants/end-points/auth';
import { useLazyAxios } from '../../../utils/lazyHTTP';
import Feedback from '../../UIComponents/Feedback';
import Input from '../../UIComponents/Input';
import RoundButton from '../../UIComponents/RoundButton';
import {
    StyledLoginFormBody,
    StyledFormSectionTitle,
    StyledLoginFormSection,
    StyledLoginPage,
} from './style';

const LoginPage = () => {


    //login form state logic
    const [loginForm, setLoginForm] = useState({
        email: "",
        password: "",
    });
    const [login, { loading, error, data }] = useLazyAxios({ ...LOGIN, inputData: loginForm })
    const setLoginFormField = (value, field) => {
        setLoginForm((loginForm) => ({ ...loginForm, [field]: value }))
    }


    //event logic
    const requestLogin = async () => {
        const data = await login();
        console.log(data);
    }
    //feedback show state
    const [open, setOpen] = useState(false);
    useEffect(() => {
        if (error) {
            setOpen(true);
        }
    }, [error])


    if (loading) return (<h1>Loading</h1>);
    return (
        <StyledLoginPage>
            <h1>Login</h1>
            {open && <Feedback
                type='error'
                onClose={() => { setOpen(false) }}
                text={error.err}
            />}

            <StyledLoginFormSection>
                <StyledFormSectionTitle>Welcome back!</StyledFormSectionTitle>
                <StyledLoginFormBody>
                    <Input
                        type="text"
                        label='Email'
                        placeholder={"Your Email"}
                        value={loginForm.name}
                        setValue={(value) => { setLoginFormField(value, "email") }}
                    />
                    <Input
                        type="password"
                        label='Password'
                        placeholder={"Your password"}
                        value={loginForm.password}
                        setValue={(value) => { setLoginFormField(value, "password") }}
                    />
                </StyledLoginFormBody>
            </StyledLoginFormSection>
            <RoundButton
                text='Login'
                onClick={() => { requestLogin() }}
            />
        </StyledLoginPage>
    );
}

export default LoginPage;