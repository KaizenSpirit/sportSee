import { useParams} from "react-router-dom";
import useFetchData from "../../../Api/hooks/UseFetchData";
import { fetchUser } from "../../../Api/Api";
import Activity from './AcceuilComponents/Activity/Activity.jsx'
import KeyDataCard from "./AcceuilComponents/KeyDataCard/KeyDataCard.jsx";
import "../../styles/main.scss";
import ScoreChart from "./AcceuilComponents/ScoreChart/ScoreChart.jsx";
import RadarChart from './AcceuilComponents/RadarChart/RadarChart.jsx';
import SessionDuration from "./AcceuilComponents/SessionDuration/SessionDuration.jsx";
import Bienvenue from "./AcceuilComponents/Bienvenue/Bienvenue.jsx";

const Accueil = () => {
  const { id } = useParams();
  const { data: userData, error, loading } = useFetchData(fetchUser, id);

  if (error) {
    return <h1>{error}</h1>;
  }

  if (loading || !userData) {
    return <h1>Chargement des données...</h1>;
  }

  return (
    <div className="acceuil-container">
      <section className="Bienvenue">
      <Bienvenue firstName={userData.userInfos.firstName} />
      </section>
      <section className="data-container">
        <div className="left-column">
          <div className="activity-container">
          <Activity/>
          </div>
          <div className="radars">
            <div className=" containers container1">
              <SessionDuration/>
            </div>
            <div className=" containers container2">
              <RadarChart/>
            </div>
            <div className=" containers container3">
              <ScoreChart/>
            </div>
          </div>
        </div>
        <div className="right-column">
        <KeyDataCard keyData={userData.keyData} />
        </div>
      </section>
    </div>
  );
};

export default Accueil;
