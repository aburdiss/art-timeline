export function parseDate(dateString?: string): Date | void {
  if (!dateString) return;

  if (dateString.split(' ').length === 2) {
    // Two date parts, likely month and year
    if (/^\d/.test(dateString)) {
      // year first
      const [year, month] = dateString.split(' ');
      return new Date(`1 ${month} ${year}`);
    } else {
      // month first
      const [month, year] = dateString.split(' ');
      return new Date(`1 ${month} ${year}`);
    }
  }

  return new Date(dateString);
}
