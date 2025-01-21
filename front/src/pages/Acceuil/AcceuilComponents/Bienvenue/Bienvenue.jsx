import PropTypes from "prop-types";
// import congrats from "../../public/congrats.png";
import congrats from "../../../../public/congrats.png";

const Bienvenue = ({ firstName }) => {
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
