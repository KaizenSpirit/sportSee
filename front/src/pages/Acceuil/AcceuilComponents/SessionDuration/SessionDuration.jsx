import { useParams } from "react-router-dom";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { fetchUserAverageSessions } from "../../../../../Api/Api.jsx";
import useFetchData from "../../../../../Api/hooks/UseFetchData.jsx";
import { CustomTooltip } from "./SessionDurationToolTip.jsx";

const days = ["L", "M", "M", "J", "V", "S", "D"]; // Jours de la semaine

const CustomCursor = ({ points, width, height }) => {
  const x = points[0]?.x; // Position en X du curseur
  return (
    <g>
      {/* Couleur pour la partie gauche */}
      <rect x={0} y={0} width={x} height={height} fill="rgba(0, 0, 0, 0.1)" />
      {/* Couleur pour la partie droite */}
      <rect x={x} y={0} width={width - x} height={height} fill="rgba(255, 255, 255, 0.1)" />
      {/* Ligne verticale */}
      <line x1={x} y1={0} x2={x} y2={height} stroke="white" strokeWidth={2} />
    </g>
  );
};

function SessionDuration() {
  const { id } = useParams();
  const { data, error, loading } = useFetchData(fetchUserAverageSessions, id);

  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Chargement des données...</h1>;

  // Transformer les jours en lettres pour l'axe X
  const formattedData = data.sessions.map((item, index) => ({
    ...item,
    day: days[index],
  }));

  return (
    <div className="session-duration">
      <h3>Durée moyenne des sessions</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={formattedData}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
        >
          <XAxis
            dataKey="day"
            stroke="white"
            tickLine={false}
            axisLine={false}
          />
          <Tooltip 
          content={<CustomTooltip />} 
          cursor={<CustomCursor/>}
          />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="white"
            strokeWidth={2}
            dot={{ stroke: "white", strokeWidth: 1, r: 0 }}
            activeDot={{
              r: 4,
              fill: "white",
              stroke: "rgba(255,255,255,0.5)",
              strokeWidth: 10,
            }}
          />
        </LineChart >
      </ResponsiveContainer>
    </div>
  );
}

export default SessionDuration;
