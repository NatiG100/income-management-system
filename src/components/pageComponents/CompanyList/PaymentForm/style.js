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
    justify-content:center ;
    div{
        align-self: center;
        input{
            margin-bottom:0px ;
        }
    }
    button{
        font-size:16px ;
        align-self: flex-end;
    }
`;

export const StyledActions = styled.div`
display:grid ;
grid-template-columns: 1fr 1fr;
gap:15px;
`;