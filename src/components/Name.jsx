import React from 'react'
import styled from 'styled-components'

const Name = styled.p`
    margin: 0 0 0 7px;
`

const CardName = (props) => {
    return (
        <Name>{props.name}</Name>
    )
}

export default CardName;