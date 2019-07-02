import React from 'react';

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
  const prideStart = new Date(now.getFullYear(), 5, 15);
  const prideEnd = new Date(now.getFullYear(), 6, 2);

  if (prideStart < now && now < prideEnd) {
    return true;
  }

  return false;
};

const SmartLogo = () => {
  if (isHolidays()) {
    return (
      <img src="/static/images/logo-holiday.svg" alt="Julia" />
    );
  }

  if (isPride()) {
    return (
      <img src="/static/images/logo-pride.svg" alt="Julia" />
    );
  }

  return (
    <img src="/static/images/logo.svg" alt="Julia" />
  );
};

export default SmartLogo;
