import React from 'react';
import {
    StyledInput,
    StyledInputLabel,
    StyledInputItem
} from './style';
const Input = ({ disabled = false, type, placeholder, label, setValue, value }) => {
    return (
        <StyledInput>
            {label && <StyledInputLabel>{label}</StyledInputLabel>}
            <StyledInputItem
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(event) => { setValue(event.target.value) }}
                disabled={disabled}
            />
        </StyledInput>
    );
}
export default Input;