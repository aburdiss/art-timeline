import { AllData } from '..';
import { appendAllChildren } from '../utils/appendAllChildren';
import { tableBackground } from './tableBackground';
import { tableEvent } from './tableEvent/tableEvent';

import './table.css';

export function table(data: AllData): HTMLElement {
  const table = document.createElement('div');
  table.classList.add('table');

  const tableBackgroundElement = document.createElement('div');
  tableBackgroundElement.classList.add('table-background');
  tableBackground(tableBackgroundElement);

  const tableForeground = document.createElement('div');
  tableForeground.classList.add('table-foreground');

  const musicanEvents = data.musicians.map(tableEvent);

  const leaderEvents = data.leaders.map(tableEvent);

  appendAllChildren(tableForeground, musicanEvents);
  appendAllChildren(tableForeground, leaderEvents);

  table.appendChild(tableBackgroundElement);
  table.appendChild(tableForeground);

  return table;
}
