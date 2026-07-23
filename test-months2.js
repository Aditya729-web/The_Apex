const today = new Date();
const chartData = [];
for (let i = 5; i >= 0; i--) {
  const d = new Date(today.getFullYear(), today.getMonth() - i, 1);
  const fullMonth = d.toLocaleString('en-US', { month: 'long', year: 'numeric' });
  const label = d.toLocaleString('en-US', { month: 'short' });
  chartData.push({ label, fullMonth });
}
console.log(chartData);
