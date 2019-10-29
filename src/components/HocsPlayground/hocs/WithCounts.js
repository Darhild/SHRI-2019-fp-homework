import React, { Fragment } from 'react';

export const withCounts = (BaseComponent) => ({ count, counterDirection, onMouseOn, onClick, children }) =>
{
  if (counterDirection === "left") {
    return (
      <BaseComponent onMouseUp={onMouseOn} onClick={onClick} >
        { count }&nbsp; { children }
      </BaseComponent>
    )
  }  
  else {
    return (
      <Fragment>
        {count}     
        <BaseComponent onMouseUp={onMouseOn} onClick={onClick} >
          { children }
        </BaseComponent>
      </Fragment>
    )
  }  
}