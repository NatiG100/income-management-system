import React from 'react';
import { StyledChip } from './style';
const Chip = ({
    text = "Chip",
    onclick = () => { },
    selected = false
}) => {
    return (
        <StyledChip
            onClick={onclick}
            selected={selected}
        >
            {text}
        </StyledChip>
    );
}
export default Chip;