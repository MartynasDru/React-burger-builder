import React from 'react';

import classes from './ToggleButton.css';

const toggleButton = (props) => {

  let toggleButtonClasses = [];

  if (props.open) {
    toggleButtonClasses = [classes.change];
  }

  return (
    <div className={classes.container, toggleButtonClasses.join(" ")}  onClick={props.toggle}>
      <div className={classes.bar1}></div>
      <div className={classes.bar2}></div>
      <div className={classes.bar3}></div>
    </div>
  );
};

export default toggleButton;
