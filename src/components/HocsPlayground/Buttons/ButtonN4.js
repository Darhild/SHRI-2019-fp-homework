/**
 * Необходимо имплементировать компонент и его логику путем композиции хоков и stateless компонента BaseButton
 */
import {compose} from 'recompose';
import { WithCounts } from '../hocs/WithCounts';

import withOnClickDecreaseCounter from '../hocs/withOnClickDecreaseCounter';
import withCounter5 from '../hocs/withCounter5';
import withTopDirection from '../hocs/withTopDirection';

export default compose(
    withCounter5,
    withOnClickDecreaseCounter,
    withTopDirection 
)(WithCounts)