import 'normalize.css';
import './main.css';

import { getData } from './getData';
import { buildApp } from './buildApp';

const data = getData();
const root = document.querySelector<HTMLDivElement>('#app')!;

buildApp(root, data);
