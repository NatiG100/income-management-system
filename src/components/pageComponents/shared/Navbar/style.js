import styled from "@emotion/styled"

export const StyledNavbar = styled.div`
    position:sticky ;
    top:0px;
    left:0px;
    width:100% ;
    padding: 20px;
    padding-left:60px;
    padding-right:60px;
    background-color:dedede ;
    display:flex ;
    justify-content:space-between ;
    align-items:center ;
    background-color:#fbfbfb ;
`;
export const StyledBrand = styled.h2`
    color:#44444e;
    text-transform:capitalize ;
`;
export const StyledNavigation = styled.div`
    display:flex ;
    gap:15px;
    align-items:center ;
`;
export const StyledNavItem = styled.a`
    color:#44444e;
    ${({ selected }) => (selected && "color:black;font-weight:500;")}
    :hover{
        text-decoration:underline;
    }
    cursor: pointer;
`;