import PropTypes from "prop-types";
import calorieIcon from "../../../../public/icons/calories-icon.png";
import proteinIcon from "../../../../public/icons/protein-icon.png";
import carbohydrateIcon from "../../../../public/icons/carbs-icon.png";
import lipidIcon from "../../../../public/icons/fat-icon.png";

function KeyDataCard({ keyData }) {
  const keyDataItems = [
    { icon: calorieIcon, value: keyData.calorieCount, unit: "kCal", label: "Calories" },
    { icon: proteinIcon, value: keyData.proteinCount, unit: "g", label: "Protéines" },
    { icon: carbohydrateIcon, value: keyData.carbohydrateCount, unit: "g", label: "Glucides" },
    { icon: lipidIcon, value: keyData.lipidCount, unit: "g", label: "Lipides" },
  ];

  return (
    <div className="key-data-container">
      {keyDataItems.map((item, index) => (
        <div key={index} className="key-data-card">
          <img src={item.icon} alt={item.label} className="key-data-icon" />
          <div>
            <p className="key-data-value">
              {item.value}
              {item.unit}
            </p>
            <p className="key-data-label">{item.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// Validation des props avec PropTypes
KeyDataCard.propTypes = {
  keyData: PropTypes.shape({
    calorieCount: PropTypes.number.isRequired,
    proteinCount: PropTypes.number.isRequired,
    carbohydrateCount: PropTypes.number.isRequired,
    lipidCount: PropTypes.number.isRequired,
  }).isRequired,
};

export default KeyDataCard;