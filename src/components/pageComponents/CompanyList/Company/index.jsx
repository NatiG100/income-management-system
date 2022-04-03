import React from 'react';
import Modal from '../../../UIComponents/Modal';
import RoundButton from '../../../UIComponents/RoundButton';

import {
    StyledCompany,
    StyledInfo,
    StyledDescription,
    StyledDivider,
} from './style';

const Company = ({ name, description, code, onAction }) => {
    return (
        <StyledCompany>
            <StyledInfo>
                <p><b>Name: </b>{name}</p>
                <p><b>Code: </b>{code}</p>
            </StyledInfo>
            <StyledDivider />
            <StyledDescription>
                <p><b>Description: </b>{description}</p>
            </StyledDescription>
            <StyledDivider />
            <RoundButton
                text='PAY NOW'
                color='primary'
                onClick={onAction}
            />
        </StyledCompany>
    );
}

export default Company;