import PropTypes from "prop-types";

function KeyDataCard({icon, value, unit, label}) {
  return (
    <div className="key-data-card">
      <img src={icon} alt={label} className="key-data-icon" />
      <div>
        <p className="key-data-value">
          {value}
          {unit}
        </p>
        <p className="key-data-label">{label}</p>
      </div>
      </div>
  );
}

KeyDataCard.propTypes = {
  icon: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default KeyDataCard;