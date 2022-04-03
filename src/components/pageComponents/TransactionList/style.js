import styled from "@emotion/styled"

export const StyledTransactions = styled.div`

    padding:40px ;
    height:100vh ;
    width:100% ;
    overflow-y: auto;
    `;
export const StyledTransactionFilter = styled.div`
display:flex ;
    margin-bottom: 30px;
    flex-wrap:wrap ;

`;
export const StyledTransaction = styled.div`
    display:grid ;
    grid-template-columns:repeat(5,1fr) ;
    padding-top:10px ;
    padding-bottom:15px ;
    border-bottom: 1px solid #f1f1f1;
    font-size:18px ;
    font-weight:200 ;
    background-color:${({ odd }) => odd ? "#fafafa" : "#ededed"} ;
    padding-left: 15px;
    padding-right: 15px;
`;
export const StyledTransactionList = styled.div`
    padding:0px ;
    box-shadow:1px 1px 4px #2226 ;
`;
export const StyledDateSelector = styled.div`
    width:100% ;
    justify-self:flex-end ;
    margin-bottom:20px ;
    display: grid;
    grid-template-columns:1fr 2fr 2fr 2fr;
    justify-content:center ;
    align-items:center ;
   gap:10px;
   margin-bottom:40px ;
`;