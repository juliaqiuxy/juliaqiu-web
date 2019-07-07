import React, { Fragment } from 'react';

import App from '../components/App/App';
import { PageTitle, PageDescription } from '../components/Head/Head';

const Index = () => (
  <Fragment>
    <PageTitle />
    <PageDescription />
    <App />
  </Fragment>
);

export default Index;
