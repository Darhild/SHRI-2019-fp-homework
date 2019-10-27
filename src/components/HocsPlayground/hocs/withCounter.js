import {withState} from 'recompose';

export default withState('count', 'setCount', 0)


/*
import React from 'react';
import {withProps} from 'recompose';

export default (WrappedComponent) => {
  return (
    <WrappedComponent>

    </WrappedComponent>
  )  
}
*/