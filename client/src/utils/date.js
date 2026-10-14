const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// "2023-05" -> "May 2023", empty -> "Present"
export function formatMonth(value) {
  if (!value) return "Present";
  const [year, month] = value.split("-");
  return `${MONTHS[Number(month) - 1]} ${year}`;
}

// how long between two "YYYY-MM" values, e.g. "3 yrs 6 mos"
// counts the starting month too, same as LinkedIn
export function getDuration(start, end) {
  if (!start) return "";

  const [startYear, startMonth] = start.split("-").map(Number);
  const today = new Date();
  const [endYear, endMonth] = end
    ? end.split("-").map(Number)
    : [today.getFullYear(), today.getMonth() + 1];

  const totalMonths = (endYear - startYear) * 12 + (endMonth - startMonth) + 1;
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const parts = [];
  if (years > 0) parts.push(`${years} ${years === 1 ? "yr" : "yrs"}`);
  if (months > 0) parts.push(`${months} ${months === 1 ? "mo" : "mos"}`);
  return parts.join(" ");
}
