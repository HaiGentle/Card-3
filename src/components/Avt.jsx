import styled from "styled-components";

const Avt = styled.div`
    width: 50px;
    height: 50px;
    background: url(${props => props.avt});
    background-size: cover;
    border-radius: 50%;
`

export default Avt;