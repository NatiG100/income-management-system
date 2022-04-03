import styled from "@emotion/styled"

export const StyledMenuItem = styled.div`
    width:100% ;
    ${({ selected }) => (selected && "border-right:4px solid #BF40BF;")}
    ${({ selected }) => (selected && "background-color:#2224;")}
    ${({ selected }) => (selected && "color:white;")}
    padding:15px ;
    font-size: 18px;
    cursor: pointer;
    :hover{
        ${({ selected }) => (!selected && "background-color:#2221;")}
    }
`;
export const StyledDrawer = styled.div`
    padding-top:100px ;
width:100% ;
    height:100% ;
    top:0px;
    left:0px ;
    background-color:#eBe3ff ;
    padding-right:0px ;
    h2{
        margin:15px ;
        color:purple;
    }
`;