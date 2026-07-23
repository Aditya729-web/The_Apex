const today = new Date();
const months = [];
for (let i = 5; i >= 0; i--) {
  const d = new Date(today.getFullYear(), today.getMonth() - i, 1);
  months.push(d.toLocaleString('en-US', { month: 'short' }));
}
console.log(months);
