import { useParams } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { fetchUserActivity } from '../../../../../Api/Api.jsx';
import { CustomTooltipActivity } from './CustomToolTipActivity.jsx';
import useFetchData from "../../../../../Api/hooks/UseFetchData.jsx";

function UserActivity() {
  const { id } = useParams();
  const { data, error, loading } = useFetchData(fetchUserActivity, id);

  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Chargement des données...</h1>;

  return (
    <div className="activity">
        <h3>Activité quotidienne</h3>
      <ResponsiveContainer width={880} height={200}>
        <BarChart data={data.sessions} barGap={8}>
          <CartesianGrid strokeDasharray="2 2" vertical={false} />
          <XAxis dataKey="day" tickLine={false} axisLine={false} tickFormatter={(day, index) => index + 1} />
          <YAxis
            yAxisId="right"
            dataKey="kilogram"
            tickLine={false}
            axisLine={false}
            domain={['dataMin - 1', 'dataMax + 1']}
            orientation="right"
          />
          <YAxis yAxisId="left" dataKey="calories" type="number" hide />
          <Tooltip content={<CustomTooltipActivity />} />
          <Legend verticalAlign="top" align="right" iconType="circle" wrapperStyle={{ marginTop: "-70px"}} />
          <Bar yAxisId="right" name="Poids (kg)" dataKey="kilogram" fill="#282D30" barSize={7} radius={[10, 10, 0, 0]} />
          <Bar yAxisId="left" name="Calories brûlées (kCal)" dataKey="calories" fill="#E60000" barSize={7} radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default UserActivity;
