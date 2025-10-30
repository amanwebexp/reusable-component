// Function to format a date into "YYYY-MM-DD" format
export function FormatDate(date) {
  const d = new Date(date);
  // If the input is invalid, return an empty string
  if (isNaN(d.getTime())) return "";
  // Helper function to pad single-digit numbers with a leading zero
  const pad = (n) => (n < 10 ? "0" + n : n);

  // Return formatted date string
  // getMonth() returns 0-11, so we add 1
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}
