/**
 * Необходимо имплементировать компонент и его логику путем композиции хоков и stateless компонента BaseButton
 */
import {compose} from 'recompose';
import { withCounts } from '../hocs/withCounts';

import withOnEvenClickSetAllGreen from '../hocs/withOnEvenClickSetAllGreen';
import withPrimaryColor from '../hocs/withPrimaryColor';
import withCounter from '../hocs/withCounter';
import withLeftDirection from '../hocs/withLeftDirection';
import BaseButton from './BaseButton';

export default compose(
    withCounter,
    withOnEvenClickSetAllGreen,
    withPrimaryColor,
    withLeftDirection,
    withCounts
)(BaseButton)
