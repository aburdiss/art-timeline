import './tableEvent.css';

import { TableEvent } from '../..';
import constants from '../../../data/_constants.json';
import { getEventWidth } from './getEventWidth';
import { getEventStartPosition } from './getEventStartPosition';

export function tableEvent(eventData: TableEvent): HTMLElement {
  const { yearWidth, timelineStart } = constants;
  const eventElement = document.createElement('div');
  eventElement.classList.add('table-event');
  eventElement.classList.add(eventData.type);
  eventElement.title = eventData.name;

  const eventWidth = getEventWidth(
    new Date(eventData.birth_date ?? ''),
    new Date(eventData.death_date ?? '')
  );

  const eventStart = getEventStartPosition(
    new Date(eventData.birth_date ?? '')
  );

  eventElement.style.width = eventWidth + 'px';
  eventElement.style.marginLeft = eventStart + 'px';

  eventElement.innerHTML = `<span>${eventData.name}</span>`;
  return eventElement;
}
