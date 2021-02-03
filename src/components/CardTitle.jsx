import React from 'react'
import styled from 'styled-components'

const Title = styled.h2`
    margin-top: unset;
`
const CardTitle = (props) => {
    return (
        <Title>{props.title}</Title>
    )
}

export default CardTitle;