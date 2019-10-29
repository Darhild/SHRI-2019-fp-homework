import React from 'react';

import cn from 'classnames';
import styles from './../Buttons/BaseButton/styles.module.css'


const getButtonClassName = (degrees) => cn(
  styles.button, 
  {
      [styles.buttonRotate]: true,
      [styles.buttonRotate30]: degrees === 30,
      [styles.buttonRotate60]: degrees === 60,
      [styles.buttonRotate90]: degrees === 90,
      [styles.buttonRotate120]: degrees === 120,
      [styles.buttonRotate150]: degrees === 150,
      [styles.buttonRotate180]: degrees === 180,
      [styles.buttonRotate210]: degrees === 210,
      [styles.buttonRotate240]: degrees === 240,
      [styles.buttonRotate270]: degrees === 270,
      [styles.buttonRotate300]: degrees === 300,
      [styles.buttonRotate330]: degrees === 330,
      [styles.buttonRotate360]: degrees === 360,
  }
);

export const withStyles = (BaseComponent) => (props) => {  

  return (
    <div className={getButtonClassName(props.degrees)}>
      <BaseComponent {...props} />
    </div>
  )
}  
