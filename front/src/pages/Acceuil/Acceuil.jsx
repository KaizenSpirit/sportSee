import Activity from './AcceuilComponents/Activity/Activity.jsx'
import KeyDataCard from "./AcceuilComponents/KeyDataCard/KeyDataCard.jsx";
import "../../styles/main.scss";
import ScoreChart from "./AcceuilComponents/ScoreChart/ScoreChart.jsx";
import RadarChart from './AcceuilComponents/RadarChart/RadarChart.jsx';
import SessionDuration from "./AcceuilComponents/SessionDuration/SessionDuration.jsx";
import Bienvenue from "./AcceuilComponents/Bienvenue/Bienvenue.jsx";

const Accueil = () => {
  return (
    <div className="acceuil-container">
      <section className="Bienvenue">
      <Bienvenue />
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
        <KeyDataCard />
        </div>
      </section>
    </div>
  );
};

export default Accueil;
