import styled from "@emotion/styled";

export const StyledButton = styled.button`
    border:none;
    padding: 15px;
    padding-left: 20px;
    padding-right:20px;
    border-radius:40px ;
    background-color:${({ color }) => color === "primary" ? "#BF40BF " : color === "error" ? "#a64452" : "#2220"} ;
    color:${({ color }) => color === "primary" || color === "error" ? "#fff" : "#BF40BF"} ;
    ${({ color }) => (color === "secondary" && "border:1px solid #BF40BF;")}
    cursor: pointer;
    :hover{
        box-shadow:0px 0px 12px #2954 ;
    }
`;