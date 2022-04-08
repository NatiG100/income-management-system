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
    p{
font-weight:400 ;
font-size: 14px;

    }
    display:grid ;
    position:relative ;
    grid-template-columns:3fr 2fr 2fr 1fr 1fr ;
    gap:20px;
    padding-top:10px ;
    padding-bottom:15px ;
    border-bottom: 1px solid #f1f1f1;
    font-size:18px ;
    font-weight:200 ;
    background-color:${({ odd }) => odd ? "#fafafa" : "#ededed"} ;
    padding-left: 15px;
    padding-right: 15px;
    ${({ isHeader }) => (!isHeader && "cursor:pointer;")}
    :hover{
        ${({ isHeader }) => (!isHeader && "box-shadow:0px 1px 2px #2229;")}
        
    }
    `;
export const StyledTransactionList = styled.div`
    padding:0px ;
    box-shadow:1px 1px 4px #2226 ;
`;
export const StyledFilter = styled.div`
    width:100% ;
    justify-self:flex-end ;
    display: grid;
    grid-template-columns:1fr 2fr 2fr 2fr;
    justify-content:center ;
    align-items:center ;
   gap:10px;
   margin-bottom:40px ;
   border:1px solid #ededed;
   padding:15px;
   border-radius: 5px;
   background-color:#fdfdfd ;
`;