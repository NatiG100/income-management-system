import React, { useState, useEffect } from 'react';
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
    const setLoginFormField = (value, field) => {
        setLoginForm((loginForm) => ({ ...loginForm, [field]: value }))
    }

    //feedback show state
    const [open, setOpen] = useState(false);

    return (
        <StyledLoginPage>
            <h1>Login</h1>
            {open && <Feedback
                type='error'
                onClose={() => { setOpen(false) }}
                text={"error"}
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
                onClick={() => { registerCompany() }}
            />
        </StyledLoginPage>
    );
}

export default LoginPage;