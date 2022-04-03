import styled from "@emotion/styled";

export const StyledFeedBack = styled.div`
    padding:15px ;
    border-radius: 3px;
    box-shadow:0px 0px 18px #2222 ;
    background-color:${({ type }) => type === "success" ? "green" : type === "error" ? "red" : "#44444e"} ;
    position: fixed;
    z-index: 12;
    bottom:20px ;
    width: 250px;
    text-align:center ;
    left: calc(50% - 125px);
    color:white;
`;