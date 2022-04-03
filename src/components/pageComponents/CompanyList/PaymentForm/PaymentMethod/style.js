import styled from "@emotion/styled"

export const StylePaymentMethodList = styled.div`
    padding:10px ;
    display:grid ;
    grid-row:auto ;
    grid-template-columns:1fr 1fr ;
    grid-template-rows:max-content ;
gap:15px;
box-sizing:border-box ;
justify-content:flex-start ;
align-items:flex-start ;
height:100% ;
overflow-y:auto ;
`;
export const StyledPaymentMethod = styled.div`
    background-color:#ededed ;
    display:grid ;
    gap:10px;
    padding:15px ;
    border-radius:10px ;
    cursor: pointer;
    box-sizing:border-box ;
    ${({ selected }) => (selected && "box-shadow:0px 0px 15px #BF40BF44;")}
    border:1px solid ${({ selected }) => (selected ? "#BF40BF" : "white")};
    :hover{
        border:1px solid ${({ selected }) => (selected ? "#BF40BF" : "#aaaaaa")};
    }
    h3{
      font-size  :18px ;
      font-weight:700 ;
      color:#44444e;
    }
    p{
        color: #ababab;
    }
`;

export const StyledContainer = styled.div`
    display:grid ;
    grid-template-rows:max-content max-content;
    gap:5px;
    h3{
        color:#555 ;
    }
`;