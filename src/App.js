import React, { Fragment } from 'react';

import NavBar from './components/layout/NavBar';
import Landing from './components/layout/Landing';

import 'bulma/css/bulma.css';

const App = () => {
  return (
    <Fragment>
      <NavBar />
      <section className='mt-6'>
        <Landing />
      </section>
    </Fragment>
  );
};
export default App;
