import PropTypes from 'prop-types';

import css from '../FeedbackOptions/FeedbackOptions.module.css';

const FeedbackOptions = ({ onClick }) => {
  return (
    <>
      <button onClick={() => onClick('good')} className={css.btn}>
        Good
      </button>
      <button onClick={() => onClick('neutral')} className={css.btn}>
        Neutral
      </button>
      <button onClick={() => onClick('bad')} className={css.btn}>
        Bad
      </button>
    </>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onClick: PropTypes.func.isRequired,
};
