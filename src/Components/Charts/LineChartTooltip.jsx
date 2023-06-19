import PropTypes from "prop-types";

const LineChartTooltip = ({ active, payload }) => {
  if (active) {
    return (
      <div className="tooltip__linechart">
        <p>{payload[0].value} min</p>
      </div>
    );
  }
};

LineChartTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

export default LineChartTooltip;
