import React, { Fragment } from 'react';

const ProjectConst = props => {
  return (
    <Fragment>
      <div className="project_div">
        <div className="project_text">
          <h1> {props.text} </h1>
          <h1> {props.text_two} </h1>
          <h1> {props.text_three} </h1>
        </div>
        <img src={props.img} alt={props.alt} />
      </div>
    </Fragment>
  );
};

export default ProjectConst;
