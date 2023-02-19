import { Component } from 'react';

import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';

import css from './Vote.module.css';

class Vote extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleOnClick = propName => {
    this.setState(prevState => {
      const value = prevState[propName];
      return { [propName]: value + 1 };
    });
  };

  calcTotal() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }

  calcPositive() {
    const count = this.calcTotal() / this.state.good;

    const total = this.calcTotal();

    if (!total) {
      return 0;
    }
    const result = Math.round(100 / count);
    return result;
  }

  render() {
    const total = this.calcTotal();
    const positiveFeadBack = this.calcPositive();

    const goodVote = this.state.good;
    const neutralVote = this.state.neutral;
    const badVote = this.state.bad;

    return (
      <div className={css.wrapper}>
        <Section title="Leave your feadback">
          <FeedbackOptions onClick={this.handleOnClick} />
        </Section>
        <Section title="Statictics">
          <Statistics
            total={total}
            positiveFeadBack={positiveFeadBack}
            badVote={badVote}
            neutralVote={neutralVote}
            goodVote={goodVote}
          />
        </Section>
      </div>
    );
  }
}

export default Vote;