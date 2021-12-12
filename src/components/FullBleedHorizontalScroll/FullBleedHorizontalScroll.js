import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  overflow-x: scroll;

  width: calc(100vw - 4px);
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  padding: 1px;
  box-sizing: border-box;

  scroll-snap-type: x mandatory;

  // Chrome, Safari and Opera
  ::-webkit-scrollbar {
    display: none;
  }
  // Firefox
  scrollbar-width: none;
`;

const ItemContainer = styled.div`
  scroll-snap-align: start;
  display: inline-block;
  margin-right: 1pc;

  .horizontal-scroll-item {
    transform: translateX(20px);

    @media only screen and (min-width: 768px) {
      transform: translateX(calc(max(720px, 100vw)/2 - 40vw));
    }
  
    @media only screen and (min-width: 1200px) {
      transform: translateX(calc(max(720px, 100vw)/2 - 360px));
    }
  }

  &:last-of-type {
    .horizontal-scroll-item {
      padding-right: 1pc;
    }
  }
`;

const FullBleedHorizontalScroll = ({ items }) => {
  if (!items?.length) {
    return null;
  }

  return (
    <Container>
      {
        items.map((el, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <ItemContainer key={index}>
            {React.cloneElement(el, { className: 'horizontal-scroll-item' })}
          </ItemContainer>
        ))
      }
    </Container>
  );
};

export default FullBleedHorizontalScroll;
