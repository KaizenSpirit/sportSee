import { useParams } from "react-router-dom";
import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis } from "recharts";
import { fetchUserScore } from "../../../../../Api/Api.jsx";
import useFetchData from "../../../../../Api/hooks/UseFetchData.jsx";

function ScoreChart() {
  const { id } = useParams();
  const { data, error, loading } = useFetchData(fetchUserScore, id);

  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Chargement des données...</h1>;

  const score = data.todayScore || data.score;
  const scoreData = [{ name: "Score", value: score * 100 }]; 

  return (
    <div className="score-chart">
      <h3>Score</h3>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="80%"
          outerRadius="100%"
          barSize={10}
          startAngle={90} // Départ en haut
          endAngle={450} // Fin après un tour complet
          data={scoreData}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 100]} // De 0% à 100%
            angleAxisId={0}
            tick={false} // Masquer les ticks
          />
          <RadialBar
            dataKey="value"
            cornerRadius={10} // Arrondir les bords
            fill="#FF0000"
            background // Afficher un fond gris pour les parties non accomplies
          />
        </RadialBarChart>
      </ResponsiveContainer>
      <div className="score-center">
        <p>
          <span>{scoreData[0].value}%</span>
          <br />
          de votre objectif
        </p>
      </div>
    </div>
  );
}

export default ScoreChart;
