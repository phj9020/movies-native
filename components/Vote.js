import React from 'react';
import styled from 'styled-components/native';

const Votes = styled.Text`
    color: rgb(220,220,220);
    margin-bottom: 5px;
    font-size: 12px;
    font-weight: 500;
`

function Vote({votes}) {
    return (
        <Votes>
            ⭐{votes} / 10
        </Votes>
    )
}

export default Vote
