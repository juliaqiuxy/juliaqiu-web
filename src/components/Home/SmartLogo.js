import React from 'react';

import LogoIcon from './images/logo.svg';
import LogoHolidayIcon from './images/logoHoliday.svg';
import LogoPrideIcon from './images/logoPride.svg';
import Logo4thIcon from './images/logo4th.svg';

const NOVEMBER = 10;

const isHolidays = () => {
  const now = new Date();
  const currentMonth = now.getMonth();
  let holidayStart;
  let holidayEnd;

  if (currentMonth < NOVEMBER) {
    holidayStart = new Date(now.getFullYear() - 1, 10, 15);
    holidayEnd = new Date(now.getFullYear(), 0, 5);
  } else {
    holidayStart = new Date(now.getFullYear(), 10, 15);
    holidayEnd = new Date(now.getFullYear() + 1, 0, 5);
  }

  if (holidayStart < now && now < holidayEnd) {
    return true;
  }

  return false;
};

const isPride = () => {
  const now = new Date();
  const prideStart = new Date(now.getFullYear(), 5, 1);
  const prideEnd = new Date(now.getFullYear(), 5, 29);

  if (prideStart < now && now < prideEnd) {
    return true;
  }

  return false;
};

const is4th = () => {
  const now = new Date();
  const fourthStart = new Date(now.getFullYear(), 6, 3);
  const fourthEnd = new Date(now.getFullYear(), 6, 5);

  if (fourthStart < now && now < fourthEnd) {
    return true;
  }

  return false;
};

const SmartLogo = () => {
  if (is4th()) {
    return (
      <Logo4thIcon style={{ height: '98px' }} />
    );
  }

  if (isHolidays()) {
    return (
      <LogoHolidayIcon />
    );
  }

  if (isPride()) {
    return (
      <LogoPrideIcon />
    );
  }

  return (
    <LogoIcon />
  );
};

export default SmartLogo;
