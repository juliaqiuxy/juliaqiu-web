import React from 'react';
import Category from '../Category/Category';
import zeit from './migratingSlopeNinjaToZeit.gif';

import Talk from './Talk';
import './Talks.css';

const Talks = () => (
  <div className="Talks-container">
    <Category category="Talks" />
    <Talk
      src={zeit}
      des="zeit day"
      linkText="Coming soon"
      title="Migrating Slope Ninja to Zeit for Fun and Profit"
      event="Zeit Day 2018"
    />
  </div>
);

export default Talks;
