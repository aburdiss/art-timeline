import './tableEvent.css';

import { TableEvent } from '../..';
import constants from '../../../data/_constants.json';
import { getEventWidth } from './getEventWidth';
import { getEventStartPosition } from './getEventStartPosition';
import { parseDate } from '../../utils/parseDate';

export function tableEvent(eventData: TableEvent): HTMLElement {
  const { yearWidth, timelineStart } = constants;
  const eventElement = document.createElement('div');
  eventElement.classList.add('table-event');
  eventElement.classList.add(eventData.type);
  eventElement.title = eventData.name;

  const eventWidth = getEventWidth(
    parseDate(eventData.birth_date),
    parseDate(eventData.death_date)
  );

  const eventStart = getEventStartPosition(parseDate(eventData.birth_date));

  eventElement.style.width = eventWidth + 'px';
  eventElement.style.left = eventStart + 'px';

  eventElement.innerHTML = `<span>${eventData.name}</span>`;
  return eventElement;
}
