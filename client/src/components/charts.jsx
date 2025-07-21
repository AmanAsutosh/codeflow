import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid,ResponsiveContainer } from 'recharts';

const data = [
  { name: 'codeflow', uv: 0 },
  { name: 'codeflow', uv: 100 },
  { name: 'codeflow', uv: 300 },
];

export default function MyChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
    <LineChart data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    </LineChart>
    </ResponsiveContainer>
  );
}
