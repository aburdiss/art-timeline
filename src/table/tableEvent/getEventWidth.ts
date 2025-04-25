import constants from '../../../data/_constants.json';

export function getEventWidth(startDate?: Date, endDate?: Date): number {
  if (!startDate || !endDate) return 0;

  const { yearWidth } = constants;
  const yearDifferential = endDate.getFullYear() - startDate.getFullYear();

  const startMonth = (startDate.getMonth() + 1) / 12;
  const endMonth = (endDate.getMonth() + 1) / 12;

  // add with start date, subtract with end date
  const dateDifferential = yearDifferential + startMonth - endMonth;
  return dateDifferential * yearWidth;
}
