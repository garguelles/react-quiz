/**
*
* CountdownTimer
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';
import Separator from './Separator';
import CountdownWrapper from './CountdownWrapper';

import withCountdown from '../Countdown';

const countdownTo = '06-17-2017 02:59:59 pm +02:00';

class CountdownTimer extends React.PureComponent {
  render() {
    return (
      <CountdownWrapper>
        <Item white>{this.props.days}</Item>
        <Separator primary>:</Separator>
        <Item white>{this.props.hours}</Item>
        <Separator primary>:</Separator>
        <Item white>{this.props.minutes}</Item>
        <Separator primary>:</Separator>
        <Item white>{this.props.seconds}</Item>
      </CountdownWrapper>
    );
  }
}

CountdownTimer.propTypes = {
  days: PropTypes.string,
  hours: PropTypes.string,
  minutes: PropTypes.string,
  seconds: PropTypes.string,
};

export default withCountdown(CountdownTimer, countdownTo);
