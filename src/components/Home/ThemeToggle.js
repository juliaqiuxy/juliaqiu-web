import React from 'react';
import styled from 'styled-components';

import useTheme from '../../lib/useTheme';

import SunIcon from './images/sun.svg';
import MoonIcon from './images/moon.svg';

const Button = styled.button`
  background-color: transparent;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;

  svg {
    height: 24px;
    width: auto;
    color: var(--juliadev-fg);
  }
`;

const ThemeToggle = () => {
  const [preferredTheme, setPreferredTheme] = useTheme();

  let themeIcon = <MoonIcon />;
  if (preferredTheme === 'dark') {
    themeIcon = <MoonIcon />;
  } else if (preferredTheme === 'light') {
    themeIcon = <SunIcon />;
  }

  return (
    <Button onClick={() => setPreferredTheme(preferredTheme === 'dark' ? 'light' : 'dark')}>
      {themeIcon}
    </Button>
  );
};

export default ThemeToggle;
