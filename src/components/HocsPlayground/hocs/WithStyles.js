import React from 'react';
import BaseButton from '../Buttons/BaseButton';

import cn from 'classnames';
import styles from './../Buttons/BaseButton/styles.module.css'

export const WithStyles = (BaseComponent) => (props) => {
  const className = 'buttonRotate' + props.degree;
  const getButtonClassName = () => cn(
    styles.button, 
    {
        [styles.className]: true,
    }
  );

  return (
    <BaseComponent {...props} className={getButtonClassName(props)} />
  )
}  
