import styled from "@emotion/styled";

export const StyledPaymentForm = styled.div`
    display:grid ;
    grid-template-rows: 1fr max-content;
    gap:15px;
    height:100% ;
`;

export const StyledBottomSection = styled.div`
    padding:20px ;
    display:grid ;
    grid-template-columns:1fr 1fr ;
    gap:10px;
    align-items:center ;
    button{
        align-self:flex-end ;
        margin-left:10px ;
        font-size:16px ;
    }
`;