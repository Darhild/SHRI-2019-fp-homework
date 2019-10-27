import {withHandlers} from 'recompose';

export default withHandlers({
    onClick: ({setInnerColor, setOuterColor, setCount, count }) => () => {
        setCount(count + 1);

        if(count % 2 === 0) {
            setInnerColor('#A7CA52');
            setOuterColor('#A7CA52');
        }

        else {
            setInnerColor('grey');
            setOuterColor('grey');
        }        
    },
});
