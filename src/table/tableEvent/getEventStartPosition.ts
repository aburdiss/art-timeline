import constants from '../../../data/_constants.json';

export function getEventStartPosition(startDate?: Date): number {
  if (!startDate) return 0;

  const { yearWidth, timelineStart } = constants;
  const startYear = startDate.getFullYear();
  const startMonth = (startDate.getMonth() + 1) / 12;
  const offset = startYear + startMonth - timelineStart;
  return offset * yearWidth;
}
