/**
 * Необходимо имплементировать компонент и его логику путем композиции хоков и stateless компонента BaseButton
 */
import {compose} from 'recompose';
import BaseButton from './BaseButton';

import withLargeSize from '../hocs/withLargeSize';
import withPrimaryColor from '../hocs/withPrimaryColor';
import withDegrees from '../hocs/withDegrees';
import withOnClickRotate from '../hocs/withOnClickRotate';
import { WithStyles } from '../hocs/WithStyles';

export default compose(
    withLargeSize,
    withPrimaryColor,
    withDegrees,
    withOnClickRotate,
    WithStyles
)(BaseButton)
