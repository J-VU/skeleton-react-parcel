import React, { Fragment } from 'react';

import logo from '../../resources/logo.svg';

const center = {
  position: 'absolute',
  top: '0',
  bottom: '0',
  left: '0',
  right: '0',
  margin: 'auto',
  height: '50vh',
  zIndex: '0'
};

const Landing = () => {
  return (
    <Fragment>
      <section>
        <div className='hero is-primary is-small is-bold'>
          <div className='hero-body'>
            <div className='container'>
              <h1 className='title'>Basic React Template</h1>
              <h2 className='subtitle'>For everyone</h2>
            </div>
            <img src={logo} alt='logo' style={center} />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Landing;
