import styled from "@emotion/styled"

export const StyledCompany = styled.div`
    :hover{
        box-shadow:0px 0px 18px #2222 ;
    }
    width: 100%;
    padding:25px;
    border:1px solid #cbcbcb;
    border-radius:20px ;
    display: grid;
    grid-template-columns:2fr max-content 2fr max-content 1fr ;
    align-items:center ;
    gap:15px;
    margin-bottom:20px ;
`;
export const StyledInfo = styled.div`
    display: flex;
    flex-direction:column ;
    justify-content:center ;
    p{
        font-size:16px ;
    }
    b{
        font-size:18px ;
    }
`;
export const StyledDescription = styled.div`
    /* color:#ababa; */
    font-weight:200 ;
`;

export const StyledDivider = styled.div`
    height:80% ;
    margin-bottom:auto ;
    margin-top:auto ;
    border-left:1px solid #dedede;
`;