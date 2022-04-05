import styled from "@emotion/styled";

export const StyledDashboardContent = styled.div`
    overflow-y:auto ;
    height:100vh ;
    width:100% ;
    display:grid ;
    grid-template-columns:1fr 1fr ;
    grid-template-rows:1fr 1fr ;
    gap:15px;
    padding:20px ;
    
`;

export const StyledGraphContainer = styled.div`
    height:100% ;
    width:100% ;
    border:1px solid #dadada;
    background-color:#fdfdfd ;
    border-radius:10px ;
    padding:10px ;
    box-shadow:0px 0px 18px #2222 ;
`;

export const StyledGraphWithTitle = styled.div`
    overflow-y:auto ;
    height:100% ;
    width:100% ;
    display:grid ;
    grid-template-rows:max-content 1fr ;
    gap:15px;
    padding:20px ;
`;