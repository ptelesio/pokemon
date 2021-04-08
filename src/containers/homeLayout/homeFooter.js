import React, { Fragment } from 'react';
import './homeFooter.css';

const HomeFooter = () => {

const year = new Date().getFullYear();

  return (
      <Fragment>
        <h6 className={`text-center`}>Gonzalo Patricio Telesio © {year} - Pokemon</h6>
      </Fragment>
  );
};

export default HomeFooter;