import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

MasonryLayout.propTypes = {
    columns: PropTypes.number.isRequired,
    gap: PropTypes.number.isRequired,
    children: PropTypes.arrayOf(PropTypes.element),
};
MasonryLayout.defaultProps = {
    columns: 2,
    gap: 20,
};

const NasaContainer = styled.div`
    display: flex;
    width: 75%;
    margin: 2rem auto;
`;

function MasonryLayout(props) {
    
    const columnWrapper = {};
    const result = [];
    
    for (let i = 0; i < props.columns; i++) {
        columnWrapper[`column${i}`] = [];
    }

    for (let i = 0; i < props.children.length; i++) {
        const columnIndex = i % props.columns;
        columnWrapper[`column${columnIndex}`].push(
            <div style={{ marginBottom: `${props.gap}px`}}>
            {props.children[i]}
            </div>
        );
    }

    for (let i = 0; i < props.columns; i++) {
        result.push(
          <div
            style={{
              marginLeft: `${i > 0 ? props.gap : 0}px`,
              flex: 1,
            }}>
            {columnWrapper[`column${i}`]}
          </div>
        );
    }

    return (
        <NasaContainer>
            {result}
        </NasaContainer>
    )
}

export default MasonryLayout;