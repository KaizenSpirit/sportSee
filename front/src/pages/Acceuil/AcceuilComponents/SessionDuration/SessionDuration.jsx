import { useParams } from "react-router-dom";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { fetchUserAverageSessions } from "../../../../../Api/Api.jsx";
import useFetchData from "../../../../../Api/hooks/UseFetchData.jsx";
import { CustomTooltip } from "./SessionDurationToolTip.jsx";

const days = ["L", "M", "M", "J", "V", "S", "D"]; // Jours de la semaine

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
          margin={{ top: 70, right: 20, left: 20, bottom: 20 }}
        >
          <XAxis
            dataKey="day"
            stroke="white"
            tickLine={false}
            axisLine={false}
          />
          <Tooltip content={<CustomTooltip />} />
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
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SessionDuration;
