import React, { useState, useEffect } from 'react';
import { CREATE_COMPANY } from '../../../constants/end-points/company';
import { CREATE_USER } from '../../../constants/end-points/user';
import { useLazyAxios } from '../../../utils/lazyHTTP';
import Feedback from '../../UIComponents/Feedback';
import Input from '../../UIComponents/Input';
import RoundButton from '../../UIComponents/RoundButton';
import Textarea from '../../UIComponents/TextArea';
import {
    StyledRegisterFormBody,
    StyledFormSectionTitle,
    StyledRegisterFormSection,
    StyledRegisterPage,
    StyledFormWrapper
} from './style';
const companyInitialState = {
    name: "",
    description: "",
    code: "",
}
const userInitialState = {
    name: "",
    email: "",
    password: "",
};

const RegisterPage = () => {

    const [id, setid] = useState("");

    //compmany logic
    const [company, setCompany] = useState(companyInitialState);
    const [saveCompany, { loading: companyLoading, error: companyError, data: companyData }] = useLazyAxios(
        { ...CREATE_COMPANY, inputData: company }
    )
    const setCompanyField = (value, field) => {
        setCompany((company) => ({ ...company, [field]: value }))
    }


    //user logic
    const [user, setUser] = useState(userInitialState);
    const [saveUser, { loading: userLoading, error: userError, data: userData }] = useLazyAxios(
        { ...CREATE_USER, inputData: { ...user, company: id } }
    )
    const setUserField = (value, field) => {
        setUser((user) => ({ ...user, [field]: value }))
    }


    //event logic
    const registerCompany = async () => {
        const companyData = await saveCompany();
        setid(companyData._id);
    }
    useEffect(() => {
        if (id !== "") {
            saveUser().then((data, err) => {
                if (data) {
                    setOpenSuccess(true);
                    resetForm();
                }
            });
        }
    }, [id])

    //feedback logic
    const [openSuccess, setOpenSuccess] = useState(false);
    const [open, setOpen] = useState(true);
    useEffect(() => {
        if (companyError || userError) {
            setOpen(true);
        }
    }, [companyError, userError])


    //form logic
    const resetForm = () => {
        setUser(userInitialState);
        setCompany(companyInitialState);
    }


    //render logic

    if (userLoading || companyLoading) return (<p>Loading</p>)
    return (
        <StyledRegisterPage>
            <h1>Register</h1>
            <StyledFormWrapper>
                {open && <Feedback
                    type='error'
                    onClose={() => { setOpen(false) }}
                    text={companyError?.err + "\n" + userError?.err}
                />}
                {openSuccess && <Feedback
                    type='success'
                    text={"Company Successfull registered"}
                    onClose={() => { setOpenSuccess(false) }}
                />}

                <StyledRegisterFormSection>
                    <StyledFormSectionTitle>Company Information</StyledFormSectionTitle>
                    <StyledRegisterFormBody>
                        <Input
                            type="text"
                            label='Name'
                            placeholder={"Name of the comapny"}
                            value={company.name}
                            setValue={(value) => { setCompanyField(value, "name") }}
                        />
                        <Input
                            type="number"
                            label='Code'
                            placeholder={"Unique code for the company."}
                            value={company.code}
                            setValue={(value) => { setCompanyField(value, "code") }}
                        />
                        <Textarea
                            label='Description'
                            placeholder={"Name of the comapny"}
                            value={company.description}
                            setValue={(value) => { setCompanyField(value, "description") }}
                            rows={5}
                        />
                    </StyledRegisterFormBody>
                </StyledRegisterFormSection>
                <StyledRegisterFormSection>
                    <StyledFormSectionTitle>User Information</StyledFormSectionTitle>
                    <StyledRegisterFormBody>
                        <Input
                            type="text"
                            label='Name'
                            placeholder={"Name of the user"}
                            value={user.name}
                            setValue={(value) => { setUserField(value, "name") }}
                        />
                        <Input
                            type="email"
                            label='Email'
                            placeholder={"Email for the user"}
                            value={user.email}
                            setValue={(value) => { setUserField(value, "email") }}
                        />
                        <Input
                            type="password"
                            label='Password'
                            placeholder={"Enter your password"}
                            value={user.password}
                            setValue={(value) => { setUserField(value, "password") }}
                        />
                    </StyledRegisterFormBody>
                </StyledRegisterFormSection>
            </StyledFormWrapper>
            <RoundButton
                text='Register'
                onClick={() => { registerCompany() }}
            />
        </StyledRegisterPage>
    );
}

export default RegisterPage;