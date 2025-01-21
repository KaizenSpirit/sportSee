import PropTypes from "prop-types";

export const CustomTooltipActivity = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className='custom-tooltip-activity'>
        <p>{`${payload[0].value}kg`}</p>
        <p>{`${payload[1].value}kCal`}</p>
      </div>
    );
  }
  return null;
};

CustomTooltipActivity.propTypes = {
  active: PropTypes.bool.isRequired, 
  payload: PropTypes.arrayOf(       
    PropTypes.shape({               
      value: PropTypes.number.isRequired, 
    })
  ),
};