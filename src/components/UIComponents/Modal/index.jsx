import React, { useRef } from 'react';
import { StyledModal, StyledModalContent, StyledBackdrop } from './style';

const Modal = ({ children, onClose = () => { } }) => {
    const ref = useRef();
    return (
        <>
            <StyledBackdrop onClick={onClose} />
            <StyledModal >
                <StyledModalContent >
                    {children}
                </StyledModalContent>
            </StyledModal>
        </>
    );
}
export default Modal;