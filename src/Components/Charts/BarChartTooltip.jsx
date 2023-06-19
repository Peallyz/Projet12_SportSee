import PropTypes from "prop-types";

const BarChartTooltip = ({ active, payload }) => {
  if (active) {
    return (
      <div className="tooltip__barchart">
        <p>{payload[0].value}kg</p>
        <p>{payload[1].value}KCal</p>
      </div>
    );
  }
};

BarChartTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

export default BarChartTooltip;
