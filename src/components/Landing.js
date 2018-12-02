import React, { Fragment } from 'react';

const Landing = props => {
  return (
    <Fragment>
      {/* Jumbo */}
      <div className="jumbo">
        <h1>Kevin Jolley</h1>
        <h2>JavaScript Web Developer</h2>

        {/* Jumbo Nav */}
        <div className="jumbo_nav">
          <p onClick={props.renderA}>About</p>
          <p onClick={props.renderS}>Social</p>
          <p onClick={props.renderP}>Projects</p>
          <p onClick={props.renderE}>Extra</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Landing;
