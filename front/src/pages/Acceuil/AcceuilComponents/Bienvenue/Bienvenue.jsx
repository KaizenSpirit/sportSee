import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import useFetchData from "../../../../../Api/hooks/UseFetchData.jsx";
import { fetchUser } from "../../../../../Api/Api.jsx";
import congrats from "../../../../public/congrats.png";

function Bienvenue() {
  const { id } = useParams();
  const { data, error, loading } = useFetchData(fetchUser, id); 

  if (error) {
    return <h1>{error}</h1>; 
  }

  if (loading) {
    return <h1>Chargement des données...</h1>; 
  }

  const firstName = data.userInfos.firstName; 

  return (
    <section className="Bienvenue">
      <h1>
        Bonjour <span className="first-name">{firstName}</span>
      </h1>
      <h2>
        <img src={congrats} alt="Félicitations" />
      </h2>
    </section>
  );
};

// Validation des props avec PropTypes
Bienvenue.propTypes = {
  firstName: PropTypes.string.isRequired,
};

export default Bienvenue;
