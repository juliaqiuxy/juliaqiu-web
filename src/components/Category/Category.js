import React from 'react';
import styled from 'styled-components';

const CategoryTitle = styled.span`
  font-size: 44px;
  font-weight: 100;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 24px;
  display: block;
  color: var(--juliadev-fg);
`;

const Category = ({ category }) => (
  <CategoryTitle>{category}</CategoryTitle>
);

export default Category;
