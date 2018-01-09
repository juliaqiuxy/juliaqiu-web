import React from 'react';

import logoHoliday from '../images/logo-holiday.svg';
import logo from '../images/logo.svg';

const isHolidays = () => {
  const now = new Date();
  const currentMonth = now.getMonth();
  let holidayStart;
  let holidayEnd;

  if (currentMonth < 10) {
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

const SmartLogo = () => {
  if (isHolidays()) {
    return (
      <img src={logoHoliday} alt="Julia" />
    );
  }

  return (
    <img src={logo} alt="Julia" />
  );
};

export default SmartLogo;
