import React, { Fragment } from 'react';
import BaseButton from '../Buttons/BaseButton';

export const WithCounts = ({ count, counterDirection, onMouseOn, onClick, children }) => {
  if (counterDirection === "left") {
    return (
      <BaseButton onMouseUp={onMouseOn} onClick={onClick} >
        { count }&nbsp; { children }
      </BaseButton>
    )
  }  
  else {
    return (
      <Fragment>
      {count}     
      <BaseButton onMouseUp={onMouseOn} onClick={onClick} >
        { children }
      </BaseButton>
      </Fragment>
    )
  }  
}