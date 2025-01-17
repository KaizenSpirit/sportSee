import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchUser } from "../../../Api/Api";
import "../../styles/main.scss";
import congrats from '../../public/congrats.png';

const Accueil = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

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
        <h2><img src={congrats} /></h2>
      </section>
    </div>
  );
};

export default Accueil;
