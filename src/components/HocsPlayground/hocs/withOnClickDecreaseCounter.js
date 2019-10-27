import {withHandlers} from 'recompose';

export default withHandlers({
    onClick: ({setInnerColor, setOuterColor, setCount, count }) => () => {
        setCount(count - 1);

        if(count === 0) {
            setInnerColor('orange');
            setOuterColor('orange');
            setCount(5);
        }
   
    },
});