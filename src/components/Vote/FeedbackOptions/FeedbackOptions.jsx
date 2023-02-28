import PropTypes from 'prop-types';

import css from '../FeedbackOptions/FeedbackOptions.module.css';

const FeedbackOptions = ({ onClick, options }) => {
  return (
    <>
      {options.map(option => (
        <button
          key={option}
          onClick={() => onClick(option)}
          className={css.btn}
        >
          {option}
        </button>
      ))}
    </>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
};
