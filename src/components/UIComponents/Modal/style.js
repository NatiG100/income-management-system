import styled from "@emotion/styled";

export const StyledModal = styled.div`
    pointer-events:none;
    position:fixed ;
    z-index: 11;
    top:0px;
    left:0px;
    height:100vh ;
    width: 100vw;
    display:flex ;
    justify-content:center ;
    align-items:center ;
`;

export const StyledModalContent = styled.div`
pointer-events:all;
    max-width:700px ;
    width:70%;
    padding:20px ;
    border-radius:10px ;
    background-color:white ;
    max-height:80% ;
    overflow-y: auto;
`;
export const StyledBackdrop = styled.div`
    position:fixed ;
    z-index: 10;
    top:0px;
    left:0px;
    background-color:#2226 ;
    height:100vh ;
    width: 100vw;
    display:flex ;
    justify-content:center ;
    align-items:center ;
`;