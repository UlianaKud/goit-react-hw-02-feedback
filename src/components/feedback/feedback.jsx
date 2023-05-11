import React, { Component } from 'react';
import Section from './section/section';
import Statistics from './statistics/statistics';
import FeedbackOptions from './feedbackOptions/feedbackOptions';


const options = [
  { keyValue: 'good', textButton: 'Good' },
  { keyValue: 'neutral', textButton: 'Neutral' },
  { keyValue: 'bad', textButton: 'Bad' },
];

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = name => {
    this.setState({ [name]: this.state[name] + 1 });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    if (total === 0) {
      return 0;
    }
    return Math.trunc((good / total) * 100);
  };



  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <Section text="Please leave feedback">
        <FeedbackOptions
          onLeaveFeedback={this.onLeaveFeedback}
          options={options}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      </Section>
    );
  }
}
export default Feedback;
