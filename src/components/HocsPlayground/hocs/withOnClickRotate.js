import {withHandlers} from 'recompose';

export default withHandlers({
    onClick: ({setInnerColor, setOuterColor, setDegrees, degrees }) => () => {    
        setDegrees(degrees + 30);

        if(degrees === 360) {
            const colors = ['red', 'blue', 'green', 'grey', 'orange', 'yellow', 'skyblue', '#A7CA52'];
            const num = Math.floor(Math.random() * colors.length);
            const color = colors[num];

            setInnerColor(color);
            setOuterColor(color);
            setDegrees(0);
        }   
    },
});