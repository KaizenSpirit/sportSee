import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchUser } from "../../../Api/Api";
import Activity from './AcceuilComponents/Activity/Activity.jsx'
import KeyDataCard from "./AcceuilComponents/KeyDataCard/KeyDataCard.jsx";
import "../../styles/main.scss";
import congrats from "../../public/congrats.png";
import calorieIcon from "../../public/icons/calories-icon.png";
import proteinIcon from "../../public/icons/protein-icon.png";
import carbohydrateIcon from "../../public/icons/carbs-icon.png";
import lipidIcon from "../../public/icons/fat-icon.png";

const Accueil = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  // Récupération des données utilisateur
  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await fetchUser(id);
        setUserData(data);
      } catch (err) {
        setError(err.message);
      }
    };
    getUserData();
  }, [id]);

  if (error) {
    return <h1>{error}</h1>;
  }

  if (!userData) {
    return <h1>Chargement des données...</h1>;
  }

  const { calorieCount, proteinCount, carbohydrateCount, lipidCount } =
  userData.data.keyData;

  const keyDataItems = [
    { icon: calorieIcon, value: calorieCount, unit: "kCal", label: "Calories" },
    { icon: proteinIcon, value: proteinCount, unit: "g", label: "Protéines" },
    { icon: carbohydrateIcon, value: carbohydrateCount, unit: "g", label: "Glucides" },
    { icon: lipidIcon, value: lipidCount, unit: "g", label: "Lipides" }
  ];

  return (
    <div className="acceuil-container">
      <section className="Bienvenue">
        <h1>
          Bonjour <span className="first-name">{userData.data.userInfos.firstName}</span>
        </h1>
        <h2>
          <img src={congrats} alt="Félicitations" />
        </h2>
      </section>
      <section className="data-container">
        <div className="left-column">
          <div className="activity-container">
          <Activity/>
          </div>
          <div className="radars">
            <div className="container1"></div>
            <div className="container2"></div>
            <div className="container3"></div>
          </div>
        </div>
        <div className="right-column">
          {keyDataItems.map((item, index) => (
            <KeyDataCard
              key={index}
              icon={item.icon}
              value={item.value}
              unit={item.unit}
              label={item.label}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Accueil;
