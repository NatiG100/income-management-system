import styled from "@emotion/styled";

export const StyledChip = styled.button`
    padding: 15px;
    background-color:${({ selected }) => selected ? "#BF40BF" : "#dedede"} ;
    color:${({ selected }) => selected ? "white" : "#555"} ;
    border:none;
    padding-left:25px ;
    padding-right:25px ;
    border-radius: 40px;
    margin:10px;
    cursor: pointer;
    :hover{
            background-image:linear-gradient(90deg,#2222,#2221,#2222) ;
    }
`;