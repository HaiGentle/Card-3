import React from 'react'
import styled from 'styled-components'

const Desc = styled.p`
    color: gray;
`
const CardDesc = (props) => {
    return (
        <Desc>{props.desc}</Desc>
    )
}

export default CardDesc;