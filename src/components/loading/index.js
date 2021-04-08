import React, { Fragment } from 'react';
import './index.css';

const Loading = () => {

  return (
      <Fragment>
          <svg className={`spinner`} viewBox="0 0 50 50">
              <circle className={`path`} cx="25" cy="25" r="20" fill="none" strokeWidth={5}></circle>
          </svg>
      </Fragment>
  );
};

export default Loading;