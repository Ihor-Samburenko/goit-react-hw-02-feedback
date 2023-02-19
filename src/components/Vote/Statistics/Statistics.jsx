import PropTypes from 'prop-types';

const Statistics = ({
  total,
  positiveFeadBack,
  goodVote,
  badVote,
  neutralVote,
}) => {
  return (
    <>
      <p>Good: {goodVote}</p>
      <p>Neutral: {neutralVote}</p>
      <p>Bad: {badVote}</p>

      <p>Total:{total}</p>

      <p>Positive feadback:{positiveFeadBack}%</p>
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  total: PropTypes.number.isRequired,
  positiveFeadBack: PropTypes.number.isRequired,
  goodVote: PropTypes.number.isRequired,
  badVote: PropTypes.number.isRequired,
  neutralVote: PropTypes.number.isRequired,
};
