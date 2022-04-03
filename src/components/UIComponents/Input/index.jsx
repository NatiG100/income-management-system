import React from 'react';
import {
    StyledInput,
    StyledInputLabel,
    StyledInputItem
} from './style';
const Input = ({ type, placeholder, label, setValue, value }) => {
    return (
        <StyledInput>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledInputItem
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(event) => { setValue(event.target.value) }}
            />
        </StyledInput>
    );
}
export default Input;