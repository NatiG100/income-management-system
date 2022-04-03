import styled from "@emotion/styled";
export const StyledSwitch = styled.div`
    cursor: pointer;
    margin-top:15px ;
    width:70px ;
    height:30px ;
    position:relative ;
`;
export const StyledSwitchRack = styled.div`
    width:100% ;
    height: 100%;
    position:absolute ;
    background-color:${({ isOn }) => isOn ? "#BF40BF" : "#dedede"} ;
    top:0px ;
    left:0px ;
    border-radius:40px;
`;
export const StyledSwitchKnob = styled.div`
    background-color:white ;
    height: 32px;
    width:32px ;
    position:absolute ;
    box-shadow:0px 0px 7px #2224 ;
    top:-1px ;
    ${({ isOn }) => isOn ? "right:-1px;" : "left:-1px;"} 
    border-radius: 40px;
`;