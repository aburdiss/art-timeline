import { AllData } from '.';
import { header } from './header/header';
import { table } from './table/table';

export function buildApp(root: HTMLElement, data: AllData): void {
  root.appendChild(header());

  root.appendChild(table(data));
}
