import React from 'react';
import {
    StyledTextarea,
    StyledTextareaLabel,
    StyledTextareaItem
} from './style';
const Textarea = ({ disabled = false, rows, placeholder, label, setValue, value }) => {
    return (
        <StyledTextarea>
            <StyledTextareaLabel>{label}</StyledTextareaLabel>
            <StyledTextareaItem
                placeholder={placeholder}
                value={value}
                onChange={(event) => { setValue(event.target.value) }}
                disabled={disabled}
                rows={rows}
            />
        </StyledTextarea>
    );
}
export default Textarea;