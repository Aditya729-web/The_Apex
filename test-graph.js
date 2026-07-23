const paidFees = [{ month: 'July 2026', amount: 2500, status: 'paid' }];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const chartData = months.map(m => {
  const monthPaid = paidFees
    .filter(f => f.month && f.month.toLowerCase().includes(m.toLowerCase()))
    .reduce((acc, f) => acc + (Number(f.amount) || 0), 0);
  return { month: m, earnings: monthPaid };
});
console.log(chartData);
