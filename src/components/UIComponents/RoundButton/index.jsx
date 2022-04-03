import React from 'react';

import { StyledButton } from './style';

const RoundButton = ({
    onClick = () => { },
    text = "button",
    color = "primary"
}) => {
    return (
        <StyledButton
            onClick={onClick}
            color={color}
        >
            {text}
        </StyledButton>
    );
}

export default RoundButton;