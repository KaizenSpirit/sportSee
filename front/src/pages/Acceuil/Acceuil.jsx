import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchUser } from "../../../Api/Api";
import Activity from './AcceuilComponents/Activity/Activity.jsx'
import KeyDataCard from "./AcceuilComponents/KeyDataCard/KeyDataCard.jsx";
import "../../styles/main.scss";
import congrats from "../../public/congrats.png";

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
        <KeyDataCard keyData={userData.data.keyData} />
        </div>
      </section>
    </div>
  );
};

export default Accueil;
