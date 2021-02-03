import styled from 'styled-components'

const CardImg = styled.div`
    width: 100%;
    height: 40%;
    background: url(${props => props.img});
    background-size: cover;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
`
export default CardImg;