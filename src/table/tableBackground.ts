import constants from '../../data/_constants.json';

export function tableBackground(root: HTMLElement) {
  const { timelineStart, timelineEnd, yearWidth } = constants;
  const numberOfTimelineColumns = timelineEnd - timelineStart + 1;

  [...Array(numberOfTimelineColumns)].map(function (_, index) {
    const year = String(timelineStart + index);
    const column = document.createElement('div');
    column.classList.add('column');
    column.style.width = yearWidth + 'px';
    column.title = year;
    if (index % 5 === 0) {
      column.classList.add('bold');
    }
    column.innerHTML = `<span class="year-label">${year}</span>`;
    root.appendChild(column);
  });
}
