import React, { useRef } from 'react';
import { } from '../../pageComponents/CompanyList/Company/style';
import RoundButton from '../RoundButton';
import { StyledDivider, StyledDialogBox, StyledDialogBoxActions, StyledDialogboxContent, StyledBackdrop } from './style';

const Dialogbox = ({
    onClose = () => { },
    title,
    prompt,
    action = () => { },
    isError,
}) => {
    const ref = useRef();
    return (
        <>
            <StyledBackdrop onClick={onClose} />
            <StyledDialogBox >
                <StyledDialogboxContent isError={isError}>
                    <h3>{title}</h3>
                    <StyledDivider />
                    <p><b>{prompt}</b></p>
                    <StyledDialogBoxActions>
                        <div></div>
                        <RoundButton
                            color="secondary"
                            onClick={onClose}
                            text="CANCEL"
                        />
                        <RoundButton
                            color={isError ? "error" : "primary"}
                            onClick={() => { action(); onClose(); }}
                            text="YES"
                        />
                    </StyledDialogBoxActions>
                </StyledDialogboxContent>
            </StyledDialogBox>
        </>
    );
}
export default Dialogbox;