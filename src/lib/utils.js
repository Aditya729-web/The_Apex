export const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
export const money = n => new Intl.NumberFormat('en-IN',{style:'currency',currency:'INR',maximumFractionDigits:0}).format(Number(n||0));
export const studentEmail = id => `${String(id).trim().toLowerCase().replace(/[^a-z0-9]/g,'')}@students.theapexchemistry.local`;
export const safeName = name => String(name).replace(/[^a-zA-Z0-9._-]/g,'_').slice(0,100);
export const dateText = value => {
  if (!value) return '—';
  const d = value.toDate ? value.toDate() : new Date(value);
  return Number.isNaN(d.getTime()) ? '—' : d.toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'});
};
