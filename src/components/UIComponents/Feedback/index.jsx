import React, { useEffect } from 'react';
import { StyledFeedBack } from './style';

const Feedback = ({ type = "success", onClose, text }) => {
    useEffect(() => {
        setTimeout(onClose, 1000 * 5);
    }, [])
    return (
        <StyledFeedBack
            type={type}
        >
            <p>{text}</p>
        </StyledFeedBack>
    );
}

export default Feedback;