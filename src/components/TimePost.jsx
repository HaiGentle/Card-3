import React from 'react'
import styled from 'styled-components'

const Time = styled.p`
    color: gray;
    margin: 0 0 0 7px;
`

const TimePost = (props) => {
    return (
        <Time>{props.timePost}</Time>
    )
}

export default TimePost;