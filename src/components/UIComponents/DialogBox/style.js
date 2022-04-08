import styled from "@emotion/styled";

export const StyledDialogBox = styled.div`
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

export const StyledDialogboxContent = styled.div`
pointer-events:all;
    max-width:700px ;
    width:max-content;
    min-width:400px ;
    max-width:450px ;
    padding:20px ;
    border-radius:10px ;
    background-color:white ;
    max-height:80% ;
    overflow-y: auto;
    border:1px solid ${({ isError }) => isError ? "#a6445288" : "#BF40BF88"};
    box-shadow:0px 0px 15px ${({ isError }) => isError ? "#a6445288" : "#BF40BF88"};
    h3{
        color:${({ isError }) => isError ? "#a64452" : "#BF40BF"};
    }
    p{
        font-size:16px ;
        color:#000b;
    }
    display:flex ;
    flex-direction:column ;
    gap:10px;

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
export const StyledDialogBoxActions = styled.div`
    width:100% ;
    margin-top:20px ;
    display:grid ;
    grid-template-columns:1fr 1fr 1fr ;
    align-content:left;
    gap:10px
`;
export const StyledDivider = styled.div`
    width: 100%;
    border-bottom:1px solid #2221;
    margin-top: 10px;
    margin-bottom: 10px;
`;