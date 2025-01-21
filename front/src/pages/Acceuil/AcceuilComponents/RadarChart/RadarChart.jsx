import { useParams } from "react-router-dom";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";
import { fetchUserPerformance } from "../../../../../Api/Api.jsx";
import useFetchData from "../../../../../Api/hooks/UseFetchData.jsx";

function RadarChartComponent() {
  const { id } = useParams();
  const { data, error, loading } = useFetchData(fetchUserPerformance, id);

  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Chargement des données...</h1>;

  const formattedData = data.data.map((item) => ({
    value: item.value,
    kind: data.kind[item.kind],
  }));

  return (
    <div className="radar-chart">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={formattedData}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis dataKey="kind" tick={{ fill: "white", fontSize: 12 }} />
          <Radar dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RadarChartComponent;