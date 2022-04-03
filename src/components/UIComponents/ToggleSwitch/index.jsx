import React from 'react';
import {
    StyledSwitch,
    StyledSwitchRack,
    StyledSwitchKnob
} from './style';
const ToggleSwitch = ({ toggle, isOn }) => {
    return (
        <StyledSwitch onClick={toggle}>
            <StyledSwitchRack isOn={isOn} />
            <StyledSwitchKnob isOn={isOn} />
        </StyledSwitch>
    );
}

export default ToggleSwitch;