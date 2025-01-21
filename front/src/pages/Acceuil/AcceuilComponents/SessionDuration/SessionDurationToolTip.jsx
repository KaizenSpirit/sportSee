import PropTypes from "prop-types";

export const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip-session">
        <p>{`${payload[0].value} min`}</p>
      </div>
    );
  }
  return null;
};

CustomTooltip.propTypes = {
  active: PropTypes.bool.isRequired, 
  payload: PropTypes.arrayOf(      
    PropTypes.shape({
      value: PropTypes.number,    
    })
  ),
};




