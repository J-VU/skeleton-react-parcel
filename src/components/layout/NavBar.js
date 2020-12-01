import React, { Fragment } from 'react';

const NavBar = () => {
  function toggleMenu(event) {
    event.target.classList.toggle('is-active');
    document.getElementById('navbar').classList.toggle('is-active');
  }

  return (
    <Fragment>
      <nav
        className='navbar is-fixed-top is-transparent'
        role='navigation'
        aria-label='main navigation'>
        <div className='navbar-brand'>
          <a className='navbar-item'>
            <strong>[Js] React Skelly</strong>
          </a>
          <a
            id='navbar-burger'
            className='navbar-burger burger'
            role='button'
            aria-label='menu'
            aria-expanded='false'
            data-target='navbar'
            onClick={toggleMenu}>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </a>
        </div>
        <div id='navbar' className='navbar-menu'>
          <a className='navbar-item' href='#'>
            Link One
          </a>
          <a className='navbar-item' href='#'>
            Link Two
          </a>
          <a className='navbar-item' href='#'>
            Link Three
          </a>
        </div>
      </nav>
    </Fragment>
  );
};

export default NavBar;
