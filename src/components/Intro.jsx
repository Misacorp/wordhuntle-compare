import React from 'react';
import styled from 'styled-components';

const Intro = ({className}) => {
    return (
        <div className={className}>
            <h1>Wordhuntle Word List Compare Tool</h1>
            <p>Copy your list of words and paste them into a textarea. Get your friend's list of words and paste them into another textarea. The tool will show you which words everyone is missing.</p>
        </div>
    )
};

export default styled(Intro)`
  max-width: 600px;
`;