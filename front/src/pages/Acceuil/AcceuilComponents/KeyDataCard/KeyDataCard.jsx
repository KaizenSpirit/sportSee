import { useParams } from "react-router-dom";
import useFetchData from "../../../../../Api/hooks/UseFetchData.jsx";
import { fetchUser } from "../../../../../Api/Api.jsx";
import PropTypes from "prop-types";
import calorieIcon from "../../../../public/icons/calories-icon.png";
import proteinIcon from "../../../../public/icons/protein-icon.png";
import carbohydrateIcon from "../../../../public/icons/carbs-icon.png";
import lipidIcon from "../../../../public/icons/fat-icon.png";

function KeyDataCard() {
  const { id } = useParams(); 
  const { data, error, loading } = useFetchData(fetchUser, id); 

  if (error) {
    return <h1>{error}</h1>; 
  }

  if (loading) {
    return <h1>Chargement des données...</h1>; 
  }

  const keyData = data.keyData; 

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
    calorieCount: PropTypes.number,
    proteinCount: PropTypes.number,
    carbohydrateCount: PropTypes.number,
    lipidCount: PropTypes.number,
  })
};

export default KeyDataCard;