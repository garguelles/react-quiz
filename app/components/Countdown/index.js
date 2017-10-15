/**
*
* Countdown
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

function withCountdown(WrappedComponent, countdownTo) {
  class ComponentWithCountdown extends React.Component { // eslint-disable-line react/prefer-stateless-function
    static defaultProps = {
      timerInterval: 1000,
      countdownTo,
    }

    static propTypes = {
      timerInterval: PropTypes.number,
      countdownTo: PropTypes.string.isRequired,
    }

    constructor(props) {
      super(props);
      this.state = {
        days: '--',
        hours: '--',
        minutes: '--',
        seconds: '--',
      };
    }

    componentDidMount() {
      this.tick();
    }

    componentWillUnmount() {
      clearTimeout(this.interval);
    }

    getTimeRemaining = (endtime) => {
      const total = moment(endtime, 'MM-DD-YYYY hh:mm:ss a Z').toDate() - Date.parse(new Date());
      const seconds = String(Math.floor((total / 1000) % 60));
      const minutes = String(Math.floor((total / 1000 / 60) % 60));
      const hours = String(Math.floor((total / (1000 * 60 * 60)) % 24));
      const days = String(Math.floor(total / (1000 * 60 * 60 * 24)));

      return {
        total,
        days,
        hours,
        minutes,
        seconds,
      };
    }

    tick = () => {
      this.interval = setTimeout(() => {
        const remainingTime = this.getTimeRemaining(this.props.countdownTo);

        this.setState({
          days: remainingTime.days,
          hours: (`0${remainingTime.hours}`).slice(-2),
          minutes: (`0${remainingTime.minutes}`).slice(-2),
          seconds: (`0${remainingTime.seconds}`).slice(-2),
        });

        if (remainingTime.total <= 0) {
          clearTimeout(this.interval);
        }

        this.tick();
      }, this.props.timerInterval);
    }

    render() {
      return (
        <div>
          <WrappedComponent
            days={this.state.days}
            hours={this.state.hours}
            minutes={this.state.minutes}
            seconds={this.state.seconds}
            {...this.props}
          />
        </div>
      );
    }
  }

  return ComponentWithCountdown;
}

export default withCountdown;
