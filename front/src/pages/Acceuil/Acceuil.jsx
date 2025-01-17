import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchUser } from "../../../Api/Api";
import KeyDataCard from "./AcceuilComponents/KeyDataCard/KeyDataCard.jsx";
import "../../styles/main.scss";
import congrats from '../../public/congrats.png';
import Activity from '../../pages/Acceuil/AcceuilComponents/Activity/Activity.jsx';

const Accueil = () => {
  const { id } = useParams();
  const [state, setState] = useState({ userData: null, error: null });

  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await fetchUser(id);
        setState({ userData: data, error: null });
      } catch (err) {
        setState({ userData: null, error: err.message });
      }
    };
    getUserData();
  }, [id]);

  if (state.error) {
    return <h1>{state.error}</h1>;
  }

  if (!state.userData) {
    return <h1>Chargement des données...</h1>;
  }


  const keyDataItems = [
    {  },
    {  },
    {  },
    {  }
  ];

  return (
    <div className="acceuil-container">
      <section className="Bienvenue">
        <h1>
          Bonjour <span className="first-name">{state.userData.data.userInfos.firstName}</span>
        </h1>
        <h2><img src={congrats}/></h2>
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
            key={index}/>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Accueil;
